import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormBuilder, FormGroup } from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { HttpClient } from '@angular/common/http';
import { set, get } from 'js-cookie';


@Component({
  selector: 'yps-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  fields: IFormField[] = [
    {
      id: "email-field",
      type: "text",
      label: "email",
      placeholder: "enter your email",
      name: "email",
      errorMsg: null
    },
    {
      id: "password-field",
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
  ) {}

  ngOnInit() {
    // * Initializing form controls and validation for them.
    // ! Use only your own validation methods.
    this.form = this.formBuilder.group({
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
        minLengthValidator(7, "password must be at least 7 characters.")
      ]],
      "remember": [null]
    });
  }

  onSubmit() {
    // * Validation method which sets error messages to fields if there are any errors.
    // * Takes 2 parameters form controls and an array of fields.
    // * Returns an object which contains new updated fields(you have to set updated fields to this.fields) and an isValid value.
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;

    console.info(`Login form is ${isValid ? 'valid' : 'invalid'}`);
    if (isValid) {
      const url: string = "https://localhost:44372/api/Auth";
      return this.http.post(url, this.form.value).subscribe((res: { token: string }) => {
        console.log("login response", res);
        set('token', res.token);
      });
    }
  }
}
