export const HasOneSchema = {
  id: '/HasOne',
  title: 'Link',
  description: 'link definition',
  properties: {
    name: {
      type: 'string'
    },
    hasOne: {
      $ref: '/Ref',
    },
    entity: {
      type: 'string',
    },
  },
  required: ['hasOne'],
  additionalProperties: false,
};
