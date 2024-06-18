import {NgModule} from "@angular/core";
import {HomeSlideHeaderComponent} from "../home-slide-header/home-slide-header.component";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {CardComponentComponent} from "./card-component.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [CardComponentComponent],
  imports: [CommonModule, IonicModule, RouterLink],
  exports: [CardComponentComponent],
})
export class CardComponnetModule {}
