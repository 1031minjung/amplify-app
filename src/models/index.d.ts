import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PrismBase {
  UP = "UP",
  DOWN = "DOWN",
  IN = "IN",
  OUT = "OUT"
}

export enum RxPurpose {
  DISTANCE = "DISTANCE",
  NEAR = "NEAR",
  INTERMEDIATE = "INTERMEDIATE",
  ALL = "ALL"
}

export enum RxFrom {
  POL = "POL",
  OLD_RX = "OLD_RX",
  EYE_EXAM = "EYE_EXAM"
}



type RxMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PatientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DoctorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DoctorsPatientsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Rx {
  readonly id: string;
  readonly date?: string | null;
  readonly from?: RxFrom | keyof typeof RxFrom | null;
  readonly purpose?: RxPurpose | keyof typeof RxPurpose | null;
  readonly odSph?: number | null;
  readonly odCyl?: number | null;
  readonly odAxis?: number | null;
  readonly odAdd?: number | null;
  readonly odPrism?: number | null;
  readonly odPrismBase?: PrismBase | keyof typeof PrismBase | null;
  readonly osSph?: number | null;
  readonly osCyl?: number | null;
  readonly osAxis?: number | null;
  readonly osAdd?: number | null;
  readonly osPrism?: number | null;
  readonly osPrismBase?: PrismBase | keyof typeof PrismBase | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Rx, RxMetaData>);
  static copyOf(source: Rx, mutator: (draft: MutableModel<Rx, RxMetaData>) => MutableModel<Rx, RxMetaData> | void): Rx;
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