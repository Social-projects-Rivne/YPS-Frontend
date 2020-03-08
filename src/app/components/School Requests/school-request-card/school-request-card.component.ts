import { SchoolRequestService } from 'src/app/services/school-requests/school-request.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ISchoolRequestVM } from '../SchoolRequest/ISchoolRequestVM';
import { SchoolRequestsComponent } from '../school-requests/school-requests.component';
import { ActivatedRoute, Router } from '@angular/router';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'yps-school-request-card',
  templateUrl: './school-request-card.component.html',
  styleUrls: ['./school-request-card.component.scss']
})
export class SchoolRequestCardComponent implements OnInit {


  @Input() Request:ISchoolRequestVM;
  constructor(private client:SchoolRequestService) {  }

  ngOnInit() {
  }
  approve(){
    this.client.approve(this.Request.id);
  }
  decline(){
    this.client.disapprove(this.Request.id);
  }
}
