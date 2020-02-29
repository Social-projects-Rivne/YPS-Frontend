import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'yps-master-profile',
  templateUrl: './master-profile.component.html',
  styleUrls: ['./master-profile.component.scss']
})
export class MasterProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser("/teachers/getmaster");
  }
}
