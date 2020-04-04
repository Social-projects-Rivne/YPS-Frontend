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
      value: 'Upcoming Events',
      path: './upcoming-events',
      icon: 'view_list'
    },
    {
      value: 'Schedule',
      path: './schedule',
      icon: 'event'
    }
  ];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Head-Assistant");
  }
}
