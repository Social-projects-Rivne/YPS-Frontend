import { maxLengthValidator } from './../../../utils/validators/max-length-validator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
//
import { PupilinfoService } from '../../services/pupils/pupilinfo.service';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';

@Component({
  selector: 'yps-add-class-form',
  templateUrl: './add-class-form.component.html',
  styleUrls: ['./add-class-form.component.scss', '../../../scss/adding-forms.scss']
})
export class AddClassFormComponent implements OnInit {
  form:FormGroup;
  formIsOpen: boolean = false;

  fields: IFormField[] = [
    {
      id: "character-field",
      type: "text",
      label: "character",
      placeholder: "enter character of the class",
      name: "character",
      errorMsg: null
    },
    {
      id: "number-field",
      type: "number",
      label: "number",
      placeholder: "enter number of the class",
      name: "number",
      errorMsg: null
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
        "character":[null, [requiredValidator("character is required"), maxLengthValidator(3, "character must be less than 4")]],
        "number":[null, [requiredValidator("number is required"), maxLengthValidator(3, "max value is 999")]]
      }) //create validation
  }

  onSubmit = () => {
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;
    console.info(`Login form is ${isValid ? 'valid' : 'invalid'}`);
    if(isValid){
      //request
    }
  }

}
