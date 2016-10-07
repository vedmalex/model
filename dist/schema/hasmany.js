'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HasManySchema = exports.HasManySchema = {
  id: '/HasMany',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    hasMany: {
      $ref: '/Ref'
    },
    entity: {
      type: 'string'
    },
    field: {
      type: 'string'
    }
  },
  required: ['hasMany'],
  additionalProperties: false
};
//# sourceMappingURL=hasmany.js.map
