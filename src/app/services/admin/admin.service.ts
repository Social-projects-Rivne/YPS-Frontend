import { IUser } from './../../models/IUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptionsService } from '../http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserAdminInfoService {
  constructor(private http: HttpClient, private httpOptions: HttpOptionsService) { }
  
  getUser(): Observable<IUser> {
    this.httpOptions.loadHeaders();
    return this.http.get<IUser>(apiUrl +"/Admin", this.httpOptions.options);
  }
}
