import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormBuilder, FormGroup } from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { HttpClient } from '@angular/common/http';
import { set } from 'js-cookie';
import { apiUrl } from 'src/constants/urls';


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
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;

    if (isValid) {
      return this.http.post(apiUrl + "/auth", this.form.value)
        .subscribe(
          (successRes: { token: string }) => {
            set('token', successRes.token);
          },
          (errorRes: any) => {
            this.fields = this.fields.map(field => {
              field.errorMsg = "incorrect email or password";
              return field;
            })
          }
        );
    }
  }
}
