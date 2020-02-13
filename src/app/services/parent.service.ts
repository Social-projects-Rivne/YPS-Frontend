import { IParent } from './../models/IParent';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private url: string = "https://localhost:5001/api/Parents";
  constructor(private http:HttpClient) { }

  get=(id:Number):Observable<IParent[]> =>{
      return this.http.get<IParent[]>(this.url+"?id="+id);
  }
}
