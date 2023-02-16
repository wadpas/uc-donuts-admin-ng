import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService
      .readOne('b8s4L6')
      .subscribe((donut: Donut) => this.donut = donut);
  }

  onCreate(donut: Donut) {
    this.donutService
      .crete(donut)
      .subscribe();

  }

  onUpdate(donut: Donut) {
    this.donutService
      .update(donut)
      .subscribe();
  }

  onDelete(donat: Donut) {
    this.donutService
      .delete(donat)
      .subscribe();
  }
} 
