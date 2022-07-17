import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DoctorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Doctor {
  readonly id: string;
  readonly name?: string | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly licenseNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Doctor, DoctorMetaData>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor, DoctorMetaData>) => MutableModel<Doctor, DoctorMetaData> | void): Doctor;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly doctorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}