/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreatePatient: OnCreatePatientSubscription;
  onUpdatePatient: OnUpdatePatientSubscription;
  onDeletePatient: OnDeletePatientSubscription;
  onCreateDoctor: OnCreateDoctorSubscription;
  onUpdateDoctor: OnUpdateDoctorSubscription;
  onDeleteDoctor: OnDeleteDoctorSubscription;
  onCreateDoctorsPatients: OnCreateDoctorsPatientsSubscription;
  onUpdateDoctorsPatients: OnUpdateDoctorsPatientsSubscription;
  onDeleteDoctorsPatients: OnDeleteDoctorsPatientsSubscription;
};

export type CreatePatientInput = {
  id?: string | null;
  name?: string | null;
  age?: number | null;
  _version?: number | null;
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Patient = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: ModelDoctorsPatientsConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelDoctorsPatientsConnection = {
  __typename: "ModelDoctorsPatientsConnection";
  items: Array<DoctorsPatients | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type DoctorsPatients = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: Patient;
  doctor: Doctor;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Doctor = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: ModelDoctorsPatientsConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdatePatientInput = {
  id: string;
  name?: string | null;
  age?: number | null;
  _version?: number | null;
};

export type DeletePatientInput = {
  id: string;
  _version?: number | null;
};

export type CreateDoctorInput = {
  id?: string | null;
  name?: string | null;
  licenseNum: string;
  _version?: number | null;
};

export type ModelDoctorConditionInput = {
  name?: ModelStringInput | null;
  licenseNum?: ModelStringInput | null;
  and?: Array<ModelDoctorConditionInput | null> | null;
  or?: Array<ModelDoctorConditionInput | null> | null;
  not?: ModelDoctorConditionInput | null;
};

export type UpdateDoctorInput = {
  id: string;
  name?: string | null;
  licenseNum?: string | null;
  _version?: number | null;
};

export type DeleteDoctorInput = {
  id: string;
  _version?: number | null;
};

export type CreateDoctorsPatientsInput = {
  id?: string | null;
  patientID: string;
  doctorID: string;
  _version?: number | null;
};

export type ModelDoctorsPatientsConditionInput = {
  patientID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  and?: Array<ModelDoctorsPatientsConditionInput | null> | null;
  or?: Array<ModelDoctorsPatientsConditionInput | null> | null;
  not?: ModelDoctorsPatientsConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateDoctorsPatientsInput = {
  id: string;
  patientID?: string | null;
  doctorID?: string | null;
  _version?: number | null;
};

export type DeleteDoctorsPatientsInput = {
  id: string;
  _version?: number | null;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection";
  items: Array<Patient | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelDoctorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  licenseNum?: ModelStringInput | null;
  and?: Array<ModelDoctorFilterInput | null> | null;
  or?: Array<ModelDoctorFilterInput | null> | null;
  not?: ModelDoctorFilterInput | null;
};

export type ModelDoctorConnection = {
  __typename: "ModelDoctorConnection";
  items: Array<Doctor | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelDoctorsPatientsFilterInput = {
  id?: ModelIDInput | null;
  patientID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  and?: Array<ModelDoctorsPatientsFilterInput | null> | null;
  or?: Array<ModelDoctorsPatientsFilterInput | null> | null;
  not?: ModelDoctorsPatientsFilterInput | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDoctorMutation = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDoctorsPatientsMutation = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDoctorsPatientsMutation = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDoctorsPatientsMutation = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDoctorQuery = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDoctorsQuery = {
  __typename: "ModelDoctorConnection";
  items: Array<{
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDoctorsQuery = {
  __typename: "ModelDoctorConnection";
  items: Array<{
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDoctorsPatientsQuery = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDoctorsPatientsQuery = {
  __typename: "ModelDoctorsPatientsConnection";
  items: Array<{
    __typename: "DoctorsPatients";
    id: string;
    patientID: string;
    doctorID: string;
    patient: {
      __typename: "Patient";
      id: string;
      name?: string | null;
      age?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    doctor: {
      __typename: "Doctor";
      id: string;
      name?: string | null;
      licenseNum: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDoctorsPatientsQuery = {
  __typename: "ModelDoctorsPatientsConnection";
  items: Array<{
    __typename: "DoctorsPatients";
    id: string;
    patientID: string;
    doctorID: string;
    patient: {
      __typename: "Patient";
      id: string;
      name?: string | null;
      age?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    doctor: {
      __typename: "Doctor";
      id: string;
      name?: string | null;
      licenseNum: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  name?: string | null;
  age?: number | null;
  doctors?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  name?: string | null;
  licenseNum: string;
  Patients?: {
    __typename: "ModelDoctorsPatientsConnection";
    items: Array<{
      __typename: "DoctorsPatients";
      id: string;
      patientID: string;
      doctorID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDoctorsPatientsSubscription = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDoctorsPatientsSubscription = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDoctorsPatientsSubscription = {
  __typename: "DoctorsPatients";
  id: string;
  patientID: string;
  doctorID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name?: string | null;
    age?: number | null;
    doctors?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  doctor: {
    __typename: "Doctor";
    id: string;
    name?: string | null;
    licenseNum: string;
    Patients?: {
      __typename: "ModelDoctorsPatientsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async CreateDoctor(
    input: CreateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<CreateDoctorMutation> {
    const statement = `mutation CreateDoctor($input: CreateDoctorInput!, $condition: ModelDoctorConditionInput) {
        createDoctor(input: $input, condition: $condition) {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorMutation>response.data.createDoctor;
  }
  async UpdateDoctor(
    input: UpdateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<UpdateDoctorMutation> {
    const statement = `mutation UpdateDoctor($input: UpdateDoctorInput!, $condition: ModelDoctorConditionInput) {
        updateDoctor(input: $input, condition: $condition) {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorMutation>response.data.updateDoctor;
  }
  async DeleteDoctor(
    input: DeleteDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<DeleteDoctorMutation> {
    const statement = `mutation DeleteDoctor($input: DeleteDoctorInput!, $condition: ModelDoctorConditionInput) {
        deleteDoctor(input: $input, condition: $condition) {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorMutation>response.data.deleteDoctor;
  }
  async CreateDoctorsPatients(
    input: CreateDoctorsPatientsInput,
    condition?: ModelDoctorsPatientsConditionInput
  ): Promise<CreateDoctorsPatientsMutation> {
    const statement = `mutation CreateDoctorsPatients($input: CreateDoctorsPatientsInput!, $condition: ModelDoctorsPatientsConditionInput) {
        createDoctorsPatients(input: $input, condition: $condition) {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorsPatientsMutation>response.data.createDoctorsPatients;
  }
  async UpdateDoctorsPatients(
    input: UpdateDoctorsPatientsInput,
    condition?: ModelDoctorsPatientsConditionInput
  ): Promise<UpdateDoctorsPatientsMutation> {
    const statement = `mutation UpdateDoctorsPatients($input: UpdateDoctorsPatientsInput!, $condition: ModelDoctorsPatientsConditionInput) {
        updateDoctorsPatients(input: $input, condition: $condition) {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorsPatientsMutation>response.data.updateDoctorsPatients;
  }
  async DeleteDoctorsPatients(
    input: DeleteDoctorsPatientsInput,
    condition?: ModelDoctorsPatientsConditionInput
  ): Promise<DeleteDoctorsPatientsMutation> {
    const statement = `mutation DeleteDoctorsPatients($input: DeleteDoctorsPatientsInput!, $condition: ModelDoctorsPatientsConditionInput) {
        deleteDoctorsPatients(input: $input, condition: $condition) {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorsPatientsMutation>response.data.deleteDoctorsPatients;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  async SyncPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPatientsQuery> {
    const statement = `query SyncPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPatients(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPatientsQuery>response.data.syncPatients;
  }
  async GetDoctor(id: string): Promise<GetDoctorQuery> {
    const statement = `query GetDoctor($id: ID!) {
        getDoctor(id: $id) {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorQuery>response.data.getDoctor;
  }
  async ListDoctors(
    filter?: ModelDoctorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDoctorsQuery> {
    const statement = `query ListDoctors($filter: ModelDoctorFilterInput, $limit: Int, $nextToken: String) {
        listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorsQuery>response.data.listDoctors;
  }
  async SyncDoctors(
    filter?: ModelDoctorFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDoctorsQuery> {
    const statement = `query SyncDoctors($filter: ModelDoctorFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDoctors(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDoctorsQuery>response.data.syncDoctors;
  }
  async GetDoctorsPatients(id: string): Promise<GetDoctorsPatientsQuery> {
    const statement = `query GetDoctorsPatients($id: ID!) {
        getDoctorsPatients(id: $id) {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorsPatientsQuery>response.data.getDoctorsPatients;
  }
  async ListDoctorsPatients(
    filter?: ModelDoctorsPatientsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDoctorsPatientsQuery> {
    const statement = `query ListDoctorsPatients($filter: ModelDoctorsPatientsFilterInput, $limit: Int, $nextToken: String) {
        listDoctorsPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            patientID
            doctorID
            patient {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            doctor {
              __typename
              id
              name
              licenseNum
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorsPatientsQuery>response.data.listDoctorsPatients;
  }
  async SyncDoctorsPatients(
    filter?: ModelDoctorsPatientsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDoctorsPatientsQuery> {
    const statement = `query SyncDoctorsPatients($filter: ModelDoctorsPatientsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDoctorsPatients(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            patientID
            doctorID
            patient {
              __typename
              id
              name
              age
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            doctor {
              __typename
              id
              name
              licenseNum
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDoctorsPatientsQuery>response.data.syncDoctorsPatients;
  }
  OnCreatePatientListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePatient">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePatient">>
  >;

  OnUpdatePatientListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePatient">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePatient">>
  >;

  OnDeletePatientListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePatient">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          name
          age
          doctors {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePatient">>
  >;

  OnCreateDoctorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDoctor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctor {
        onCreateDoctor {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDoctor">>
  >;

  OnUpdateDoctorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDoctor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctor {
        onUpdateDoctor {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDoctor">>
  >;

  OnDeleteDoctorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDoctor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctor {
        onDeleteDoctor {
          __typename
          id
          name
          licenseNum
          Patients {
            __typename
            items {
              __typename
              id
              patientID
              doctorID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDoctor">>
  >;

  OnCreateDoctorsPatientsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateDoctorsPatients">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctorsPatients {
        onCreateDoctorsPatients {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateDoctorsPatients">
    >
  >;

  OnUpdateDoctorsPatientsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateDoctorsPatients">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctorsPatients {
        onUpdateDoctorsPatients {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateDoctorsPatients">
    >
  >;

  OnDeleteDoctorsPatientsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteDoctorsPatients">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctorsPatients {
        onDeleteDoctorsPatients {
          __typename
          id
          patientID
          doctorID
          patient {
            __typename
            id
            name
            age
            doctors {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          doctor {
            __typename
            id
            name
            licenseNum
            Patients {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteDoctorsPatients">
    >
  >;
}
