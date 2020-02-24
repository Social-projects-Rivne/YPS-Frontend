import { hostUrl } from './../../../constants/urls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadMasterService  {

  constructor(private client:HttpClient) { }

  url:string=hostUrl+"/api/Headmasters/action"

  check=(link:string):Observable<boolean>=>{
    return this.client.post<boolean>(this.url+"?link="+link,{link:link});
  }
}
