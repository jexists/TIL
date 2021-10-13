import { Component, OnInit } from '@angular/core';

declare var naver: any;
// const naverURL = 'https://openapi.map.naver.com/openapi/v3/maps.js?clientId=orK7_YeBAdN64OJ8HUVz&amp;submodules=geocoder';
const naverURL = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mlvqwpvmii&callback=initMap';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {

    this.loadNaverMap().then((result) => {
      console.log('#네이버', result);

      this.getMapView();

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

