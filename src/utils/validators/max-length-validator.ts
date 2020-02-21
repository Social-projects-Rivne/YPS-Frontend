import { AbstractControl, ValidatorFn } from '@angular/forms';

export const maxLengthValidator = (maxLength: number, errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const { value } = control;
    if (value !== "" && value !== null && value.length <= maxLength) {
      return null;
    }
    return { 'maxLength': { errorMsg } };
  };
}