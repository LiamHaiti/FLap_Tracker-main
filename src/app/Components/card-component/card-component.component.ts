import {Component, Input, OnInit} from '@angular/core';
import {Pharmacie} from "../../Model/pharmacie";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent {
@Input() pharmacie!  : Pharmacie;
  constructor() { }

}
