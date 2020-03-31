import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { IEvent } from 'src/app/models/IEvent';

@Component({
  selector: 'yps-upcoming-event-card-list',
  templateUrl: './upcoming-event-card-list.component.html',
  styleUrls: ['./upcoming-event-card-list.component.scss']
})
export class UpcomingEventCardListComponent implements OnInit {
  @Input() url: string;
  events: IEvent[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getUpcomingEvents(this.url)
      .subscribe(
        (res: IEvent[]) => {
          this.events = res;
        }
      );
  }
}
