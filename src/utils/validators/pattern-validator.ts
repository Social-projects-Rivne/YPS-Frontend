import { AbstractControl, ValidatorFn } from '@angular/forms';

export const patternValidator = (regexp: RegExp, errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }
    return !regexp.test(value) ? { 'pattern': { errorMsg } } : null;
  };
}