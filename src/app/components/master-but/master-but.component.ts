import { requiredValidator } from 'src/utils/validators/required-validator';
import { IFormField } from 'src/app/models/IFormField';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yps-master-but',
  templateUrl: './master-but.component.html',
  styleUrls: ['./master-but.component.scss']
})
export class MasterButComponent implements OnInit {

  form: FormGroup;
  
  fields: IFormField[] = [
    {
      id: "fname-field",
      type: "text",
      label: "first name",
      placeholder: "enter first name",
      name: "first-name",
      errorMsg: null
    },
    {
      id: "sname-field",
      type: "text",
      label: "second name",
      placeholder: "enter second name",
      name: "second-name",
      errorMsg: null
    },
    {
      id: "mname-field",
      type: "text",
      label: "middle name",
      placeholder: "enter middle name",
      name: "middle-name",
      errorMsg: null
    },
    {
      id:"phone",
      type:"number",
      label:"phone number",
      placeholder:"enter phone number",
      name:"phone",
      errorMsg:null
    },
    {
      id:"email",
      type:"string",
      label:"email",
      placeholder:"enter email",
      name:"email",
      errorMsg:null
    }
  ];
  constructor(private formBuilder: FormBuilder) {}
 

  ngOnInit() {
    this.form = this.formBuilder.group({
      "first-name": [null,[requiredValidator("Input first name")]],
      "second-name": [null],
      "middle-name": [null],
      "phone":[null],
      "email":[null]
    });
  }
  onSubmit = () => {
    console.info(this.form.value);
  }
  Roles:string[]=["Master","Teacher","Pupil","Parent","Head assistant"];

}
