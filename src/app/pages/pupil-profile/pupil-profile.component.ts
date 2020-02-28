import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-pupil-profile',
  templateUrl: './pupil-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class PupilProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/Pupils/GetPupilById");
  }
}