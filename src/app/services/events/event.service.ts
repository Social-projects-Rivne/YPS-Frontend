import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../../models/IEvent'
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getUpcomingEventsBySchool() : Observable<IEvent[]>{
    return this.http.get<IEvent[]>(apiUrl + "/Pupils/GetBySchool");
  }
}
