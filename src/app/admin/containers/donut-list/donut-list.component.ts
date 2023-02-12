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
        id: 'r5H1n2',
        name: 'Cookie Cream Blast',
        icon: 'cookie-cream-blast',
        price: 149,
        description: 'Bavarian Creme Filled, Blue Vanilla Icing, Cookie Crumb & Biscuit, Chocolate & Vanilla Drizzle'
      },
      {
        id: 'b8s4L6',
        name: 'Speculoos Sensation',
        icon: 'speculoos-sensation',
        price: 139,
        promo: 'new',
        description: 'Caramel Filled, Caramel Icing, Speculoos Crumb & Biscuit, Chocolate & Vanilla Drizzle'
      },
      {
        id: 'i3F82j',
        name: 'Strawberry Rainbow',
        icon: 'strawberry-rainbow',
        price: 119,
        description: 'Strawberry Icing & Rainbow Sprinkles'
      },
      {
        id: 'o3H2n9',
        name: 'Mr Happy',
        icon: 'mr-happy',
        price: 139,
        description: 'Bavarian Creme Filled, Vanilla Icing & Chocolate Smile'
      },
      {
        id: 'h3S9f6',
        name: 'Rainbow Fruit',
        icon: 'rainbow-fruit',
        promo: 'limited',
        price: 129,
        description: 'Strawberry Filled, Vanilla Icing & Chewy Fruity Rainbow Candies'
      },
      {
        id: 'P3s0d1',
        name: 'Maple Chocolate',
        icon: 'maple-chocolate',
        price: 119,
        description: 'Maple Icing & Chocolate Drizzle'
      },
    ]
  }
  userTrackBy(index: number, donut: Donut) {
    return donut.id;
  }

}
