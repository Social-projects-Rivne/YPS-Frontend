import { IParent } from '../../models/IParent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {get} from 'js-cookie';
import { apiUrl } from 'src/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private url: string = apiUrl + "/Parents";
  private profileinfourl: string = apiUrl + "/Parents/GetParentProfileInfo";
  
  constructor(private http:HttpClient) { }

  getParentsInfo=():Observable<IParent[]> =>{
    let token = get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
      })};
      return this.http.get<IParent[]>(this.url,httpOptions);
  }

  getParentProfileInfo=():Observable<IParent> => {
    let token = get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
      })};
      return this.http.get<IParent>(this.profileinfourl,httpOptions)
    }
}
