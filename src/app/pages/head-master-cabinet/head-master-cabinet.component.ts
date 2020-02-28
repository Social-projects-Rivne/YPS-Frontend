import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/ILink';
import { headMasterLinks } from 'src/constants/sidebars-links';

@Component({
  selector: 'yps-head-master-cabinet',
  templateUrl: './head-master-cabinet.component.html',
  styleUrls: ['../../../scss/cabinet.scss']
})
export class HeadMasterCabinetComponent implements OnInit {
  links: ILink[] = headMasterLinks;

  constructor() { }

  ngOnInit(): void { }
}
