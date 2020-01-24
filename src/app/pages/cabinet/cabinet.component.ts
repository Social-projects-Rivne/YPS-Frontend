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
      fieldName:"Pupils",
      linkPath:'',
      iconPath:"child_care"
    },
    {
      fieldName:"Parents",
      linkPath:'',
      iconPath:"supervised_user_circle"
    },
    {
      fieldName:"Teachers",
      linkPath:'',
      iconPath:"emoji_people"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
