import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';
import { ITeacherToSelect } from './../../models/ITacherToSelect';
import { maxLengthValidator } from './../../../utils/validators/max-length-validator';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { apiUrl } from 'src/constants/urls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yps-add-class-form',
  templateUrl: './add-class-form.component.html',
  styleUrls: ['./add-class-form.component.scss', '../../../scss/adding-forms.scss']
})
export class AddClassFormComponent implements OnInit {
  form:FormGroup;
  formIsOpen: boolean = false;
  teachers: ITeacherToSelect[];
  
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

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private teacherService: TeacherinfoService) { }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;

  getTeachersToSelectData = () => {
    this.teacherService.getTeachersToSelect().subscribe(data => this.teachers = data)
  }

  onSubmit = () => {
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;
    console.info(`Login form is ${isValid ? 'valid' : 'invalid'}`);
    if(isValid){
      //request
    }
  }

  ngOnInit(): void {
    this.getTeachersToSelectData();

    this.form=this.formBuilder.group({
        "character":[null, [requiredValidator("character is required"), maxLengthValidator(3, "character must be less than 4")]],
        "number":[null, [requiredValidator("number is required"), maxLengthValidator(3, "max value is 999")]],
        "teacherId": [null, [requiredValidator("teacher is required")]]
      }) 
  }
}
