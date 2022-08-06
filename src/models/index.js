// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Patient, Doctor, DoctorsPatients } = initSchema(schema);

export {
  Patient,
  Doctor,
  DoctorsPatients
};