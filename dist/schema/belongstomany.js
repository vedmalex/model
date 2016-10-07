'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BelongsToManySchema = exports.BelongsToManySchema = {
  id: '/BelongsToMany',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    belongsToMany: {
      $ref: '/Ref'
    },
    using: {
      $ref: '/Ref'
    },
    entity: {
      type: 'string'
    },
    field: {
      type: 'string'
    }
  },
  required: ['belongsToMany'],
  additionalProperties: false
};
//# sourceMappingURL=belongstomany.js.map
