import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailPageRoutingModule } from './item-detail-routing.module';

import { ItemDetailPage } from './item-detail.page';
import {AppAddAddressModule} from "../../Components/app-add-address/app-add-address.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailPageRoutingModule,
    AppAddAddressModule
  ],
  declarations: [ItemDetailPage]
})
export class ItemDetailPageModule {}
