import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShortInfoPupil } from 'src/app/models/IShortInfoPupil';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';

@Component({
  selector: 'yps-journal-column',
  templateUrl: './journal-column.component.html',
  styleUrls: ['./journal-column.component.scss']
})
export class JournalColumnComponent implements OnInit {
  id: string;
  classId: string;
  teacherId: string;

  pupils: IShortInfoPupil[];

  constructor(private route: ActivatedRoute, private httpOtionsService: HttpOptionsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.classId = this.route.snapshot.paramMap.get('classId');

    this.getPupils();
  }
  getPupils = () => {
    this.httpOtionsService.loadHeaders();
    this.classId =this.route.snapshot.paramMap.get('classId');
    return this.http.get(apiUrl + `/Pupils/GetByClass/${this.classId}`, this.httpOtionsService.options)
      .subscribe(
        (response: IShortInfoPupil[]) => {
          this.pupils = response;
        }
      );
  }
  onClick() {
    console.log(this.classId + " - ID class ");
  }
}