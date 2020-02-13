import { ParentService } from './../../services/parent.service';
import { IParent } from './../../models/IParent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class ParentsComponent implements OnInit {

  columns = [
    { def: "id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "Email" },
    { def: "workInfo", label: "Work Info" },
    { def: "children", label: "Children"}
  ];

  constructor(private service:ParentService) {}
  
  
  parentsData : IParent[] ;
  ngOnInit() {
    this.service.get().subscribe(p=>{
      this.parentsData=p
    });
  }

}

