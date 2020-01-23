import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/models/IEventForm';

@Component({
  selector: 'yps-school-event-form',
  templateUrl: './school-event-form.component.html',
  styleUrls: ['./school-event-form.component.scss']
})
export class SchoolEventFormComponent implements OnInit {

  @Input() event:IEvent;


  constructor() { }

  ngOnInit() {
  }
}
