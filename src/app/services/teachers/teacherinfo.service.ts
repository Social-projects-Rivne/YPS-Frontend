import { ITeacher } from './../../models/ITeachet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
@Injectable({
  providedIn: 'root'
})
export class TeacherinfoService {
  private url: string = apiUrl + "/Teachers";

  constructor(private httpOptions: HttpOptionsService, private http: HttpClient) { }

  getTeachers = (): Observable<ITeacher[]> => {
    this.httpOptions.loadHeaders();
    return this.http.get<ITeacher[]>(this.url + "/GetTeachersBySchoolId", this.httpOptions.options);
  }
  getTeacherByID = (): Observable<ITeacher> => {
    this.httpOptions.loadHeaders();
    return this.http.get<ITeacher>(this.url + "/GetTeacherById", this.httpOptions.options);
  }
}
