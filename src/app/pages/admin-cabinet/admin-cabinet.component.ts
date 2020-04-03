import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page-title/page.service';

@Component({
  selector: 'yps-admin-cabinet',
  templateUrl: './admin-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class AdminCabinetComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: 'profile',
      path: './',
      icon: 'account_circle'
    },
    {
      value: 'school requests',
      path: './school-requests',
      icon: 'announcement'
    }
  ];
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.set("YPS | Admin");
  }
}
