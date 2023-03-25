import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-init-map',
  templateUrl: './init-map.component.html',
  styleUrls: ['./init-map.component.css']
})
export class InitMapComponent implements OnInit {
  map:any;


  constructor() {}

  ngOnInit(): void {
    var waterloo = new google.maps.LatLng(60.3494,-91.7056);
    var mapOptions = {
      zoom:4,
      center:waterloo
    }
    this.map = new google.maps.Map(document.getElementById('myMap') as HTMLElement, mapOptions);
  }

}
