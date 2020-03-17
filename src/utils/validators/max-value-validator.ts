import { AbstractControl, ValidatorFn } from '@angular/forms';

export const maxValueValidator = (maxValue: number, errorMsg: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } => {
    const { value } = control;
    if (value !== "" && value !== null && value <= maxValue) {
      return null;
    }
    return { 'maxValue': { errorMsg } };
  };
}