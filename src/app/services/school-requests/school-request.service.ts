import { hostUrl } from './../../../constants/urls';
import { ISchoolRequestVM } from '../../components/School Requests/SchoolRequest/ISchoolRequestVM';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { HttpOptionsService } from '../http-options/http-options.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolRequestService {

  private url: string = hostUrl+"/api/SchoolRequestProccesing";
  constructor(private http:HttpClient,private httpOptions:HttpOptionsService) { }

  get=():Observable<ISchoolRequestVM[]>=>{
  this.httpOptions.loadHeaders();
  return this.http.get<ISchoolRequestVM[]>(this.url,this.httpOptions.options);
  };

  approve=(id:number):Observable<any>=>{  
  this.httpOptions.loadHeaders();
  return this.http.post<any>(this.url,{id:id},this.httpOptions.options);
  };
  
  disapprove=(id:number):Observable<any>=>{
  this.httpOptions.loadHeaders();
  return this.http.delete<any>(this.url+"?id="+id,this.httpOptions.options);
  };
}
