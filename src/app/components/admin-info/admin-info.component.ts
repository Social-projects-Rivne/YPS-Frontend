import { UserAdminInfoService } from './../../services/admin/admin.service';
import { Component, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {
  admin: IUser = null;
  
  constructor(private userService: UserAdminInfoService) {}

  ngOnInit() {
    this.userService.getUser()
    .subscribe(data => this.admin = data);
  }
}
