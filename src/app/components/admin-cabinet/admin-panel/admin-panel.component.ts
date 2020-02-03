import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';
import { UserAdminInfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'yps-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  sideLinks:ILink[]=
  [{
      fieldName:'Profile',
      linkPath:'./profile',
      iconPath:'account_circle'
    },
    {
      fieldName:'School Request',
      linkPath:'./request',
      iconPath:'announcement'
    },
    {
      fieldName:'Schools',
      linkPath:'./schools',
      iconPath:'school'
  }];
  
  constructor(
    private userService: UserAdminInfoService
  ){}

  ngOnInit() {
   }
 
  
}
