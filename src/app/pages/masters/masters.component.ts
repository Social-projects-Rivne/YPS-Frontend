import { Component, OnInit } from '@angular/core';
import { IMaster } from 'src/app/models/IMaster';

@Component({
  selector: 'yps-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class MastersComponent implements OnInit {

  mastersData : IMaster[] = MASTERS_DATA;

  columns = [
    { def: "Id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "email" },
    { def: "dateOfBirth", label: "Date of birth" }
  ];

  ngOnInit() {
  }
}

const MASTERS_DATA: IMaster[] = [
  {Id : 1, firstName : "Wesley", surname : "Briar", middleName : "Travis", phoneNumber : "055-033-2680", email : "euismod.in@lobortis.org", dateOfBirth : "14.03.20"},
  {Id : 2, firstName : "Wade", surname : "Lucy", middleName : "Yardley", phoneNumber : "087-374-8673", email : "convallis@enimNuncut.net", dateOfBirth : "17.04.19"}
];