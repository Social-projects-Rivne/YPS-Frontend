import { Component, OnInit, Input } from '@angular/core';
import { IClass } from 'src/app/models/IClass';

@Component({
  selector: 'yps-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.scss']
})
export class ClassItemComponent implements OnInit {
  @Input() classItem: IClass;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    if (typeof(this.index) == "number") {
      this.index = this.index + 1;
    }
  }
}