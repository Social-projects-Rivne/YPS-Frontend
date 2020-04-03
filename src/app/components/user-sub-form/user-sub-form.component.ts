import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';
import { IFormField } from 'src/app/models/IFormField';
import { Subscription } from 'rxjs';
import { requiredValidator } from 'src/utils/validators/required-validator';
import { minLengthValidator } from 'src/utils/validators/min-length-validatot';
import { patternValidator } from 'src/utils/validators/pattern-validator';

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
  startDate = new Date(1990, 0, 1);
  userSubForm: FormGroup;
  subscriptions: Subscription[] = [];
  fields: IFormField[] = [
    {
      id: "user-first-name-field",
      type: "text",
      label: "first name",
      placeholder: "enter user first name",
      name: "firstName",
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
      name: "middleName",
      errorMsg: null
    },
    {
      id: "user-phone-number-field",
      type: "number",
      label: "phone number",
      placeholder: "enter user phone number",
      name: "phoneNumber",
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
      "firstName": [null, requiredValidator("first name is required")],
      "surname": [null, requiredValidator("surname is required")],
      "middleName": [null, requiredValidator("middle name is required")],
      "phoneNumber": [null, [
        requiredValidator("phone number is required"),
        minLengthValidator(7, "phone number must be at least 7 characters."),
        patternValidator(
          /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/ ,
        "invalid phone number, should be similar to 0973456784")
      ]],
      "email": [null, [
        requiredValidator("email is required."),
        minLengthValidator(7, "email must be at least 7 characters."),
        patternValidator(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "invalid email, should be similar to example@email.com."
        )
      ]],
      "dateOfBirthday": [null, requiredValidator("date of birthday is required.")],
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
