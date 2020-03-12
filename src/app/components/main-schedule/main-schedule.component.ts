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
  days: IScheduleDay[]
  classes: IClassToSelect[]
  classNumber = [1,2,3,4,5,6,7,8,9,10,11,12]

  constructor(
    private client:HttpClient,
    private httpOptions:HttpOptionsService,) { }

  ngOnInit(): void {
  }

  selectClass(classId: number) {
    let url = apiUrl + "/Schedule/GetScheduleByClass"
    this.client.get(url + "/" + classId).subscribe(
      (res: IScheduleDay[]) => {
        this.days=res
       } );
  }

  ClassNumberSelect(number: number){
    let url = apiUrl + "/Classes/GetClassesByNumber";
    this.httpOptions.loadHeaders();
     this.client.get(url + "/" + number, this.httpOptions.options).subscribe( (res: IClassToSelect[]) =>
      {
        console.log(res);
        this.classes = res;
      });
  }
}

