import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { IEvent } from 'src/app/models/IEvent';

@Component({
  selector: 'yps-pupil-events',
  templateUrl: './pupil-events.component.html',
  styleUrls: ['./pupil-events.component.scss']
})
export class PupilEventsComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getUpcomingEventsByPupil()
      .subscribe(response => this.events = response);
  }
}