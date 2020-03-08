import { Component, OnInit } from '@angular/core';
import { SchoolRequestsService } from 'src/app/services/school-requests/school-request.service';

@Component({
  selector: 'yps-school-requests',
  templateUrl: './school-requests.component.html',
  styleUrls: ['./school-requests.component.scss']
})
export class SchoolRequestsComponent implements OnInit {



  constructor(public schoolRequestService:SchoolRequestsService) { }
  ngOnInit() {
    this.schoolRequestService.get();
  }


}
