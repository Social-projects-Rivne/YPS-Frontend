import { Component, OnInit } from '@angular/core';
import { IHeadassistant } from 'src/app/models/IHeadassistant';

@Component({
  selector: 'yps-headassistants',
  templateUrl: './headassistants.component.html',
  styleUrls: ['./headassistants.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class HeadassistantsComponent implements OnInit {

  headassistantsData: IHeadassistant[] = HEADASSISTANTS_DATA;

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

const HEADASSISTANTS_DATA: IHeadassistant[] = [
  {Id : 1, firstName : "Wade", surname : "Lucy", middleName : "Yardley", phoneNumber : "087-374-8673", email : "convallis@enimNuncut.net", dateOfBirth : "17.04.19"}
];
