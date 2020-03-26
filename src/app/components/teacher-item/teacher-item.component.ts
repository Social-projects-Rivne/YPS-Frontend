import { Component, Input } from '@angular/core';
import { ITeacher } from 'src/app/models/ITeacher';

@Component({
  selector: 'yps-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['../../../scss/card.scss', './teacher-item.component.scss']
})
export class TeacherItemComponent {
  @Input() teacher: ITeacher;
  @Input() index: number;
}
