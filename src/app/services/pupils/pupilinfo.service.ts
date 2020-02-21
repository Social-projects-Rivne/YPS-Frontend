import { get } from 'js-cookie';
import { IPupil } from '../../models/IPupil';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupilinfoService {
<<<<<<< HEAD
  private url: string = "https://localhost:5001/api/Pupils/GetBySchool";
  
=======
  private url: string = "https://localhost:5001/api/Pupils/GetBySchool/";
  schoolId: string = "1";

>>>>>>> dev
  constructor(private http: HttpClient) { }

  getPupils=(): Observable<IPupil[]> => {

    let token = get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    
    return this.http.get<IPupil[]>(this.url,httpOptions);
  }
}

