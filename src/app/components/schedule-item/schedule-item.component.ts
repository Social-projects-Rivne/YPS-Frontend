import { Component, OnInit, Input } from '@angular/core';
import { IScheduleItem } from 'src/app/models/IScheduleItem';

@Component({
  selector: 'yps-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  @Input() item: IScheduleItem;

  constructor() { }

  ngOnInit(): void { }
}
