import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { input } from 'aws-amplify';
import { Subscription } from 'rxjs';
import { APIService, Patient } from 'src/app/API.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit, OnChanges {
  public patients: Array<Patient> = [];
  @Input() doctorId: any;

  constructor(private api: APIService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.api
      .ListDoctorsPatients({
        doctorID: {
          eq: this.doctorId,
        },
      })
      .then((event) => {
        if (event.items.length) {
          event.items.forEach((item) => {
            if (item) {
              this.patients.push(item.patient as Patient);
            }
          });
        } else {
          this.patients = [];
        }
      });
  }
}
