import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService, Doctor } from '../../API.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  public createForm: FormGroup;
  public doctorGroupForm: FormGroup;
  public doctors: Array<Doctor> = [];
  public selectedDoctorID: any;
  private subscription: Subscription | null = null;
  contact_form: any;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      licenseNum: ['', Validators.required]
    });
    this.doctorGroupForm = this.fb.group({
      doctors: ['']
    })
  }
  

  ngOnInit(): void {
    this.api.ListDoctors().then((event) => {
      this.doctors = event.items as Doctor[];
    });

    this.subscription = <Subscription>(
      this.api.OnCreateDoctorListener.subscribe((event: any) => {
        const newDoctor = event.value.data.onCreateDoctor;
        this.doctors = [newDoctor, ...this.doctors];
      })
    );
  }

  public onCreate(doctor: Doctor) {
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

  public onSelectChange(doctor: any) {
    this.api.GetDoctor(doctor.target.value) // passing doctorID
    .then((event) => {
      this.selectedDoctorID = doctor.target.value;
    })
    .catch((e) => {
      console.log('error on getting Dr.\'s ID...', e);
    })
  }

  public onClearDoctorClick () {
    this.doctorGroupForm.reset();
    this.selectedDoctorID = null;
  }

}
