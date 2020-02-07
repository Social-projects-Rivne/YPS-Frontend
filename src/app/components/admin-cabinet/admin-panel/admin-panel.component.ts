import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';
import { UserAdminInfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'yps-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './profile',
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
  
  constructor(private userService: UserAdminInfoService){}

  ngOnInit() {}
}
