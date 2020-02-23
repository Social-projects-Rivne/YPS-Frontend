import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegisterHeadMasterLink } from 'src/app/models/IRegisterHeadMasterLink';

@Injectable({
  providedIn: 'root'
})
export class HeadMasterService  {

  constructor(private client:HttpClient) { }

  url:string="https:localhost:5001/api/Headmasters/action"

  check=(link:string):Observable<IRegisterHeadMasterLink>=>{
    return this.client.post<IRegisterHeadMasterLink>(this.url+"?link="+link,{link:link});
  }
}
