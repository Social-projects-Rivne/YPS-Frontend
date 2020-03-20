import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/constants/urls';
import { get } from 'js-cookie';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
import { PupilsService } from 'src/app/services/pupils/pupils.service';

@Component({
  selector: 'yps-add-pupil-form',
  templateUrl: './add-pupil-form.component.html',
  styleUrls: ['./add-pupil-form.component.scss', '../../../scss/adding-forms.scss']
})
export class AddPupilFormComponent implements OnInit {
  form: FormGroup;
  fields: IFormField[] = [];
  formIsOpen: boolean = false;

  @ViewChild('formRef') userSubFormRef: { fields: IFormField[], userSubForm: FormGroup };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private pupilsService : PupilsService
  ) {}

  ngOnInit() {
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
      "user": [null]
    });
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
            this.pupilsService.getPupils();
            console.log('add pupil response', successRes);
          }
        );
    }
  }
}
