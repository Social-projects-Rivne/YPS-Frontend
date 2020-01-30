import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/AdminView';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private url: string = "https://localhost:44372/api/Admin?Id=";
  id: string= "1";
  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(this.url+ this.id);
   }
}
