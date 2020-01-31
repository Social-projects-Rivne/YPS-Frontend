import { Component, OnInit, Input, Output } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserinfoService } from 'src/app/services/userinfo.service';

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
  };
  constructor(
    private userService: UserinfoService
  ) { 
  
  }

  ngOnInit() {
    this.userService.getUser()
    .subscribe(date => this.admin = date);
  }
}
