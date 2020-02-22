import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { get } from 'js-cookie';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';

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
      "classId": [null]
    });

    this.http.get(`${apiUrl}/classes/getbyschool`, this.httpOptionsService.options)
      .subscribe(
        (successRes: IClassToSelect[]) => {
          this.classes = successRes;
        }
      );
  }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;
  
  onSubmit = () => {
    const thisFormValidationResponse = validationHelper(this.form.controls, this.fields);
    const subFormValidationResponse = validationHelper(this.userSubFormRef.userSubForm.controls, this.userSubFormRef.fields);
    
    this.fields = thisFormValidationResponse.fields;
    this.userSubFormRef.fields = subFormValidationResponse.fields;

    if (thisFormValidationResponse.isValid && subFormValidationResponse.isValid) {
      return this.http.post(apiUrl + "/pupils", this.form.value, this.httpOptionsService.options)
        .subscribe(
          (successRes: any) => {
            this.toggleForm();
            console.log('add pupil response', successRes);
          }
        );
    }
  }
}
