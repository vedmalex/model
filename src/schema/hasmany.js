export const HasManySchema = {
  id: '/HasMany',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    hasMany: {
      $ref: '/Ref',
    },
    entity: {
      type: 'string',
    },
    field: {
      type: 'string',
    },
  },
  required: ['hasMany'],
  additionalProperties: false,
};
