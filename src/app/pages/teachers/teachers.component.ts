import { ITeacher } from './../../models/ITeachet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class TeachersComponent implements OnInit {

  teachersData: ITeacher[] = TEACHERS_DATA;

  columns = [
    { def: "Id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "className", label: "Class" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "Email" },
    { def: "dateOfBirth", label: "Date of birth"},
    { def:"degree", label:"Degree"}
  ];

  ngOnInit() {
  }

}
const TEACHERS_DATA: ITeacher[] = [
  {Id : 1, firstName : "Kaseem", surname : "Nyssa", middleName : "Levi", className : "ROW-15", degree : "Dosent Math" , phoneNumber : "090-831-4662", email : "auctor.Mauris@amet.org", dateOfBirth : "15.10.19"},
  {Id : 2, firstName : "Lucian", surname : "Ava", middleName : "Callum", className : "ROW-16", degree : "Trainee", phoneNumber : "021-359-6334", email : "non.dui@dolor.com", dateOfBirth : "21.08.19"},
  {Id : 3, firstName : "Cruz", surname : "Nayda", middleName : "Yuli", className : "ROW-17", degree : "Professor of physics", phoneNumber : "011-679-2709", email : "lectus@ac.ca", dateOfBirth : "22.03.20"},
  {Id : 4, firstName : "Mufutau", surname : "Lareina", middleName : "Cyrus", className : "ROW-18", degree : "Music teacher", phoneNumber : "068-366-9300", email : "quis@et.com", dateOfBirth : "13.09.19"}
];
