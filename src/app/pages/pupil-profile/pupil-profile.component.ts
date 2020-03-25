import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { EventService } from 'src/app/services/events/event.service';
import { IEvent } from 'src/app/models/IEvent';

@Component({
  selector: 'yps-pupil-profile',
  templateUrl: './pupil-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class PupilProfileComponent implements OnInit {

  url="/GetUpcomingEventsByPupil";

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/Pupils/GetPupilById");
  }
}
