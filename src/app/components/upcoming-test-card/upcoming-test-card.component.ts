import { Component, OnInit, Input } from '@angular/core';
import { IUpcomingTest } from 'src/app/models/IUpcomingTest';

@Component({
  selector: 'yps-upcoming-test-card',
  templateUrl: './upcoming-test-card.component.html',
  styleUrls: ['./upcoming-test-card.component.scss']
})
export class UpcomingTestCardComponent implements OnInit {
  @Input() upcomingTestItem: IUpcomingTest;

  constructor() { }

  ngOnInit(): void {
  }

}
