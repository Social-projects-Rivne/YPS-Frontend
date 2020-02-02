import { Component, OnInit, Input, Output } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'yps-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  // public admin: User;
  // public user: IUser;

  admin:  IUser = {
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
    private userService: UserinfoService,public router: Router
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
