import { IPupil } from './../models/IPupil';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupilinfoService {
  private url: string = "https://localhost:5001/api/Pupils/GetBySchool/";
  schoolId: string = "1";
  
  constructor(private http: HttpClient) { }

  getPupils=(): Observable<IPupil[]> => {
    return this.http.get<IPupil[]>(this.url+this.schoolId);
  }
}

