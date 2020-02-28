import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-master-cabinet',
  templateUrl: './master-cabinet.component.html',
  styleUrls: ['./master-cabinet.component.scss']
})
export class MasterCabinetComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: "Profile",
      path:'/cabinet',
      icon:"account_circle"
    },
    {
      value: "Pupils",
      path:'/cabinet/pupils',
      icon:"face"
    },
    {
      value: "Parents",
      path: '/cabinet/parents',
      icon: "supervised_user_circle"
    },
    {
      value: "Teachers",
      path: '/cabinet/teachers',
      icon: "emoji_people"
    },
    {
      value: "HeadAssistant",
      path: '/cabinet/head-assistants',
      icon: "person_add"
    },
    {
      value: "Master",
      path: '/cabinet/masters',
      icon: "how_to_reg"
    },
    {
      value: "Classes",
      path: '/cabinet/classes',
      icon:"school"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
