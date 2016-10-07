'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FieldSchema = exports.FieldSchema = {
  id: '/Field',
  title: 'Field',
  description: 'field definition',
  properties: {
    title: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    entity: {
      type: 'string'
    },
    type: {
      enum: ['integer', 'number', 'boolean', 'string'],
      default: 'string'
    },
    default: {
      type: { anyOf: [{ type: 'integer' }, { type: 'number' }, { type: 'boolean' }, { type: 'string' }, { type: 'null' }, { type: 'object' }] }
    },
    identity: { type: 'boolean', default: false },
    required: { type: 'boolean', default: false },
    relation: {
      type: {
        anyOf: [{
          $ref: '/BelongsTo'
        }, {
          $ref: '/HasOne'
        }, {
          $ref: '/HasMany'
        }, {
          $ref: '/BelongsToMany'
        }]
      }
    }
  },
  required: ['name'],
  additionalProperties: false
};
//# sourceMappingURL=field.js.map
