import { IAuditorium } from './../../models/IAuditorium';
import { ITeacherToSelect } from './../../models/ITacherToSelect';
import { ITeacher } from './../../models/ITeacher';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { apiUrl } from 'src/constants/urls';
import { IDisciplineToSelect } from 'src/app/models/IDisciplineToSelect';

@Component({
  selector: 'yps-add-schedule-form',
  templateUrl: './add-schedule-form.component.html',
  styleUrls: ['./add-schedule-form.component.scss', '../../../scss/adding-forms.scss']
})

export class AddScheduleFormComponent implements OnInit {
  formIsOpen = false;
  form: FormGroup;
  teachers: ITeacherToSelect[];
  disciplines: IDisciplineToSelect[];
  numbersOfLessons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  classes: IClassToSelect[];
  auditoriums: IAuditorium[];

  fields: IFormField[] = [
  ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private teacherService: TeacherinfoService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "classId": [null, requiredValidator("class is required")],
      "disciplines": [null],
      "scheduledDate": [null, requiredValidator("scheduled date is required")],
      "numbersOfLessons": [null],
    })

    this.http.get(`${apiUrl}/classes/getbyschool`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IClassToSelect[]) => {
          this.classes = successRes;
        }
      );

    this.http.get(`${apiUrl}/Disciplines/GetAllDisciplines`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IDisciplineToSelect[]) => {
          this.disciplines = successRes;
        }
      );

    this.form.controls.disciplines.valueChanges.subscribe(value => {
      this.http.get(`${apiUrl}/Teachers/GetTeacherByDiscipline/${value}`, this.httpOptionsService.options)
        .subscribe((succesRes: ITeacherToSelect[]) => {
          this.teachers = succesRes;
          this.form.addControl("teachers", new FormControl(null))
        })
    });

    this.form.controls.scheduledDate.valueChanges.subscribe((valueDate: Date) => {
      valueDate.toString();

      const { numbersOfLessons } = this.form.value;
      if (numbersOfLessons != null) {
        this.getAuditoriums(valueDate, numbersOfLessons);
      }
    });

    this.form.controls.numbersOfLessons.valueChanges.subscribe(valueNum => {
      const { scheduledDate } = this.form.value;
      if (scheduledDate != null) {
        this.getAuditoriums(scheduledDate, valueNum);
      }
    });
  }

  getAuditoriums = (valueDate: Date, valueNum: any) => {
    this.http.get(`${apiUrl}/Auditoriums/${valueDate}/${valueNum}`, this.httpOptionsService.options)
      .subscribe((succesRes: IAuditorium[]) => {
        this.auditoriums = succesRes;
        this.form.addControl("auditoriums", new FormControl(null))
      });
  }
  
  toggleForm = () => this.formIsOpen = !this.formIsOpen;

    onSubmit(){
      const { fields, isValid } = validationHelper(this.form.controls, this.fields);
      console.log(this.form.value)
      this.fields = fields;
      console.info(`Lesson form is ${isValid ? 'valid' : 'invalid'}`);

      if (isValid) {

      }
    }
  }
