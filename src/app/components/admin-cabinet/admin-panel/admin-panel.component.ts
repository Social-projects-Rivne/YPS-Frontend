import { Component, OnInit, Output } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'yps-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  sideLinks:ILink[]=
  [{
      fieldName:'Profile',
      linkPath:'/admin',
      iconPath:'account_circle'
    },
    {
      fieldName:'School Request',
      linkPath:'',
      iconPath:'announcement'
    },
    {
      fieldName:'Schools',
      linkPath:'/login',
      iconPath:'school'
  }];
  
  constructor(
    private userService: UserinfoService
  ){ 

   
  }

  ngOnInit() {
   }
 
  
}
