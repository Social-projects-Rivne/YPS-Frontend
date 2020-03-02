import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';
import { get } from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: IUser = null;
  public cabinetUrl: string;

  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService ) { }

  getUser = (concreteUrl: string) => {
    this.httpOptionsService.loadHeaders();
    const role = get("role");

    return this.http.get(apiUrl + concreteUrl, this.httpOptionsService.options)
      .subscribe(
        (response: IUser) => {
          this.user = response;
          if (typeof(role) != "undefined")
            this.cabinetUrl = `/${role}`;
        }
      );
  }
}
