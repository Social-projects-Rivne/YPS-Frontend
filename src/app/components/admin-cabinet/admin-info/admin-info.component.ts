import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {
  name: string="Petro";
  surname: string="Petrovskiy";
  phone: string="+380-90-00-00-001"
  email: string="admin@yps.com"
  src_photo: string="../../../../assets/images/default-user-image.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
