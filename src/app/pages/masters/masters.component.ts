import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class MastersComponent implements OnInit {

  mastersData : IUser[] = MASTERS_DATA;

  columns = [
    { def: "Id", label: "Id" },
    { def: "FirstName", label: "Name" },
    { def: "Surname", label: "Surname" },
    { def: "MiddleName", label: "Middle name" },
    { def: "PhoneNumber", label: "Phone" },
    { def: "Email", label: "Email" },
    { def: "DateOfBirth", label: "Date of birth" }
  ];

  ngOnInit() {
  }
}

const MASTERS_DATA: IUser[] = [
  {Id : 1, FirstName : "Mufutau", Surname : "Lareina", MiddleName : "Cyrus", Class : null, PhoneNumber : "068-366-9300", Email : "quis@et.com", DateOfBirth : "13.09.19"},
  {Id : 2, FirstName : "Rashad", Surname : "Kay", MiddleName : "Arthur", Class : null, PhoneNumber : "084-937-7435", Email : "blandit.at.nisi@Aliquamgravida.com", DateOfBirth : "30.04.19"},
];