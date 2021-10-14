var MarkerOverlappingRecognizer = function (opts) {
    this._options = $.extend({
        tolerance: 5,
        highlightRect: true,
        highlightRectStyle: {
            strokeColor: '#ff0000',
            strokeOpacity: 1,
            strokeWeight: 2,
            strokeStyle: 'dot',
            fillColor: '#ff0000',
            fillOpacity: 0.5
        },

        // hover
        intersectNotice: true,
        intersectNoticeTemplate: '<div style="border:solid 1px #333;background-color:#fff;padding:5px;"><em style="font-weight:bold;color:#f00;">{{count}}</em>개의 마커가 있습니다. hover했을때 몇개 있는지 네모나게 나오는 곳</div>',

        // click
        intersectList: true,
        intersectListTemplate: '<div style="border:solid 1px #333;background-color:#fff;padding:5px;">'
            + '<ul style="list-style:none;margin:0;padding:0;">'
            + '{{#repeat}}'
            + '<li style="list-style:none;margin:0;padding:0;"><a href="#">{{order}}. {{title}} 클릭할때</a></li>'
            + '{{/#repeat}}'
            + '</ul>'
            + '</div>'
    }, opts);

    this._listeners = [];
    this._markers = [];

    this._rectangle = new naver.maps.Rectangle(this._options.highlightRectStyle);
    
    // hover 했을때 나오는 El
    this._overlapInfoEl = $('<div class="_overlapInfoEl" style="position:absolute;z-index:100;margin:0;padding:0;display:none;"></div>');

    // 클릭했을때 나오는 El
    this._overlapListEl = $('<div class="_overlapListEl" style="position:absolute;z-index:100;margin:0;padding:0;display:none;"></div>');
};

MarkerOverlappingRecognizer.prototype = {
    constructor: MarkerOverlappingRecognizer,

    setMap: function (map) {
        var oldMap = this.getMap();

        if (map === oldMap) return;

        this._unbindEvent();

        this.hide();

        if (map) {
            console.log('setMap', map.getPanes().floatPane);
            this._bindEvent(map);
            this._overlapInfoEl.appendTo(map.getPanes().floatPane);
            this._overlapListEl.appendTo(map.getPanes().floatPane);
        }

        this.map = map || null;
    },

    getMap: function () {
        return this.map;
    },

    _bindEvent: function (map) {
        var listeners = this._listeners,
            self = this;

        listeners.push(
            map.addListener('idle', $.proxy(this._onIdle, this)),
            map.addListener('click', $.proxy(this._onIdle, this))
        );

        this.forEach(function (marker) {
            listeners = listeners.concat(self._bindMarkerEvent(marker));
        });
    },

    _unbindEvent: function (map_) {
        var map = map_ || this.getMap();

        naver.maps.Event.removeListener(this._listeners);
        this._listeners = [];

        this._rectangle.setMap(null);
        this._overlapInfoEl.remove();
        this._overlapListEl.remove();
    },

    add: function (marker) {
        this._listeners = this._listeners.concat(this._bindMarkerEvent(marker));
        this._markers.push(marker);
    },

    remove: function (marker) {
        this.forEach(function (m, i, markers) {
            if (m === marker) {
                markers.splice(i, 1);
            }
        });
        this._unbindMarkerEvent(marker);
    },

    forEach: function (callback) {
        var markers = this._markers;

        for (var i = markers.length - 1; i >= 0; i--) {
            callback(markers[i], i, markers);
        }
    },

    hide: function () {
        this._overlapListEl.hide();
        this._overlapInfoEl.hide();
        this._rectangle.setMap(null);
    },

    _bindMarkerEvent: function (marker) {
        marker.__intersectListeners = [
            marker.addListener('mouseover', $.proxy(this._onOver, this)),
            marker.addListener('mouseout', $.proxy(this._onOut, this)),
            marker.addListener('mousedown', $.proxy(this._onDown, this))
        ];

        return marker.__intersectListeners;
    },

    _unbindMarkerEvent: function (marker) {
        naver.maps.Event.removeListener(marker.__intersectListeners);
        delete marker.__intersectListeners;
    },

    getOverlapRect: function (marker) {
        var map = this.getMap(),
            proj = map.getProjection(),
            position = marker.getPosition(),
            offset = proj.fromCoordToOffset(position),
            tolerance = this._options.tolerance || 3,
            rectLeftTop = offset.clone().sub(tolerance, tolerance),
            rectRightBottom = offset.clone().add(tolerance, tolerance);

        return naver.maps.PointBounds.bounds(rectLeftTop, rectRightBottom);
    },

    getOverlapedMarkers: function (marker) {
        var baseRect = this.getOverlapRect(marker),
            overlaped = [{
                marker: marker,
                rect: baseRect
            }],
            self = this;

        this.forEach(function (m) {
            if (m === marker) return;

            var rect = self.getOverlapRect(m);

            if (rect.intersects(baseRect)) {
                overlaped.push({
                    marker: m,
                    rect: rect
                });
            }
        });

        return overlaped;
    },

    _onIdle: function () {
        this._overlapInfoEl.hide();
        this._overlapListEl.hide();
    },

    _onOver: function (e) {
        var marker = e.overlay,
            map = this.getMap(),
            proj = map.getProjection(),
            offset = proj.fromCoordToOffset(marker.getPosition()),
            overlaped = this.getOverlapedMarkers(marker);

        if (overlaped.length > 1) {
            if (this._options.highlightRect) {
                var bounds;

                for (var i = 0, ii = overlaped.length; i < ii; i++) {
                    if (bounds) {
                        bounds = bounds.union(overlaped[i].rect);
                    } else {
                        bounds = overlaped[i].rect.clone();
                    }
                };

                var min = proj.fromOffsetToCoord(bounds.getMin()),
                    max = proj.fromOffsetToCoord(bounds.getMax());

                this._rectangle.setBounds(naver.maps.LatLngBounds.bounds(min, max));
                this._rectangle.setMap(map);
            }

            if (this._options.intersectNotice) {
                this._overlapInfoEl
                    .html(this._options.intersectNoticeTemplate.replace(/\{\{count\}\}/g, overlaped.length))
                    .css({
                        left: offset.x,
                        top: offset.y
                    })
                    .show();
            }
        } else {
            this.hide();
        }
    },

    _onOut: function (e) {
        this._rectangle.setMap(null);
        this._overlapInfoEl.hide();
    },

    _guid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    },

    _renderIntersectList: function (overlaped, offset) {
        if (!this._options.intersectList) return;

        var listLayer = this._overlapListEl;

        var REPEAT_REGEX = /\{\{#repeat\}\}([\s\S]*)\{\{\/#repeat\}\}/gm,
            template = this._options.intersectListTemplate,
            itemTemplate = null,
            itemPlace = null,
            matches = REPEAT_REGEX.exec(template),
            uid = this._guid(),
            self = this;

        listLayer.empty();

        if (matches && matches.length >= 2) {
            template = template.replace(matches[0], '<div id="intersects-' + uid + '"></div>');
            itemTemplate = matches[1];

            listLayer.append($(template));

            var placeholder = $('#intersects-' + uid);

            itemPlace = placeholder.parent();

            placeholder.remove();
            placeholder = null;
        } else {
            itemTemplate = template;
            itemPlace = listLayer;
        }

        var items = [];
        for (var i = 0, ii = overlaped.length; i < ii; i++) {
            var c = overlaped[i],
                item = $(itemTemplate.replace(/\{\{(\w+)\}\}/g, function (match, symbol) {
                    if (symbol === 'order') {
                        return i + 1;
                    } else if (symbol in c.marker) {
                        return c.marker[symbol];
                    } else if (c.marker.get(symbol)) {
                        return c.marker.get(symbol);
                    } else {
                        match;
                    }
                }));

            item.on('click', $.proxy(self._onClickItem, self, c.marker));
            items.push(item);
        };

        for (var j = 0, jj = items.length; j < jj; j++) {
            itemPlace.append(items[j]);
        }

        listLayer.css({
            left: offset.x + 5,
            top: offset.y
        })
            .show();
    },

    _onDown: function (e) {
        var marker = e.overlay,
            map = this.getMap(),
            proj = map.getProjection(),
            offset = proj.fromCoordToOffset(marker.getPosition()),
            overlaped = this.getOverlapedMarkers(marker),
            self = this;

        naver.maps.Event.resumeDispatch(marker, 'click');

        if (overlaped.length <= 1) {
            return;
        }

        naver.maps.Event.stopDispatch(marker, 'click');
        this._renderIntersectList(overlaped, offset);
        this._overlapInfoEl.hide();

        naver.maps.Event.trigger(this, 'overlap', overlaped);
    },

    _onClickItem: function (marker, e) {
        naver.maps.Event.resumeDispatch(marker, 'click');

        naver.maps.Event.trigger(this, 'clickItem', {
            overlay: marker,
            originalEvent: e.originalEvent
        });

        // marker.trigger('click');
    }
};