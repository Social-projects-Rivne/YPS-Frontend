import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IFormField } from 'src/app/models/IFormField';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { apiUrl } from 'src/constants/urls';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { IClassToSelect } from 'src/app/models/IClassToSelect';
import { IPupilToSelect } from 'src/app/models/IPupilToSelect';
import { get } from 'js-cookie';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';
@Component({
  selector: 'yps-add-parent-form',
  templateUrl: './add-parent-form.component.html',
  styleUrls: ['./add-parent-form.component.scss','../../../scss/adding-forms.scss']
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
  classes: IClassToSelect[];
  pupils: IPupilToSelect[];

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
      "workInfo": [null, requiredValidator("work info is required")],
      "classId": [null]
    });

    this.form.controls.classId.valueChanges.subscribe(value => {
      this.http.get(`${apiUrl}/pupils/getbyclass/${value}`, this.httpOptionsService.options)
      .subscribe((successRes: IPupilToSelect[]) => {
        this.pupils = successRes;
        this.form.addControl("pupilId", new FormControl(null));
      });
    });

    this.http.get(`${apiUrl}/classes/getbyschool`, this.httpOptionsService.options)
      .subscribe((successRes: IClassToSelect[]) => {
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
      return this.http.post(apiUrl + "/parents", this.form.value, this.httpOptionsService.options)
        .subscribe(
          (res: any) => {
            this.toggleForm();
            console.log('add parent response', res);
          }
        );
    }
  }
}
