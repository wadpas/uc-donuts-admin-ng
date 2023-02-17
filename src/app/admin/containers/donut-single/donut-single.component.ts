import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  isEdit!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donutService: DonutService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => this.donut = donut);

    this.isEdit = this.route.snapshot.data['isEdit'];
  }

  onCreate(donut: Donut) {
    this.donutService
      .crete(donut)
      .subscribe(() => this.router.navigate(['admin'])
      );

  }

  onUpdate(donut: Donut) {
    this.donutService
      .update(donut)
      .subscribe({
        next: () => this.router.navigate(['admin']),
        error: (err) => console.log("onUpdate:", err)
      });
  }

  onDelete(donat: Donut) {
    this.donutService
      .delete(donat)
      .subscribe(() => this.router.navigate(['admin']));
  }
} 
