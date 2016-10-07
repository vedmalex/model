export const EntitySchema = {
  id: '/Entity',
  title: 'Entity',
  description: 'The Entity definition',
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string',
    },
    fields: {
      description: 'Field list',
      type: 'array',
      items: {
        $ref: '/Field',
      },
      minItems: 1,
      uniqueItems: true,
    },
    indexes: {
      description: 'index list',
      type: 'array',
      items: {
        $ref: '/Index',
      },
      minItems: 1,
      uniqueItems: true,
    },
  },
  required: [
    'name',
    'fields',
  ],
  additionalProperties: false,
};
