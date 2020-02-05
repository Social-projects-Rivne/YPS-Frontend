import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdmin } from '../models/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class UserAdminInfoService {
  private url: string = "https://localhost:5001/api/Admin?Id=";
  id: string= "2";
  constructor(private http: HttpClient) { }

   getUser(): Observable<IAdmin> {
    return this.http.get<IAdmin>(this.url+ this.id);
   }
}
