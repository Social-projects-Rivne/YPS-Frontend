import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'yps-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class TeachersComponent implements OnInit {

  constructor(
    public teacherService: TeachersService,
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
