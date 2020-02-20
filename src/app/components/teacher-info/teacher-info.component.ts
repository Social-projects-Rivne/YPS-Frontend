import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/models/ITeachet';
import { PageService } from 'src/app/services/page-title/page.service';
import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';

@Component({
  selector: 'yps-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent implements OnInit {
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
    // this.pageService.set("YPS | Teacher");
    this.userService.getTeacherByID().subscribe(data =>this.user=data);
  }

}
