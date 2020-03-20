import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
import { ITeacher } from 'src/app/models/ITeacher';
import { ITeacherToSelect } from 'src/app/models/ITacherToSelect';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
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

  getTeachersToSelect = (): Observable<ITeacherToSelect[]> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<ITeacherToSelect[]>(this.url + "/GetTeachersBySchoolShort", this.httpOptionsService.options);
  }
}
