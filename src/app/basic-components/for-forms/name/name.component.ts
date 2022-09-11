import { Component, OnInit,forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameComponent),
      multi: true,
    },
  ]
})
export class NameComponent implements OnInit {
  public nameForm: FormGroup = new FormGroup({
    // preFix: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    lastName: new FormControl('', [Validators.required]),
    nickName: new FormControl(''),
    preferredName: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.nameForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.nameForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.nameForm.disable() : this.nameForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.nameForm.valid
      ? null
      : {
        invalidForm: {
          valid: false,
          message: 'nameForm fields are invalid',
        },
      };
  }
}
