import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rxFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return Number(control.value)%0.25 === 0 ? null : {invalidFormat : true}
  };
}

export function axisValidator(): ValidatorFn {
  const axisValidationExpression = new RegExp("^\\d{3}$");
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = RegExp(axisValidationExpression).test(control.value);
    // console.log("invalid? ", invalid)
    return control.value ? (valid ? null : { isAxisInvalid: true }) : null;
  };
}