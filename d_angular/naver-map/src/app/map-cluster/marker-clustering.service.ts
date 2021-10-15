import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkerClusteringService {
  _clusterCenter
  _clusterBounds
  _clusterMarker
  _relation
  _clusterMember
  _markerClusterer

  constructor(
    markerClusterer
  ) {

    this._clusterCenter = null;
    this._clusterBounds = null;
    this._clusterMarker = null;
    this._relation = null;

    this._clusterMember = [];

    this._markerClusterer = markerClusterer;
  }

  

}
