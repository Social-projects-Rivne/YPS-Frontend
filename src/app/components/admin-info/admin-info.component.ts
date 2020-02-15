import { UserAdminInfoService } from './../../services/admin.service';
import { Component, OnInit, Output } from '@angular/core';
import { IAdmin } from 'src/app/models/IAdmin';

@Component({
  selector: 'yps-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {
  user: IAdmin = {
    id: 1,
    firstName: null,
    surname:"",
    middleName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    imageUrl: ""
  };
  constructor(private userService: UserAdminInfoService) {}

  ngOnInit() {
    this.userService.getUser()
    .subscribe(data =>this.user = data);
  }
}
