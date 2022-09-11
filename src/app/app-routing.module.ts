import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './basic-components/about-us/about-us.component';
import { AddressComponent } from './basic-components/for-forms/address/address.component';
import { DoctorComponent } from './basic-components/doctor/doctor.component';
import { HomeComponent } from './basic-components/home/home.component';
import { InventoryComponent } from './basic-components/inventory/inventory.component';
import { PatientComponent } from './basic-components/patient/patient.component';
import { RxFormComponent } from './basic-components/rx/rx-form/rx-form.component';
import { RxComponent } from './basic-components/rx/rx.component';
import { PatientFormComponent } from './basic-components/patient/patient-form/patient-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "doctors",
    component: DoctorComponent
  },
  {
    path: "px-form",
    component: PatientFormComponent
  },
  {
    path: "rx",
    component: RxComponent
  },
  {
    path: "rx-form",
    component: RxFormComponent
  },
  {
    path: "address",
    component: AddressComponent
  },
  {
    path: "inventory",
    component: InventoryComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
