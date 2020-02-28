import { IParent } from '../../models/IParent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
import { IPupil } from 'src/app/models/IPupil';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private url: string = apiUrl + "/Parents";
  
  constructor(private http:HttpClient, private httpOptionsService: HttpOptionsService) { }

  getParentsInfo = () : Observable<IParent[]> =>{
    return this.http.get<IParent[]>(this.url, this.httpOptionsService.options);
  }

  getParentProfileInfo = () :Observable<IParent> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<IParent>(this.url + "/GetParentProfileInfo", this.httpOptionsService.options)
  }

  getPupilsInfoByParent = () :Observable<IPupil[]> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<IPupil[]>(this.url + "/GetPupilsInfoByParent", this.httpOptionsService.options)
  }
}
