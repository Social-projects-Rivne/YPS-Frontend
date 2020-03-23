import { Component, Input } from '@angular/core';
import { IClass } from 'src/app/models/IClass';

@Component({
  selector: 'yps-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.scss']
})
export class ClassItemComponent {
  @Input() classItem: IClass;
  @Input() index: number;
}