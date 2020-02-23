import { ITeacher } from './../../models/ITeachet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { get } from 'js-cookie';
@Injectable({
  providedIn: 'root'
})

export class TeacherinfoService {
  private url: string = "https://localhost:5001/api/Teachers/";
  constructor(private http: HttpClient) { }

  getTeachers=():Observable<ITeacher[]>=>{
    let token = get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
      })};
    return this.http.get<ITeacher[]>(this.url, httpOptions);
  }
}
