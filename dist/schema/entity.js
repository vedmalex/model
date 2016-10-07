'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EntitySchema = exports.EntitySchema = {
  id: '/Entity',
  title: 'Entity',
  description: 'The Entity definition',
  type: 'object',
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
    fields: {
      description: 'Field list',
      type: 'array',
      items: {
        $ref: '/Field'
      },
      minItems: 1,
      uniqueItems: true
    }
  },
  required: ['name', 'fields'],
  additionalProperties: false
};
//# sourceMappingURL=entity.js.map
