import { Injectable } from '@angular/core';
import { get } from 'js-cookie';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionsService {
  options: object = {};

  constructor() { }

  loadHeaders = () => {
    const token = get("token");
    if (!!token) {
      this.options = {
        ...this.options,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      }
    }
  }
}
