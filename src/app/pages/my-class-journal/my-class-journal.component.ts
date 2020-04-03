import { Component, OnInit } from '@angular/core';
import { DisciplineService } from '../../services/discipline/discipline.service'
import { apiUrl } from 'src/constants/urls';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IJournalColumnHeader } from '../../models/IJournalColumnHeader'

@Component({
  selector: 'yps-my-class-journal',
  templateUrl: './my-class-journal.component.html',
  styleUrls: ['./my-class-journal.component.scss']
})
export class MyClassJournalComponent implements OnInit {
  journalColumnHeaders: IJournalColumnHeader[];
  form: FormGroup;

  constructor(
    public disciplineService: DisciplineService,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.disciplineService.getByClassTeacher();

    this.form = this.formBuilder.group({
      "disciplineId": [null, requiredValidator("disciplines is required")]
    });

    this.form.controls.disciplineId.valueChanges.subscribe(value => {
      this.http.get(`${apiUrl}/journalcolumn/${this.disciplineService.disciplineResponse.classId}/${value}`, this.httpOptionsService.options)
        .subscribe(
          (succesRes: IJournalColumnHeader[]) => {
            this.journalColumnHeaders = succesRes;
            console.log(this.journalColumnHeaders);
          }
        );
    });
  }
}
