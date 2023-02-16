import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => this.donuts = donuts);
  }

  userTrackBy(index: number, donut: Donut) {
    return donut.id;
  }

}
