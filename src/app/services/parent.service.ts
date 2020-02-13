import { IParent } from './../models/IParent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {get} from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private url: string = "https://localhost:5001/api/Parents";
  constructor(private http:HttpClient) { }

  get=():Observable<IParent[]> =>{
    let token=get('token');
    const json=JSON.parse(token);
    const httpOptions={
      headers:new HttpHeaders({
        'ContentType': 'application/json',
        'Authorization': 'Bearer'+json['token']
      })
    }
      return this.http.get<IParent[]>(this.url,httpOptions);
  }
}
