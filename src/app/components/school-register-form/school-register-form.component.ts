import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { HttpClient } from '@angular/common/http';
import {boolRequiredValidator } from 'src/utils/validators/bool-required-validator';
import {Router} from '@angular/router';


@Component({
  selector: 'yps-school-register-form',
  templateUrl: './school-register-form.component.html',
  styleUrls: ['./school-register-form.component.scss']
})
export class SchoolRegisterFormComponent implements OnInit {
  form: FormGroup;
  myRecaptcha = new FormControl(false);
  confErrorMsg: string = null;
  verErrorMsg: string = null;
  showCaptcha = false;
  iterations: number;

  fields: IFormField[] = [
    {
      id: "schoolName-field",
      type: "text",
      label: "schoolName",
      placeholder: "enter school name",
      name: "name",
      errorMsg: null
    },
    {
      id: "shortName-field",
      type: "text",
      label: "shortName",
      placeholder: "enter short name school",
      name: "shortName",
      errorMsg: null
    },
    {
      id: "locality-field",
      type: "text",
      label: "locality",
      placeholder: "enter locality of school",
      name: "locality",
      errorMsg: null
    },
    {
      id: "address-field",
      type: "text",
      label: "address",
      placeholder: "enter address",
      name: "address",
      errorMsg: null
    },
    {
      id: "email-field",
      type: "text",
      label: "email",
      placeholder: "enter your email",
      name: "email",
      errorMsg: null
    },
    {
      id: "phoneNumb-field",
      type: "text",
      label: "phoneNumb",
      placeholder: "enter your phone number",
      name: "phoneNumb",
      errorMsg: null
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ){}

  ngOnInit() {
    this.iterations = 1;
    this.showCaptcha = false;
     this.form = this.formBuilder.group({
      "name": [null, [
        requiredValidator("schoolName is required."),
      ]],
       "shortName": [null, [
        requiredValidator("shortName is required."),
      ]],
       "locality": [null, [
        requiredValidator("locality is required."),
      ]],
       "address": [null, [
        requiredValidator("address is required."),
      ]],
      "email": [null, [
        requiredValidator("email is required."),
        minLengthValidator(7, "email must be at least 7 characters."),
        patternValidator(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "email is invalid."
        )
      ]],
       "phoneNumb": [null, [
        requiredValidator("phoneNumb is required."),
        patternValidator(
          /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/ ,
        "phone number is invalid")
      ]],
       "confirmation": [null ,boolRequiredValidator("You need to confirm the information!!!")],
        "verified": [null, boolRequiredValidator("You must confirm that you have entered correctly!!!")],
        "myRecaptcha": [null]
    });

  }
   onSubmit() {
    // * Validation method which sets error messages to fields if there are any errors.
    // * Takes 2 parameters form controls and an array of fields.
    // * Returns an object which contains new updated fields(you have to set updated fields to this.fields) and an isValid value.
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;

    const confHasError = this.form.controls.confirmation.errors;
    const verHasError = this.form.controls.verified.errors;
    this.confErrorMsg = null;
    this.verErrorMsg = null;
    this.confErrorMsg = !!confHasError ? confHasError.required.errorMsg : null;
    this.verErrorMsg = !!verHasError ? verHasError.required.errorMsg : null;

    if (isValid) {
      if(this.showCaptcha == true && this.iterations > 1 && this.iterations % 2 ==0) {
        this.form.removeControl("myRecaptcha");
        this.showCaptcha = false;
        console.log("captcha remove");
     }
      const url: string = "https://localhost:44372/api/SchoolRequests";
      const url: string = "https://localhost:5001/api/SchoolRequests";
        return this.http.post(url, this.form.value).subscribe(
        (res) =>{
          this.router.navigate(['/']);
        },
        (res) => {
          if(this.iterations == 1 && this.showCaptcha == false )
          {
            this.showCaptcha = true;
            this.form.addControl("myRecaptcha", new FormControl(null));
          }
          if(this.showCaptcha == false && this.iterations > 1 && this.iterations % 2 ==0){
           this.showCaptcha = true;
           this.form.addControl("myRecaptcha", new FormControl(null));
          }
          this.iterations = this.iterations + 1;
          this.fields.find(x => x.name == "email").errorMsg = "Something incorrect";
          this.fields.find(x => x.name == "address").errorMsg = "Something incorrect";
        }
      );
    }
  }
}
