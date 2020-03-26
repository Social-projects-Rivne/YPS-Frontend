import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'yps-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  constructor(public teachersService: TeachersService) {}

  ngOnInit() {
    this.teachersService.getTeachers();
  }
}
