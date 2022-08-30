import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, ControlValueAccessor, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { rxFormatValidator, rxNumberValidator, rxRangeValidator } from '../../../../validators/rx-validator';
import { populateRxRange } from '../common-rx-form-functions'

@Component({
  selector: 'app-basic-prism-form',
  templateUrl: './basic-prism-form.component.html',
  styleUrls: ['./basic-prism-form.component.scss', '../rx-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicPrismFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicPrismFormComponent),
      multi: true,
    },
  ]
})
export class BasicPrismFormComponent implements OnInit, ControlValueAccessor {
  public basicPrismForm: FormGroup = new FormGroup({
    amount: new FormControl(''),
    base: new FormControl('')
  });
  @Input() prismType: any;
  prismTypeTitle!: string;
  prismBases: any;
  formattedPrismData: any;
  amountRange: string[] = [];
  filteredAmountOptions!: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.prismTypeTitle = this.prismType.charAt(0).toUpperCase() + this.prismType.slice(1);
    this.prismBases = this.prismType === 'horizontal' ? ['IN', 'OUT'] : ['UP', 'DOWN'];
    this.amountRange = populateRxRange(false, 'increment', 0.25, 20, 0.25);
    this.formattedPrismData = {
      amount: '',
      base: ''
    };
    this.autoCompleteWithOptions();
  };

  autoCompleteWithOptions() {
    this.filteredAmountOptions = this.basicPrismForm.controls['amount'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.amountRange, value || ''))
    );
  };

  _filter(prismRange: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return prismRange.filter(option => option.toLowerCase().includes(filterValue));
  };

  onPrismAmountChange(value: any) {
    if (!isNaN(value)) {
      var formattedRx = (Math.round(value * 100) / 100).toFixed(2);
      this.formattedPrismData['amount'] = formattedRx;
    }
    console.log(this.formattedPrismData)
  };

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.basicPrismForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.basicPrismForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicPrismForm.disable() : this.basicPrismForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.basicPrismForm.valid
      ? null
      : {
        invalidForm: {
          valid: false,
          message: 'basicPrismForm fields are invalid',
        },
      };
  }
}
