import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { PageService } from 'src/app/services/page-title/page.service';
import { ITeacher } from 'src/app/models/ITeachet';
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
    }
  ];
  user: ITeacher = {
    id: null,
    firstName: "",
    surname:"",
    middleName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    imageUrl: "",
    className: "",
    degree: "",
    schoolName: ""
  };
  constructor(private pageService: PageService, private userService: TeacherinfoService) { }

  ngOnInit(): void {
    this.pageService.set("YPS | Teacher");
    this.userService.getTeacherByID().subscribe(data =>this.user=data);
  }

}
