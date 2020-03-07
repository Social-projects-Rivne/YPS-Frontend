import { Component, OnInit } from '@angular/core';
import { IScheduleItem } from 'src/app/models/IScheduleItem';

@Component({
  selector: 'yps-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  item: IScheduleItem = {
    id: 1,
    lessonNumber: 1,
    auditorium: "aud. 4",
    discipline: "algebra",
    lessonTimeGap: "8:00 - 8:45 AM"
  };

  constructor() { }

  ngOnInit(): void { }
}
