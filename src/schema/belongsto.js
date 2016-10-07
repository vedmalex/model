export const BelongsToSchema = {
  id: '/BelongsTo',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    belongsTo: {
      $ref: '/Ref',
    },
    entity: {
      type: 'string',
    },
  },
  required: ['belongsTo'],
  additionalProperties: false,
};
