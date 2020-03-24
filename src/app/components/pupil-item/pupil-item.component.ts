import { Component, Input } from '@angular/core';
import { IPupil } from 'src/app/models/IPupil';

@Component({
  selector: 'yps-pupil-item',
  templateUrl: './pupil-item.component.html',
  styleUrls: ['../../../scss/card.scss']
})
export class PupilItemComponent {
  @Input() pupil: IPupil;
  @Input() index: number;
}
