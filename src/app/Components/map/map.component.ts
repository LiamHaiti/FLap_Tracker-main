import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  map!: L.Map;
  currentLocationMarker!: L.Marker;
  startPointMarker!: L.Marker;
  endPointMarker!: L.Marker;
  routingControl: any; // Pour stocker le contrôle de routage
  watchId: any; // Pour stocker l'ID de l'observateur de géolocalisation
  id:any;
  constructor(private apiService: ApiService,    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  async initMap() {
this.id =this.route.snapshot.paramMap.get("id")??0;

    try
    {
      const position = await this.apiService.getCurrentPosition();
      console.log('Current position:', position);

      this.map = L.map('map').setView([position.latitude, position.longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      this.currentLocationMarker = L.marker([position.latitude, position.longitude]).addTo(this.map)
        .bindPopup('You are here.')
        .openPopup();

      this.addRouting(position.latitude, position.longitude);

      this.watchId = navigator.geolocation.watchPosition(
        (position) => this.updateCurrentPosition(position),
        (error) => this.handleGeolocationError(error)
      );
    } catch (error) {
      console.error('Error getting position:', error);
    }
  }

  updateCurrentPosition(position: GeolocationPosition) {
    const newPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };

    console.log('Updated position:', newPosition);

    this.currentLocationMarker.setLatLng([newPosition.latitude, newPosition.longitude]);
    this.map.setView([newPosition.latitude, newPosition.longitude], this.map.getZoom());

    // Si le contrôle de routage existe, détruisez-le et recréez-le avec les nouvelles coordonnées
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }
    this.addRouting(newPosition.latitude, newPosition.longitude);
  }

  handleGeolocationError(error: GeolocationPositionError) {
    console.error('Geolocation error:', error);
    // Afficher un message à l'utilisateur pour l'informer de l'erreur
    alert('Error accessing geolocation. Please make sure to allow access to your location.');
  }

  async addRouting(startLat: number, startLng: number) {

    var item = this.apiService?.items.find(e=>e.id ==this.id);
alert(item.name);
   // const item = this.apiService.items[0];

    this.startPointMarker = L.marker([startLat, startLng], { icon: this.startIcon() })
      .addTo(this.map)
      .bindPopup('Starting Point')
      .openPopup();

    this.endPointMarker = L.marker([item.Latitude, item.longitude], { icon: this.endIcon() })
      .addTo(this.map)
      .bindPopup('<p style="color:red;">'+item.name+"</p>")
      .openPopup();

    // Créez le contrôle de routage avec les nouvelles coordonnées
    this.routingControl = (L as any).Routing.control({
      waypoints: [
        L.latLng(startLat, startLng),
        L.latLng(item.Latitude, item.longitude)
      ],
      routeWhileDragging: true
    }).addTo(this.map);
  }

  startIcon() {
    return L.icon({
      iconUrl: '/assets/icon/image.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }

  endIcon() {
    return L.icon({
      iconUrl: '/assets/icon/image.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }

  ngOnDestroy() {
    // Arrêtez l'observateur de géolocalisation lorsque le composant est détruit
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }
}
