import { patternValidator } from 'src/utils/validators/pattern-validator';
import { maxLengthValidator } from './../../../utils/validators/max-length-validator';
import { TeacherinfoService } from 'src/app/services/teachers/teacherinfo.service';
import { ITeacherToSelect } from './../../models/ITacherToSelect';
import { maxValueValidator } from './../../../utils/validators/max-value-validator';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { validationHelper } from 'src/utils/helpers/validation-helper';
import { apiUrl } from 'src/constants/urls';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from 'src/app/services/http-options/http-options.service';

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
      id: "number-field",
      type: "number",
      label: "number",
      placeholder: "enter number of the class",
      name: "number",
      errorMsg: null
    },
    {
      id: "character-field",
      type: "text",
      label: "character",
      placeholder: "enter character of the class",
      name: "character",
      errorMsg: null
    }
  ];

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private teacherService: TeacherinfoService, private httpOptionsService: HttpOptionsService) { }

  toggleForm = () => this.formIsOpen = !this.formIsOpen;

  getTeachersToSelectData = () => {
    this.teacherService.getTeachersToSelect().subscribe(data => this.teachers = data)
  }

  onSubmit = () => {
    const { fields, isValid } = validationHelper(this.form.controls, this.fields);

    this.fields = fields;
    console.info(`Login form is ${isValid ? 'valid' : 'invalid'}`);

    if(isValid){
      console.log("value", this.form.value);
      let request = {
        ...this.form.value,
        number: parseInt(this.form.value.number, 10)
      }
      return this.http.post(apiUrl + "/Classes", request, this.httpOptionsService.options)
        .subscribe(
          (successRes: any) => {
            this.toggleForm();
            console.log('add classes response', successRes);
          }
        );
    }
  }

  ngOnInit(): void {
    this.getTeachersToSelectData();
    this.httpOptionsService.loadHeaders();

    this.form = this.formBuilder.group({
        "character":[null, [requiredValidator("character is required"), maxLengthValidator(1,"character must be 1 symbol"), patternValidator(/[A-Za-zÀ-ÿ]/,"must be single character")]],
        "number":[null, [requiredValidator("number is required"), maxValueValidator(12, "max value is 12")]],
        "classTeacherId": [null, [requiredValidator("teacher is required")]]
      }) 
  }
}
