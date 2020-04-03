import { patternValidator } from './../../../utils/validators/pattern-validator';
import { validationHelper } from './../../../utils/helpers/validation-helper';
import { IAuditorium } from './../../models/IAuditorium';
import { ITeacherToSelect } from './../../models/ITacherToSelect';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { HttpClient } from '@angular/common/http';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
  weekCopyCount: number;

  fields: IFormField[] = [
    {
      id: "timeGapId",
      type: "text",
      label: "time gap",
      placeholder: "enter time gap",
      name: "lessonTimeGap",
      errorMsg: null
    },
    {
      id: "weekCopy",
      type: "text",
      label: "week copy* (not required)",
      placeholder: "copy for 'n' week",
      name: "weekCopyCount",
      errorMsg: null
    }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
  ) { }

  ngOnInit(): void {
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
      "classId": [null, requiredValidator("class is required")],
      "disciplineId": [null, requiredValidator("disciplines is required")],
      "lessonDate": [null, requiredValidator("scheduled date is required")],
      "lessonNumber": [null, requiredValidator("number of lesson is required")],
      "lessonTimeGap": [null, [requiredValidator("time is required"), patternValidator(/^\d\d:\d\d - \d\d:\d\d$/, "must look like 09:00 - 09:45")]],
      "weekCopyCount": [null]
    })

    this.http.get(`${apiUrl}/classes/getbyschool`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IClassToSelect[]) => {
          this.classes = successRes;
        }
      );

    this.http.get(`${apiUrl}/Disciplines/GetAllDisciplinesBySchool`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IDisciplineToSelect[]) => {
          this.disciplines = successRes;
        }
      );

    this.form.controls.disciplineId.valueChanges.subscribe(value => {
      this.http.get(`${apiUrl}/Teachers/GetTeacherByDiscipline/${value}`, this.httpOptionsService.options)
        .subscribe((succesRes: ITeacherToSelect[]) => {
          this.teachers = succesRes;
          this.form.addControl("teacherId", new FormControl(requiredValidator("teacher is required")))
        })
    });

    this.form.controls.lessonDate.valueChanges.subscribe(valueDate => {
      const { lessonNumber } = this.form.value;
      if (lessonNumber != null) {
        this.getAuditoriums(valueDate, lessonNumber);
      }
    });

    this.form.controls.lessonNumber.valueChanges.subscribe(valueNum => {
      const { lessonDate } = this.form.value;
      if (lessonDate != null) {
        this.getAuditoriums(lessonDate, valueNum);
      }
    });
  }

  getAuditoriums = (valueDate: any, valueNum: any) => {
    this.http.get(`${apiUrl}/Auditoriums/${valueDate._d.toDateString()}/${valueNum}`, this.httpOptionsService.options)
      .subscribe((succesRes: IAuditorium[]) => {
        this.auditoriums = succesRes;
        this.form.addControl("auditoriumId", new FormControl(requiredValidator("auditoriums is required")))
      });
  }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;

  onSubmit() {
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);
    this.fields = fields;

    console.info(`Lesson form is ${isValid ? 'valid' : 'invalid'}`);

    if (isValid) {
      let request = {
        ...this.form.value,
        weekCopyCount: parseInt(this.form.value.weekCopyCount, 10)
      }

      console.log(request);

      return this.http.post(apiUrl + "/Lessons", request, this.httpOptionsService.options)
        .subscribe(
          (successRes: any) => {
            this.toggleForm();
            console.log('add lessons with id ', successRes);
          }
        );
    }
  }
}
