import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';
import { IFormField } from 'src/app/models/IFormField';
import { Subscription } from 'rxjs';
import { requiredValidator } from 'src/utils/validators/required-validator';

@Component({
  selector: 'yps-user-sub-form',
  templateUrl: './user-sub-form.component.html',
  styleUrls: ['./user-sub-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserSubFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserSubFormComponent),
      multi: true
    }
  ]
})
export class UserSubFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  userSubForm: FormGroup;
  subscriptions: Subscription[] = [];
  fields: IFormField[] = [
    {
      id: "user-first-name-field",
      type: "text",
      label: "first name",
      placeholder: "enter user first name",
      name: "first-name",
      errorMsg: null
    },
    {
      id: "user-surname-field",
      type: "text",
      label: "surname",
      placeholder: "enter user surname",
      name: "surname",
      errorMsg: null
    },
    {
      id: "user-middle-name-field",
      type: "text",
      label: "middle name",
      placeholder: "enter user middle name",
      name: "middle-name",
      errorMsg: null
    },
    {
      id: "user-phone-number-field",
      type: "number",
      label: "phone number",
      placeholder: "enter user phone number",
      name: "phone-number",
      errorMsg: null
    },
    {
      id: "user-email-field",
      type: "text",
      label: "email",
      placeholder: "enter user email",
      name: "email",
      errorMsg: null
    }
  ] 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userSubForm = this.formBuilder.group({
      "first-name": [null, requiredValidator("first name is required")],
      "surname": [null, requiredValidator("surname is required")],
      "middle-name": [null, requiredValidator("middle name is required")],
      "phone-number": [null, requiredValidator("phone number is required")],
      "email": [null, requiredValidator("email is required")],
    });

    this.subscriptions.push(
      this.userSubForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any = (value: any) => {
    console.log('onChange');
  };
  onTouched: any = () => {};
  
  validate(_: FormControl) {}
}
