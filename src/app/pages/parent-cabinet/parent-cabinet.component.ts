import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { IParent } from 'src/app/models/IParent';
import { ParentService } from 'src/app/services/parents/parent.service';

@Component({
  selector: 'yps-parent-cabinet',
  templateUrl: './parent-cabinet.component.html',
  styleUrls: ['./parent-cabinet.component.scss']
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
