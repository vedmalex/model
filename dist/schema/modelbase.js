'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ModelBaseSchema = exports.ModelBaseSchema = {
  id: '/ModelBase',
  title: 'ModelBase',
  description: 'The ModelBase definition',
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
    }
  },
  required: ['name']
};
//# sourceMappingURL=modelbase.js.map
