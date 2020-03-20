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
  Teachers: ITeacher[] = [];

  constructor(
    private httpOptionsService: HttpOptionsService,
    private http: HttpClient
  ) { }

  getTeachers = () => {
    this.httpOptionsService.loadHeaders();
    return this.http
      .get(`${this.url}/GetTeachersBySchoolId`, this.httpOptionsService.options)
      .subscribe(
        (response: ITeacher[]) => {
          this.Teachers = response;
        }
      );
  }

  getTeacherByID = (): Observable<IUser> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<IUser>(this.url + "/GetTeacherById", this.httpOptionsService.options);
  }

  getTeachersToSelect = (): Observable<ITeacherToSelect[]> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<ITeacherToSelect[]>(this.url + "/GetTeachersBySchoolShort", this.httpOptionsService.options);
  }
}
