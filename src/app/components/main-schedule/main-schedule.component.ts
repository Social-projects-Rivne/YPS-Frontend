import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { IScheduleDay } from 'src/app/models/IScheduleDay';
import { Component, OnInit } from '@angular/core';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';

@Component({
  selector: 'yps-main-schedule',
  templateUrl: './main-schedule.component.html',
  styleUrls: ['./main-schedule.component.scss']
})
export class MainScheduleComponent implements OnInit {
  days: IScheduleDay[];
  classes: IClassToSelect[];
  classNumber = [1,2,3,4,5,6,7,8,9,10,11,12];
  mode = false;

  constructor(
    private client: HttpClient,
    private httpOptions: HttpOptionsService) { }

  ngOnInit(): void {
  }

  GetClassesByNumber = (number: number) => {
    let url = apiUrl + "/Classes/GetClassesByNumber";
    this.httpOptions.loadHeaders();
     this.client.get(url + "/" + number, this.httpOptions.options).subscribe((res: IClassToSelect[]) =>
      {
        this.mode = true;
        this.classes = res;
      });
  }

  GetScheduleByClass = (id: number) => {
    let url = apiUrl + "/Schedule/GetScheduleByClass";
    this.httpOptions.loadHeaders();
    this.client.get(url + "/" + id, this.httpOptions.options).subscribe((res: IScheduleDay[]) => {
      this.days = res;
    })
  }

  Reset = () => {
    if(this.mode && this.days != null) {
      this.days = null;
    }
    else {
      this.classes = null;
      this.mode = false;
    }
  }
}

