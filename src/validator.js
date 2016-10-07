import {
  ModelBaseSchema,
  EntitySchema,
  FieldBaseSchema,
  FieldSchema,
  RefSchema,
  HasOneSchema,
  HasManySchema,
  BelongsToSchema,
  BelongsToManySchema,
} from './schema';

import {Validator} from 'jsonschema';

export const validator = new Validator();

validator.addSchema(ModelBaseSchema);
validator.addSchema(RefSchema);
validator.addSchema(HasOneSchema);
validator.addSchema(HasManySchema);
validator.addSchema(BelongsToSchema);
validator.addSchema(BelongsToManySchema);
validator.addSchema(EntitySchema);
validator.addSchema(FieldSchema);
