import { Component, OnInit } from '@angular/core';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { ILessonDay } from 'src/app/models/ILessonDay';

@Component({
  selector: 'yps-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  days: ILessonDay[];
  constructor(private httpOtionsService: HttpOptionsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons = () => {
    this.httpOtionsService.loadHeaders();

    return this.http.get(apiUrl + "/Lessons/GetLessonsByTeacherId", this.httpOtionsService.options)
      .subscribe(
        (response: ILessonDay[]) => {
          this.days = response;
        }
      );
  }
}