import { Component, OnInit, Input } from '@angular/core';
import { ILink } from 'src/app/models/ILink';

@Component({
  selector: 'yps-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() links: ILink[];

  constructor() {}

  ngOnInit() {}
}