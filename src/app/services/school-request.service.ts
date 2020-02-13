import { ISchoolRequestVM } from '../components/School Requests/SchoolRequest/ISchoolRequestVM';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolRequestService {

  private url: string = "https://localhost:5001/api/SchoolRequestProccesing";
  constructor(private http:HttpClient) { }

  get=():Observable<ISchoolRequestVM[]>=>{
  return this.http.get<ISchoolRequestVM[]>(this.url);
  };

  approve=(id:number):Observable<any>=>{  
  return this.http.post<any>(this.url+"?id="+id,{id:id});
  };
  
  disapprove=(id:number):Observable<any>=>{
  return this.http.delete<any>(this.url+"?id="+id);
  };
}
