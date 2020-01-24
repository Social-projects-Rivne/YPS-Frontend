import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  sideLinks:ILink[]=
  [{
      fieldName:'Profile',
      linkPath:'',
      iconPath:'account_circle'
    },
    {
      fieldName:'School Request',
      linkPath:'',
      iconPath:'announcement'
    },
    {
      fieldName:'Schools',
      linkPath:'',
      iconPath:'school'
    }];
  isCollapsed: boolean=false;
  isCollapsed1: boolean=true;
  isCollapsed2: boolean=true;

  name: string="Petro";
  surname: string="Petrovskiy";
  phone: string="+380-90-00-00-001"
  email: string="admin@yps.com"
  src_photo: string="../../../assets/images/default-user-image.jpg";

  selectedFile: File=null;

  constructor() { }

  ngOnInit() {
  }
 
  onClick(){
    this.isCollapsed=false;
    this.isCollapsed1=true;
    this.isCollapsed2=true;
  }
  onClick1(){
    this.isCollapsed1=false;
    this.isCollapsed=true;
    this.isCollapsed2=true;
  }
  onClick2(){
    this.isCollapsed2=false;
    this.isCollapsed=true;
    this.isCollapsed1=true;
  }

  onFileSelected(event) {
    this.selectedFile= <File>event.target.files[0];
  }
  onUpload() {
    // this.http.post
  }
}
