import { Component, Input } from '@angular/core';
import { ISchool } from 'src/app/models/ISchool';

@Component({
  selector: 'yps-school-info-card',
  templateUrl: './school-info-card.component.html',
  styleUrls: ['./school-info-card.component.scss']
})
export class SchoolInfoCardComponent {
  @Input() school: ISchool;
}
