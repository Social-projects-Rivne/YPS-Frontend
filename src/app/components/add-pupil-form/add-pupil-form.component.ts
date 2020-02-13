import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { async } from '@angular/core/testing';

@Component({
  selector: 'yps-add-pupil-form',
  templateUrl: './add-pupil-form.component.html',
  styleUrls: ['./add-pupil-form.component.scss', '../../../scss/adding-forms.scss']
})
export class AddPupilFormComponent implements OnInit {
  form: FormGroup;
  fields: IFormField[] = [];
  classes: IClassToSelect[];
  formIsOpen: boolean = false;

  @ViewChild('formRef', { static: false }) userSubFormRef: { fields: IFormField[], userSubForm: FormGroup };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      "user": [null],
      "classId": [null]
    });

    this.http.get(`${apiUrl}/classes/getbyschool/1`)
      .subscribe((successRes: IClassToSelect[]) => {
        console.log("get classes", successRes);
        this.classes = successRes;
      });
  }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;
  
  onSubmit = () => {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
    const subFormValidationResponse = validationHelper(this.userSubFormRef.userSubForm.controls, this.userSubFormRef.fields);
    
    this.fields = thisFormValidationResponse.fields;
    this.userSubFormRef.fields = subFormValidationResponse.fields;

    if (thisFormValidationResponse.isValid && subFormValidationResponse.isValid) {
      console.log(this.form.value);
      return this.http.post(apiUrl + "/pupils", this.form.value)
        .subscribe(
          (successRes: any) => {
            console.log('add pupil response', successRes);
          }
        );
    }
  }
}
