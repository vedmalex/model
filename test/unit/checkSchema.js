// 'use strict';

// let Validator = require('jsonschema').Validator;

// let validator = new Validator();

// const EntitySchema = {
//   id: '/Entity',
//   title: 'Entity',
//   description: 'The Entity definition',
//   type: 'object',
//   properties: {
//     title: {
//       type: 'string',
//     },
//     name: {
//       type: 'string'
//     },
//     description: {
//       type: 'string',
//     },
//     fields: {
//       description: 'Field list',
//       type: 'array',
//       items: {
//         anyOf: [
//             {
//               $ref: '/BelongsTo',
//             },{
//               $ref: '/HasOne',
//             },{
//               $ref: '/HasMany',
//             },{
//               $ref: '/Field',
//             }
//           ]
//       },
//       minItems: 1,
//       uniqueItems: true,
//     },
//   },
//   required: [
//     'name',
//     'fields',
//   ],
//   additionalProperties: false,
// };

// const RefSchema = {
//   id: '/Ref',
//   type: 'string',
//   patern: '^(.*?)#(.*?)$',
// };

// const FieldSchema = {
//   id: '/Field',
//   title: 'Field',
//   description: 'field definition',
//   properties: {
//     title: {
//       type: 'string',
//     },
//     name: {
//       type: 'string'
//     },
//     description: {
//       type: 'string',
//     },
//     type: {
//       enum: ['integer', 'number', 'boolean', 'string'],
//       default: 'string',
//     },
//     identity: { type: 'boolean', default: false },
//     required: { type: 'boolean', default: false },
//   },
//   required: ['name'],
//   additionalProperties: false,
// };

// const HasOneSchema = {
//   id: '/HasOne',
//   title: 'Link',
//   description: 'link definition',
//   properties: {
//     title: {
//       type: 'string',
//     },
//     name: {
//       type: 'string'
//     },
//     description: {
//       type: 'string',
//     },
//     hasOne: {
//       $ref: '/Ref',
//     },
//     using: {
//       $ref: '/Ref',
//     },
//   },
//   required: ['name','hasOne'],
//   additionalProperties: false,
// };

// const HasManySchema = {
//   id: '/HasMany',
//   title: 'Link',
//   description: 'link definition',
//   properties: {
//     title: {
//       type: 'string',
//     },
//     name: {
//       type: 'string'
//     },
//     description: {
//       type: 'string',
//     },
//     hasMany: {
//       $ref: '/Ref',
//     },
//     using: {
//       $ref: '/Ref',
//     },
//   },
//   required: ['name','hasMany'],
//   additionalProperties: false,
// };

// const BelongsToSchema = {
//   id: '/BelongsTo',
//   title: 'Link',
//   description: 'link definition',
//   properties: {
//     title: {
//       type: 'string',
//     },
//     name: {
//       type: 'string'
//     },
//     description: {
//       type: 'string',
//     },
//     belongsTo: {
//       $ref: '/Ref',
//     },
//     using: {
//       $ref: '/Ref',
//     },
//   },
//   required: ['name','belongsTo'],
//   additionalProperties: false,
// };

// validator.addSchema(RefSchema);
// validator.addSchema(HasOneSchema);
// validator.addSchema(HasManySchema);
// validator.addSchema(BelongsToSchema);
// validator.addSchema(EntitySchema);
// validator.addSchema(FieldSchema);

// let obj = {
//           name: ' test Entity ',
//           title: ' test Entity title ',
//           description: ' test Entity describe ',
//           fields: [
//           {
//             name: 'id',
//             identity: true,
//             required: false,
//           },
//           {
//             name: 'Field1',
//           },
//           {
//             name: 'field2',
//             title: 'title field2',
//           },
//           {
//             name: 'Field 3',
//             description: 'field3 description',
//           },
//           {
//             name: 'field4',
//             title: 'Field4 title',
//             description: 'field4 description',
//             required: true,
//           },
//           {
//             name: 'field5',
//             type: 'number',
//           },
//           {
//             name: 'field6Ref',
//             hasOne: 'Model/User#id',
//           },
//           {
//             name: 'field7Ref',
//             hasOne: 'Actor#id',
//           },
//           {
//             name: 'field8Ref',
//             belongsTo: 'Field1',
//           }
//           ]
//         };

// let res = validator.validate(obj, EntitySchema);

// function discoverFieldType(obj) {
//   if (validator.validate(obj, HasOneSchema).valid) {
//     return 'HasOne';
//   } else if (validator.validate(obj, HasManySchema).valid) {
//     return 'HasMany';
//   } else if (validator.validate(obj, BelongsToSchema).valid) {
//     return 'BelongsTo';
//   } else if (validator.validate(obj, FieldSchema).valid) {
//     return 'Field';
//   }
// };

// obj.fields.forEach(f => {

//   const fieldType = discoverFieldType(f);
//   console.log(fieldType);
//   switch (fieldType){
//     case 'Field':
//     break;
//     case 'HasOne':
//     break;
//     case 'HasMany':
//     break;
//     case 'BelongsTo':
//     break;
//   }

// });

// console.log(res.valid);
