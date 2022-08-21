// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PrismBase = {
  "UP": "UP",
  "DOWN": "DOWN",
  "IN": "IN",
  "OUT": "OUT"
};

const RxPurpose = {
  "DISTANCE": "DISTANCE",
  "NEAR": "NEAR",
  "INTERMEDIATE": "INTERMEDIATE",
  "ALL": "ALL"
};

const RxFrom = {
  "POL": "POL",
  "OLD_RX": "OLD_RX",
  "EYE_EXAM": "EYE_EXAM"
};

const { Rx, Patient, Doctor, DoctorsPatients } = initSchema(schema);

export {
  Rx,
  Patient,
  Doctor,
  DoctorsPatients,
  PrismBase,
  RxPurpose,
  RxFrom
};