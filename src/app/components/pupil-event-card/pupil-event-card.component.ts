import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { IEvent } from 'src/app/models/IEvent';

@Component({
  selector: 'yps-pupil-event-card',
  templateUrl: './pupil-event-card.component.html',
  styleUrls: ['./pupil-event-card.component.scss']
})
export class PupilEventCardComponent implements OnInit {
    events: IEvent[];

  constructor( private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getUpcomingEventsByPupil()
      .subscribe(data => this.events = data);
  }
}
