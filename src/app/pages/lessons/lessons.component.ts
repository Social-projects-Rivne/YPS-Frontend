import { Component, OnInit } from '@angular/core';
import { ILessonItem } from 'src/app/models/ILessonItem';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';

@Component({
  selector: 'yps-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessons: ILessonItem[];
  constructor(private httpOtionsService: HttpOptionsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons = () => {
    this.httpOtionsService.loadHeaders();

    return this.http.get(apiUrl + "/Lessons/GetTeachersBySchoolId", this.httpOtionsService.options)
      .subscribe(
        (response: ILessonItem[]) => {
          this.lessons = response;
          console.log(response);
        }
      );
  }
}