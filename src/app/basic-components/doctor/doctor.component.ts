import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Doctor } from '../../API.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  public createForm: FormGroup;
  public doctors: Array<Doctor> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      licenseNum: ['', Validators.required]
    });
  }
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.api.ListDoctors().then((event) => {
      this.doctors = event.items as Doctor[];
    });

    /* subscribe to new todos being created */
    this.subscription = <Subscription>(
      this.api.OnCreateDoctorListener.subscribe((event: any) => {
        const newDoctor = event.value.data.onCreateDoctor;
        this.doctors = [newDoctor, ...this.doctors];
      })
    );
  }

  public onCreate(doctor: Doctor) {
    console.log("onCreate")
    console.log(doctor)
    this.api
      .CreateDoctor(doctor)
      .then((event) => {
        console.log('doctor created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating doctor...', e);
      });
  }

}
