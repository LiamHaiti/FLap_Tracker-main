import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ApiService} from "./services/api/api.service";
import {MapModule} from "./Components/map/map.module";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MapModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService, Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}
