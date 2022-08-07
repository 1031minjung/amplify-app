import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorComponent} from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component'

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [
        DoctorComponent,
        PatientComponent,
        InventoryComponent,
        AboutUsComponent,
        HomeComponent
    ],
    exports: [
        DoctorComponent
    ]
    })
    export class BasicCommonModule {}