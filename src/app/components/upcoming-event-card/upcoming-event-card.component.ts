import { Component, Input } from '@angular/core';
import { IEvent } from 'src/app/models/IEvent';
import { EventService } from 'src/app/services/events/event.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-upcoming-event-card',
  templateUrl: './upcoming-event-card.component.html',
  styleUrls: ['./upcoming-event-card.component.scss']
})
export class UpcomingEventCardComponent {
  @Input() events: IEvent[];
}
