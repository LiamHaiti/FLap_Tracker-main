import { Injectable } from '@angular/core';
import {Category} from "../../Model/Category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
getCategories(): Category[]{
  return [
    {
      name: 'Pharmacie',
    },
    {
      name: 'Garage',
    },{
      name: 'Hotel',
    },
    {
      name: 'Hopital',
    }
    ,
    {
      name: 'Ecole',
    }
  ]
}
  constructor() { }
}
