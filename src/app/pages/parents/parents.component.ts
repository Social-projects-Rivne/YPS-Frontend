import { ParentsService } from '../../services/parents/parents.service';
import { IParent } from './../../models/IParent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['../../../scss/cabinet-sub-pages.scss']
})
export class ParentsComponent implements OnInit {
  constructor(public parentsService: ParentsService) { }

  ngOnInit() {
    this.parentsService.getParents();
  }
}

