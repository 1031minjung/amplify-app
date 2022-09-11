import { Component, OnInit,forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ]
})
export class AddressComponent implements OnInit {
  public addressForm: FormGroup = new FormGroup({
    streetAddress: new FormControl('', [Validators.required]),
    unitNumber: new FormControl(''),
    city: new FormControl(''),
    province: new FormControl(''),
    country: new FormControl(''),
    postalCode: new FormControl('')
  });

  constructor() {}
  
  ngOnInit(): void {
  }
  
  public AddressChange(address: any) {
    this.addressForm.controls['streetAddress'].setValue(address.formatted_address.split(",")[0])
    this.addressForm.controls['city'].setValue(address.address_components[2].long_name)
    this.addressForm.controls['province'].setValue(address.address_components[5].short_name)
    this.addressForm.controls['postalCode'].setValue(address.address_components[7].short_name)
    this.addressForm.controls['country'].setValue(address.address_components[6].long_name)
  }
  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.addressForm.valid
      ? null
      : {
        invalidForm: {
          valid: false,
          message: 'addressForm fields are invalid',
        },
      };
  }
}
