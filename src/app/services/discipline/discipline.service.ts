import { Injectable } from '@angular/core';
import { apiUrl } from 'src/constants/urls';
import { HttpOptionsService } from '../http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { IDisciplineResponse } from '../../models/IDisciplineResponse'

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  disciplineResponse: IDisciplineResponse;

  constructor(
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService
    ){ }

  getByClassTeacher = () =>{
    return this.http
      .get(`${apiUrl}/disciplines/GetByClass`, this.httpOptionsService.options)
      .subscribe(
        (response: IDisciplineResponse) => {
          this.disciplineResponse = response;
        }
      );
  }
}
