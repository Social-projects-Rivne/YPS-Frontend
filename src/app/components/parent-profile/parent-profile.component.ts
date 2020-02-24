import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/services/parents/parent.service';
import { IParent } from 'src/app/models/IParent';

@Component({
  selector: 'yps-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['./parent-profile.component.scss']
})
export class ParentProfileComponent implements OnInit {
  constructor(
    private service: ParentService
  ) { }

  user: IParent = {
    id: null,
    phoneNumber: '',
    email: '',
    imageUrl: '',
    firstName: '',
    surname: '',
    middleName: '',
    schoolName: '',
    workinfo: '',
    dateOfBirth: '',
    children: []
  };

  getParentData = () => {
    this.service.getParentProfileInfo()
      .subscribe(data => this.user = data)
  }

  ngOnInit(): void {
    this.getParentData();
  }
}
