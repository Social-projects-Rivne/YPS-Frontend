import { Component, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { IFormField } from 'src/app/models/IFormField';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'yps-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true
    }
  ]
})
export class FormFieldComponent implements ControlValueAccessor {

  @Input() field: IFormField;

  constructor() { }
  
  // * Implementation of the ControlValueAccesor Interface.
  // ! You can ignore it.
  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // ! Also can ignore, just regular methods for the implementation above
  onChange: any = () => {};
  onTouched: any = () => {};
}
