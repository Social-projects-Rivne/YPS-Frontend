import { get } from 'js-cookie';
import { IPupil } from '../../models/IPupil';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptionsService } from '../http-options/http-options.service';
import { IShortInfoPupil } from 'src/app/models/IShortInfoPupil';

@Injectable({
  providedIn: 'root'
})
export class PupilinfoService {
  private url: string = "https://localhost:5001/api/Pupils";

  constructor(private http: HttpClient, private httpOptions: HttpOptionsService) { }

  getPupils = (): Observable<IPupil[]> => {
    this.httpOptions.loadHeaders();
    return this.http.get<IPupil[]>(this.url + "/GetBySchool", this.httpOptions.options);
  }
  getPupilByID = (): Observable<IPupil> => {
    this.httpOptions.loadHeaders();
    return this.http.get<IPupil>(this.url + "/GetPupilById", this.httpOptions.options);
  }
}

