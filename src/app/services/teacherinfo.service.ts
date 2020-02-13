import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeacher } from '../models/ITeachet';

@Injectable({
  providedIn: 'root'
})

export class TeacherinfoService {
  private url: string = "https://localhost:5001/api/Teachers/";
  schoolId: string = "1";
  
  constructor(private http: HttpClient) { }

  getTeachers=():Observable<ITeacher[]>=>{
    return this.http.get<ITeacher[]>(this.url+this.schoolId);
  }
}
