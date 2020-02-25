import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../../models/IEvent'
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private HttpOptions: HttpOptionsService) { }

  getUpcomingEventsBySchool() : Observable<IEvent[]>{
    this.HttpOptions.loadHeaders();
    return this.http.get<IEvent[]>(apiUrl + "/UpcomingEvents",this.HttpOptions.options);
  }
}
