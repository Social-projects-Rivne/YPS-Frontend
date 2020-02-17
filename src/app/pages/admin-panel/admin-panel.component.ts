import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';
import { UserAdminInfoService } from 'src/app/services/admin/admin.service';
import { IAdmin } from 'src/app/models/IAdmin';

@Component({
  selector: 'yps-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './',
      icon: 'account_circle'
    },
    {
      value: 'School Request',
      path: './schoolRequest',
      icon: 'announcement'
    },
    {
      value: 'Schools',
      path: './schools',
      icon: 'school'
    }
  ];
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
  constructor(private userService: UserAdminInfoService){}

  ngOnInit() {this.userService.getUser()
    .subscribe(data =>this.user = data);}
}
