import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor() { }

  ngOnInit(): void {
    this.donut = {
      id: 'b8s4L6',
      name: 'Speculoos Sensation',
      icon: 'speculoos-sensation',
      price: 139,
      promo: 'new',
      description: 'Caramel Filled, Caramel Icing, Speculoos Crumb & Biscuit, Chocolate & Vanilla Drizzle'
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut)
  }
}
