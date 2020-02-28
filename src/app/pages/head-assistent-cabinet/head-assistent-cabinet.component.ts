import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page-title/page.service';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-head-assistent-cabinet',
  templateUrl: './head-assistent-cabinet.component.html',
  styleUrls: ['./head-assistent-cabinet.component.scss']
})
export class HeadAssistentCabinetComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './',
      icon: 'account_circle'
    },
    {
      value: 'Journal',
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
      path: './schedules',
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
    this.pageService.set("YPS | Head-Assistent");
  }
}
