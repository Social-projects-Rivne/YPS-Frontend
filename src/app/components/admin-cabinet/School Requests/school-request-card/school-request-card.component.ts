import { Component, OnInit, Input } from '@angular/core';
import { ISchoolRequestVM } from '../SchoolRequest/ISchoolRequestVM';

@Component({
  selector: 'yps-school-request-card',
  templateUrl: './school-request-card.component.html',
  styleUrls: ['./school-request-card.component.scss']
})
export class SchoolRequestCardComponent implements OnInit {


  @Input() Request:ISchoolRequestVM;
  constructor() {  }

  ngOnInit() {
    console.log(this.Request);
  }

}
