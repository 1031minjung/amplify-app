import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorComponent} from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component'

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [
        DoctorComponent,
        PatientComponent
    ],
    exports: [
        DoctorComponent
    ]
    })
    export class BasicCommonModule {}