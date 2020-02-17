import { Injectable } from '@angular/core';
import { get } from 'js-cookie';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  getHeader(): HttpHeaders {
    let token = get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return httpOptions.headers;
  }
}
