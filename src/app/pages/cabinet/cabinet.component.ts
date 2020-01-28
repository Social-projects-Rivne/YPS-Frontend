import { ILink } from 'src/app/models/ILink';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  sideLinks: ILink[] = [
    {
      fieldName:"Profile",
      linkPath:'/cabinet',
      iconPath:"account_circle"
    },
    {
      fieldName:"Pupils",
      linkPath:'/cabinet/pupils',
      iconPath:"child_care"
    },
    {
      fieldName:"Parents",
      linkPath:'/cabinet/parents',
      iconPath:"supervised_user_circle"
    },
    {
      fieldName:"Teachers",
      linkPath:'/cabinet/teachers',
      iconPath:"emoji_people"
    },
    {
      fieldName:"HeadAssistant",
      linkPath:'/cabinet/head-assistants',
      iconPath:"person_add"
    },
    {
      fieldName:"Master",
      linkPath:'/cabinet/masters',
      iconPath:"how_to_reg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
