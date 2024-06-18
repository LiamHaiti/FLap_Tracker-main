import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HomeSlideHeaderModule} from "../../Components/home-slide-header/home-slide-header.module";
import {HomeSliderComponent} from "../../Components/home-slider/home-slider.component";
import {SliderComponentModule} from "../../Components/slider-component/slider-component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeSlideHeaderModule,
    SliderComponentModule
  ],
    declarations: [HomePage, HomeSliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
