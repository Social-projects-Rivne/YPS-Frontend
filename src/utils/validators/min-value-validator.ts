import { AbstractControl, ValidatorFn } from '@angular/forms';

export const minValueValidator = (minValue: number, errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const { value } = control;
    if (value !== "" && value !== null && value >= minValue) {
      return null;
    }
    return { 'minValue': { errorMsg } };
  };
}