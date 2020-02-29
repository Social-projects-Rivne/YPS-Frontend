import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/Admin");
  }
}