import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.scss']
})
export class RxFormComponent implements OnInit, AfterViewInit {
  public rxForm: FormGroup = new FormGroup({
    date: new FormControl(new Date()),
    odBasicRx: new FormControl(''),
    osBasicRx: new FormControl('')
  })
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onRxFormSave() {
    console.log('Rx is saved');
    // console.log(this.rxForm.getRawValue());
  }
}
