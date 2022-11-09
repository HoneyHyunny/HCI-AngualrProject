import { Component, OnInit } from '@angular/core';
import 'leaflet';
declare let L:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})

export class MapComponent implements OnInit  {
  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: "../../../assets/marker-icon.png",
      // iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: "../../../assets/marker-shadow.png"
    })
  };

  ngOnInit() {
     const map = L.map('map').setView([42.87802315197319, -112.44105969624094], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([42.878, -112.44], this.icon).addTo(map);
    marker.bindPopup("<b>Big foot Pizza!</b><br>Come and try it out.").openPopup();
  }
}
