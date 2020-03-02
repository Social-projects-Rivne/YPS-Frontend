import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-parent-cabinet',
  templateUrl: './parent-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class ParentCabinetComponent implements OnInit {
  sideLinks: ILink[] = [
    {
      value: 'Profile',
      path: './',
      icon: 'account_circle'
    },
    {
      value: 'Children',
      path: './children',
      icon: 'face'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
