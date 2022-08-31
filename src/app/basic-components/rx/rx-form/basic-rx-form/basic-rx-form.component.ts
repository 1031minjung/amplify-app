import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, ControlValueAccessor, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { rxFormatValidator, rxNumberValidator, rxRangeValidator } from '../../../../validators/rx-validator';
import { populateRxRange, writeValueWithFormattedData } from '../common-rx-form-functions'

@Component({
  selector: 'app-basic-rx-form',
  templateUrl: './basic-rx-form.component.html',
  styleUrls: ['./basic-rx-form.component.scss', '../rx-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicRxFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicRxFormComponent),
      multi: true,
    },
  ]
})

export class BasicRxFormComponent implements OnInit, ControlValueAccessor {
  public basicRxForm: FormGroup = new FormGroup({
    sph: new FormControl('', [Validators.required, rxFormatValidator(), rxNumberValidator(), rxRangeValidator(-20, 20)]),
    cyl: new FormControl('', [rxFormatValidator(), rxNumberValidator(), rxRangeValidator(-20, 0)]),
    axis: new FormControl('',),
    add: new FormControl('', [rxFormatValidator(), rxNumberValidator(), rxRangeValidator(0, 20)])
  });
  sphRxRange: string[] = [];
  cylRxRange: string[] = [];
  axisRange: string[] = [];
  addRxRange: string[] = [];
  filteredSphRxRangeOptions!: Observable<string[]>;
  filteredCylRxRangeOptions!: Observable<string[]>;
  filteredAxisRangeOptions!: Observable<string[]>;
  filteredAddRxRangeOptions!: Observable<string[]>;
  hasCylValue = false;

  constructor() { }

  ngOnInit(): void {
    this.sphRxRange = populateRxRange(true, 'increment', -20, 20, 0.25);
    this.cylRxRange = populateRxRange(true, 'decrement', -0.25, -20, 0.25);
    this.axisRange = populateRxRange(false, 'increment', 1, 180, 1);
    this.addRxRange = populateRxRange(true, 'increment', 0.25, 20, 0.25);
    this.autoCompleteWithOptions();
  }

  autoCompleteWithOptions() {
    this.filteredSphRxRangeOptions = this.basicRxForm.controls['sph'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.sphRxRange, value || ''))
    );
    this.filteredCylRxRangeOptions = this.basicRxForm.controls['cyl'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.cylRxRange, value || ''))
    );
    this.filteredAxisRangeOptions = this.basicRxForm.controls['axis'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.axisRange, value || ''))
    );
    this.filteredAddRxRangeOptions = this.basicRxForm.controls['add'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.addRxRange, value || ''))
    );
  }

  _filter(rxRange: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return rxRange.filter(option => option.toLowerCase().includes(filterValue));
  };

  onSphCylAddChange(key: string, value: any) {
    if (!isNaN(value)) {
      var formattedRx = (Math.round(value * 100) / 100).toFixed(2);
      Math.abs(value) > 0 && Array.from(value)[0] !== '-' ? formattedRx = "+" + formattedRx : null;
      if (key === 'cyl') {
        this.hasCylValue = true;
        this.basicRxForm.get('axis')?.setValidators([Validators.required, rxNumberValidator(), rxRangeValidator(1, 180)]);
      }
      // Math.abs(value) === 0 && key === 'sph' ? formattedRx = 'PL' : null; // need to figure out validator then implement them
      // Math.abs(value) === 0 && key === 'cyl' ? formattedRx = 'sph' : null;
      if (key === 'add') {
        console.log(key, formattedRx)
      }
      writeValueWithFormattedData(this.basicRxForm, key, formattedRx);
    }
  }

  onAxisChange(value: any) {
    if (!isNaN(value) && value >= 0 && value <= 180) {
      var formattedAxis = ("000" + value).slice(-3);
      formattedAxis === "000" ? formattedAxis = '180' : null;
      writeValueWithFormattedData(this.basicRxForm, 'axis', formattedAxis);
    }
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.basicRxForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.basicRxForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicRxForm.disable() : this.basicRxForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.basicRxForm.valid
      ? null
      : {
        invalidForm: {
          valid: false,
          message: 'basicRxForm fields are invalid',
        },
      };
  }
}
