import { Component, OnInit } from '@angular/core';
import { ParentsService } from 'src/app/services/parents/parents.service';

@Component({
  selector: 'yps-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
  constructor(public parentsService: ParentsService) { }

  ngOnInit() {
    this.parentsService.getParents();
  }
}