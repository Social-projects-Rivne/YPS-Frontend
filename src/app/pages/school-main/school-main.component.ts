import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { IEvent } from 'src/app/models/IEvent';

@Component({
  selector: 'yps-school-main',
  templateUrl: './school-main.component.html',
  styleUrls: ['./school-main.component.scss']
})
export class SchoolMainComponent implements OnInit {
  url = "/GetUpcomingEventsBySchool";

  constructor() { }

  ngOnInit() {
  }

}
