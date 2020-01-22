import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
// import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'yps-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.append(' | Admin Panel');
  }
 
 
} 
