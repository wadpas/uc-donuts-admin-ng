import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css']
})
export class DonutFormComponent {

  @Input() donut!: Donut
  @Output() create = new EventEmitter<Donut>();

  icons: string[] = [
    'cookie-cream-blast',
    'speculoos-sensation',
    'strawberry-rainbow',
    'mr-happy',
    'rainbow-fruit',
    'maple-chocolate'
  ];


  constructor() { }

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value)
    }
  }
}
