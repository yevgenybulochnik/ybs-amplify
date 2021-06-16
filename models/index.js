// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestModel, NewModel } = initSchema(schema);

export {
  TestModel,
  NewModel
};