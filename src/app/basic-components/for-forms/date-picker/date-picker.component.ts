import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    }
    
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  public datePickerForm: FormGroup = new FormGroup({
    date: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.datePickerForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.datePickerForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.datePickerForm.disable() : this.datePickerForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.datePickerForm.valid
      ? null
      : {
        invalidForm: {
          valid: false,
          message: 'datePickerForm fields are invalid',
        },
      };
  }

}
