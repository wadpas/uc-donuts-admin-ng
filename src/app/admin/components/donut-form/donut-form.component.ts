import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css']
})
export class DonutFormComponent implements OnInit {

  icons: string[] = [
    'cookie-cream-blast',
    'speculoos-sensation',
    'strawberry-rainbow',
    'mr-happy',
    'rainbow-fruit',
    'maple-chocolate'
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
