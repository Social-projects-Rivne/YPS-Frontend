import { Component, OnInit, Input } from '@angular/core';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-side-bar-element',
  templateUrl: './side-bar-element.component.html',
  styleUrls: ['./side-bar-element.component.scss']
})
export class SideBarElementComponent implements OnInit {
  @Input() sideLink:ILink;
  constructor() { }

  ngOnInit() {
  }

}
