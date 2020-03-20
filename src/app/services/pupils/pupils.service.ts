import { get } from 'js-cookie';
import { IPupil } from '../../models/IPupil';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';
import { IPupilToSelect } from 'src/app/models/IPupilToSelect';
import { apiUrl } from 'src/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {
  pupils: IPupil[] = [];
  private url: string = "https://localhost:5001/api/Pupils";

  constructor(
    private http: HttpClient, 
    private httpOptionsService: HttpOptionsService
    ) { }

  getPupils = () => {
    this.httpOptionsService.loadHeaders();
    return this.http
      .get(`${apiUrl}/Pupils/GetBySchool`, this.httpOptionsService.options)
      .subscribe(
        (response: IPupil[]) => {
          this.pupils = response;
        }
     );
  }

  getPupilByID = (): Observable<IPupil> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<IPupil>(this.url + "/GetPupilById", this.httpOptionsService.options);
  }
  getPupilsToSelect = (numb: number): Observable<IPupilToSelect[]> => {
    this.httpOptionsService.loadHeaders();
    return this.http.get<IPupilToSelect[]>(this.url + "/GetPupilsBySchoolShort" + "?numbOfClass=" + numb, this.httpOptionsService.options);
  }
}

