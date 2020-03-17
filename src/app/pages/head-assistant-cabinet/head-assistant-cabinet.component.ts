import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page-title/page.service';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-head-assisant-cabinet',
  templateUrl: './head-assistant-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class HeadAssistantCabinetComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './',
      icon: 'account_circle'
    },
    {
      value: 'Journals',
      path: './journal',
      icon: 'assignment'
    },
    {
      value: 'Events',
      path: './events',
      icon: 'view_list'
    },
    {
      value: 'Schedule',
      path: './schedule',
      icon: 'event'
    },
    {
      value: 'Materials',
      path: './materials',
      icon: 'menu_book'
    }
  ];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Head-Assistant");
  }
}
