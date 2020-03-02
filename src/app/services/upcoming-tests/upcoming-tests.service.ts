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
  constructor(private http: HttpClient, private HttpOptions: HttpOptionsService) { }

  private url: string = apiUrl + "/UpcomingTests";

  getByTeacher() : Observable<IUpcomingTest[]>{
    this.HttpOptions.loadHeaders();
    return this.http.get<IUpcomingTest[]>(this.url + "/GetByTeacher", this.HttpOptions.options);
  }
}
