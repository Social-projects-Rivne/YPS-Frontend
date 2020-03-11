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
  classes: IClassToSelect
  selectedClass: IClassToSelect

  constructor(private client:HttpClient, private httpOptions:HttpOptionsService) { }

  ngOnInit(): void {
    let url = apiUrl + "/Classes/GetBySchool";
    this.httpOptions.loadHeaders();
    this.client.get(url,this.httpOptions.options).subscribe( (res: IClassToSelect) =>
     {
       this.classes = res;
       console.log(res);
      });
  }

  ClassSelect(){
    console.log(this.selectedClass)
  }
}
