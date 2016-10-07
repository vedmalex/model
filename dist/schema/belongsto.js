'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BelongsToSchema = exports.BelongsToSchema = {
  id: '/BelongsTo',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    belongsTo: {
      $ref: '/Ref'
    },
    entity: {
      type: 'string'
    }
  },
  required: ['belongsTo'],
  additionalProperties: false
};
//# sourceMappingURL=belongsto.js.map
