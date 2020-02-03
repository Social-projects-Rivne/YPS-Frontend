import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISchoolRequestVM } from '../components/admin-cabinet/School Requests/SchoolRequest/ISchoolRequestVM';
@Injectable({
  providedIn: 'root'
})
export class SchoolRequestService {

  private url: string = "https://localhost:44372/api/SchoolRequest";
  constructor(private http:HttpClient) { }

  get=():Observable<ISchoolRequestVM[]>=>{
  return this.http.get<ISchoolRequestVM[]>(this.url);
  }



}
