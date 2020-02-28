import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class ParentProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/Parents/GetParentProfileInfo");
  }
}