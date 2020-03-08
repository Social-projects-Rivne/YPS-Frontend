import { apiUrl } from 'src/constants/urls';
import { ISchoolRequestVM } from '../../components/School Requests/SchoolRequest/ISchoolRequestVM';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolRequestsService {

  private url: string = apiUrl + "/SchoolRequests";
  constructor(private http:HttpClient, private httpOptions:HttpOptionsService) { }
  requests:ISchoolRequestVM[];

  get = () => {
    this.httpOptions.loadHeaders();
    return this.http.get(this.url,this.httpOptions.options).subscribe( (res: ISchoolRequestVM[]) => {
      this.requests=res;
    } );
  };

  approve = (id:number) => {
    this.httpOptions.loadHeaders();
    return this.http.post(this.url+"/Approve",{id:id},this.httpOptions.options).subscribe((res) => {this.get()});
  };

  disapprove = (id:number) => {
    this.httpOptions.loadHeaders();
    return this.http.delete(this.url+"?id="+id,this.httpOptions.options).subscribe((res) => {this.get()});
  };
}
