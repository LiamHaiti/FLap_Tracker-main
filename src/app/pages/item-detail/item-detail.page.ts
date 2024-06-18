import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  id!: string;
  item: any;
  selectedItem: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');


    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }

    this.id = id;
    this.item = this.api.items.find((record) => record.id == id);
    console.log(this.item);
  }

  /* viewMap() {
    const id = this.route.snapshot.paramMap.get('id');

    if (this.selectedItem) {
      this.navCtrl.navigateForward(`/leaflet/${this.selectedItem.id}`);
    }
  } */
}
