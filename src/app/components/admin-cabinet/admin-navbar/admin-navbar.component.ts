import { Component, OnInit, Input, Output } from '@angular/core';
import { IAdmin } from 'src/app/models/IAdmin';
import { UserAdminInfoService } from 'src/app/services/userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'yps-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  // public admin: User;
  // public user: IUser;

  admin:  IAdmin = {
    id: 1,
    firstName: "",
    surname:"",
    middleName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    imageUrl: ""
  };
  constructor(
    private userService: UserAdminInfoService,public router: Router
  ) {}

  ngOnInit() {
    this.userService.getUser()
    .subscribe(date => this.admin = date);
  }
  // onClick(){
  //   let redirect = 'localhost:4200/admin';

  //   // Redirect the user
  //   this.router.
  // }
}
