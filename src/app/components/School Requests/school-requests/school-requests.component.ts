import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ISchoolRequestVM } from '../SchoolRequest/ISchoolRequestVM';
import { Observable } from 'rxjs';
import { SchoolRequestService } from 'src/app/services/school-requests/school-request.service';

@Component({
  selector: 'yps-school-requests',
  templateUrl: './school-requests.component.html',
  styleUrls: ['./school-requests.component.scss']
})
export class SchoolRequestsComponent implements OnInit {



  constructor(public schoolRequestService:SchoolRequestService) { }
  ngOnInit() {
    this.schoolRequestService.get();
  }
  update(){
    this.schoolRequestService.get();
  }


}
