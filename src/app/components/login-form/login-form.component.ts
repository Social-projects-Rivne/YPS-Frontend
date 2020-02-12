import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormBuilder, FormGroup } from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { HttpClient } from '@angular/common/http';
import { set, get } from 'js-cookie';
import { apiUrl } from 'src/constants/urls';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationExtras, Router } from '@angular/router';


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
    private http: HttpClient,
    private authService: AuthService,
    public router: Router
  ) { }

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
    console.info(`Login form is ${isValid ? 'valid' : 'invalid'}`);
    if (isValid) {
      return this.http.post(apiUrl + "/auth", this.form.value)
        .subscribe(
          (successRes: { token: string }) => {

            set('token', successRes.token);

            this.authService.isLoggedIn = true;
            if (this.authService.isLoggedIn == true) {
              // Get the redirect URL from our auth service
              // If no redirect has been set, use the default
              let token = get('token');
              const json = JSON.parse(token);
              console.log(json['role']);
              switch (json['role']) {
                case 'admin':
                  let redirect = this.authService.redirectUrl ? this.router.parseUrl
                    (this.authService.redirectUrl) : '/admin';

                  // Set our navigation extras object
                  // that passes on our global query params and fragment
                  let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                  };
                  // Redirect the user
                  this.router.navigateByUrl(redirect, navigationExtras);
                  break;

                default:
                  break;
              }
            }
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
