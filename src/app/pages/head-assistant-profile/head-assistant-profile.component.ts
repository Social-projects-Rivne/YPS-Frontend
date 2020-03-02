import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-head-assistant-profile',
  templateUrl: './head-assistant-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class HeadAssistantProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/Teachers/GetHeadAssistantById");
  }
}
