import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-head-assistent-profile',
  templateUrl: './head-assistent-profile.component.html',
  styleUrls: ['../../../scss/profile.scss']
})
export class HeadAssistentProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/Teachers/GetHeadAssistentById");
  }
}
