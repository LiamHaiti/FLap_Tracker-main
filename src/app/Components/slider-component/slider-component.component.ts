import {Component, Input, OnInit} from '@angular/core';
import {Pharmacie} from "../../Model/pharmacie";

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.scss'],
})
export class SliderComponentComponent{
@Input()  pharmacie!: Pharmacie[];
  allItems: any[] = [];
  constructor() { }

}
