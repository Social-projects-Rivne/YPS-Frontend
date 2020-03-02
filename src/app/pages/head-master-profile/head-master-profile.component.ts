import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { apiUrl } from 'src/constants/urls';

@Component({
  selector: 'yps-head-master-profile',
  templateUrl: './head-master-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class HeadMasterProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/teachers/getmaster");
  }
}
