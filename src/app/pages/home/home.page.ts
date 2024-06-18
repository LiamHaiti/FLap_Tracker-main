import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Category } from "../../Model/Category.model";
import { CategoryService } from "../../services/category/category.service";
import {PharmacieService} from "../../services/pharmacie/pharmacie.service";
import {Pharmacie} from "../../Model/pharmacie";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() items: any[] = [];
  allItems: any[] = [];
  query!: string;
  categories!: Category[];
  pharmacies!: Pharmacie[];
  constructor(private api: ApiService, private categoryService: CategoryService, private pharmacieService: PharmacieService) {
    this.categories = [];
  }

  ngOnInit(): void {
    console.log('Ngoninit homepage');
    this.getItems();
    this.loadCategories();
    this.loadPharmacies();
  }

  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  loadPharmacies() {
  this.pharmacies = this.pharmacieService.getFeaturedPharmacie();
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.api.items.filter((item) =>
      item.name.toLowerCase().includes(this.query)
    );
  }
}
