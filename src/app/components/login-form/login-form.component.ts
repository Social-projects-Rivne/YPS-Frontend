import { Component, OnInit } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'yps-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  fields: IFormField[] = [
    {
      id: "email-field",
      type: "text",
      label: "email",
      placeholder: "enter your email",
      name: "email"
    },
    {
      id: "password-field",
      type: "password",
      label: "password",
      placeholder: "enter your password",
      name: "password"
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      "email": [null, Validators.required],
      "password": [null, Validators.required],
      "remember": [null]
    });
  }

  onSubmit(value: any) {
   console.table(value)
  }

}
