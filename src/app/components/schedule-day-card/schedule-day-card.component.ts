import { Component, OnInit, Input } from '@angular/core';
import { IScheduleDay } from 'src/app/models/IScheduleDay';

@Component({
  selector: 'yps-schedule-day-card',
  templateUrl: './schedule-day-card.component.html',
  styleUrls: ['./schedule-day-card.component.scss']
})
export class ScheduleDayCardComponent implements OnInit {
  @Input() day: IScheduleDay;

  constructor() { }

  ngOnInit(): void {}
}
