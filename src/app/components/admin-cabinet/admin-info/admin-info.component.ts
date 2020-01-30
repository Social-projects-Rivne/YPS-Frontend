import { Component, OnInit } from '@angular/core';
import { set, get } from 'js-cookie';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'yps-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {
 
  constructor(
    private http: HttpClient
    ) { }

  ngOnInit() {
   
    // const url: string = "https://localhost:44372/api/Admin?Id=";
    // const params = new HttpParams()
    // .set('', this.id)
    

    // var user= this.http.get(url+ this.id);
    // this.name;
    // console.log(user);
  }

}
