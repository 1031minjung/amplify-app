import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorComponent} from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component'
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        GooglePlaceModule,
        MatSliderModule
    ],
    declarations: [
        DoctorComponent,
        PatientComponent,
        InventoryComponent,
        AboutUsComponent,
        HomeComponent,
        AddressComponent
    ],
    exports: [
        DoctorComponent
    ]
    })
    export class BasicCommonModule {}