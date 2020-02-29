import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: IUser = null;

  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService ) { }

  getUser = (concreteUrl: string) => {
    this.httpOptionsService.loadHeaders();
    return this.http.get(apiUrl + concreteUrl, this.httpOptionsService.options)
      .subscribe(
        (response: IUser) => {
          this.user = response;
        }
      );
  }
}
