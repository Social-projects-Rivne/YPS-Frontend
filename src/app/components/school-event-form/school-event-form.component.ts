import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/models/IEvent';
import { EventService } from '../../services/events/event.service'

@Component({
  selector: 'yps-school-event-form',
  templateUrl: './school-event-form.component.html',
  styleUrls: ['./school-event-form.component.scss']
})
export class SchoolEventFormComponent implements OnInit {
  public events: IEvent[] = [];

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getUpcomingEventsBySchool()
      .subscribe(data => this.events = data);
  }
}
