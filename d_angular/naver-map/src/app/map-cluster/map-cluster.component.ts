import { Component, OnInit } from '@angular/core';
import { accidentDeath } from './accidentdeath';

declare var naver: any;
const naverURL = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mlvqwpvmii&callback=initMap';


export interface Accidents {
  year: string;
  grd_lo: string;
  grd_la: string;
}

@Component({
  selector: 'app-map-cluster',
  templateUrl: './map-cluster.component.html',
  styleUrls: ['./map-cluster.component.scss']
})
export class MapClusterComponent implements OnInit {

  map: any;
  infoWindow: any;
  screenWidth: number;
  club_type: number;
  clubLists = [];
  markers: any = [];
  is_list_view = false;

  map_zoom = 15;
  map_lat = 37.5580759;
  map_lng = 126.9399512;

  isNaverLoaded = false;
  isMyLocationLoaded = false;
  accidentDeaths: Accidents[] = accidentDeath

  constructor() { }

  ngOnInit() {

    this.loadNaverMap().then((result) => {
      console.log('#네이버', result);

      // this.getMapView();

      var map = new naver.maps.Map("naverMap", {
        zoom: 8,
        center: new naver.maps.LatLng(37.5580759, 126.9399512),
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_LEFT,
          style: naver.maps.ZoomControlStyle.SMALL
        }
      });

      var markers = [],
        data = this.accidentDeaths;

      for (var i = 0, ii = data.length; i < ii; i++) {
        var 
          latlng = new naver.maps.LatLng(data[i].grd_la, data[i].grd_lo),
          marker = new naver.maps.Marker({
            position: latlng,
            draggable: false
          });

        markers.push(marker);
          console.log(markers);
          
      }

      var htmlMarker1 = {
        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-1.png);background-size:contain;"></div>',
        // size: N.Size(40, 40),
        // anchor: N.Point(20, 20)
      },
        htmlMarker2 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-2.png);background-size:contain;"></div>',
          // size: N.Size(40, 40),
          // anchor: N.Point(20, 20)
        },
        htmlMarker3 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-3.png);background-size:contain;"></div>',
          // size: N.Size(40, 40),
          // anchor: N.Point(20, 20)
        },
        htmlMarker4 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-4.png);background-size:contain;"></div>',
          // size: N.Size(40, 40),
          // anchor: N.Point(20, 20)
        },
        htmlMarker5 = {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(../images/cluster-marker-5.png);background-size:contain;"></div>',
          // size: N.Size(40, 40),
          // anchor: N.Point(20, 20)
        };

      // var markerClustering = new MarkerClustering({
      //   minClusterSize: 2,
      //   maxZoom: 13,
      //   map: map,
      //   markers: markers,
      //   disableClickZoom: false,
      //   gridSize: 120,
      //   icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
      //   indexGenerator: [10, 100, 200, 500, 1000],
      //   stylingFunction: function (clusterMarker, count) {
      //     // $(clusterMarker.getElement()).find('div:first-child').text(count);
      //   }
      // });

    }).catch((err) => {
      alert('네이버 지도 불러오는데 실패하였습니다. 새로고침 해주세요.');
    });


  }

  private loadNaverMap() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = naverURL;
      script.type = 'text/javascript';
      script.async = true;
      script.id = 'naverMainScript';
      document.body.appendChild(script);
      setTimeout(() => {
        resolve(true);
        reject(new Error('fail'));
      }, 500)
    });
  }




  getMapView() {
    const mapOptions = {
      center: new naver.maps.LatLng(this.map_lat, this.map_lng),
      zoom: +this.map_zoom,
      mapTypeId: naver.maps.MapTypeId.NORMAL
    };

    this.map = new naver.maps.Map('naverMap', mapOptions);
    console.log('map1 :', this.map);

    this.infoWindow = new naver.maps.InfoWindow({
      maxWidth: 220,
      borderColor: "#9b9b9b",
      anchorSize: { width: 10, height: 10 }
    });

    // 지도 클릭시
    naver.maps.Event.addListener(this.map, 'click', (e) => {
      console.log('지도 클릭');

    });

    // 지도 이동시
    naver.maps.Event.addListener(this.map, 'idle', (e) => {
      console.log('지도 이동', e);
      console.log('?c=', this.map.center._lat, this.map.center._lng, this.map.zoom);
    });

  }

}
