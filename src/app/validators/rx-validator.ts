import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rxFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!isNaN(control.value)) {
      return Number(control.value)%0.25 === 0 ? null : {invalidRxFormat : true}
    }
  return null    
  };
}

export function rxNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return !isNaN(control.value) ? null : {notNumber : true}
  };
}

export function rxRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!isNaN(control.value)) {
      return Number(control.value) >= min && Number(control.value) <= max ? null : {outOfRxRange : true}
    }
    return null
  };
}