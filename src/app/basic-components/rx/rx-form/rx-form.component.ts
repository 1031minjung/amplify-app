import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.scss']
})
export class RxFormComponent implements OnInit, AfterViewInit {
  public rxForm: FormGroup = new FormGroup({
    date: new FormControl(''),
    odBasicRx: new FormControl(''),
    odHorizontalPrism: new FormControl(''),
    odVerticalPrism: new FormControl(''),
    osBasicRx: new FormControl(''),
    osHorizontalPrism: new FormControl(''),
    osVerticalPrism: new FormControl(''),
  });
  showPrism = false;
  prismType = [
    'Horizontal', 'Vertical'
  ];
  eyes = ['OD', 'OS'];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onshowPrismClick() {
    this.showPrism = true;
  }

  onRxFormSave() {
    console.log('Rx is saved');
    console.log(this.rxForm.getRawValue());
  }
}
