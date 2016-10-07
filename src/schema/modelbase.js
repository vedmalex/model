export const ModelBaseSchema = {
  id: '/ModelBase',
  title: 'ModelBase',
  description: 'The ModelBase definition',
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
  },
  required: [
    'name',
  ],
};
