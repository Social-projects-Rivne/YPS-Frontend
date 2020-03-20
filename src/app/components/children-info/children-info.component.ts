import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentsService } from 'src/app/services/parents/parents.service';
import { IUser } from 'src/app/models/IUser';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { apiUrl } from 'src/constants/urls';

@Component({
  selector: 'yps-children-info',
  templateUrl: './children-info.component.html',
  styleUrls: ['./children-info.component.scss']
})
export class ChildrenInfoComponent implements OnInit {
  constructor(
    private parentsService: ParentsService,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService
  ) { }

  pupils: IUser[];

  user: IUser[] = null;

  reset = () => {
    this.user = null;
  }

  selectPupil = (id: number) => {
    this.http.get(apiUrl + "/Parents/GetPupilAsParent/" + id, this.httpOptionsService.options)
    .subscribe(
      (successRes: IUser[]) => {
        console.log(this.user = successRes);
      }
    );
  }

  getPupilsDataByParent = () => {
    this.parentsService.getPupilsInfoByParent()
    .subscribe(
      (successRes: IUser[]) => {
        console.log(this.pupils = successRes);
      }
    );
  }

  ngOnInit(): void {
    this.getPupilsDataByParent();
    this.httpOptionsService.loadHeaders();
  }
}
