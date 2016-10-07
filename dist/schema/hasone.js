'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HasOneSchema = exports.HasOneSchema = {
  id: '/HasOne',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    hasOne: {
      $ref: '/Ref'
    },
    entity: {
      type: 'string'
    }
  },
  required: ['hasOne'],
  additionalProperties: false
};
//# sourceMappingURL=hasone.js.map
