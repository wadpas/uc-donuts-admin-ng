import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [
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

  constructor() { }

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donat = this.donuts.find((donut: Donut) => donut.id === id);

    if (donat) {
      return donat
    }

    return { name: "", icon: "", price: 0, description: "" };
  }

  crete(payload: Donut) {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    })
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut) => {
      return donut.id !== payload.id;
    })
  }

}
