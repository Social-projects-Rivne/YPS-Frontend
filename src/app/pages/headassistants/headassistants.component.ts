import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'yps-headassistants',
  templateUrl: './headassistants.component.html',
  styleUrls: ['./headassistants.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class HeadassistantsComponent implements OnInit {

  headassistantsData:IUser[] = HEADASSISTANTS_DATA;

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

const HEADASSISTANTS_DATA: IUser[] = [
  {Id : 1, FirstName : "Kaseem", Surname : "Nyssa", MiddleName : "Levi", Class : null, PhoneNumber : "090-831-4662", Email : "auctor.Mauris@amet.org", DateOfBirth : "15.10.19"},
  {Id : 2, FirstName : "Lucian", Surname : "Ava", MiddleName : "Callum", Class : null, PhoneNumber : "021-359-6334", Email : "non.dui@dolor.com", DateOfBirth : "21.08.19"},
  {Id : 3, FirstName : "Cruz", Surname : "Nayda", MiddleName : "Yuli", Class : null, PhoneNumber : "011-679-2709", Email : "lectus@ac.ca", DateOfBirth : "22.03.20"},
];
