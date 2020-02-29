import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page-title/page.service';

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
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.set("YPS | Admin");
  }
}
