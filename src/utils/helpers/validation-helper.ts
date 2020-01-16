import { IFormField } from 'src/app/models/IFormField'
import { AbstractControl } from '@angular/forms';

export const validationHelper = (controls: { [key: string]: AbstractControl }, fields: IFormField[]): { fields: IFormField[], isValid: boolean} => {
  let isValid: boolean;

  const form_control_keys = Object.keys(controls);

  for (const field of fields) {
    field.errorMsg = null;
  }

  let errorsStorage: { errorMsg: string }[] = [];

  for (const key of form_control_keys) {
    const errors = Object.values(!!controls[key].errors && controls[key].errors);
    if (!!errors && errors.length !== 0) {
      fields.find(v => v.name == key).errorMsg = errors[0].errorMsg;
      errorsStorage = [...errorsStorage ,...errors];
    }
  }

  isValid = errorsStorage.length == 0; 

  return { fields, isValid };
}