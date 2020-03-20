import { IPupil } from '../../models/IPupil';
import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../../services/pupils/pupils.service';

@Component({
  selector: 'yps-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss', '../../../scss/cabinet-sub-pages.scss']
})

export class PupilsComponent implements OnInit {

  constructor(public pupilsService : PupilsService) {}

  pupilsData: IPupil[];
  isLoading: boolean = true;

  columns = [
    { def: "id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "className", label: "Class" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "email" },
    { def: "dateOfBirth", label: "Date of birth" },
  ];

  ngOnInit() {
    this.pupilsService.getPupils();
  }
}
