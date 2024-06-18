import {NgModule} from "@angular/core";
import {HomeSlideHeaderComponent} from "../home-slide-header/home-slide-header.component";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {AppAddAddressComponent} from "./app-add-address.component";

@NgModule({
  declarations: [AppAddAddressComponent],
  imports: [CommonModule, IonicModule],
  exports: [AppAddAddressComponent],
})
export class AppAddAddressModule {}
