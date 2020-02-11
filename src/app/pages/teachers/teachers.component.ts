import { ITeacher } from './../../models/ITeachet';
import { Component, OnInit } from '@angular/core';
import { TeacherinfoService } from 'src/app/services/teacherinfo.service';

@Component({
  selector: 'yps-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class TeachersComponent implements OnInit {

  constructor( 
    private userService: TeacherinfoService
  ) {}

  teachersData: ITeacher[] = TEACHERS_DATA;

  columns = [
    { def: "id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "className" , label: "Class" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "Email" },
    { def: "dateOfBirth", label: "Date of birth"},
    { def:"degree", label:"Degree"}
  ];

  ngOnInit() {
    this.userService.getTeachers()
     .subscribe(data=>this.teachersData = data
     )
  }
}

const TEACHERS_DATA: ITeacher[] = [
  {id : null, firstName : "", surname : "", middleName : "", className : "", degree : "",  phoneNumber : "", email : "", dateOfBirth : ""}
];
