import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  public patientForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  onPatientFormSave() {
    console.log('Patient is saved');
    console.log(this.patientForm.getRawValue());
    console.log(this.patientForm.value);
  }
}
