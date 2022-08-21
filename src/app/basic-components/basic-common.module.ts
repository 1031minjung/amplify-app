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
import { RxComponent } from './rx/rx.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        GooglePlaceModule,
        MatSliderModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatAutocompleteModule
    ],
    declarations: [
        DoctorComponent,
        PatientComponent,
        InventoryComponent,
        AboutUsComponent,
        HomeComponent,
        AddressComponent,
        RxComponent
    ],
    exports: [
        DoctorComponent
    ]
    })
    export class BasicCommonModule {}