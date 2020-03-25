import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { IEvent } from 'src/app/models/IEvent';

@Component({
  selector: 'yps-upcoming-events-card-list',
  templateUrl: './upcoming-events-card-list.component.html',
  styleUrls: ['./upcoming-events-card-list.component.scss']
})
export class UpcomingEventsCardListComponent implements OnInit {

  @Input() url: string;
  events: IEvent[]
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getUpcomingEvents(this.url)
      .subscribe((res: IEvent[]) => {
        this.events = res;
      }
      );
  }

}
