'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = undefined;

var _schema = require('./schema');

var _jsonschema = require('jsonschema');

var validator = exports.validator = new _jsonschema.Validator();

validator.addSchema(_schema.ModelBaseSchema);
validator.addSchema(_schema.RefSchema);
validator.addSchema(_schema.HasOneSchema);
validator.addSchema(_schema.HasManySchema);
validator.addSchema(_schema.BelongsToSchema);
validator.addSchema(_schema.BelongsToManySchema);
validator.addSchema(_schema.EntitySchema);
validator.addSchema(_schema.FieldSchema);
//# sourceMappingURL=validator.js.map
