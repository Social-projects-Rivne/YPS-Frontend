import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { IUpcomingTest } from '../../models/IUpcomingTest';

@Injectable({
  providedIn: 'root'
})
export class UpcomingTestsService {
  testsByTeacher: IUpcomingTest[] = [];
  testsByPupil: IUpcomingTest[] = [];

  constructor(
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService
  ) { }

  getByTeacher = () => {
    this.httpOptionsService.loadHeaders();
    return this.http
      .get(`${apiUrl}/upcomingtests/getbyteacher`, this.httpOptionsService.options)
      .subscribe(
        (response: IUpcomingTest[]) => {
          this.testsByTeacher = response;
        }
      );
  }

  getByPupil = () => {
    this.httpOptionsService.loadHeaders();
    return this.http
      .get(`${apiUrl}/upcomingtests/getbypupil`, this.httpOptionsService.options)
      .subscribe(
        (response: IUpcomingTest[]) => {
          this.testsByPupil = response;
        }
      );
  }
}
