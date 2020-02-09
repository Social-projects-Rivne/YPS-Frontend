import { Component, OnInit, Input, Output } from '@angular/core';
import { IAdmin } from 'src/app/models/IAdmin';
import { UserAdminInfoService } from 'src/app/services/userinfo.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'yps-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  admin: IAdmin = {
    id: 1,
    firstName: "",
    surname: "",
    middleName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    imageUrl: ""
  };
  constructor(
    private userService: UserAdminInfoService,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(date => this.admin = date);
  }
  onClick() {
    this.authService.logout();
  }
}
