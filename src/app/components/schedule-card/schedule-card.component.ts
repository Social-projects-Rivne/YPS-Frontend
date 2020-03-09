import { Component, OnInit, Input } from '@angular/core';
import { IScheduleDay } from 'src/app/models/IScheduleDay';

@Component({
  selector: 'yps-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent implements OnInit {
  @Input() days: IScheduleDay[];

  constructor() { }

  ngOnInit(): void { }
}
