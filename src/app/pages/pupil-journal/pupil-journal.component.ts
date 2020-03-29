import { Component, OnInit } from '@angular/core';
import { IDisciplineToSelect } from 'src/app/models/IDisciplineToSelect';
import { apiUrl } from 'src/constants/urls';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IJournalColumn } from 'src/app/models/IJournalColumn';

@Component({
  selector: 'yps-pupil-journal',
  templateUrl: './pupil-journal.component.html',
  styleUrls: ['./pupil-journal.component.scss']
})
export class PupilJournalComponent implements OnInit {
  journalColumns: IJournalColumn[];
  disciplines: IDisciplineToSelect[];
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "disciplineId": [null, requiredValidator("disciplines is required")]
    })

    this.http.get(`${apiUrl}/Disciplines/GetAllDisciplines`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IDisciplineToSelect[]) => {
          this.disciplines = successRes;
          console.log(this.disciplines);
        }
      );

    this.form.controls.disciplineId.valueChanges.subscribe(value => {
      this.http.get(`${apiUrl}/Marks/${value}`, this.httpOptionsService.options)
        .subscribe(
          (succesRes: IJournalColumn[]) => {
            this.journalColumns = succesRes;
            console.log(this.journalColumns);
          }
        );
    });
  }
}
