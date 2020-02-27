import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/models/ITeacher';
import { PageService } from 'src/app/services/page-title/page.service';
import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent implements OnInit {
  teacher: IUser = null;
  constructor(private pageService: PageService, private userService: TeacherinfoService) { }

  ngOnInit(): void {
    this.userService.getTeacherByID()
      .subscribe(response => {
        this.teacher = response;
      });
  }
}