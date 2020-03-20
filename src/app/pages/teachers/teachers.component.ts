import { ITeacher } from './../../models/ITeacher';
import { Component, OnInit } from '@angular/core';
import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class TeachersComponent implements OnInit {

  constructor(
    public teacherService: TeacherinfoService,
  ) {}

  columns = [
    { def: "id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "className", label: "Class" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "Email" },
    { def: "dateOfBirth", label: "Date of birth"},
    { def:"degree", label:"Degree"}
  ];

  getTeachersData = () => {
    this.teacherService.getTeachers();
  }

  ngOnInit() {
    this.getTeachersData();
  }
}
