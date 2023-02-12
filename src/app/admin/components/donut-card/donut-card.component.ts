import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  templateUrl: './donut-card.component.html',
  styleUrls: ['./donut-card.component.css']
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  icons: string[] = [
    'cookie-cream-blast',
    'speculoos-sensation',
    'strawberry-rainbow',
    'mr-happy',
    'rainbow-fruit',
    'maple-chocolate'
  ];

  constructor() { }


}
