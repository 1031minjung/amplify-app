import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './basic-components/doctor/doctor.component';
import { PatientComponent } from './basic-components/patient/patient.component';

const routes: Routes = [
  {
    path: "doctors",
    component: DoctorComponent
  },
  {
    path: "patients",
    component: PatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
