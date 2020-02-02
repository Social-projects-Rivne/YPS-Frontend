import { AbstractControl, ValidatorFn } from '@angular/forms';

export const boolRequiredValidator = (errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value !== false && value !== null) {
      return null;
    }
    return { 'required': { errorMsg } };
  };
}