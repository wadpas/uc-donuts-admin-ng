import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() { }

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'i3F82j',
        name: 'Strawberry Rainbow',
        icon: 'strawberry-rainbow',
        price: 1.19,
        description: 'Strawberry Icing & Rainbow Sprinkles'
      },
      {
        id: 'b8s4L6',
        name: 'Speculoos Sensation',
        icon: 'speculoos-sensation',
        price: 1.39,
        description: 'Caramel Filled, Caramel Icing, Speculoos Crumb & Biscuit, Chocolate & Vanilla Drizzle'
      },
      {
        id: 'h3S9f6',
        name: 'Rainbow Fruit',
        icon: 'rainbow-fruit',
        price: 1.29,
        description: 'Strawberry Filled, Vanilla Icing & Chewy Fruity Rainbow Candies'
      }
    ]
  }

}
