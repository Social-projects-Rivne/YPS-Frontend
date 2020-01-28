import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';

@Component({
  selector: 'yps-register-headmaster',
  templateUrl: './register-headmaster.component.html',
  styleUrls: ['./register-headmaster.component.scss']
})
export class RegisterHeadmasterComponent implements OnInit {

  @ViewChild('formRef', { static: false }) userSubFormRef: { fields: IFormField[], userSubForm: FormGroup }; 
  form: FormGroup;
  fields: IFormField[] = [];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      "user-sub-form": [null],
      "select-class": [null]
    });
  
  }

  onSubmit = () => {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
    const subFormValidationResponse = validationHelper(this.userSubFormRef.userSubForm.controls, this.userSubFormRef.fields);
    console.log('this.form.value', this.form.value);
    this.fields = thisFormValidationResponse.fields;
    this.userSubFormRef.fields = subFormValidationResponse.fields;
  }

}
