import { Component, OnInit, Input, Output } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { PageService } from 'src/app/services/page-title/page.service';

@Component({
  selector: 'yps-pupil-cabinet',
  templateUrl: './pupil-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class PupilCabinetComponent implements OnInit {

  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './',
      icon: 'account_circle'
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
    },
    {
      value: 'Journal',
      path: './journal',
      icon: 'assignment'
    }
  ];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Pupil");
  }
}