import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';
import { IUpcomingTest } from 'src/app/models/IUpcomingTest';
import { UpcomingTestsService } from '../../services/upcoming-tests/upcoming-tests.service'

@Component({
  selector: 'yps-upcoming-test-card-list',
  templateUrl: './upcoming-test-card-list.component.html',
  styleUrls: ['./upcoming-test-card-list.component.scss']
})
export class UpcomingTestCardListComponent implements OnInit {
  upcomingTests: IUpcomingTest [] = [];

  constructor(public upcomingTestsService: UpcomingTestsService) { }

  ngOnInit(): void {
    this.upcomingTestsService.getByPupil();
  }
}