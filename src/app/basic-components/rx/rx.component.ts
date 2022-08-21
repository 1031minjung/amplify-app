import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { rxFormatValidator, axisValidator } from 'src/app/validators/rx-validator';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss'],
})
export class RxComponent implements OnInit {
  formattedRxData = {
    od: {
      sph: '',
      cyl: '',
      axis: '',
      add: '',
      prism: '',
      prismBase: '',
    },
    os: {
      sph: '',
      cyl: '',
      axis: '',
      add: '',
      prism: '',
      prismBase: '',
    },
  };
  sphRange: string[] = [];
  rxForm!: FormGroup;
  showAdd = false;
  showPrism = false;
  defaultSelectedValue: any;
  filteredOptions!: Observable<any[]>;
  constructor() {}

  ngOnInit(): void {
    this.sphRange = this.getRxRange(-20, 20);
    this.rxForm = new FormGroup({
      date: new FormControl(new Date()),
      odSph: new FormControl('', [Validators.required,  rxFormatValidator()]),
      odCyl: new FormControl('', [Validators.required,  rxFormatValidator()]),
      odAxis: new FormControl('', [Validators.required, axisValidator()]),
      odAdd: new FormControl('', [Validators.required, rxFormatValidator()]), // Validator
      odPrism: new FormControl(''),
      odPrismBase: new FormControl(''),
      osSph: new FormControl('', [Validators.required,  rxFormatValidator()]),
      osCyl: new FormControl('', [Validators.required,  rxFormatValidator()]),
      osAxis: new FormControl(''),
      osAdd: new FormControl('', [Validators.required,  rxFormatValidator()]),
      osPrism: new FormControl(''),
      osPrismBase: new FormControl(''),
    });
    this.filteredOptions = this.rxForm.controls['odSph'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.sphRange.filter(option => option.toLowerCase().includes(filterValue));
  }

  getRxRange (start: number, end: number): string[] {
    var rxRange = [];
    for ( let i = start; i <= end; i += 0.25) {
      rxRange.push(i > 0 ? "+"+(Math.round(i * 100) / 100).toFixed(2) : (Math.round(i * 100) / 100).toFixed(2));
    }
    return rxRange;
  }
  
  getErrorMessage(): string {
    return 'invalid value';
  }

  
  onRxFormSave() {
    console.log('Rx is saved');
    console.log(this.rxForm.getRawValue());
    console.log(this.rxForm.get('odSph'));
    // console.log("name: " + this.rxForm.get('date').value)
  }
  onClearRx() {
    this.rxForm.reset();
    console.log('Rx is reset');
    this.showPrism = false;
    this.showAdd = false;
  }

  onSphOrCylChange(key: string, value: any) {
    if (!isNaN(value)) {
      var formattedRx = (Math.round(value * 100) / 100).toFixed(2);
      Math.floor(value) > 0 ? formattedRx = "+"+formattedRx : null;
      if (key.slice(0, 2) === 'OD') {
        key.slice(3, 6) === 'sph' ? this.formattedRxData.od.sph = formattedRx: this.formattedRxData.od.cyl = formattedRx ;
      } else if (key.slice(0, 2) === 'OS') {
        key.slice(3, 6) === 'sph' ? this.formattedRxData.os.sph = formattedRx: this.formattedRxData.os.cyl = formattedRx
      }
      console.log(this.formattedRxData)
    }
  }

  onAxisChange(key: string, value: any) {
    if (!isNaN(value) && Math.floor(value) >= 0 && Math.floor(value) <= 180) {
      var formattedRx = value;
      if (value.length < 3) {
        value.length === 1 ? formattedRx = "00" + formattedRx : formattedRx = "0" + formattedRx
      }
      key === 'OD' ? this.formattedRxData.od.axis = formattedRx : this.formattedRxData.os.axis = formattedRx;
      console.log(formattedRx)
      console.log(this.formattedRxData)
    }
  }

  onAddChange(key: string, value: any) {
    if (!isNaN(value) && Math.floor(value) >= 0) {
      var formattedRx = (Math.round(value * 100) / 100).toFixed(2);
      Math.floor(value) > 0 ? formattedRx = "+"+formattedRx : null;
      if (key === 'OD') {
        this.formattedRxData.od.add = formattedRx;
        this.formattedRxData.os.add = formattedRx;
      } else {
        this.formattedRxData.os.add = formattedRx;
      }
      console.log(this.formattedRxData)
    }
  }
}
