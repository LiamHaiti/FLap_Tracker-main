import { Injectable } from '@angular/core';
import {Category} from "../../Model/Category.model";
import {Address} from "../../Model/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  getAddress(): Address[]{
    return [
      {
        address: 'Ennery',
        city: 'Gonaives',
        country: 'Haiti',
        house_no: "marin 10",
        id: 1,
        landmark: 2,
        pincode: 380,
        save_as: 'string',
        state: 'string',
      }
    ]
  }
  constructor() { }
}
