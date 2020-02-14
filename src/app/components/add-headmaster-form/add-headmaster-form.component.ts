import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { patternValidator } from 'src/utils/validators/pattern-validator';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

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
      id: "user-password-field",
      type: "password",
      label: "password",
      placeholder: "enter your password",
      name: "password",
      errorMsg: null
    }
  ];
  @ViewChild('formRef', { static: false }) userSubFormRef: { fields: IFormField[], userSubForm: FormGroup };
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      "user": [null],
      "password": [null, [
        requiredValidator("password is required."),
        minLengthValidator(7, "password must be at least 7 characters.")]],
    });
  }

  onSubmit = () => {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
    const subFormValidationResponse = validationHelper(this.userSubFormRef.userSubForm.controls, this.userSubFormRef.fields);
    
    this.fields = thisFormValidationResponse.fields;
    this.userSubFormRef.fields = subFormValidationResponse.fields;
    
    if (thisFormValidationResponse.isValid && subFormValidationResponse.isValid) {
      const url: string = "https://localhost:5001/api/HeadMasters";
        return this.http.post(url, this.form.value).subscribe(
        (res) => {
          this.router.navigate(['/register-headmaster-response']);
        },
        (res: any) => {
        console.log("headmaster response", res);
      });
    }
  }
}
