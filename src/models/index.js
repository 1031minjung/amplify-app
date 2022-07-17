// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Doctor, Todo } = initSchema(schema);

export {
  Doctor,
  Todo
};