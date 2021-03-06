import { Component, OnInit, Input, Output } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { PageService } from 'src/app/services/page-title/page.service';

@Component({
  selector: 'yps-teacher-cabinet',
  templateUrl: './teacher-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class TeacherCabinetComponent implements OnInit {
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
      value: 'Lessons',
      path: './lessons',
      icon: 'event_note'
    },
    {
      value: 'Upcoming Tests',
      path: './upcoming-tests',
      icon: 'library_add_check'
    },
    {
      value: 'My Class',
      path: './my-class-journal',
      icon: 'assignment'
    }
  ];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Teacher");
  }
}
