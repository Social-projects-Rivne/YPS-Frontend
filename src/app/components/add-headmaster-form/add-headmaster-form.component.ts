import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'yps-add-headmaster-form',
  templateUrl: './add-headmaster-form.component.html',
  styleUrls: ['./add-headmaster-form.component.scss']
})
export class AddHeadmasterFormComponent implements OnInit {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  fields: IFormField[] = [
    {
      id: "user-first-name-field",
      type: "text",
      label: "first name",
      placeholder: "enter user first name",
      name: "firstName",
      errorMsg: null
    },
    {
      id: "user-surname-field",
      type: "text",
      label: "surname",
      placeholder: "enter user surname",
      name: "surname",
      errorMsg: null
    },
    {
      id: "user-middle-name-field",
      type: "text",
      label: "middle name",
      placeholder: "enter user middle name",
      name: "middleName",
      errorMsg: null
    },
    {
      id: "user-phone-number-field",
      type: "number",
      label: "phone number",
      placeholder: "enter user phone number",
      name: "phoneNumber",
      errorMsg: null
    },
    {
      id: "user-email-field",
      type: "text",
      label: "email",
      placeholder: "enter user email",
      name: "email",
      errorMsg: null
    },
    {
      id: "user-password-field",
      type: "password",
      label: "password",
      placeholder: "enter your password",
      name: "password",
      errorMsg: null
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      "firstName": [null, requiredValidator("first name is required")],
      "surname": [null, requiredValidator("surname is required")],
      "middleName": [null, requiredValidator("middle name is required")],
      "phoneNumber": [null, requiredValidator("phone number is required")],
      "email": [null, [
        requiredValidator("email is required."),
        minLengthValidator(7, "email must be at least 7 characters."),
        patternValidator(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "email is invalid."
        )
      ]],
      "password": [null, [
        requiredValidator("password is required."),
        minLengthValidator(7, "password must be at least 7 characters.")]],
    });
  }

  onSubmit = () => {
    const { fields, isValid} = validationHelper(this.form.controls, this.fields);
    this.fields = fields;
    
    if (isValid) {
      console.log('this.form.value', this.form.value);
      const url: string = "https://localhost:44372/api/HeadMaster";
        return this.http.post(url, {user: this.form.value}).subscribe((res: any) => {
        console.log("headmaster response", res);
      });
    }
    
  }
}
