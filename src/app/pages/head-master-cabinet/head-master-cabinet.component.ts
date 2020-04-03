import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { masterLinks } from 'src/constants/sidebars-links';

@Component({
  selector: 'yps-head-master-cabinet',
  templateUrl: './head-master-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class HeadMasterCabinetComponent implements OnInit {
  links: ILink[] = masterLinks;

  constructor() { }

  ngOnInit(): void { }
}
