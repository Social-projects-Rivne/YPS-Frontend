import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/teachers/GetTeacherById");
  }
}