import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'yps-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isCollapsed: boolean=false;
  isCollapsed1: boolean=true;
  isCollapsed2: boolean=true;

  name: string="Pedro";
  surname: string="Velaskes";
  email: string="admin@yps.com"


  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.append(' | Admin Panel');
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
  uploadPhoto(){

  }
} 
