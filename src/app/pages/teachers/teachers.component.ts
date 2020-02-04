import { IUser } from './../../models/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class TeachersComponent implements OnInit {

  teachersData:IUser[] = TEACHERS_DATA;

  columns = [
    { def: "Id", label: "Id" },
    { def: "FirstName", label: "Name" },
    { def: "Surname", label: "Surname" },
    { def: "MiddleName", label: "Middle name" },
    { def: "Class", label: "Class" },
    { def: "PhoneNumber", label: "Phone" },
    { def: "Email", label: "Email" },
    { def: "DateOfBirth", label: "Date of birth" }
    //{ def:"Degree", label:"Degree"}
  ];

  ngOnInit() {
  }

}
const TEACHERS_DATA: IUser[] = [
  {Id : 1, FirstName : "Kaseem", Surname : "Nyssa", MiddleName : "Levi", Class : "ROW-15", PhoneNumber : "090-831-4662", Email : "auctor.Mauris@amet.org", DateOfBirth : "15.10.19"},
  {Id : 2, FirstName : "Lucian", Surname : "Ava", MiddleName : "Callum", Class : "ROW-16", PhoneNumber : "021-359-6334", Email : "non.dui@dolor.com", DateOfBirth : "21.08.19"},
  {Id : 3, FirstName : "Cruz", Surname : "Nayda", MiddleName : "Yuli", Class : "ROW-17", PhoneNumber : "011-679-2709", Email : "lectus@ac.ca", DateOfBirth : "22.03.20"},
  {Id : 4, FirstName : "Mufutau", Surname : "Lareina", MiddleName : "Cyrus", Class : "ROW-18", PhoneNumber : "068-366-9300", Email : "quis@et.com", DateOfBirth : "13.09.19"},
  {Id : 5, FirstName : "Rashad", Surname : "Kay", MiddleName : "Arthur", Class : "ROW-19", PhoneNumber : "084-937-7435", Email : "blandit.at.nisi@Aliquamgravida.com", DateOfBirth : "30.04.19"},
  {Id : 6, FirstName : "Yasir", Surname : "Lunea", MiddleName : "Kevin", Class : "ROW-20", PhoneNumber : "086-373-7163", Email : "libero.Integer@lobortis.org", DateOfBirth : "11.10.19"},
];
