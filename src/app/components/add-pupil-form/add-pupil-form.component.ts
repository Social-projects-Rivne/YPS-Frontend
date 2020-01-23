import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yps-add-pupil-form',
  templateUrl: './add-pupil-form.component.html',
  styleUrls: ['./add-pupil-form.component.scss']
})
export class AddPupilFormComponent implements OnInit {

  form: FormGroup;
  
  fields: IFormField[] = [
    // {
    //   id: "fname-field",
    //   type: "text",
    //   label: "first name",
    //   placeholder: "enter first name",
    //   name: "first-name",
    //   errorMsg: null
    // },
    // {
    //   id: "sname-field",
    //   type: "text",
    //   label: "second name",
    //   placeholder: "enter second name",
    //   name: "second-name",
    //   errorMsg: null
    // },
    // {
    //   id: "mname-field",
    //   type: "text",
    //   label: "middle name",
    //   placeholder: "enter middle name",
    //   name: "middle-name",
    //   errorMsg: null
    // },
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
      // "first-name": [null,[requiredValidator("Input first name")]],
      // "second-name": [null],
      // "middle-name": [null],
      "phone":[null],
      "email":[null],
      "user-sub-form": [null]
    });
  }
  onSubmit = () => {
    console.info(this.form.value);
  }
}
