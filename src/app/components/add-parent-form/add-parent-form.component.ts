import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IFormField } from 'src/app/models/IFormField';
import { HttpClient } from '@angular/common/http';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { apiUrl } from 'src/constants/urls';
import { requiredValidator } from 'src/utils/validators/required-validator';

@Component({
  selector: 'yps-add-parent-form',
  templateUrl: './add-parent-form.component.html',
  styleUrls: ['./add-parent-form.component.scss']
})
export class AddParentFormComponent implements OnInit {
  form: FormGroup;
  fields: IFormField[] = [
    {
      id: "work-info-field",
      type: "text",
      label: "work info",
      placeholder: "enter user work information",
      name: "workInfo",
      errorMsg: null
    }
  ];
  formIsOpen: boolean = false;
  @ViewChild('formRef', { static: false }) userSubFormRef: { fields: IFormField[], userSubForm: FormGroup }; 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      "user": [null],
      "workInfo": [null, requiredValidator("work info is required")],
      "classId": [null]
    });
    // TODO: do something
    this.form.controls.classId.valueChanges.subscribe(value => {
      this.form.addControl("childId", new FormControl(null));
    });
  }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;
  
  onSubmit = () => {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
    const subFormValidationResponse = validationHelper(this.userSubFormRef.userSubForm.controls, this.userSubFormRef.fields);
    
    this.fields = thisFormValidationResponse.fields;
    this.userSubFormRef.fields = subFormValidationResponse.fields;

    if (thisFormValidationResponse.isValid && subFormValidationResponse.isValid) {
      return this.http.post(apiUrl + "/parents", this.form.value).subscribe((res: any) => {
        console.log('add parent response', res);
      });
    }
  }
}
