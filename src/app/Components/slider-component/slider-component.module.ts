import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CardComponentComponent} from "../card-component/card-component.component";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {SliderComponentComponent} from "./slider-component.component";
import {CardComponnetModule} from "../card-component/card-componnet.module";

@NgModule({
  declarations: [SliderComponentComponent],
  imports: [CommonModule, IonicModule, CardComponnetModule],
  exports: [SliderComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponentModule {}
