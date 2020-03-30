import { Component, OnInit } from '@angular/core';
import { IScheduleDay } from 'src/app/models/IScheduleDay';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { get } from 'js-cookie';

@Component({
  selector: 'yps-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  days: IScheduleDay[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const role = get("role");

    if (typeof(role) != "undefined") {
      this.http.get(`${apiUrl}/schedule/getfor${role}`)
        .subscribe(
          (response: IScheduleDay[]) => {
            this.days = response;
          }
        );
    }
  }
}
