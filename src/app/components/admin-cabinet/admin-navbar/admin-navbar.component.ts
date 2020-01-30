import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/models/AdminView';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'yps-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  // public admin: User;
  // public user: IUser;

  @Output() admin: User; 

  constructor(
    private userService: UserinfoService
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(date => this.admin = date);
  }
}
