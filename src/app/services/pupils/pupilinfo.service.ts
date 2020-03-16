import { get } from 'js-cookie';
import { IPupil } from '../../models/IPupil';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptionsService } from '../http-options/http-options.service';
import { IPupilToSelect } from 'src/app/models/IPupilToSelect';

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
  getPupilsToSelect = (numb: number): Observable<IPupilToSelect[]> => {
    this.httpOptions.loadHeaders();
    return this.http.get<IPupilToSelect[]>(this.url + "/GetPupilsBySchoolShort" +"?numbOfClass=" + numb , this.httpOptions.options);
  }
}

