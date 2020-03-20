import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormField } from 'src/app/models/IFormField';
import { apiUrl } from 'src/constants/urls';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';

@Component({
  selector: 'yps-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.scss','../../../scss/adding-forms.scss']
})
export class AddTeacherFormComponent implements OnInit {
  form: FormGroup;
  fields: IFormField[] = [
    {
      id: "degree-field",
      type: "text",
      label: "degree",
      placeholder: "enter degree",
      name: "degree",
      errorMsg: null
    }
  ];
  formIsOpen: boolean = false;
  @ViewChild('formRef') userSubFormRef: { fields: IFormField[], userSubForm: FormGroup };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService
  ) {}

  ngOnInit() {
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
      "user": [null],
      "degree": [null, requiredValidator("degree is required")]
    });
  }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;

  onSubmit = () => {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
    const subFormValidationResponse = validationHelper(this.userSubFormRef.userSubForm.controls, this.userSubFormRef.fields);
    this.fields = thisFormValidationResponse.fields;
    this.userSubFormRef.fields = subFormValidationResponse.fields;

    if (thisFormValidationResponse.isValid && subFormValidationResponse.isValid) {
      return this.http.post(apiUrl + "/teachers", this.form.value, this.httpOptionsService.options)
      .subscribe(
        (successRes: any) => {
          this.toggleForm();
          console.log('add teacher response', successRes);
        }
      );
    }
  }
}
