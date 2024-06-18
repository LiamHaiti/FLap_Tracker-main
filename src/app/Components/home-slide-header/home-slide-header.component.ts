import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-slide-header',
  templateUrl: './home-slide-header.component.html',
  styleUrls: ['./home-slide-header.component.scss'],
})
export class HomeSlideHeaderComponent{
@Input() name!:string;

}
