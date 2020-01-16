import { AbstractControl, ValidatorFn } from '@angular/forms';

export const requiredValidator = (errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value !== "" && value !== null) {
      return null;
    }
    return { 'required': { errorMsg } };
  };
}