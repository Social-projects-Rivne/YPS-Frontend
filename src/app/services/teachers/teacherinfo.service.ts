import { ITeacherToSelect } from './../../models/ITacherToSelect';
import { ITeacher } from './../../models/ITeacher';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
import { IUser } from 'src/app/models/IUser';
@Injectable({
  providedIn: 'root'
})
export class TeacherinfoService {
  private url: string = apiUrl + "/Teachers";

  constructor(private httpOptions: HttpOptionsService, private http: HttpClient) { }

  getTeachers = (): Observable<IUser[]> => {
    this.httpOptions.loadHeaders();
    return this.http.get<IUser[]>(this.url + "/GetTeachersBySchoolId", this.httpOptions.options);
  }
  getTeacherByID = (): Observable<IUser> => {
    this.httpOptions.loadHeaders();
    return this.http.get<IUser>(this.url + "/GetTeacherById", this.httpOptions.options);
  }

  getTeachersToSelect = (): Observable<ITeacherToSelect[]>=>{
    this.httpOptions.loadHeaders();
    return this.http.get<ITeacherToSelect[]>(this.url + "/GetTeachersBySchoolShort", this.httpOptions.options);
  }
}
