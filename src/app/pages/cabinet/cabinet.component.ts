import { ILink } from 'src/app/models/ILink';
import { Component, OnInit} from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'yps-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit{
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
    }
  ];

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.set("YPS | Cabinet");
  }
}