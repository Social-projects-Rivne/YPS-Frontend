import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { get } from 'js-cookie';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { IClassToSelect } from 'src/app/models/IClassToSelect';

@Component({
  selector: 'yps-add-upcoming-event-form',
  templateUrl: './add-upcoming-event-form.component.html',
  styleUrls: ['./add-upcoming-event-form.component.scss', '../../../scss/adding-forms.scss']
})
export class AddUpcomingEventFormComponent implements OnInit {
  form: FormGroup;
  fields: IFormField[] = [
    {
      id: "title-field",
      type: "text",
      label: "title",
      placeholder: "enter title",
      name: "title",
      errorMsg: null
    },
    {
      id: "content-field",
      type: "text",
      label: "content",
      placeholder: "enter content",
      name: "content",
      errorMsg: null
    },
  ];
  classes: IClassToSelect[];
  formIsOpen: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService
  ) { }

  ngOnInit(): void {
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
      "title": [null, requiredValidator("title is required")],
      "content": [null , requiredValidator("content is required")],
      "classId": [null],
      "scheduledDate": [null, requiredValidator("scheduled date is required")]
    });

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
      return this.http.post(apiUrl + "/UpcomingEvents", this.form.value, this.httpOptionsService.options)
        .subscribe(
          (successRes: any) => {
            this.toggleForm();
            console.log('add event response', successRes);
          }
        );
    }
  }
}
