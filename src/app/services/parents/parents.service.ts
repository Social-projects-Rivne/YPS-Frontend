import { IParent } from '../../models/IParent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
import { IUser } from 'src/app/models/IUser';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  private url: string = apiUrl + "/Parents";

  public parents: IParent[];

  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService) { }

  getParents = () => {
    return this.http.get(this.url, this.httpOptionsService.options)
      .subscribe(
        (res: IParent[]) => {
          this.parents = res;
        }
      );
  }

  getPupilsByParent = (): Observable<IUser[]> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<IUser[]>(this.url + "/GetPupilsInfoByParent", this.httpOptionsService.options)
  }
}
