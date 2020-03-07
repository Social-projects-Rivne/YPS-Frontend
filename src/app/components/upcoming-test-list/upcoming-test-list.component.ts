import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';
import { IUpcomingTest } from 'src/app/models/IUpcomingTest';
import { UpcomingTestsService } from '../../services/upcoming-tests/upcoming-tests.service'

@Component({
  selector: 'yps-upcoming-test-list',
  templateUrl: './upcoming-test-list.component.html',
  styleUrls: ['./upcoming-test-list.component.scss']
})
export class UpcomingTestListComponent implements OnInit {

  upcomingTests: IUpcomingTest [] = [];

  headerUpcomingTest: IUpcomingTest = {
    class: "class",
    discipline: "discipline",
    testType: "Test type",
    topic: "topic",
    scheduledDate: "scheduled date"
  }

  constructor(
    private _upcomingTestService: UpcomingTestsService,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService) { }

  ngOnInit(): void {
    this.httpOptionsService.loadHeaders();
    this.GetUpcomingTest();
  }

  GetUpcomingTest = () =>{
    this.http.get(apiUrl + "/upcomingtests/getbyteacher", this.httpOptionsService.options)
      .subscribe(
        (successRes: IUpcomingTest[]) => {
          this.upcomingTests = successRes;
        }
      );
  }
}