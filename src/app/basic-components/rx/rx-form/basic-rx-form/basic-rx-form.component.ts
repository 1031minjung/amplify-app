import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, ControlValueAccessor, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { rxFormatValidator, rxNumberValidator, rxRangeValidator } from '../../../../validators/rx-validator';

@Component({
  selector: 'app-basic-rx-form',
  templateUrl: './basic-rx-form.component.html',
  styleUrls: ['./basic-rx-form.component.scss'],
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
    axis: new FormControl('',)
  });
  formattedRxData: any;
  sphRxRange: string[] = [];
  cylRxRange: string[] = [];
  axisRange: string[] = [];
  filteredSphRxRangeOptions!: Observable<string[]>;
  filteredCylRxRangeOptions!: Observable<string[]>;
  filteredAxisRangeOptions!: Observable<string[]>;
  hasCylValue = false;

  constructor() { }

  ngOnInit(): void {
    this.sphRxRange = this.populateRxRange('increment', -20, 20, 0.25);
    this.cylRxRange = this.populateRxRange('decrement', -0.25, -20, 0.25);
    this.axisRange = this.populateRxRange('increment', 1, 180, 1)
    this.formattedRxData = {
      sph: '',
      cyl: ''
    }
    this.autoCompleteWithOptions();
  }

  populateRxRange(order: string, start: number, end: number, step: number): string[] {
    var rxRange = [];
    for (let i = start; (order === 'increment' ? i <= end : i >= end); (order === 'increment' ? i += step : i -= step)) {
      step === 0.25 ?
        rxRange.push(i > 0 ? "+" + (Math.round(i * 100) / 100).toFixed(2) : (Math.round(i * 100) / 100).toFixed(2))
        : rxRange.push(("00" + i).slice(-3))
    }
    return rxRange;
  }

  private _filter(rxRange: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return rxRange.filter(option => option.toLowerCase().includes(filterValue));
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
  }

  onSphOrCylChange(key: string, value: any) {
    console.log(!isNaN(value))
    if (!isNaN(value)) {
      console.log((Math.round(value * 100) / 100).toFixed(2))
      var formattedRx = (Math.round(value * 100) / 100).toFixed(2);
      Math.abs(value) > 0 && Array.from(value)[0] !== '-' ? formattedRx = "+" + formattedRx : null;
      if (key === 'cyl') {
        this.hasCylValue = true;
        this.basicRxForm.get('axis')?.setValidators([Validators.required, rxNumberValidator(), rxRangeValidator(1, 180)]);
      }
      // Math.abs(value) === 0 && key === 'sph' ? formattedRx = 'PL' : null; // need to figure out validator then implement them
      // Math.abs(value) === 0 && key === 'cyl' ? formattedRx = 'sph' : null;
      this.formattedRxData[key] = formattedRx;
    }
  }

  onAxisChange(value: any) {
    console.log("onAxisChange()", value)
    if (!isNaN(value) && value >= 0 && value <= 180) {
      var formattedAxis = ("000" + value).slice(-3);
      formattedAxis === "000" ? formattedAxis = '180' : null;
      this.formattedRxData['axis'] = formattedAxis;
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
