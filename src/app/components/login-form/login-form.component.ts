import { apiUrl } from "src/constants/urls";
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { HttpClient } from '@angular/common/http';
import { set, get } from 'js-cookie';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: "yps-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  iterations: number;
  showCaptcha: boolean = false;
  myRecaptcha = new FormControl(false);

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
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.iterations = 1;
    this.showCaptcha = false;
    this.form = this.formBuilder.group({
      "email": [null, [
        requiredValidator("email is required."),
        minLengthValidator(7, "email must be at least 7 characters."),
        patternValidator(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "invalid email, should be similar to example@email.com."
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
      if (this.showCaptcha == true && this.iterations > 3 && this.iterations % 2 == 0) {
        this.form.removeControl("myRecaptcha");
        this.showCaptcha = false;
      }
      return this.http.post(apiUrl + "/auth", this.form.value).subscribe(
        (successRes: { token: string; refreshToken: string; role: string }) => {
          set("token", successRes.token);
          set("role", successRes.role);
          set("refreshToken", successRes.refreshToken);

          const { role } = successRes;

          this.router.navigate([`/${role}`]);
        },
        (errorRes: any) => {
          if (this.iterations == 3 && this.showCaptcha == false) {
            this.showCaptcha = true;
            this.form.addControl("myRecaptcha", new FormControl(null));
          }
          if (this.showCaptcha == false && this.iterations > 3 && this.iterations % 2 == 0) {
            this.showCaptcha = true;
            this.form.addControl("myRecaptcha", new FormControl(null));
          }
          this.iterations = this.iterations + 1;
          this.fields = this.fields.map(field => {
            field.errorMsg = "incorrect email or password";
            return field;
          });
        }
      );
    }
  }
}
