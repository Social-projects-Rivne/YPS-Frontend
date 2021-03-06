import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { get } from 'js-cookie';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { IDisciplineToSelect } from 'src/app/models/IDisciplineToSelect';
import { UpcomingTestsService } from 'src/app/services/upcoming-tests/upcoming-tests.service';

@Component({
  selector: 'yps-add-upcoming-test-form',
  templateUrl: './add-upcoming-test-form.component.html',
  styleUrls: ['./add-upcoming-test-form.component.scss', '../../../scss/adding-forms.scss']
})
export class AddUpcomingTestFormComponent implements OnInit {

  form: FormGroup;
  fields: IFormField[] = [
    {
      id: "topic-field",
      type: "text",
      label: "topic",
      placeholder: "enter topic",
      name: "topic",
      errorMsg: null
    },
    {
      id: "test-type-field",
      type: "text",
      label: "test type",
      placeholder: "enter type",
      name: "testType",
      errorMsg: null
    },
  ];
  disciplines: IDisciplineToSelect[];
  classes: IClassToSelect[];
  formIsOpen: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private upcomingTestsService: UpcomingTestsService
  ) { }

  ngOnInit(): void {
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
      "topic": [null, requiredValidator("topic is required")],
      "testType": [null , requiredValidator("test type is required")],
      "disciplineId": [null , requiredValidator("discipline is required")],
      "classId": [null , requiredValidator("class is required")],
      "scheduledDate": [null, requiredValidator("scheduled date is required")]
    });

    this.http.get(`${apiUrl}/Disciplines/GetDisciplinesByTeacher`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IDisciplineToSelect[]) => {
          this.disciplines = successRes;
        }
      );

    this.http.get(`${apiUrl}/classes/getbyschool`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IClassToSelect[]) => {
          this.classes = successRes;
        }
      );
  }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;

  onSubmit = () => {
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;

    if (isValid) {
      return this.http.post(apiUrl + "/upcomingtests", this.form.value, this.httpOptionsService.options)
        .subscribe(
          (successRes: any) => {
            this.upcomingTestsService.getByTeacher();
            this.toggleForm();
            console.log('add test response', successRes);
          }
        );
    }
  }
}
