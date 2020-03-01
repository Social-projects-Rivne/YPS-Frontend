import { Component, OnInit, Input, Output } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { PageService } from 'src/app/services/page-title/page.service';
import { ITeacher } from 'src/app/models/ITeacher';
import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';

@Component({
  selector: 'yps-teacher-cabinet',
  templateUrl: './teacher-cabinet.component.html',
  styleUrls: ['./teacher-cabinet.component.scss']
})
export class TeacherCabinetComponent implements OnInit {
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
    },
    {
      value: 'Upcoming Tests',
      path: './upcoming-tests',
      icon: 'library_add_check'
    }
  ];

  teacher: ITeacher = null;
  constructor(private pageService: PageService, private userService: TeacherinfoService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Teacher");
    this.userService.getTeacherByID()
      .subscribe(response => {
        this.teacher = response;
      });
  }
}
