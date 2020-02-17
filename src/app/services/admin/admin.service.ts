import { IAdmin } from './../../models/IAdmin';
import { HelperService } from './../helper/helper.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { get } from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class UserAdminInfoService {
  private url: string = "https://localhost:5001/api/Admin";

  constructor(private http: HttpClient, private header: HelperService) { }
  getUser(): Observable<IAdmin> {
    let token = get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<IAdmin>(this.url, httpOptions);
  }
}
