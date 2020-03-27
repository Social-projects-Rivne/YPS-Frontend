import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { ISchool } from 'src/app/models/ISchool';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';

@Component({
  selector: 'yps-school-main',
  templateUrl: './school-main.component.html',
  styleUrls: ['./school-main.component.scss']
})
export class SchoolMainComponent implements OnInit {
  url = "/GetUpcomingEventsBySchool";
  school: ISchool;
  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService) { }

  ngOnInit() {
    this.httpOptionsService.loadHeaders();
    console.log("school ", this.school)
    this.http.get(`${apiUrl}/schools`, this.httpOptionsService.options)
      .subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => {
          console.log(error);
        }
      )
  }
}
