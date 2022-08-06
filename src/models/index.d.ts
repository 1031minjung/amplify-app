import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PatientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DoctorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DoctorsPatientsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Patient {
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly doctors?: (DoctorsPatients | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Patient, PatientMetaData>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient, PatientMetaData>) => MutableModel<Patient, PatientMetaData> | void): Patient;
}

export declare class Doctor {
  readonly id: string;
  readonly name?: string | null;
  readonly licenseNum: string;
  readonly Patients?: (DoctorsPatients | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Doctor, DoctorMetaData>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor, DoctorMetaData>) => MutableModel<Doctor, DoctorMetaData> | void): Doctor;
}

export declare class DoctorsPatients {
  readonly id: string;
  readonly patient: Patient;
  readonly doctor: Doctor;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DoctorsPatients, DoctorsPatientsMetaData>);
  static copyOf(source: DoctorsPatients, mutator: (draft: MutableModel<DoctorsPatients, DoctorsPatientsMetaData>) => MutableModel<DoctorsPatients, DoctorsPatientsMetaData> | void): DoctorsPatients;
}