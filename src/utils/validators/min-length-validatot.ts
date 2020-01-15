import { AbstractControl, ValidatorFn } from '@angular/forms';

export const minLengthValidator = (minLength: number, errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const { value } = control;
    if (value !== "" && value !== null && value.length >= minLength) {
      return null;
    }
    return { 'minLength': { errorMsg } };
  };
}