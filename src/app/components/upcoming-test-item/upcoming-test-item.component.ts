import { Component, OnInit, Input } from '@angular/core';
import { IUpcomingTest } from 'src/app/models/IUpcomingTest';

@Component({
  selector: 'yps-upcoming-test-item',
  templateUrl: './upcoming-test-item.component.html',
  styleUrls: ['./upcoming-test-item.component.scss']
})
export class UpcomingTestItemComponent implements OnInit {

  @Input() upcomingTestItem: IUpcomingTest;
  @Input() index: number | string;

  constructor() { }

  ngOnInit(): void {
    if (typeof(this.index) == "number") {
      this.index = this.index + 1;
    }
  }
}
