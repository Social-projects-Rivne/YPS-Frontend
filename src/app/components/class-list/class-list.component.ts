import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';
import { IClass } from 'src/app/models/IClass';

@Component({
  selector: 'yps-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  classes: IClass[];

  constructor(
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService
  ) { }

  ngOnInit(): void {
    this.httpOptionsService.loadHeaders();
    this.getClasses();
  }

  getClasses = () => {
    this.http.get(apiUrl + "/classes/GetBySchoolWithFullInfo", this.httpOptionsService.options)
      .subscribe(
        (successRes: IClass[]) => {
          this.classes = successRes;
        }
      );
  }
}