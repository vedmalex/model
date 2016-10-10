/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(5);
	module.exports = __webpack_require__(26);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mochaGlobals = __webpack_require__(2).globals;
	
	window.mocha.setup('bdd');
	window.onload = function () {
	  window.mocha.checkLeaks();
	  window.mocha.globals(Object.keys(mochaGlobals));
	  window.mocha.run();
	  __webpack_require__(3)(window);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"globals": {
			"expect": true,
			"mock": true,
			"sandbox": true,
			"spy": true,
			"stub": true,
			"useFakeServer": true,
			"useFakeTimers": true,
			"useFakeXMLHttpRequest": true
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	module.exports = function (root) {
	  root = root ? root : global;
	  root.expect = root.chai.expect;
	
	  beforeEach(function () {
	    // Using these globally-available Sinon features is preferrable, as they're
	    // automatically restored for you in the subsequent `afterEach`
	    root.sandbox = root.sinon.sandbox.create();
	    root.stub = root.sandbox.stub.bind(root.sandbox);
	    root.spy = root.sandbox.spy.bind(root.sandbox);
	    root.mock = root.sandbox.mock.bind(root.sandbox);
	    root.useFakeTimers = root.sandbox.useFakeTimers.bind(root.sandbox);
	    root.useFakeXMLHttpRequest = root.sandbox.useFakeXMLHttpRequest.bind(root.sandbox);
	    root.useFakeServer = root.sandbox.useFakeServer.bind(root.sandbox);
	  });
	
	  afterEach(function () {
	    delete root.stub;
	    delete root.spy;
	    root.sandbox.restore();
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

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
	"use strict";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(6);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _model = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('Schema', function () {
	
	  describe('Entity', function () {
	
	    it('create empty model', function () {
	      expect(function () {
	        return new _model.Entity();
	      }).to.not.throw();
	    });
	
	    it('not create wrong model', function () {
	      expect(function () {
	        return new _model.Entity({ some: 1 });
	      }).to.throw();
	    });
	
	    it('not throws with empty data', function () {
	      var e = new _model.Entity();
	      expect(function () {
	        return e.updateWith();
	      }).to.not.throw();
	    });
	
	    it('throws with invalid data', function () {
	      var e = new _model.Entity();
	      expect(function () {
	        return e.updateWith({ some: 1 });
	      }).to.throw();
	    });
	
	    it('can\'t access to private fields', function () {
	      var e = new _model.Entity();
	
	      expect(function () {
	        return e.title = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.description = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.name = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.relations = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.required = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.identity = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.fields = 'someThing';
	      }).to.throw();
	    });
	
	    it('default data is undefined', function () {
	      var e = new _model.Entity();
	      expect(e.title).to.be.an('undefined');
	      expect(e.description).to.be.an('undefined');
	      expect(e.name).to.be.an('undefined');
	      expect(e.relations).to.be.an('undefined');
	      expect(e.required).to.be.an('undefined');
	      expect(e.identity).to.be.an('undefined');
	      expect(e.fields).to.be.an('undefined');
	    });
	
	    it('_id and id is the same', function () {
	      expect(function () {
	        return new _model.Entity({
	          name: 'A',
	          fields: [{
	            name: 'id',
	            type: 'string'
	          }, {
	            name: '_id',
	            type: 'string',
	            identity: true
	          }]
	        });
	      }).to.throw();
	    });
	
	    it('accept valid data', function () {
	      var e = new _model.Entity();
	
	      expect(function () {
	        return e.updateWith({
	          name: ' test Entity ',
	          title: ' test Entity title ',
	          description: ' test Entity describe ',
	          fields: [{
	            name: 'id',
	            identity: true,
	            required: false
	          }, {
	            name: 'Field1'
	          }, {
	            name: 'field2',
	            title: 'title field2'
	          }, {
	            name: 'Field 3',
	            description: 'field3 description'
	          }, {
	            name: 'field4',
	            title: 'Field4 title',
	            description: 'field4 description',
	            required: true
	          }, {
	            name: 'field5',
	            type: 'number'
	          }, {
	            name: 'field6Ref',
	            relation: {
	              hasOne: 'Model/User#id'
	            }
	          }, {
	            name: 'field7Ref',
	            relation: {
	              hasOne: 'Actor#id'
	            }
	          }, {
	            name: 'field8Ref',
	            relation: {
	              belongsTo: '#Field1'
	            }
	          }]
	        });
	      }).to.not.throw();
	
	      expect(e.name).to.be.equal('TestEntity');
	      expect(e.fields.size).to.be.equal(9);
	      expect(e.relations.size).to.be.equal(3);
	      expect(e.identity.size).to.be.equal(1);
	      expect(e.required.size).to.be.equal(2);
	
	      expect(e.toJSON()).to.deep.equal({
	        name: ' test Entity ',
	        title: ' test Entity title ',
	        description: ' test Entity describe ',
	        fields: [{
	          name: 'id',
	          identity: true,
	          required: false
	        }, {
	          name: 'Field1'
	        }, {
	          name: 'field2',
	          title: 'title field2'
	        }, {
	          name: 'Field 3',
	          description: 'field3 description'
	        }, {
	          name: 'field4',
	          title: 'Field4 title',
	          description: 'field4 description',
	          required: true
	        }, {
	          name: 'field5',
	          type: 'number'
	        }, {
	          name: 'field6Ref',
	          relation: {
	            hasOne: 'Model/User#id'
	          }
	        }, {
	          name: 'field7Ref',
	          relation: {
	            hasOne: 'Actor#id'
	          }
	        }, {
	          name: 'field8Ref',
	          relation: {
	            belongsTo: '#Field1'
	          }
	        }]
	      });
	
	      expect(e.toObject()).to.deep.equal({
	        name: 'TestEntity',
	        title: 'Test Entity title',
	        description: 'Test Entity describe',
	        fields: [{
	          name: 'id',
	          title: 'Id',
	          entity: 'TestEntity',
	          idKey: 'TestEntity#id',
	          description: 'Id',
	          type: 'string',
	          identity: true,
	          required: true,
	          indexed: true
	        }, {
	          name: 'field1',
	          entity: 'TestEntity',
	          title: 'Field1',
	          description: 'Field1',
	          type: 'string'
	        }, {
	          name: 'field2',
	          entity: 'TestEntity',
	          title: 'Title field2',
	          description: 'Title field2',
	          type: 'string'
	        }, {
	          name: 'field3',
	          entity: 'TestEntity',
	          title: 'Field3',
	          description: 'Field3 description',
	          type: 'string'
	        }, {
	          name: 'field4',
	          entity: 'TestEntity',
	          title: 'Field4 title',
	          description: 'Field4 description',
	          type: 'string',
	          required: true
	        }, {
	          name: 'field5',
	          entity: 'TestEntity',
	          title: 'Field5',
	          description: 'Field5',
	          type: 'number'
	        }, {
	          name: 'field6Ref',
	          entity: 'TestEntity',
	          title: 'Field6 ref',
	          description: 'Field6 ref',
	          relation: {
	            hasOne: 'Model/User#id'
	          }
	        }, {
	          name: 'field7Ref',
	          entity: 'TestEntity',
	          title: 'Field7 ref',
	          description: 'Field7 ref',
	          relation: {
	            hasOne: 'Actor#id'
	          }
	        }, {
	          name: 'field8Ref',
	          entity: 'TestEntity',
	          title: 'Field8 ref',
	          description: 'Field8 ref',
	          relation: {
	            belongsTo: 'TestEntity#field1'
	          }
	        }]
	      });
	    });
	
	    describe('fixup identity fields', function () {
	      it('no fields', function () {
	        var e1 = new _model.Entity({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }]
	        });
	        expect(e1.toJSON()).to.deep.equal({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            'identity': true,
	            'name': 'id',
	            'required': true
	          }]
	        });
	      });
	
	      it('id field', function () {
	        var e2 = new _model.Entity({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            name: 'Id'
	          }]
	        });
	        expect(e2.toJSON()).to.deep.equal({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            'identity': true,
	            'name': 'Id'
	          }]
	        });
	      });
	
	      it('_id field', function () {
	        var e3 = new _model.Entity({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            name: '_Id'
	          }]
	        });
	        expect(e3.toJSON()).to.deep.equal({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            'identity': true,
	            'name': '_Id'
	          }]
	        });
	      });
	
	      it('fixup field contains entity', function () {
	        var f1 = new _model.Entity({
	          name: 'fixup1',
	          fields: [{
	            name: 'name',
	            type: 'string'
	          }]
	        });
	        expect(f1.name).to.be.equal('Fixup1');
	        expect(f1.fields.get('id').entity).to.be.equal('Fixup1');
	      });
	    });
	
	    describe('fk and ids', function () {
	      // ссылки по внешнему ключу могут быть не только на PK
	      //, но на любые ключи
	      it('validate fk reference', function () {
	        var e1 = new _model.Entity({
	          name: 'TEst1',
	          fields: [{
	            name: 'name',
	            identity: true
	          }, {
	            name: 'id',
	            identity: true
	          }]
	        });
	
	        var e2 = new _model.Entity({
	          name: 'Test2',
	          fields: [{
	            name: 'name',
	            identity: true
	          }, {
	            name: 'id',
	            identity: true
	          }]
	        });
	      });
	    });
	  });
	
	  describe('ModelPackage', function () {
	    it('crud entity', function () {
	      var model = new _model.ModelPackage();
	      expect(model.size).to.be.equal(0);
	      expect(function () {
	        return model.create({
	          name: 'Test2',
	          fields: [{
	            name: 'name',
	            identity: true
	          }, {
	            name: 'id',
	            identity: true
	          }]
	        });
	      }).to.not.throw();
	
	      expect(model.size).to.be.equal(1);
	      expect(model.identityFields.size).to.be.equal(2);
	      expect(model.get('Test2').toJSON()).to.be.deep.equal({
	        name: 'Test2',
	        fields: [{
	          name: 'name',
	          identity: true
	        }, {
	          name: 'id',
	          identity: true
	        }]
	      });
	      expect(function () {
	        return model.remove('Test2');
	      }).to.not.throw();
	      expect(model.size).to.be.equal(0);
	      expect(model.identityFields.size).to.be.equal(0);
	    });
	
	    describe('Entity', function () {
	      it('check relations', function () {
	        var model = new _model.ModelPackage();
	        /*expect(()=>*/model.create({
	          name: 'A',
	          fields: [{
	            name: 'id',
	            type: 'string'
	          }, {
	            name: 'A_id',
	            type: 'string',
	            identity: true
	          }]
	        }) /*).to.not.throw()*/;
	
	        expect(function () {
	          return model.create({
	            name: 'B',
	            fields: [{
	              name: 'id',
	              type: 'string'
	            }, {
	              name: 'Aref',
	              relation: {
	                belongsTo: 'A'
	              }
	            }]
	          });
	        }).to.not.throw();
	        var b = model.get('B');
	        var missingRelations = b.checkRelations(model);
	        expect(missingRelations.length).to.be.equal(0);
	      });
	
	      it('multiple models filter', function () {
	        var u = new _model.Entity({
	          name: 'User',
	          fields: [{
	            name: 'id'
	          }, {
	            name: 'name'
	          }, {
	            name: 'groups',
	            relation: {
	              belongsToMany: 'Group#id',
	              using: 'UserGroup#user'
	            }
	          }]
	        });
	
	        var g = new _model.Entity({
	          name: 'Group',
	          fields: [{
	            name: 'id'
	          }, {
	            name: 'name'
	          }, {
	            name: 'users',
	            relation: {
	              belongsToMany: 'User#id',
	              using: 'UserGroup#group'
	            }
	          }]
	        });
	
	        var ug = new _model.Entity({
	          name: 'UserGroup',
	          fields: [{
	            name: 'user',
	            relation: {
	              belongsTo: 'User#id'
	            }
	          }, {
	            name: 'group',
	            relation: {
	              belongsTo: 'Group#id'
	            }
	          }]
	        });
	
	        // console.log(util.inspect(u,{depth: 6}));
	        // console.log(util.inspect(g,{depth: 6}));
	        // console.log(util.inspect(ug,{depth: 6}));
	
	        var model = new _model.ModelPackage();
	        model.add(u);
	        model.add(g);
	        model.add(ug);
	        model.ensureAll();
	
	        // console.log(util.inspect(model,{depth: 5}));
	        // console.log(g.toJSON(model));
	        // console.log(u.toJSON(model));
	        // console.log(ug.toJSON(model));
	
	        expect(model.entities.size).to.be.equal(3);
	        expect(model.identityFields.size).to.be.equal(3);
	        expect(model.identityFields.has('User#id')).to.be.true;
	        expect(model.identityFields.has('Group#id')).to.be.true;
	        expect(model.identityFields.has('UserGroup#id')).to.be.true;
	
	        expect(model.relations.has('User')).to.be.true;
	
	        var userModel = model.relations.get('User');
	        expect(userModel.has('groups')).to.be.true;
	        expect(userModel.get('groups').relation.belongsToMany).to.be.deep.equal({ entity: 'Group', field: 'id' });
	
	        expect(model.relations.has('Group')).to.be.true;
	        var groupModel = model.relations.get('Group');
	        expect(groupModel.has('users')).to.be.true;
	        expect(groupModel.get('users').relation.belongsToMany).to.be.deep.equal({ entity: 'User', field: 'id' });
	
	        expect(model.relations.has('UserGroup')).to.be.true;
	        var userGroupModel = model.relations.get('UserGroup');
	        expect(userGroupModel.has('user')).to.be.true;
	        expect(userGroupModel.get('user').relation.belongsTo).to.be.deep.equal({ entity: 'User', field: 'id' });
	
	        expect(userGroupModel.has('group')).to.be.true;
	        expect(userGroupModel.get('group').relation.belongsTo).to.be.deep.equal({ entity: 'Group', field: 'id' });
	
	        var model1 = new _model.ModelPackage();
	        model1.add(u);
	        model1.add(ug);
	        model1.ensureAll();
	
	        // console.log(util.inspect(userModel,{depth: 5}));
	        // console.log(util.inspect(model1,{depth: 5}));
	        // console.log(g.toJSON(model1));
	        // console.log(u.toJSON(model1));
	        // console.log(ug.toJSON(model1));
	
	        expect(model1.entities.size).to.be.equal(2);
	        expect(model1.identityFields.size).to.be.equal(2);
	        expect(model1.identityFields.has('User#id')).to.be.true;
	        expect(model1.identityFields.has('Group#id')).to.be.false;
	        expect(model1.identityFields.has('UserGroup#id')).to.be.true;
	
	        expect(model1.relations.has('User')).to.be.true;
	        var userModel1 = model1.relations.get('User');
	
	        // console.log(util.inspect(model1,{depth: 7}));
	        // console.log(util.inspect(userModel1,{depth: 7}));
	
	        expect(userModel1.has('groups')).to.be.true;
	        expect(userModel1.get('groups').relation.hasMany).to.be.deep.equal({ entity: 'UserGroup', field: 'user' });
	
	        expect(model1.relations.has('Group')).to.be.false;
	
	        expect(model1.relations.has('UserGroup')).to.be.true;
	        var userGroupModel1 = model1.relations.get('UserGroup');
	        expect(userGroupModel1.has('user')).to.be.true;
	        expect(userGroupModel1.get('user').relation.belongsTo).to.be.deep.equal({ entity: 'User', field: 'id' });
	
	        var model2 = new _model.ModelPackage();
	        model2.add(u);
	        model2.ensureAll();
	
	        // console.log(util.inspect(model2,{depth: 5}));
	        // console.log(g.toJSON(model2));
	        // console.log(u.toJSON(model2));
	        // console.log(ug.toJSON(model2));
	
	        expect(model2.entities.size).to.be.equal(1);
	        expect(model2.identityFields.size).to.be.equal(1);
	        expect(model2.identityFields.has('User#id')).to.be.true;
	        expect(model2.identityFields.has('Group#id')).to.be.false;
	        expect(model2.identityFields.has('UserGroup#id')).to.be.false;
	
	        expect(model2.relations.has('User')).to.be.true;
	        var userModel2 = model2.relations.get('User');
	        // console.log(util.inspect(userModel2,{depth: 5}));
	
	        expect(userModel2.size).to.be.equal(0);
	
	        expect(u.toJSON()).to.be.deep.equal({
	          name: 'User',
	          fields: [{
	            name: 'id',
	            identity: true
	          }, {
	            name: 'name'
	          }, {
	            name: 'groups',
	            relation: {
	              belongsToMany: 'Group#id',
	              using: 'UserGroup#user'
	            }
	          }]
	        });
	
	        expect(g.toJSON()).to.be.deep.equal({
	          name: 'Group',
	          fields: [{
	            name: 'id',
	            identity: true
	          }, {
	            name: 'name'
	          }, {
	            name: 'users',
	            relation: {
	              belongsToMany: 'User#id',
	              using: 'UserGroup#group'
	            }
	          }]
	        });
	        expect(ug.toJSON()).to.be.deep.equal({
	          name: 'UserGroup',
	          fields: [{
	            name: 'user',
	            relation: {
	              belongsTo: 'User#id'
	            }
	          }, {
	            name: 'group',
	            relation: {
	              belongsTo: 'Group#id'
	            }
	          }, _model.DEFAULT_ID_FIELD]
	        });
	      });
	
	      describe('fix M:N relations', function () {
	
	        var u = new _model.Entity({
	          name: 'User',
	          fields: [{
	            name: 'id'
	          }, {
	            name: 'name'
	          }, {
	            name: 'groups',
	            relation: {
	              name: 'UserGroup',
	              belongsToMany: 'Group#id',
	              using: '#user'
	            }
	          }]
	        });
	
	        var g = new _model.Entity({
	          name: 'Group',
	          fields: [{
	            name: 'id'
	          }, {
	            name: 'name'
	          }, {
	            name: 'users',
	            relation: {
	              belongsToMany: 'User#id',
	              using: 'UserGroup#group'
	            }
	          }]
	        });
	
	        var g2 = new _model.Entity({
	          name: 'Group',
	          fields: [{
	            name: 'id'
	          }, {
	            name: 'name'
	          }, {
	            name: 'users',
	            relation: {
	              name: 'UserGroup',
	              belongsToMany: 'User#id',
	              using: '#'
	            }
	          }]
	        });
	
	        var ug = new _model.Entity({
	          name: 'UserGroup',
	          fields: [{
	            name: 'user',
	            relation: {
	              belongsTo: 'User#id'
	            }
	          }, {
	            name: 'group',
	            relation: {
	              belongsTo: 'Group#'
	            }
	          }]
	        });
	
	        it('must Fix entity of the relation.ref if', function () {
	          expect(u.fields.get('groups').relation.toObject()).to.be.deep.equal({
	            name: 'UserGroup',
	            belongsToMany: 'Group#id',
	            using: 'UserGroup#user'
	          });
	        });
	
	        it('must set name of relation to entity name relation.ref', function () {
	          expect(g.fields.get('users').relation.toObject()).to.be.deep.equal({
	            name: 'UserGroup',
	            belongsToMany: 'User#id',
	            using: 'UserGroup#group'
	          });
	        });
	
	        it('must use Entity name as using field in hasMany relation', function () {
	          expect(g2.fields.get('users').relation.toObject()).to.be.deep.equal({
	            name: 'UserGroup',
	            belongsToMany: 'User#id',
	            using: 'UserGroup#group'
	          });
	        });
	
	        // console.log(util.inspect(u.toObject(),{depth: 7}));
	        // console.log(util.inspect(u,{depth: 7}));
	        // console.log(util.inspect(g.toObject(),{depth: 7}));
	        // console.log(util.inspect(ug.toObject(),{depth: 7}));
	      });
	    });
	  });
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(8);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(9);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_ID_FIELD = exports.ModelPackage = exports.BelongsToMany = exports.BelongsTo = exports.HasMany = exports.HasOne = exports.Field = exports.Entity = exports.compose = undefined;
	
	var _entity = __webpack_require__(11);
	
	var _field = __webpack_require__(15);
	
	var _modelpackage = __webpack_require__(24);
	
	var _hasone = __webpack_require__(17);
	
	var _hasmany = __webpack_require__(21);
	
	var _belongsto = __webpack_require__(22);
	
	var _belongstomany = __webpack_require__(23);
	
	var _definitions = __webpack_require__(19);
	
	var _compose = __webpack_require__(25);
	
	exports.compose = _compose.compose;
	exports.Entity = _entity.Entity;
	exports.Field = _field.Field;
	exports.HasOne = _hasone.HasOne;
	exports.HasMany = _hasmany.HasMany;
	exports.BelongsTo = _belongsto.BelongsTo;
	exports.BelongsToMany = _belongstomany.BelongsToMany;
	exports.ModelPackage = _modelpackage.ModelPackage;
	exports.DEFAULT_ID_FIELD = _definitions.DEFAULT_ID_FIELD;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Entity = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _modelbase = __webpack_require__(12);
	
	var _field = __webpack_require__(15);
	
	var _hasone = __webpack_require__(17);
	
	var _hasmany = __webpack_require__(21);
	
	var _belongsto = __webpack_require__(22);
	
	var _belongstomany = __webpack_require__(23);
	
	var _definitions = __webpack_require__(19);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Entity = exports.Entity = function (_ModelBase) {
	  _inherits(Entity, _ModelBase);
	
	  _createClass(Entity, null, [{
	    key: 'compose',
	    value: function compose(props, children) {
	      if (props) {
	        return new Entity(_extends({}, props, {
	          fields: children
	        }));
	      } else {
	        return new Entity();
	      }
	    }
	  }]);
	
	  function Entity(obj) {
	    _classCallCheck(this, Entity);
	
	    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, obj));
	  }
	
	  _createClass(Entity, [{
	    key: 'ensureIds',
	    value: function ensureIds(modelPackage) {
	      var _this2 = this;
	
	      this.identity.forEach(function (value) {
	        var ids = _this2.fields.get(value);
	        modelPackage.identityFields.set(ids.idKey.toString(), _this2);
	      });
	    }
	  }, {
	    key: 'ensureFKs',
	    value: function ensureFKs(modelPackage) {
	      var _this3 = this;
	
	      if (modelPackage) {
	        (function () {
	          var modelRelations = void 0;
	          if (modelPackage.relations.has(_this3.name)) {
	            modelRelations = modelPackage.relations.get(_this3.name);
	          } else {
	            modelRelations = new Map();
	            modelPackage.relations.set(_this3.name, modelRelations);
	          }
	
	          _this3.relations.forEach(function (value) {
	            var ref = _this3.fields.get(value);
	            // must be different to apply fixup
	            modelRelations.set(ref.name, ref.clone());
	          });
	
	          var missing = _this3.checkRelations(modelPackage);
	          missing.forEach(function (r) {
	            modelRelations.delete(r.name);
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'checkRelations',
	    value: function checkRelations(modelPackage) {
	      var missing = [];
	      if (modelPackage.relations.has(this.name)) {
	        var modelRelations = modelPackage.relations.get(this.name);
	        modelRelations.forEach(function (field) {
	          var r = field.relation;
	          var missingRef = true;
	          if (!r.ref.field) {
	            // discover fieldName
	            if (modelPackage.entities.has(r.ref.entity)) {
	              var e = modelPackage.entities.get(r.ref.entity);
	              r.ref.field = e.identity[0];
	              missingRef = false;
	            }
	          }
	
	          var fType = r instanceof _hasone.HasOne ? 'HasOne' : r instanceof _hasmany.HasMany ? 'HasMany' : r instanceof _belongstomany.BelongsToMany ? 'BelongsToMany' : 'BelongsTo';
	          switch (fType) {
	            case 'HasOne':
	              if (modelPackage.entities.has(r.ref.entity)) {
	                var refe = modelPackage.entities.get(r.ref.entity);
	                if (relations.fields.has(r.ref.field)) {
	                  missingRef = false;
	                }
	              }
	              break;
	            case 'HasMany':
	              // must be in ref store
	              if (modelPackage.entities.has(r.ref.entity)) {
	                var _refe = modelPackage.entities.get(r.ref.entity);
	                if (_refe.fields.has(r.ref.field)) {
	                  missingRef = false;
	                }
	              }
	              break;
	            case 'BelongsToMany':
	              // must be in ref store
	              if (modelPackage.entities.has(r.ref.entity)) {
	                var _refe2 = modelPackage.entities.get(r.ref.entity);
	                if (_refe2.fields.has(r.ref.field)) {
	                  missingRef = false;
	                }
	              } else {
	                var using = r.using;
	                if (using && modelPackage.entities.has(using.entity)) {
	                  // здесь нужно будет изменить тип ассоциации
	
	                  var replaceRef = r.toJSON();
	                  replaceRef.hasMany = replaceRef.using;
	
	                  delete replaceRef.belongsToMany;
	                  delete replaceRef.using;
	
	                  field.$obj.relation = new _hasmany.HasMany(replaceRef);
	                  missingRef = false;
	                }
	              }
	              break;
	            case 'BelongsTo':
	              // must be in identity store
	              if (modelPackage.identityFields.has(r.ref.toString())) {
	                missingRef = false;
	              }
	              break;
	          }
	
	          if (missingRef) {
	            missing.push(field);
	          }
	        });
	      }
	      return missing;
	    }
	  }, {
	    key: 'removeIds',
	    value: function removeIds(modelPackage) {
	      var _this4 = this;
	
	      this.identity.forEach(function (value) {
	        var ids = _this4.fields.get(value);
	        modelPackage.identityFields.delete(ids.idKey.toString());
	      });
	    }
	  }, {
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      var _this5 = this;
	
	      if (obj) {
	        (function () {
	          _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'updateWith', _this5).call(_this5, obj);
	
	          var result = _this5.$obj ? _extends({}, _this5.$obj) : {};
	
	          result.name = result.name.slice(0, 1).toUpperCase() + result.name.slice(1);
	
	          var fields = new Map();
	          var relations = new Set();
	          var identity = new Set();
	          var required = new Set();
	          var indexed = new Set();
	
	          obj.fields.forEach(function (f) {
	
	            var field = new _field.Field(_extends({}, f, { entity: result.name }));
	
	            if (fields.has(field.name)) {
	              throw new Error('the same field ' + field.name + ' is already exists in ' + obj.name + ' entry');
	            }
	
	            fields.set(field.name, field);
	
	            if (field.identity) {
	              identity.add(field.name);
	            }
	
	            if (field.required) {
	              required.add(field.name);
	            }
	
	            if (field.relation) {
	              relations.add(field.name);
	            }
	
	            if (field.indexed) {
	              indexed.add(field.name);
	            }
	          });
	
	          if (identity.size == 0) {
	            var f = void 0;
	            if (fields.has('id')) {
	              f = fields.get('id');
	            } else if (fields.has('_id')) {
	              f = fields.get('_id');
	            } else {
	              f = new _field.Field(_extends({}, _definitions.DEFAULT_ID_FIELD, { entity: result.name }));
	              fields.set(f.name, f);
	            }
	
	            f.identity = true;
	            identity.add(f.name);
	            required.add(f.name);
	          }
	
	          result.relations = relations;
	          result.identity = identity;
	          result.required = required;
	          result.fields = fields;
	
	          _this5.$obj = _extends({}, result);
	        })();
	      }
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject(modelPackage) {
	      var _this6 = this;
	
	      if (!modelPackage) {
	        var props = this.$obj;
	        var res = _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'toObject', this).call(this);
	        return JSON.parse(JSON.stringify(_extends({}, res, {
	          fields: [].concat(_toConsumableArray(props.fields.values())).map(function (f) {
	            return f.toObject();
	          })
	        })));
	      } else {
	        var _ret3 = function () {
	          var modelRelations = modelPackage.relations.get(_this6.name);
	          if (modelRelations) {
	            var _props = _this6.$obj;
	            var _res = _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'toObject', _this6).call(_this6);
	            return {
	              v: JSON.parse(JSON.stringify(_extends({}, _res, {
	                fields: [].concat(_toConsumableArray(_props.fields.values())).map(function (f) {
	                  if (_this6.relations.has(f.name)) {
	                    if (modelRelations.has(f.name)) {
	                      return f.toObject(modelPackage);
	                    }
	                  } else {
	                    return f.toObject(modelPackage);
	                  }
	                }).filter(function (f) {
	                  return f;
	                })
	              })))
	            };
	          }
	        }();
	
	        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	      }
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON(modelPackage) {
	      var _this7 = this;
	
	      if (!modelPackage) {
	        var props = this.$obj;
	        var res = _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'toJSON', this).call(this);
	        return JSON.parse(JSON.stringify(_extends({}, res, {
	          fields: [].concat(_toConsumableArray(props.fields.values())).map(function (f) {
	            return f.toJSON();
	          })
	        })));
	      } else {
	        var _ret4 = function () {
	          var modelRelations = modelPackage.relations.get(_this7.name);
	          if (modelRelations) {
	            var _props2 = _this7.$obj;
	            var _res2 = _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'toJSON', _this7).call(_this7);
	            return {
	              v: JSON.parse(JSON.stringify(_extends({}, _res2, {
	                fields: [].concat(_toConsumableArray(_props2.fields.values())).map(function (f) {
	                  if (_this7.relations.has(f.name)) {
	                    if (modelRelations.has(f.name)) {
	                      return f.toJSON(modelPackage);
	                    }
	                  } else {
	                    return f.toJSON(modelPackage);
	                  }
	                }).filter(function (f) {
	                  return f;
	                })
	              })))
	            };
	          }
	        }();
	
	        if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
	      }
	    }
	  }, {
	    key: 'relations',
	    get: function get() {
	      return this.$obj ? this.$obj.relations : undefined;
	    }
	  }, {
	    key: 'required',
	    get: function get() {
	      return this.$obj ? this.$obj.required : undefined;
	    }
	  }, {
	    key: 'identity',
	    get: function get() {
	      return this.$obj ? this.$obj.identity : undefined;
	    }
	  }, {
	    key: 'fields',
	    get: function get() {
	      return this.$obj ? this.$obj.fields : undefined;
	    }
	  }, {
	    key: 'indexed',
	    get: function get() {
	      return this.$obj ? this.$obj.indexed : undefined;
	    }
	  }]);

	  return Entity;
	}(_modelbase.ModelBase);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModelBase = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _camelcase = __webpack_require__(13);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	var _decamelize = __webpack_require__(14);
	
	var _decamelize2 = _interopRequireDefault(_decamelize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ModelBase = exports.ModelBase = function () {
	  function ModelBase(obj) {
	    _classCallCheck(this, ModelBase);
	
	    if (obj) {
	      this.updateWith(obj);
	    }
	  }
	
	  _createClass(ModelBase, [{
	    key: 'toString',
	    value: function toString() {
	      return JSON.stringify(this.toObject());
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      return {
	        name: props.name || props.name_,
	        title: props.title || props.title_,
	        description: props.description || props.description_
	      };
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      return {
	        name: props.name_,
	        title: props.title_,
	        description: props.description_
	      };
	    }
	  }, {
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var name_ = obj.name;
	        var title_ = obj.title;
	        var description_ = obj.description;
	
	        var name = (0, _camelcase2.default)(name_.trim());
	
	        var title = title_ ? title_.trim() : '';
	
	        var description = description_ ? description_.trim() : '';
	
	        if (!title) {
	          title = (0, _decamelize2.default)(name, ' ');
	        }
	        title = title.slice(0, 1).toUpperCase() + title.slice(1);
	
	        if (!description) {
	          description = title || title_;
	        }
	        description = description.slice(0, 1).toUpperCase() + description.slice(1);
	
	        result.name_ = name_;
	        result.name = name;
	
	        result.title_ = title_;
	        result.title = title;
	
	        result.description_ = description_;
	        result.description = description;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new this.constructor(this.toJSON());
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this.$obj ? this.$obj.name : undefined;
	    }
	  }, {
	    key: 'title',
	    get: function get() {
	      var props = this.$obj;
	      return this.$obj ? props.title || props.title_ : undefined;
	    }
	  }, {
	    key: 'description',
	    get: function get() {
	      var props = this.$obj;
	      return this.$obj ? props.description || props.description_ : undefined;
	    }
	  }]);

	  return ModelBase;
	}();

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	function preserveCamelCase(str) {
		var isLastCharLower = false;
	
		for (var i = 0; i < str.length; i++) {
			var c = str.charAt(i);
	
			if (isLastCharLower && (/[a-zA-Z]/).test(c) && c.toUpperCase() === c) {
				str = str.substr(0, i) + '-' + str.substr(i);
				isLastCharLower = false;
				i++;
			} else {
				isLastCharLower = (c.toLowerCase() === c);
			}
		}
	
		return str;
	}
	
	module.exports = function () {
		var str = [].map.call(arguments, function (str) {
			return str.trim();
		}).filter(function (str) {
			return str.length;
		}).join('-');
	
		if (!str.length) {
			return '';
		}
	
		if (str.length === 1) {
			return str;
		}
	
		if (!(/[_.\- ]+/).test(str)) {
			if (str === str.toUpperCase()) {
				return str.toLowerCase();
			}
	
			if (str[0] !== str[0].toLowerCase()) {
				return str[0].toLowerCase() + str.slice(1);
			}
	
			return str;
		}
	
		str = preserveCamelCase(str);
	
		return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
			return p1.toUpperCase();
		});
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str, sep) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}
	
		sep = typeof sep === 'undefined' ? '_' : sep;
	
		return str
			.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
			.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
			.toLowerCase();
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Field = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fieldbase = __webpack_require__(16);
	
	var _entity = __webpack_require__(11);
	
	var _hasone = __webpack_require__(17);
	
	var _hasmany = __webpack_require__(21);
	
	var _belongsto = __webpack_require__(22);
	
	var _belongstomany = __webpack_require__(23);
	
	var _ref = __webpack_require__(20);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function discoverFieldType(obj) {
	  // сделать проверку по полю...
	  if (obj.hasOne) {
	    return 'HasOne';
	  } else if (obj.hasMany) {
	    return 'HasMany';
	  } else if (obj.belongsTo) {
	    return 'BelongsTo';
	  } else if (obj.belongsToMany) {
	    return 'BelongsToMany';
	  } else {
	    console.warn('undefined relation type of ' + JSON.stringify(obj));
	    return 'undefined';
	  }
	};
	
	var Field = exports.Field = function (_FieldBase) {
	  _inherits(Field, _FieldBase);
	
	  _createClass(Field, null, [{
	    key: 'compose',
	    value: function compose(props, children) {
	      return _extends({}, props, {
	        relation: children ? children[0] : undefined
	      });
	    }
	  }]);
	
	  function Field(obj) {
	    _classCallCheck(this, Field);
	
	    return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, obj));
	  }
	
	  _createClass(Field, [{
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	        _get(Field.prototype.__proto__ || Object.getPrototypeOf(Field.prototype), 'updateWith', this).call(this, obj);
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var type_ = obj.type;
	        var type = type_ || 'string';
	
	        var identity_ = obj.identity;
	        var identity = identity_ || false;
	
	        var required_ = obj.required;
	        var required = required || false;
	
	        var indexed_ = obj.indexed;
	        var indexed = indexed || identity;
	
	        result.type_ = type_;
	        result.type = type;
	
	        result.identity_ = identity_;
	        result.identity = identity;
	
	        result.indexed_ = indexed_;
	        result.indexed = indexed;
	
	        if (result.identity) {
	          // это то как выглядит ключ для внешних ссылок
	          result.idKey = new _ref.Ref(result.entity, result.name);
	        }
	
	        result.required_ = required_;
	        result.required = identity_ || required_ || false;
	
	        if (obj.relation) {
	          var relation_ = obj.relation;
	          var relation = void 0;
	
	          switch (discoverFieldType(relation_)) {
	            case 'HasOne':
	              relation = new _hasone.HasOne(_extends({}, relation_, { entity: obj.entity }));
	              break;
	            case 'HasMany':
	              relation = new _hasmany.HasMany(_extends({}, relation_, { entity: obj.entity }));
	              break;
	            case 'BelongsTo':
	              relation = new _belongsto.BelongsTo(_extends({}, relation_, { entity: obj.entity }));
	              break;
	            case 'BelongsToMany':
	              relation = new _belongstomany.BelongsToMany(_extends({}, relation_, { entity: obj.entity }));
	              break;
	            case 'unknown':
	              relation = undefined;
	          }
	
	          result.relation = relation;
	          delete result.type_;
	          delete result.type;
	        }
	
	        this.$obj = _extends({}, result);
	      }
	    }
	
	    // it get fixed object
	
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      var res = _get(Field.prototype.__proto__ || Object.getPrototypeOf(Field.prototype), 'toObject', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        type: props.type || props.type_,
	        identity: props.identity || props.identity_,
	        required: props.required || props.required_,
	        indexed: props.indexed || props.indexed_,
	        idKey: props.idKey ? props.idKey.toString() : undefined,
	        relation: props.relation ? props.relation.toObject() : undefined
	      })));
	    }
	
	    // it get clean object with no default values
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      var res = _get(Field.prototype.__proto__ || Object.getPrototypeOf(Field.prototype), 'toJSON', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        type: props.type_,
	        identity: props.identity_,
	        required: props.required_,
	        indexed: props.indexed_,
	        relation: props.relation ? props.relation.toJSON() : undefined
	      })));
	    }
	  }, {
	    key: 'type',
	    get: function get() {
	      return this.$obj ? this.$obj.type : undefined;
	    }
	  }, {
	    key: 'identity',
	    get: function get() {
	      return this.$obj ? this.$obj.identity : undefined;
	    },
	    set: function set(value) {
	      if (value) {
	        this.$obj.idKey = new _ref.Ref(this.$obj.entity, this.$obj.name);
	      } else {
	        this.$obj.idKey = undefined;
	      }
	      this.$obj.identity = this.$obj.identity_ = value;
	    }
	  }, {
	    key: 'required',
	    get: function get() {
	      return this.$obj ? this.$obj.required : undefined;
	    }
	  }, {
	    key: 'indexed',
	    get: function get() {
	      return this.$obj ? this.$obj.indexed : undefined;
	    }
	  }, {
	    key: 'idKey',
	    get: function get() {
	      return this.$obj ? this.$obj.idKey : undefined;
	    }
	  }, {
	    key: 'relation',
	    get: function get() {
	      return this.$obj ? this.$obj.relation : undefined;
	    }
	  }]);

	  return Field;
	}(_fieldbase.FieldBase);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FieldBase = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _modelbase = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FieldBase = exports.FieldBase = function (_ModelBase) {
	  _inherits(FieldBase, _ModelBase);
	
	  function FieldBase(obj) {
	    _classCallCheck(this, FieldBase);
	
	    return _possibleConstructorReturn(this, (FieldBase.__proto__ || Object.getPrototypeOf(FieldBase)).call(this, obj));
	  }
	
	  _createClass(FieldBase, [{
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	        _get(FieldBase.prototype.__proto__ || Object.getPrototypeOf(FieldBase.prototype), 'updateWith', this).call(this, obj);
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var entity_ = obj.entity;
	        var entity = entity_;
	
	        result.entity = entity;
	        result.entity_ = entity_;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	
	    // it get fixed object
	
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      var res = _get(FieldBase.prototype.__proto__ || Object.getPrototypeOf(FieldBase.prototype), 'toObject', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        entity: props.entity || props.entity_
	      })));
	    }
	
	    // it get clean object with no default values
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      var res = _get(FieldBase.prototype.__proto__ || Object.getPrototypeOf(FieldBase.prototype), 'toJSON', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res)));
	    }
	  }, {
	    key: 'entity',
	    get: function get() {
	      return this.$obj ? this.$obj.entity : undefined;
	    }
	  }]);

	  return FieldBase;
	}(_modelbase.ModelBase);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HasOne = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(18);
	
	var _definitions = __webpack_require__(19);
	
	var _ref = __webpack_require__(20);
	
	var _camelcase = __webpack_require__(13);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HasOne = exports.HasOne = function (_RefBase) {
	  _inherits(HasOne, _RefBase);
	
	  _createClass(HasOne, null, [{
	    key: 'compose',
	    value: function compose(props, children) {
	      var result = _extends({}, props);
	      if (result.ref && !result.hasOne) {
	        result.hasOne = result.ref;
	        delete result.ref;
	      }
	      return result;
	    }
	  }]);
	
	  function HasOne(obj) {
	    _classCallCheck(this, HasOne);
	
	    return _possibleConstructorReturn(this, (HasOne.__proto__ || Object.getPrototypeOf(HasOne)).call(this, obj));
	  }
	
	  _createClass(HasOne, [{
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	        _get(HasOne.prototype.__proto__ || Object.getPrototypeOf(HasOne.prototype), 'updateWith', this).call(this, obj);
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var hasOne_ = obj.hasOne;
	
	        var hasOne = void 0;
	        if (hasOne_) {
	          hasOne = new _ref.Ref();
	          var res = hasOne_.match(_definitions.REF_PATTERN);
	          hasOne.entity = res[1] || obj.entity;
	          hasOne.field = res[2] ? (0, _camelcase2.default)(res[2].trim()) : '';
	        }
	
	        result.hasOne_ = hasOne_;
	        result.hasOne = hasOne;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	
	    // it get fixed object
	
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      var res = _get(HasOne.prototype.__proto__ || Object.getPrototypeOf(HasOne.prototype), 'toObject', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        hasOne: props.hasOne ? props.hasOne.toString() : undefined
	      })));
	    }
	
	    // it get clean object with no default values
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      var res = _get(HasOne.prototype.__proto__ || Object.getPrototypeOf(HasOne.prototype), 'toJSON', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        hasOne: props.hasOne_
	      })));
	    }
	  }, {
	    key: 'hasOne',
	    get: function get() {
	      return this.$obj ? this.$obj.hasOne : undefined;
	    }
	  }, {
	    key: 'ref',
	    get: function get() {
	      return this.$obj ? this.$obj.hasOne : undefined;
	    }
	  }]);

	  return HasOne;
	}(_refbase.RefBase);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RefBase = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _camelcase = __webpack_require__(13);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RefBase = exports.RefBase = function () {
	  function RefBase(obj) {
	    _classCallCheck(this, RefBase);
	
	    if (obj) {
	      this.updateWith(obj);
	    }
	  }
	
	  _createClass(RefBase, [{
	    key: 'toString',
	    value: function toString() {
	      return JSON.stringify(this.toObject());
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      return {
	        name: props.name || props.name_
	      };
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      return {
	        name: props.name_
	      };
	    }
	  }, {
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var name_ = obj.name;
	
	        var name = name ? (0, _camelcase2.default)(name_.trim()) : name;
	
	        result.name_ = name_;
	        result.name = name;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new this.constructor(this.toJSON());
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this.$obj ? this.$obj.name : undefined;
	    }
	  }]);

	  return RefBase;
	}();

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var REF_PATTERN = exports.REF_PATTERN = /^(.*?)(?:#(.*?))?$/;
	
	var DEFAULT_ID_FIELDNAME = exports.DEFAULT_ID_FIELDNAME = 'id';
	
	var DEFAULT_ID_FIELD = exports.DEFAULT_ID_FIELD = {
	  name: DEFAULT_ID_FIELDNAME,
	  identity: true,
	  required: true
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Ref = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _definitions = __webpack_require__(19);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ref = exports.Ref = function () {
	  function Ref(entity, field) {
	    _classCallCheck(this, Ref);
	
	    if (typeof entity == 'string') {
	      this.entity = entity;
	      this.field = field;
	    } else if (entity instanceof Object) {
	      this.entity = entity.entity;
	      this.field = entity.field;
	    }
	  }
	
	  _createClass(Ref, [{
	    key: 'toString',
	    value: function toString() {
	      return this.entity + '#' + (this.field || _definitions.DEFAULT_ID_FIELDNAME);
	    }
	  }]);
	
	  return Ref;
	}();
	
	;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HasMany = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(18);
	
	var _definitions = __webpack_require__(19);
	
	var _ref = __webpack_require__(20);
	
	var _camelcase = __webpack_require__(13);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HasMany = exports.HasMany = function (_RefBase) {
	  _inherits(HasMany, _RefBase);
	
	  _createClass(HasMany, null, [{
	    key: 'compose',
	    value: function compose(props, children) {
	      var result = _extends({}, props);
	      if (result.ref && !result.hasMany) {
	        result.hasMany = result.ref;
	        delete result.ref;
	      }
	      return result;
	    }
	  }]);
	
	  function HasMany(obj) {
	    _classCallCheck(this, HasMany);
	
	    return _possibleConstructorReturn(this, (HasMany.__proto__ || Object.getPrototypeOf(HasMany)).call(this, obj));
	  }
	
	  _createClass(HasMany, [{
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	        _get(HasMany.prototype.__proto__ || Object.getPrototypeOf(HasMany.prototype), 'updateWith', this).call(this, obj);
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var hasMany_ = obj.hasMany;
	
	        var hasMany = void 0;
	        if (hasMany_) {
	          hasMany = new _ref.Ref();
	          var res = hasMany_.match(_definitions.REF_PATTERN);
	          hasMany.entity = res[1] || obj.entity;
	          hasMany.field = res[2] ? (0, _camelcase2.default)(res[2].trim()) : '';
	        }
	
	        result.hasMany_ = hasMany_;
	        result.hasMany = hasMany;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	    // it get fixed object
	
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      var res = _get(HasMany.prototype.__proto__ || Object.getPrototypeOf(HasMany.prototype), 'toObject', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        hasMany: props.hasMany ? props.hasMany.toString() : undefined
	      })));
	    }
	
	    // it get clean object with no default values
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      var res = _get(HasMany.prototype.__proto__ || Object.getPrototypeOf(HasMany.prototype), 'toJSON', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        hasMany: props.hasMany_
	      })));
	    }
	  }, {
	    key: 'hasMany',
	    get: function get() {
	      return this.$obj ? this.$obj.hasMany : undefined;
	    }
	  }, {
	    key: 'ref',
	    get: function get() {
	      return this.$obj ? this.$obj.hasMany : undefined;
	    }
	  }]);

	  return HasMany;
	}(_refbase.RefBase);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BelongsTo = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(18);
	
	var _definitions = __webpack_require__(19);
	
	var _ref = __webpack_require__(20);
	
	var _camelcase = __webpack_require__(13);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BelongsTo = exports.BelongsTo = function (_RefBase) {
	  _inherits(BelongsTo, _RefBase);
	
	  _createClass(BelongsTo, null, [{
	    key: 'compose',
	    value: function compose(props, children) {
	      var result = _extends({}, props);
	      if (result.ref && !result.belongsTo) {
	        result.belongsTo = result.ref;
	        delete result.ref;
	      }
	      return result;
	    }
	  }]);
	
	  function BelongsTo(obj) {
	    _classCallCheck(this, BelongsTo);
	
	    return _possibleConstructorReturn(this, (BelongsTo.__proto__ || Object.getPrototypeOf(BelongsTo)).call(this, obj));
	  }
	
	  _createClass(BelongsTo, [{
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	        _get(BelongsTo.prototype.__proto__ || Object.getPrototypeOf(BelongsTo.prototype), 'updateWith', this).call(this, obj);
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var belongsTo_ = obj.belongsTo;
	
	        var belongsTo = void 0;
	        if (belongsTo_) {
	          belongsTo = new _ref.Ref();
	          var res = belongsTo_.match(_definitions.REF_PATTERN);
	          belongsTo.entity = res[1] || obj.entity;
	          belongsTo.field = res[2] ? (0, _camelcase2.default)(res[2].trim()) : '';
	        }
	
	        result.belongsTo_ = belongsTo_;
	        result.belongsTo = belongsTo;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	
	    // it get fixed object
	
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      var res = _get(BelongsTo.prototype.__proto__ || Object.getPrototypeOf(BelongsTo.prototype), 'toObject', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        belongsTo: props.belongsTo ? props.belongsTo.toString() : undefined
	      })));
	    }
	
	    // it get clean object with no default values
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      var res = _get(BelongsTo.prototype.__proto__ || Object.getPrototypeOf(BelongsTo.prototype), 'toJSON', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        belongsTo: props.belongsTo_
	      })));
	    }
	  }, {
	    key: 'belongsTo',
	    get: function get() {
	      return this.$obj ? this.$obj.belongsTo : undefined;
	    }
	  }, {
	    key: 'ref',
	    get: function get() {
	      return this.$obj ? this.$obj.belongsTo : undefined;
	    }
	  }]);

	  return BelongsTo;
	}(_refbase.RefBase);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BelongsToMany = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(18);
	
	var _definitions = __webpack_require__(19);
	
	var _ref = __webpack_require__(20);
	
	var _camelcase = __webpack_require__(13);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BelongsToMany = exports.BelongsToMany = function (_RefBase) {
	  _inherits(BelongsToMany, _RefBase);
	
	  _createClass(BelongsToMany, null, [{
	    key: 'compose',
	    value: function compose(props, children) {
	      var result = _extends({}, props);
	      if (result.ref && !result.belongsToMany) {
	        result.belongsToMany = result.ref;
	        delete result.ref;
	      }
	      return result;
	    }
	  }]);
	
	  function BelongsToMany(obj) {
	    _classCallCheck(this, BelongsToMany);
	
	    return _possibleConstructorReturn(this, (BelongsToMany.__proto__ || Object.getPrototypeOf(BelongsToMany)).call(this, obj));
	  }
	
	  _createClass(BelongsToMany, [{
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	        _get(BelongsToMany.prototype.__proto__ || Object.getPrototypeOf(BelongsToMany.prototype), 'updateWith', this).call(this, obj);
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        var belongsToMany_ = obj.belongsToMany;
	
	        var using_ = obj.using;
	
	        var belongsToMany = void 0;
	        if (belongsToMany_) {
	          belongsToMany = new _ref.Ref();
	          var res = belongsToMany_.match(_definitions.REF_PATTERN);
	          belongsToMany.entity = res[1] || obj.entity;
	          belongsToMany.field = res[2] ? (0, _camelcase2.default)(res[2].trim()) : '';
	        }
	
	        var using = void 0;
	        if (using_) {
	          using = new _ref.Ref();
	          var _res = using_.match(_definitions.REF_PATTERN);
	          using.entity = _res[1] || obj.name || obj.entity;
	          using.field = _res[2] ? (0, _camelcase2.default)(_res[2].trim()) : obj.entity.toLowerCase();
	        } else {
	          using = new _ref.Ref((obj.name || obj.entity) + '#' + obj.entity.toLowerCase());
	        }
	
	        if (!obj.name_ && using) {
	          result.name = using.entity;
	        }
	
	        result.belongsToMany_ = belongsToMany_;
	        result.belongsToMany = belongsToMany;
	
	        result.using_ = using_;
	        result.using = using;
	
	        this.$obj = _extends({}, result);
	      }
	    }
	    // it get fixed object
	
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      var props = this.$obj;
	      var res = _get(BelongsToMany.prototype.__proto__ || Object.getPrototypeOf(BelongsToMany.prototype), 'toObject', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        belongsToMany: props.belongsToMany ? props.belongsToMany.toString() : undefined,
	        using: props.using ? props.using.toString() : undefined
	      })));
	    }
	
	    // it get clean object with no default values
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var props = this.$obj;
	      var res = _get(BelongsToMany.prototype.__proto__ || Object.getPrototypeOf(BelongsToMany.prototype), 'toJSON', this).call(this);
	      return JSON.parse(JSON.stringify(_extends({}, res, {
	        belongsToMany: props.belongsToMany_,
	        using: props.using_
	      })));
	    }
	  }, {
	    key: 'belongsToMany',
	    get: function get() {
	      return this.$obj ? this.$obj.belongsToMany : undefined;
	    }
	  }, {
	    key: 'using',
	    get: function get() {
	      return this.$obj ? this.$obj.using : undefined;
	    }
	  }, {
	    key: 'ref',
	    get: function get() {
	      return this.$obj ? this.$obj.belongsToMany : undefined;
	    }
	  }]);

	  return BelongsToMany;
	}(_refbase.RefBase);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModelPackage = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _entity = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ModelPackage = exports.ModelPackage = function () {
	  _createClass(ModelPackage, null, [{
	    key: 'compose',
	    value: function compose(props, entityList) {
	      var result = new ModelPackage(props);
	      entityList.forEach(function (entity) {
	        result.add(entity);
	      });
	      return result;
	    }
	  }]);
	
	  function ModelPackage() {
	    _classCallCheck(this, ModelPackage);
	
	    // список всех entity
	    this.entities = new Map();
	    // существующие в пакете identity
	    this.identityFields = new Map();
	    // ref для исправлений
	    this.relations = new Map();
	  }
	
	  _createClass(ModelPackage, [{
	    key: 'add',
	    value: function add(entity) {
	      if (entity instanceof _entity.Entity) {
	        this.entities.set(entity.name, entity);
	        entity.ensureIds(this);
	      }
	      return entity;
	    }
	  }, {
	    key: 'get',
	    value: function get(name) {
	      return this.entities.get(name);
	    }
	  }, {
	    key: 'create',
	    value: function create(json) {
	      return this.add(new _entity.Entity(json));
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	      var entity = this.entities.get(name);
	      if (entity) {
	        this.entities.delete(name);
	        entity.removeIds(this);
	      }
	    }
	  }, {
	    key: 'ensureAll',
	    value: function ensureAll() {
	      var _this = this;
	
	      this.entities.forEach(function (e) {
	        e.ensureFKs(_this);
	      });
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this.entities.size;
	    }
	  }]);

	  return ModelPackage;
	}();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = compose;
	
	var _entity = __webpack_require__(11);
	
	var _field = __webpack_require__(15);
	
	var _modelpackage = __webpack_require__(24);
	
	var _hasone = __webpack_require__(17);
	
	var _hasmany = __webpack_require__(21);
	
	var _belongsto = __webpack_require__(22);
	
	var _belongstomany = __webpack_require__(23);
	
	function compose(T_, props) {
	  var T = void 0;
	  if ('string' == typeof T_) {
	    switch (T_.toLowerCase()) {
	      case 'entity':
	        T = _entity.Entity;
	        break;
	      case 'field':
	        T = _field.Field;
	        break;
	      case 'hasone':
	        T = _hasone.HasOne;
	        break;
	      case 'hasmany':
	        T = _hasmany.HasMany;
	        break;
	      case 'belongsto':
	        T = _belongsto.BelongsTo;
	        break;
	      case 'belongstomany':
	        T = _belongstomany.BelongsToMany;
	        break;
	      case 'model':
	      case 'modelPackage':
	        T = _modelpackage.ModelPackage;
	        break;
	    }
	  } else {
	    T = T_;
	  }
	
	  for (var _len = arguments.length, attr = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    attr[_key - 2] = arguments[_key];
	  }
	
	  return T.compose(props, attr);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(6);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _model = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** @jsx compose */
	describe('react-way', function () {
	
	  describe('Entity', function () {
	
	    it('create empty model', function () {
	      expect(function () {
	        return (0, _model.compose)(_model.Entity, null);
	      }).to.not.throw();
	    });
	
	    it('not create wrong model', function () {
	      expect(function () {
	        return (0, _model.compose)(_model.Entity, { some: 1 });
	      }).to.throw();
	    });
	
	    it('not throws with empty data', function () {
	      var e = (0, _model.compose)(_model.Entity, null);
	      expect(function () {
	        return e.updateWith();
	      }).to.not.throw();
	    });
	
	    it('throws with invalid data', function () {
	      var e = (0, _model.compose)(_model.Entity, null);
	      expect(function () {
	        return e.updateWith({ some: 1 });
	      }).to.throw();
	    });
	
	    it('can\'t access to private fields', function () {
	      var e = (0, _model.compose)(_model.Entity, null);
	
	      expect(function () {
	        return e.title = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.description = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.name = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.relations = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.required = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.identity = 'someThing';
	      }).to.throw();
	      expect(function () {
	        return e.fields = 'someThing';
	      }).to.throw();
	    });
	
	    it('default data is undefined', function () {
	      var e = (0, _model.compose)(_model.Entity, null);
	      expect(e.title).to.be.an('undefined');
	      expect(e.description).to.be.an('undefined');
	      expect(e.name).to.be.an('undefined');
	      expect(e.relations).to.be.an('undefined');
	      expect(e.required).to.be.an('undefined');
	      expect(e.identity).to.be.an('undefined');
	      expect(e.fields).to.be.an('undefined');
	    });
	
	    it('_id and id is the same', function () {
	      expect(function () {
	        return (0, _model.compose)(
	          'entity',
	          { name: 'A' },
	          (0, _model.compose)('field', { name: '_id' }),
	          (0, _model.compose)('field', { name: '_id', identity: true })
	        );
	      }).to.throw();
	    });
	
	    it('accept valid data', function () {
	      var e = (0, _model.compose)('entity', null);
	
	      expect(function () {
	        return e.updateWith({
	          name: ' test Entity ',
	          title: ' test Entity title ',
	          description: ' test Entity describe ',
	          fields: [{
	            name: 'id',
	            identity: true,
	            required: false
	          }, {
	            name: 'Field1'
	          }, {
	            name: 'field2',
	            title: 'title field2'
	          }, {
	            name: 'Field 3',
	            description: 'field3 description'
	          }, {
	            name: 'field4',
	            title: 'Field4 title',
	            description: 'field4 description',
	            required: true
	          }, {
	            name: 'field5',
	            type: 'number'
	          }, {
	            name: 'field6Ref',
	            relation: {
	              hasOne: 'Model/User#id'
	            }
	          }, {
	            name: 'field7Ref',
	            relation: {
	              hasOne: 'Actor#id'
	            }
	          }, {
	            name: 'field8Ref',
	            relation: {
	              belongsTo: '#Field1'
	            }
	          }]
	        });
	      }).to.not.throw();
	
	      expect(e.name).to.be.equal('TestEntity');
	      expect(e.fields.size).to.be.equal(9);
	      expect(e.relations.size).to.be.equal(3);
	      expect(e.identity.size).to.be.equal(1);
	      expect(e.required.size).to.be.equal(2);
	
	      expect(e.toJSON()).to.deep.equal({
	        name: ' test Entity ',
	        title: ' test Entity title ',
	        description: ' test Entity describe ',
	        fields: [{
	          name: 'id',
	          identity: true,
	          required: false
	        }, {
	          name: 'Field1'
	        }, {
	          name: 'field2',
	          title: 'title field2'
	        }, {
	          name: 'Field 3',
	          description: 'field3 description'
	        }, {
	          name: 'field4',
	          title: 'Field4 title',
	          description: 'field4 description',
	          required: true
	        }, {
	          name: 'field5',
	          type: 'number'
	        }, {
	          name: 'field6Ref',
	          relation: {
	            hasOne: 'Model/User#id'
	          }
	        }, {
	          name: 'field7Ref',
	          relation: {
	            hasOne: 'Actor#id'
	          }
	        }, {
	          name: 'field8Ref',
	          relation: {
	            belongsTo: '#Field1'
	          }
	        }]
	      });
	
	      expect(e.toObject()).to.deep.equal({
	        name: 'TestEntity',
	        title: 'Test Entity title',
	        description: 'Test Entity describe',
	        fields: [{
	          name: 'id',
	          title: 'Id',
	          entity: 'TestEntity',
	          idKey: 'TestEntity#id',
	          description: 'Id',
	          type: 'string',
	          identity: true,
	          required: true,
	          indexed: true
	        }, {
	          name: 'field1',
	          entity: 'TestEntity',
	          title: 'Field1',
	          description: 'Field1',
	          type: 'string'
	        }, {
	          name: 'field2',
	          entity: 'TestEntity',
	          title: 'Title field2',
	          description: 'Title field2',
	          type: 'string'
	        }, {
	          name: 'field3',
	          entity: 'TestEntity',
	          title: 'Field3',
	          description: 'Field3 description',
	          type: 'string'
	        }, {
	          name: 'field4',
	          entity: 'TestEntity',
	          title: 'Field4 title',
	          description: 'Field4 description',
	          type: 'string',
	          required: true
	        }, {
	          name: 'field5',
	          entity: 'TestEntity',
	          title: 'Field5',
	          description: 'Field5',
	          type: 'number'
	        }, {
	          name: 'field6Ref',
	          entity: 'TestEntity',
	          title: 'Field6 ref',
	          description: 'Field6 ref',
	          relation: {
	            hasOne: 'Model/User#id'
	          }
	        }, {
	          name: 'field7Ref',
	          entity: 'TestEntity',
	          title: 'Field7 ref',
	          description: 'Field7 ref',
	          relation: {
	            hasOne: 'Actor#id'
	          }
	        }, {
	          name: 'field8Ref',
	          entity: 'TestEntity',
	          title: 'Field8 ref',
	          description: 'Field8 ref',
	          relation: {
	            belongsTo: 'TestEntity#field1'
	          }
	        }]
	      });
	    });
	
	    describe('fixup identity fields', function () {
	      it('no fields', function () {
	        var e1 = (0, _model.compose)(
	          'entity',
	          { name: 'test1' },
	          (0, _model.compose)('field', { name: 'name' })
	        );
	
	        expect(e1.toJSON()).to.deep.equal({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            'identity': true,
	            'name': 'id',
	            'required': true
	          }]
	        });
	      });
	
	      it('id field', function () {
	
	        var e2 = (0, _model.compose)(
	          'entity',
	          { name: 'test1' },
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)('field', { name: 'Id' })
	        );
	
	        expect(e2.toJSON()).to.deep.equal({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            'identity': true,
	            'name': 'Id'
	          }]
	        });
	      });
	
	      it('_id field', function () {
	        var e3 = (0, _model.compose)(
	          'entity',
	          { name: 'test1' },
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)('field', { name: '_Id' })
	        );
	
	        expect(e3.toJSON()).to.deep.equal({
	          name: 'test1',
	          fields: [{
	            name: 'name'
	          }, {
	            'identity': true,
	            'name': '_Id'
	          }]
	        });
	      });
	
	      it('fixup field contains entity', function () {
	        var f1 = (0, _model.compose)(
	          'entity',
	          { name: 'fixup1' },
	          (0, _model.compose)('field', { name: 'name', type: 'string' })
	        );
	        expect(f1.name).to.be.equal('Fixup1');
	        expect(f1.fields.get('id').entity).to.be.equal('Fixup1');
	      });
	    });
	
	    describe('fk and ids', function () {
	      it('validate fk reference', function () {
	        var e1 = (0, _model.compose)(
	          'entity',
	          { name: 'TEst1' },
	          (0, _model.compose)('field', { name: 'name', identity: true }),
	          (0, _model.compose)('field', { name: 'id', identity: true })
	        );
	
	        var e2 = (0, _model.compose)(
	          'entity',
	          { name: 'Test2' },
	          (0, _model.compose)('field', { name: 'name', identity: true }),
	          (0, _model.compose)('field', { name: 'id', identity: true })
	        );
	      });
	    });
	  });
	
	  describe('ModelPackage', function () {
	
	    it('create empty model', function () {
	      var model = (0, _model.compose)('model', null);
	      expect(model).to.be.instanceof(_model.ModelPackage);
	      expect(model.entities.size).to.be.equal(0);
	      expect(model.identityFields.size).to.be.equal(0);
	      expect(model.relations.size).to.be.equal(0);
	    });
	
	    it('create model with entities', function () {
	      var model = (0, _model.compose)(
	        'model',
	        null,
	        (0, _model.compose)(
	          'entity',
	          { name: 'User' },
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'groups' },
	            (0, _model.compose)('belongsToMany', { ref: 'User', name: 'UserGroup' })
	          )
	        ),
	        (0, _model.compose)(
	          'entity',
	          { name: 'Group' },
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'moderator' },
	            (0, _model.compose)('belongsTo', { ref: 'User', name: 'UserGroup' })
	          ),
	          (0, _model.compose)(
	            'field',
	            { name: 'users' },
	            (0, _model.compose)('belongsToMany', { ref: 'User', name: 'UserGroup' })
	          )
	        ),
	        (0, _model.compose)(
	          'entity',
	          { name: 'UserGroup' },
	          (0, _model.compose)(
	            'field',
	            { name: 'user' },
	            (0, _model.compose)('belongsTo', { ref: 'User', name: 'UserGroup' })
	          ),
	          (0, _model.compose)(
	            'field',
	            { name: 'group' },
	            (0, _model.compose)('belongsTo', { ref: 'User', name: 'UserGroup' })
	          )
	        )
	      );
	      expect(model).to.be.instanceof(_model.ModelPackage);
	      expect(model.entities.size).to.be.equal(3);
	      expect(model.identityFields.size).to.be.equal(3);
	      expect(model.relations.size).to.be.equal(0);
	    });
	
	    it('crud entity', function () {
	      var model = (0, _model.compose)('model', null);
	      expect(model.size).to.be.equal(0);
	      expect(function () {
	        return model.add((0, _model.compose)(
	          'entity',
	          { name: 'Test2' },
	          (0, _model.compose)('field', { name: 'name', identity: true }),
	          (0, _model.compose)('field', { name: 'id', identity: true })
	        ));
	      }).to.not.throw();
	
	      expect(model.size).to.be.equal(1);
	      expect(model.identityFields.size).to.be.equal(2);
	      expect(model.get('Test2').toJSON()).to.be.deep.equal({
	        name: 'Test2',
	        fields: [{
	          name: 'name',
	          identity: true
	        }, {
	          name: 'id',
	          identity: true
	        }]
	      });
	      expect(function () {
	        return model.remove('Test2');
	      }).to.not.throw();
	      expect(model.size).to.be.equal(0);
	      expect(model.identityFields.size).to.be.equal(0);
	    });
	
	    describe('Entity', function () {
	      it('check relations', function () {
	        var model = new _model.ModelPackage();
	        expect(function () {
	          return model.add((0, _model.compose)(
	            'entity',
	            { name: 'A' },
	            (0, _model.compose)('field', { name: 'id' }),
	            (0, _model.compose)('field', { name: 'A_id', identity: true })
	          ));
	        }).to.not.throw();
	
	        expect(function () {
	          return model.add((0, _model.compose)(
	            'entity',
	            { name: 'B' },
	            (0, _model.compose)('field', { name: 'id' }),
	            (0, _model.compose)(
	              'field',
	              { name: 'Aref' },
	              (0, _model.compose)('belongsTo', { ref: 'A' })
	            )
	          ));
	        }).to.not.throw();
	        var b = model.get('B');
	        var missingRelations = b.checkRelations(model);
	        expect(missingRelations.length).to.be.equal(0);
	      });
	
	      it('multiple models filter', function () {
	        var u = (0, _model.compose)(
	          'entity',
	          { name: 'User' },
	          (0, _model.compose)('field', { name: 'id' }),
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'groups' },
	            (0, _model.compose)('belongsToMany', { ref: 'Group#id', using: 'UserGroup#user' })
	          )
	        );
	
	        var g = (0, _model.compose)(
	          'entity',
	          { name: 'Group' },
	          (0, _model.compose)('field', { name: 'id' }),
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'users' },
	            (0, _model.compose)('belongsToMany', { ref: 'User#id', using: 'UserGroup#group' })
	          )
	        );
	
	        var ug = (0, _model.compose)(
	          'entity',
	          { name: 'UserGroup' },
	          (0, _model.compose)(
	            'field',
	            { name: 'user' },
	            (0, _model.compose)('belongsTo', { ref: 'User#id' })
	          ),
	          (0, _model.compose)(
	            'field',
	            { name: 'group' },
	            (0, _model.compose)('belongsTo', { ref: 'Group#id' })
	          )
	        );
	
	        // console.log(util.inspect(u,{depth: 6}));
	        // console.log(util.inspect(g,{depth: 6}));
	        // console.log(util.inspect(ug,{depth: 6}));
	
	        var model = new _model.ModelPackage();
	        model.add(u);
	        model.add(g);
	        model.add(ug);
	        model.ensureAll();
	
	        // console.log(util.inspect(model,{depth: 5}));
	        // console.log(g.toJSON(model));
	        // console.log(u.toJSON(model));
	        // console.log(ug.toJSON(model));
	
	        expect(model.entities.size).to.be.equal(3);
	        expect(model.identityFields.size).to.be.equal(3);
	        expect(model.identityFields.has('User#id')).to.be.true;
	        expect(model.identityFields.has('Group#id')).to.be.true;
	        expect(model.identityFields.has('UserGroup#id')).to.be.true;
	
	        expect(model.relations.has('User')).to.be.true;
	
	        var userModel = model.relations.get('User');
	        expect(userModel.has('groups')).to.be.true;
	        expect(userModel.get('groups').relation.belongsToMany).to.be.deep.equal({ entity: 'Group', field: 'id' });
	
	        expect(model.relations.has('Group')).to.be.true;
	        var groupModel = model.relations.get('Group');
	        expect(groupModel.has('users')).to.be.true;
	        expect(groupModel.get('users').relation.belongsToMany).to.be.deep.equal({ entity: 'User', field: 'id' });
	
	        expect(model.relations.has('UserGroup')).to.be.true;
	        var userGroupModel = model.relations.get('UserGroup');
	        expect(userGroupModel.has('user')).to.be.true;
	        expect(userGroupModel.get('user').relation.belongsTo).to.be.deep.equal({ entity: 'User', field: 'id' });
	
	        expect(userGroupModel.has('group')).to.be.true;
	        expect(userGroupModel.get('group').relation.belongsTo).to.be.deep.equal({ entity: 'Group', field: 'id' });
	
	        var model1 = new _model.ModelPackage();
	        model1.add(u);
	        model1.add(ug);
	        model1.ensureAll();
	
	        // console.log(util.inspect(userModel,{depth: 5}));
	        // console.log(util.inspect(model1,{depth: 5}));
	        // console.log(g.toJSON(model1));
	        // console.log(u.toJSON(model1));
	        // console.log(ug.toJSON(model1));
	
	        expect(model1.entities.size).to.be.equal(2);
	        expect(model1.identityFields.size).to.be.equal(2);
	        expect(model1.identityFields.has('User#id')).to.be.true;
	        expect(model1.identityFields.has('Group#id')).to.be.false;
	        expect(model1.identityFields.has('UserGroup#id')).to.be.true;
	
	        expect(model1.relations.has('User')).to.be.true;
	        var userModel1 = model1.relations.get('User');
	
	        // console.log(util.inspect(model1,{depth: 7}));
	        // console.log(util.inspect(userModel1,{depth: 7}));
	
	        expect(userModel1.has('groups')).to.be.true;
	        expect(userModel1.get('groups').relation.hasMany).to.be.deep.equal({ entity: 'UserGroup', field: 'user' });
	
	        expect(model1.relations.has('Group')).to.be.false;
	
	        expect(model1.relations.has('UserGroup')).to.be.true;
	        var userGroupModel1 = model1.relations.get('UserGroup');
	        expect(userGroupModel1.has('user')).to.be.true;
	        expect(userGroupModel1.get('user').relation.belongsTo).to.be.deep.equal({ entity: 'User', field: 'id' });
	
	        var model2 = new _model.ModelPackage();
	        model2.add(u);
	        model2.ensureAll();
	
	        // console.log(util.inspect(model2,{depth: 5}));
	        // console.log(g.toJSON(model2));
	        // console.log(u.toJSON(model2));
	        // console.log(ug.toJSON(model2));
	
	        expect(model2.entities.size).to.be.equal(1);
	        expect(model2.identityFields.size).to.be.equal(1);
	        expect(model2.identityFields.has('User#id')).to.be.true;
	        expect(model2.identityFields.has('Group#id')).to.be.false;
	        expect(model2.identityFields.has('UserGroup#id')).to.be.false;
	
	        expect(model2.relations.has('User')).to.be.true;
	        var userModel2 = model2.relations.get('User');
	        // console.log(util.inspect(userModel2,{depth: 5}));
	
	        expect(userModel2.size).to.be.equal(0);
	
	        expect(u.toJSON()).to.be.deep.equal({
	          name: 'User',
	          fields: [{
	            name: 'id',
	            identity: true
	          }, {
	            name: 'name'
	          }, {
	            name: 'groups',
	            relation: {
	              belongsToMany: 'Group#id',
	              using: 'UserGroup#user'
	            }
	          }]
	        });
	
	        expect(g.toJSON()).to.be.deep.equal({
	          name: 'Group',
	          fields: [{
	            name: 'id',
	            identity: true
	          }, {
	            name: 'name'
	          }, {
	            name: 'users',
	            relation: {
	              belongsToMany: 'User#id',
	              using: 'UserGroup#group'
	            }
	          }]
	        });
	        expect(ug.toJSON()).to.be.deep.equal({
	          name: 'UserGroup',
	          fields: [{
	            name: 'user',
	            relation: {
	              belongsTo: 'User#id'
	            }
	          }, {
	            name: 'group',
	            relation: {
	              belongsTo: 'Group#id'
	            }
	          }, _model.DEFAULT_ID_FIELD]
	        });
	      });
	
	      describe('fix M:N relations', function () {
	
	        var u = (0, _model.compose)(
	          'entity',
	          { name: 'User' },
	          (0, _model.compose)('field', { name: 'id' }),
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'groups' },
	            (0, _model.compose)('belongsToMany', { name: 'UserGroup', ref: 'Group#id', using: '#user' })
	          )
	        );
	
	        var g = (0, _model.compose)(
	          'entity',
	          { name: 'Group' },
	          (0, _model.compose)('field', { name: 'id' }),
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'users' },
	            (0, _model.compose)('belongsToMany', { ref: 'User#id', using: 'UserGroup#group' })
	          )
	        );
	
	        var g2 = (0, _model.compose)(
	          'entity',
	          { name: 'Group' },
	          (0, _model.compose)('field', { name: 'id' }),
	          (0, _model.compose)('field', { name: 'name' }),
	          (0, _model.compose)(
	            'field',
	            { name: 'users' },
	            (0, _model.compose)('belongsToMany', { name: 'UserGroup', ref: 'User#id', using: '#' })
	          )
	        );
	
	        var ug = (0, _model.compose)(
	          'entity',
	          { name: 'UserGroup' },
	          (0, _model.compose)(
	            'field',
	            { name: 'user' },
	            (0, _model.compose)('belongsTo', { ref: 'User#id' })
	          ),
	          (0, _model.compose)(
	            'field',
	            { name: 'group' },
	            (0, _model.compose)('belongsTo', { ref: 'Group#id' })
	          )
	        );
	
	        it('must Fix entity of the relation.ref if', function () {
	          expect(u.fields.get('groups').relation.toObject()).to.be.deep.equal({
	            name: 'UserGroup',
	            belongsToMany: 'Group#id',
	            using: 'UserGroup#user'
	          });
	        });
	
	        it('must set name of relation to entity name relation.ref', function () {
	          expect(g.fields.get('users').relation.toObject()).to.be.deep.equal({
	            name: 'UserGroup',
	            belongsToMany: 'User#id',
	            using: 'UserGroup#group'
	          });
	        });
	
	        it('must use Entity name as using field in hasMany relation', function () {
	          expect(g2.fields.get('users').relation.toObject()).to.be.deep.equal({
	            name: 'UserGroup',
	            belongsToMany: 'User#id',
	            using: 'UserGroup#group'
	          });
	        });
	
	        // console.log(util.inspect(u.toObject(),{depth: 7}));
	        // console.log(util.inspect(u,{depth: 7}));
	        // console.log(util.inspect(g.toObject(),{depth: 7}));
	        // console.log(util.inspect(ug.toObject(),{depth: 7}));
	      });
	    });
	  });
	
	  it('create Entity with UpperCaseName', function () {
	    var role = (0, _model.compose)(_model.Entity, { name: 'Role' }, (0, _model.compose)(_model.Field, { name: 'name', identity: true }));
	
	    expect(role).to.be.an.instanceof(_model.Entity);
	    expect(role.name).to.be.equal('Role');
	    expect(role.fields.has('name')).to.be.true;
	
	    expect(role.toJSON()).to.be.deep.equal({
	      name: 'Role',
	      fields: [{
	        name: 'name',
	        identity: true
	      }]
	    });
	  });
	
	  it('create Entity with UpperCaseName', function () {
	    var role = (0, _model.compose)(
	      _model.Entity,
	      { name: 'Role' },
	      (0, _model.compose)(_model.Field, { name: 'name', identity: true })
	    );
	
	    expect(role).to.be.an.instanceof(_model.Entity);
	    expect(role.name).to.be.equal('Role');
	    expect(role.fields.has('name')).to.be.true;
	
	    expect(role.toJSON()).to.be.deep.equal({
	      name: 'Role',
	      fields: [{
	        name: 'name',
	        identity: true
	      }]
	    });
	  });
	
	  it('create Entity with UpperCaseName', function () {
	    var role = (0, _model.compose)(
	      'entity',
	      { name: 'Role' },
	      (0, _model.compose)('field', { name: 'name', identity: true })
	    );
	
	    expect(role).to.be.an.instanceof(_model.Entity);
	    expect(role.name).to.be.equal('Role');
	    expect(role.fields.has('name')).to.be.true;
	
	    expect(role.toJSON()).to.be.deep.equal({
	      name: 'Role',
	      fields: [{
	        name: 'name',
	        identity: true
	      }]
	    });
	  });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWY0OTBmMTcxOTYyMGUzZDk4MGIiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zZXR1cC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc2V0dXAvLmdsb2JhbHMuanNvbiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NldHVwL3NldHVwLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdW5pdC9jaGVja1NjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3VuaXQvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvbW9kZWxiYXNlLmpzIiwid2VicGFjazovLy8uL34vY2FtZWxjYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGVjYW1lbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2ZpZWxkYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaGFzb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9yZWZiYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9oYXNtYW55LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9iZWxvbmdzdG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2JlbG9uZ3N0b21hbnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL21vZGVscGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3VuaXQvcmVhY3Qtd2F5LmpzIl0sIm5hbWVzIjpbIm1vY2hhR2xvYmFscyIsInJlcXVpcmUiLCJnbG9iYWxzIiwid2luZG93IiwibW9jaGEiLCJzZXR1cCIsIm9ubG9hZCIsImNoZWNrTGVha3MiLCJPYmplY3QiLCJrZXlzIiwicnVuIiwibW9kdWxlIiwiZXhwb3J0cyIsInJvb3QiLCJnbG9iYWwiLCJleHBlY3QiLCJjaGFpIiwiYmVmb3JlRWFjaCIsInNhbmRib3giLCJzaW5vbiIsImNyZWF0ZSIsInN0dWIiLCJiaW5kIiwic3B5IiwibW9jayIsInVzZUZha2VUaW1lcnMiLCJ1c2VGYWtlWE1MSHR0cFJlcXVlc3QiLCJ1c2VGYWtlU2VydmVyIiwiYWZ0ZXJFYWNoIiwicmVzdG9yZSIsImRlc2NyaWJlIiwiaXQiLCJ0byIsIm5vdCIsInRocm93Iiwic29tZSIsImUiLCJ1cGRhdGVXaXRoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJyZWxhdGlvbnMiLCJyZXF1aXJlZCIsImlkZW50aXR5IiwiZmllbGRzIiwiYmUiLCJhbiIsInR5cGUiLCJyZWxhdGlvbiIsImhhc09uZSIsImJlbG9uZ3NUbyIsImVxdWFsIiwic2l6ZSIsInRvSlNPTiIsImRlZXAiLCJ0b09iamVjdCIsImVudGl0eSIsImlkS2V5IiwiaW5kZXhlZCIsImUxIiwiZTIiLCJlMyIsImYxIiwiZ2V0IiwibW9kZWwiLCJpZGVudGl0eUZpZWxkcyIsInJlbW92ZSIsImIiLCJtaXNzaW5nUmVsYXRpb25zIiwiY2hlY2tSZWxhdGlvbnMiLCJsZW5ndGgiLCJ1IiwiYmVsb25nc1RvTWFueSIsInVzaW5nIiwiZyIsInVnIiwiYWRkIiwiZW5zdXJlQWxsIiwiZW50aXRpZXMiLCJoYXMiLCJ0cnVlIiwidXNlck1vZGVsIiwiZmllbGQiLCJncm91cE1vZGVsIiwidXNlckdyb3VwTW9kZWwiLCJtb2RlbDEiLCJmYWxzZSIsInVzZXJNb2RlbDEiLCJoYXNNYW55IiwidXNlckdyb3VwTW9kZWwxIiwibW9kZWwyIiwidXNlck1vZGVsMiIsImcyIiwiY29tcG9zZSIsIkVudGl0eSIsIkZpZWxkIiwiSGFzT25lIiwiSGFzTWFueSIsIkJlbG9uZ3NUbyIsIkJlbG9uZ3NUb01hbnkiLCJNb2RlbFBhY2thZ2UiLCJERUZBVUxUX0lEX0ZJRUxEIiwicHJvcHMiLCJjaGlsZHJlbiIsIm9iaiIsIm1vZGVsUGFja2FnZSIsImZvckVhY2giLCJ2YWx1ZSIsImlkcyIsInNldCIsInRvU3RyaW5nIiwibW9kZWxSZWxhdGlvbnMiLCJNYXAiLCJyZWYiLCJjbG9uZSIsIm1pc3NpbmciLCJyIiwiZGVsZXRlIiwibWlzc2luZ1JlZiIsImZUeXBlIiwicmVmZSIsInJlcGxhY2VSZWYiLCIkb2JqIiwicHVzaCIsInJlc3VsdCIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJTZXQiLCJmIiwiRXJyb3IiLCJyZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ2YWx1ZXMiLCJtYXAiLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJNb2RlbEJhc2UiLCJuYW1lXyIsInRpdGxlXyIsImRlc2NyaXB0aW9uXyIsInRyaW0iLCJjb25zdHJ1Y3RvciIsImRpc2NvdmVyRmllbGRUeXBlIiwiY29uc29sZSIsIndhcm4iLCJ0eXBlXyIsImlkZW50aXR5XyIsInJlcXVpcmVkXyIsImluZGV4ZWRfIiwicmVsYXRpb25fIiwiRmllbGRCYXNlIiwiZW50aXR5XyIsImhhc09uZV8iLCJtYXRjaCIsIlJlZkJhc2UiLCJSRUZfUEFUVEVSTiIsIkRFRkFVTFRfSURfRklFTEROQU1FIiwiUmVmIiwiaGFzTWFueV8iLCJiZWxvbmdzVG9fIiwiYmVsb25nc1RvTWFueV8iLCJ1c2luZ18iLCJ0b0xvd2VyQ2FzZSIsImVudGl0eUxpc3QiLCJlbnN1cmVJZHMiLCJqc29uIiwicmVtb3ZlSWRzIiwiZW5zdXJlRktzIiwiVF8iLCJUIiwiYXR0ciIsImluc3RhbmNlb2YiLCJyb2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJQSxlQUFlLG1CQUFBQyxDQUFRLENBQVIsRUFBMkJDLE9BQTlDOztBQUVBQyxRQUFPQyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsS0FBbkI7QUFDQUYsUUFBT0csTUFBUCxHQUFnQixZQUFXO0FBQ3pCSCxVQUFPQyxLQUFQLENBQWFHLFVBQWI7QUFDQUosVUFBT0MsS0FBUCxDQUFhRixPQUFiLENBQXFCTSxPQUFPQyxJQUFQLENBQVlULFlBQVosQ0FBckI7QUFDQUcsVUFBT0MsS0FBUCxDQUFhTSxHQUFiO0FBQ0FULEdBQUEsbUJBQUFBLENBQVEsQ0FBUixFQUFtQkUsTUFBbkI7QUFDRCxFQUxELEM7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ1hBUSxRQUFPQyxPQUFQLEdBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUM5QkEsVUFBT0EsT0FBT0EsSUFBUCxHQUFjQyxNQUFyQjtBQUNBRCxRQUFLRSxNQUFMLEdBQWNGLEtBQUtHLElBQUwsQ0FBVUQsTUFBeEI7O0FBRUFFLGNBQVcsWUFBVztBQUNwQjtBQUNBO0FBQ0FKLFVBQUtLLE9BQUwsR0FBZUwsS0FBS00sS0FBTCxDQUFXRCxPQUFYLENBQW1CRSxNQUFuQixFQUFmO0FBQ0FQLFVBQUtRLElBQUwsR0FBWVIsS0FBS0ssT0FBTCxDQUFhRyxJQUFiLENBQWtCQyxJQUFsQixDQUF1QlQsS0FBS0ssT0FBNUIsQ0FBWjtBQUNBTCxVQUFLVSxHQUFMLEdBQVdWLEtBQUtLLE9BQUwsQ0FBYUssR0FBYixDQUFpQkQsSUFBakIsQ0FBc0JULEtBQUtLLE9BQTNCLENBQVg7QUFDQUwsVUFBS1csSUFBTCxHQUFZWCxLQUFLSyxPQUFMLENBQWFNLElBQWIsQ0FBa0JGLElBQWxCLENBQXVCVCxLQUFLSyxPQUE1QixDQUFaO0FBQ0FMLFVBQUtZLGFBQUwsR0FBcUJaLEtBQUtLLE9BQUwsQ0FBYU8sYUFBYixDQUEyQkgsSUFBM0IsQ0FBZ0NULEtBQUtLLE9BQXJDLENBQXJCO0FBQ0FMLFVBQUthLHFCQUFMLEdBQTZCYixLQUFLSyxPQUFMLENBQWFRLHFCQUFiLENBQW1DSixJQUFuQyxDQUF3Q1QsS0FBS0ssT0FBN0MsQ0FBN0I7QUFDQUwsVUFBS2MsYUFBTCxHQUFxQmQsS0FBS0ssT0FBTCxDQUFhUyxhQUFiLENBQTJCTCxJQUEzQixDQUFnQ1QsS0FBS0ssT0FBckMsQ0FBckI7QUFDRCxJQVZEOztBQVlBVSxhQUFVLFlBQVc7QUFDbkIsWUFBT2YsS0FBS1EsSUFBWjtBQUNBLFlBQU9SLEtBQUtVLEdBQVo7QUFDQVYsVUFBS0ssT0FBTCxDQUFhVyxPQUFiO0FBQ0QsSUFKRDtBQUtELEVBckJELEM7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQzlPQTs7OztBQUVBOzs7O0FBRUFDLFVBQVMsUUFBVCxFQUFtQixZQUFLOztBQUV0QkEsWUFBUyxRQUFULEVBQW1CLFlBQU07O0FBRXZCQyxRQUFHLG9CQUFILEVBQXdCLFlBQU07QUFDNUJo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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsVUFBUztBQUNUO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3prQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdC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QW1DYSxFQUFuQyxDQUFzQ21DLElBQXRDOztBQUVBakUsWUFBTytKLEtBQUt6SCxNQUFMLEVBQVAsRUFBc0JyQixFQUF0QixDQUF5QmEsRUFBekIsQ0FBNEJTLElBQTVCLENBQWlDSCxLQUFqQyxDQUF1QztBQUNyQ1gsYUFBTSxNQUQrQjtBQUVyQ0ksZUFBUSxDQUFDO0FBQ1BKLGVBQU0sTUFEQztBQUVQRyxtQkFBVTtBQUZILFFBQUQ7QUFGNkIsTUFBdkM7QUFRRCxJQWpCRDtBQWtCRCxFQWp1QkQsRSIsImZpbGUiOiJfX3NwZWMtYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDlmNDkwZjE3MTk2MjBlM2Q5ODBiXG4gKiovIiwidmFyIG1vY2hhR2xvYmFscyA9IHJlcXVpcmUoJy4vLmdsb2JhbHMuanNvbicpLmdsb2JhbHM7XG5cbndpbmRvdy5tb2NoYS5zZXR1cCgnYmRkJyk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5tb2NoYS5jaGVja0xlYWtzKCk7XG4gIHdpbmRvdy5tb2NoYS5nbG9iYWxzKE9iamVjdC5rZXlzKG1vY2hhR2xvYmFscykpO1xuICB3aW5kb3cubW9jaGEucnVuKCk7XG4gIHJlcXVpcmUoJy4vc2V0dXAnKSh3aW5kb3cpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zZXR1cC9icm93c2VyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2xvYmFsc1wiOiB7XG5cdFx0XCJleHBlY3RcIjogdHJ1ZSxcblx0XHRcIm1vY2tcIjogdHJ1ZSxcblx0XHRcInNhbmRib3hcIjogdHJ1ZSxcblx0XHRcInNweVwiOiB0cnVlLFxuXHRcdFwic3R1YlwiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVNlcnZlclwiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVRpbWVyc1wiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVhNTEh0dHBSZXF1ZXN0XCI6IHRydWVcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdGVzdC9zZXR1cC8uZ2xvYmFscy5qc29uXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb290KSB7XG4gIHJvb3QgPSByb290ID8gcm9vdCA6IGdsb2JhbDtcbiAgcm9vdC5leHBlY3QgPSByb290LmNoYWkuZXhwZWN0O1xuXG4gIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNpbmcgdGhlc2UgZ2xvYmFsbHktYXZhaWxhYmxlIFNpbm9uIGZlYXR1cmVzIGlzIHByZWZlcnJhYmxlLCBhcyB0aGV5J3JlXG4gICAgLy8gYXV0b21hdGljYWxseSByZXN0b3JlZCBmb3IgeW91IGluIHRoZSBzdWJzZXF1ZW50IGBhZnRlckVhY2hgXG4gICAgcm9vdC5zYW5kYm94ID0gcm9vdC5zaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xuICAgIHJvb3Quc3R1YiA9IHJvb3Quc2FuZGJveC5zdHViLmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnNweSA9IHJvb3Quc2FuZGJveC5zcHkuYmluZChyb290LnNhbmRib3gpO1xuICAgIHJvb3QubW9jayA9IHJvb3Quc2FuZGJveC5tb2NrLmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnVzZUZha2VUaW1lcnMgPSByb290LnNhbmRib3gudXNlRmFrZVRpbWVycy5iaW5kKHJvb3Quc2FuZGJveCk7XG4gICAgcm9vdC51c2VGYWtlWE1MSHR0cFJlcXVlc3QgPSByb290LnNhbmRib3gudXNlRmFrZVhNTEh0dHBSZXF1ZXN0LmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnVzZUZha2VTZXJ2ZXIgPSByb290LnNhbmRib3gudXNlRmFrZVNlcnZlci5iaW5kKHJvb3Quc2FuZGJveCk7XG4gIH0pO1xuXG4gIGFmdGVyRWFjaChmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgcm9vdC5zdHViO1xuICAgIGRlbGV0ZSByb290LnNweTtcbiAgICByb290LnNhbmRib3gucmVzdG9yZSgpO1xuICB9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc2V0dXAvc2V0dXAuanNcbiAqKi8iLCIvLyAndXNlIHN0cmljdCc7XG5cbi8vIGxldCBWYWxpZGF0b3IgPSByZXF1aXJlKCdqc29uc2NoZW1hJykuVmFsaWRhdG9yO1xuXG4vLyBsZXQgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xuXG4vLyBjb25zdCBFbnRpdHlTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0VudGl0eScsXG4vLyAgIHRpdGxlOiAnRW50aXR5Jyxcbi8vICAgZGVzY3JpcHRpb246ICdUaGUgRW50aXR5IGRlZmluaXRpb24nLFxuLy8gICB0eXBlOiAnb2JqZWN0Jyxcbi8vICAgcHJvcGVydGllczoge1xuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIG5hbWU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnXG4vLyAgICAgfSxcbi8vICAgICBkZXNjcmlwdGlvbjoge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBmaWVsZHM6IHtcbi8vICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbGlzdCcsXG4vLyAgICAgICB0eXBlOiAnYXJyYXknLFxuLy8gICAgICAgaXRlbXM6IHtcbi8vICAgICAgICAgYW55T2Y6IFtcbi8vICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgJHJlZjogJy9CZWxvbmdzVG8nLFxuLy8gICAgICAgICAgICAgfSx7XG4vLyAgICAgICAgICAgICAgICRyZWY6ICcvSGFzT25lJyxcbi8vICAgICAgICAgICAgIH0se1xuLy8gICAgICAgICAgICAgICAkcmVmOiAnL0hhc01hbnknLFxuLy8gICAgICAgICAgICAgfSx7XG4vLyAgICAgICAgICAgICAgICRyZWY6ICcvRmllbGQnLFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIF1cbi8vICAgICAgIH0sXG4vLyAgICAgICBtaW5JdGVtczogMSxcbi8vICAgICAgIHVuaXF1ZUl0ZW1zOiB0cnVlLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIHJlcXVpcmVkOiBbXG4vLyAgICAgJ25hbWUnLFxuLy8gICAgICdmaWVsZHMnLFxuLy8gICBdLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBSZWZTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL1JlZicsXG4vLyAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICBwYXRlcm46ICdeKC4qPykjKC4qPykkJyxcbi8vIH07XG5cbi8vIGNvbnN0IEZpZWxkU2NoZW1hID0ge1xuLy8gICBpZDogJy9GaWVsZCcsXG4vLyAgIHRpdGxlOiAnRmllbGQnLFxuLy8gICBkZXNjcmlwdGlvbjogJ2ZpZWxkIGRlZmluaXRpb24nLFxuLy8gICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgbmFtZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZydcbi8vICAgICB9LFxuLy8gICAgIGRlc2NyaXB0aW9uOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIHR5cGU6IHtcbi8vICAgICAgIGVudW06IFsnaW50ZWdlcicsICdudW1iZXInLCAnYm9vbGVhbicsICdzdHJpbmcnXSxcbi8vICAgICAgIGRlZmF1bHQ6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgaWRlbnRpdHk6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZSB9LFxuLy8gICAgIHJlcXVpcmVkOiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogZmFsc2UgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZSddLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBIYXNPbmVTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0hhc09uZScsXG4vLyAgIHRpdGxlOiAnTGluaycsXG4vLyAgIGRlc2NyaXB0aW9uOiAnbGluayBkZWZpbml0aW9uJyxcbi8vICAgcHJvcGVydGllczoge1xuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIG5hbWU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnXG4vLyAgICAgfSxcbi8vICAgICBkZXNjcmlwdGlvbjoge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBoYXNPbmU6IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICAgIHVzaW5nOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZScsJ2hhc09uZSddLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBIYXNNYW55U2NoZW1hID0ge1xuLy8gICBpZDogJy9IYXNNYW55Jyxcbi8vICAgdGl0bGU6ICdMaW5rJyxcbi8vICAgZGVzY3JpcHRpb246ICdsaW5rIGRlZmluaXRpb24nLFxuLy8gICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgbmFtZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZydcbi8vICAgICB9LFxuLy8gICAgIGRlc2NyaXB0aW9uOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIGhhc01hbnk6IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICAgIHVzaW5nOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZScsJ2hhc01hbnknXSxcbi8vICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuLy8gfTtcblxuLy8gY29uc3QgQmVsb25nc1RvU2NoZW1hID0ge1xuLy8gICBpZDogJy9CZWxvbmdzVG8nLFxuLy8gICB0aXRsZTogJ0xpbmsnLFxuLy8gICBkZXNjcmlwdGlvbjogJ2xpbmsgZGVmaW5pdGlvbicsXG4vLyAgIHByb3BlcnRpZXM6IHtcbi8vICAgICB0aXRsZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBuYW1lOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJ1xuLy8gICAgIH0sXG4vLyAgICAgZGVzY3JpcHRpb246IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgYmVsb25nc1RvOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgICB1c2luZzoge1xuLy8gICAgICAgJHJlZjogJy9SZWYnLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIHJlcXVpcmVkOiBbJ25hbWUnLCdiZWxvbmdzVG8nXSxcbi8vICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuLy8gfTtcblxuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShSZWZTY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShIYXNPbmVTY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShIYXNNYW55U2NoZW1hKTtcbi8vIHZhbGlkYXRvci5hZGRTY2hlbWEoQmVsb25nc1RvU2NoZW1hKTtcbi8vIHZhbGlkYXRvci5hZGRTY2hlbWEoRW50aXR5U2NoZW1hKTtcbi8vIHZhbGlkYXRvci5hZGRTY2hlbWEoRmllbGRTY2hlbWEpO1xuXG4vLyBsZXQgb2JqID0ge1xuLy8gICAgICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbi8vICAgICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuLy8gICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIHRlc3QgRW50aXR5IGRlc2NyaWJlICcsXG4vLyAgICAgICAgICAgZmllbGRzOiBbXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2lkJyxcbi8vICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuLy8gICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbi8vICAgICAgICAgICAgIHRpdGxlOiAndGl0bGUgZmllbGQyJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdGaWVsZCAzJyxcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuLy8gICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDQgZGVzY3JpcHRpb24nLFxuLy8gICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnZmllbGQ1Jyxcbi8vICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4vLyAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuLy8gICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4vLyAgICAgICAgICAgICBiZWxvbmdzVG86ICdGaWVsZDEnLFxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBdXG4vLyAgICAgICAgIH07XG5cbi8vIGxldCByZXMgPSB2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBFbnRpdHlTY2hlbWEpO1xuXG4vLyBmdW5jdGlvbiBkaXNjb3ZlckZpZWxkVHlwZShvYmopIHtcbi8vICAgaWYgKHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEhhc09uZVNjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0hhc09uZSc7XG4vLyAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgSGFzTWFueVNjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0hhc01hbnknO1xuLy8gICB9IGVsc2UgaWYgKHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEJlbG9uZ3NUb1NjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0JlbG9uZ3NUbyc7XG4vLyAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgRmllbGRTY2hlbWEpLnZhbGlkKSB7XG4vLyAgICAgcmV0dXJuICdGaWVsZCc7XG4vLyAgIH1cbi8vIH07XG5cbi8vIG9iai5maWVsZHMuZm9yRWFjaChmID0+IHtcblxuLy8gICBjb25zdCBmaWVsZFR5cGUgPSBkaXNjb3ZlckZpZWxkVHlwZShmKTtcbi8vICAgY29uc29sZS5sb2coZmllbGRUeXBlKTtcbi8vICAgc3dpdGNoIChmaWVsZFR5cGUpe1xuLy8gICAgIGNhc2UgJ0ZpZWxkJzpcbi8vICAgICBicmVhaztcbi8vICAgICBjYXNlICdIYXNPbmUnOlxuLy8gICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgJ0hhc01hbnknOlxuLy8gICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgJ0JlbG9uZ3NUbyc6XG4vLyAgICAgYnJlYWs7XG4vLyAgIH1cblxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKHJlcy52YWxpZCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3QvdW5pdC9jaGVja1NjaGVtYS5qc1xuICoqLyIsImltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5pbXBvcnQge0VudGl0eSwgRmllbGQsIE1vZGVsUGFja2FnZSwgREVGQVVMVF9JRF9GSUVMRH0gZnJvbSAnLi4vLi4vc3JjL21vZGVsJztcblxuZGVzY3JpYmUoJ1NjaGVtYScsICgpPT4ge1xuXG4gIGRlc2NyaWJlKCdFbnRpdHknLCAoKSA9PiB7XG5cbiAgICBpdCgnY3JlYXRlIGVtcHR5IG1vZGVsJywoKSA9PiB7XG4gICAgICBleHBlY3QoKCk9Pm5ldyBFbnRpdHkoKSkudG8ubm90LnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbm90IGNyZWF0ZSB3cm9uZyBtb2RlbCcsKCkgPT4ge1xuICAgICAgZXhwZWN0KCgpPT5uZXcgRW50aXR5KHtzb21lOiAxfSkpLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbm90IHRocm93cyB3aXRoIGVtcHR5IGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gbmV3IEVudGl0eSgpO1xuICAgICAgZXhwZWN0KCgpPT4gZS51cGRhdGVXaXRoKCkpLnRvLm5vdC50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Rocm93cyB3aXRoIGludmFsaWQgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSBuZXcgRW50aXR5KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnVwZGF0ZVdpdGgoe3NvbWU6IDF9KSkudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdjYW5cXCd0IGFjY2VzcyB0byBwcml2YXRlIGZpZWxkcycsKCkgPT4ge1xuICAgICAgbGV0IGUgPSBuZXcgRW50aXR5KCk7XG5cbiAgICAgIGV4cGVjdCgoKT0+IGUudGl0bGUgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUuZGVzY3JpcHRpb24gPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUubmFtZSA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5yZWxhdGlvbnMgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUucmVxdWlyZWQgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUuaWRlbnRpdHkgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUuZmllbGRzID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG5cbiAgICB9KTtcblxuICAgIGl0KCdkZWZhdWx0IGRhdGEgaXMgdW5kZWZpbmVkJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IG5ldyBFbnRpdHkoKTtcbiAgICAgIGV4cGVjdChlLnRpdGxlKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5kZXNjcmlwdGlvbikudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUubmFtZSkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUucmVsYXRpb25zKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5yZXF1aXJlZCkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUuaWRlbnRpdHkpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLmZpZWxkcykudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgIH0pO1xuXG4gICAgaXQoJ19pZCBhbmQgaWQgaXMgdGhlIHNhbWUnLCAoKT0+IHtcbiAgICAgIGV4cGVjdCgoKT0+IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdBJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICBuYW1lOiAnX2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgfV1cbiAgICAgICAgfSkpLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnYWNjZXB0IHZhbGlkIGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gbmV3IEVudGl0eSgpO1xuXG4gICAgICBleHBlY3QoKCk9PlxuICAgICAgZS51cGRhdGVXaXRoKHtcbiAgICAgICAgICBuYW1lOiAnIHRlc3QgRW50aXR5ICcsXG4gICAgICAgICAgdGl0bGU6ICcgdGVzdCBFbnRpdHkgdGl0bGUgJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJyB0ZXN0IEVudGl0eSBkZXNjcmliZSAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZDEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMicsXG4gICAgICAgICAgICB0aXRsZTogJ3RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmllbGQgMycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkMyBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ0JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDZSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnTW9kZWwvVXNlciNpZCcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ3UmVmJyxcbiAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgIGhhc09uZTogJ0FjdG9yI2lkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDhSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnI0ZpZWxkMScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgICkudG8ubm90LnRocm93KCk7XG5cbiAgICAgIGV4cGVjdChlLm5hbWUpLnRvLmJlLmVxdWFsKCdUZXN0RW50aXR5Jyk7XG4gICAgICBleHBlY3QoZS5maWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoOSk7XG4gICAgICBleHBlY3QoZS5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICBleHBlY3QoZS5pZGVudGl0eS5zaXplKS50by5iZS5lcXVhbCgxKTtcbiAgICAgIGV4cGVjdChlLnJlcXVpcmVkLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuXG4gICAgICBleHBlY3QoZS50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbiAgICAgICAgdGl0bGU6ICcgdGVzdCBFbnRpdHkgdGl0bGUgJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcgdGVzdCBFbnRpdHkgZGVzY3JpYmUgJyxcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdGaWVsZDEnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkMicsXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZSBmaWVsZDInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZpZWxkIDMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkNCBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQ1JyxcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDZSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQ3UmVmJyxcbiAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDhSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBiZWxvbmdzVG86ICcjRmllbGQxJyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIGV4cGVjdChlLnRvT2JqZWN0KCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICBuYW1lOiAnVGVzdEVudGl0eScsXG4gICAgICAgIHRpdGxlOiAnVGVzdCBFbnRpdHkgdGl0bGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rlc3QgRW50aXR5IGRlc2NyaWJlJyxcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHRpdGxlOiAnSWQnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICBpZEtleTogJ1Rlc3RFbnRpdHkjaWQnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMScsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQxJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdUaXRsZSBmaWVsZDInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaXRsZSBmaWVsZDInLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDMnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkMycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkMyBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ2IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNiByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnTW9kZWwvVXNlciNpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNyByZWYnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDcgcmVmJyxcbiAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgIGhhc09uZTogJ0FjdG9yI2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ4IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkOCByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnVGVzdEVudGl0eSNmaWVsZDEnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZml4dXAgaWRlbnRpdHkgZmllbGRzJywoKT0+IHtcbiAgICAgIGl0KCdubyBmaWVsZHMnLCgpPT4ge1xuICAgICAgICBsZXQgZTEgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QoZTEudG9KU09OKCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkZW50aXR5JzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnaWQnLFxuICAgICAgICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ2lkIGZpZWxkJywoKT0+IHtcbiAgICAgICAgbGV0IGUyID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIG5hbWU6ICdJZCcsXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChlMi50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaWRlbnRpdHknOiB0cnVlLFxuICAgICAgICAgICAgICAnbmFtZSc6ICdJZCcsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnX2lkIGZpZWxkJywoKT0+IHtcbiAgICAgICAgbGV0IGUzID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnX0lkJyxcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KGUzLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZGVudGl0eSc6IHRydWUsXG4gICAgICAgICAgICAgICduYW1lJzogJ19JZCcsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnZml4dXAgZmllbGQgY29udGFpbnMgZW50aXR5JywoKT0+IHtcbiAgICAgICAgbGV0IGYxID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ2ZpeHVwMScsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KGYxLm5hbWUpLnRvLmJlLmVxdWFsKCdGaXh1cDEnKTtcbiAgICAgICAgZXhwZWN0KGYxLmZpZWxkcy5nZXQoJ2lkJykuZW50aXR5KS50by5iZS5lcXVhbCgnRml4dXAxJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmayBhbmQgaWRzJywoKT0+IHtcbiAgICAgIC8vINGB0YHRi9C70LrQuCDQv9C+INCy0L3QtdGI0L3QtdC80YMg0LrQu9GO0YfRgyDQvNC+0LPRg9GCINCx0YvRgtGMINC90LUg0YLQvtC70YzQutC+INC90LAgUEtcbiAgICAgIC8vLCDQvdC+INC90LAg0LvRjtCx0YvQtSDQutC70Y7Rh9C4XG4gICAgICBpdCgndmFsaWRhdGUgZmsgcmVmZXJlbmNlJywgKCk9PiB7XG4gICAgICAgIGxldCBlMSA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdURXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlMiA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdUZXN0MicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ01vZGVsUGFja2FnZScsKCk9PiB7XG4gICAgaXQoJ2NydWQgZW50aXR5JywgKCk9PiB7XG4gICAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgICBleHBlY3QoKCk9Pm1vZGVsLmNyZWF0ZSh7XG4gICAgICAgICAgbmFtZTogJ1Rlc3QyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSkpLnRvLm5vdC50aHJvdygpO1xuXG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICBleHBlY3QobW9kZWwuZ2V0KCdUZXN0MicpLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVGVzdDInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIGV4cGVjdCgoKT0+bW9kZWwucmVtb3ZlKCdUZXN0MicpKS50by5ub3QudGhyb3coKTtcbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdFbnRpdHknLCgpPT4ge1xuICAgICAgaXQoJ2NoZWNrIHJlbGF0aW9ucycsKCk9PiB7XG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgLypleHBlY3QoKCk9PiovbW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiAnQScsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTogJ0FfaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICB9XVxuICAgICAgICB9KS8qKS50by5ub3QudGhyb3coKSovO1xuXG4gICAgICAgIGV4cGVjdCgoKT0+bW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiAnQicsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FyZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnQSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9KSkudG8ubm90LnRocm93KCk7XG4gICAgICAgIGxldCBiID0gbW9kZWwuZ2V0KCdCJyk7XG4gICAgICAgIGxldCBtaXNzaW5nUmVsYXRpb25zID0gYi5jaGVja1JlbGF0aW9ucyhtb2RlbCk7XG4gICAgICAgIGV4cGVjdChtaXNzaW5nUmVsYXRpb25zLmxlbmd0aCkudG8uYmUuZXF1YWwoMCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ211bHRpcGxlIG1vZGVscyBmaWx0ZXInLCgpPT4ge1xuICAgICAgICBsZXQgdSA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdncm91cHMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdHcm91cCNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBnID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ0dyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VycycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdWcgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA2fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZyx7ZGVwdGg6IDZ9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1Zyx7ZGVwdGg6IDZ9KSk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICBtb2RlbC5hZGQodSk7XG4gICAgICAgIG1vZGVsLmFkZChnKTtcbiAgICAgICAgbW9kZWwuYWRkKHVnKTtcbiAgICAgICAgbW9kZWwuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZy50b0pTT04obW9kZWwpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsKSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDMpO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXIjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnVXNlckdyb3VwI2lkJykpLnRvLmJlLnRydWU7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBsZXQgdXNlck1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnVXNlcicpO1xuICAgICAgICBleHBlY3QodXNlck1vZGVsLmhhcygnZ3JvdXBzJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi5iZWxvbmdzVG9NYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdHcm91cCcsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ0dyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCBncm91cE1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KGdyb3VwTW9kZWwuaGFzKCd1c2VycycpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QoZ3JvdXBNb2RlbC5nZXQoJ3VzZXJzJykucmVsYXRpb24uYmVsb25nc1RvTWFueSkudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ1VzZXJHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlckdyb3VwTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdVc2VyR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsLmhhcygndXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuZ2V0KCd1c2VyJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuaGFzKCdncm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuZ2V0KCdncm91cCcpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnR3JvdXAnLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGxldCBtb2RlbDEgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIG1vZGVsMS5hZGQodSk7XG4gICAgICAgIG1vZGVsMS5hZGQodWcpO1xuICAgICAgICBtb2RlbDEuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbCx7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDEse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbDEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwxKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbDEpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJNb2RlbDEgPSBtb2RlbDEucmVsYXRpb25zLmdldCgnVXNlcicpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDEse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsMSx7ZGVwdGg6IDd9KSk7XG5cbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDEuaGFzKCdncm91cHMnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDEuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi5oYXNNYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyR3JvdXAnLCBmaWVsZDogJ3VzZXInfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMS5yZWxhdGlvbnMuaGFzKCdHcm91cCcpKS50by5iZS5mYWxzZTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ1VzZXJHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlckdyb3VwTW9kZWwxID0gbW9kZWwxLnJlbGF0aW9ucy5nZXQoJ1VzZXJHcm91cCcpO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwxLmhhcygndXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwxLmdldCgndXNlcicpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgbGV0IG1vZGVsMiA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgbW9kZWwyLmFkZCh1KTtcbiAgICAgICAgbW9kZWwyLmVuc3VyZUFsbCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDIse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbDIpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwyKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbDIpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwyLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMi5yZWxhdGlvbnMuaGFzKCdVc2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyTW9kZWwyID0gbW9kZWwyLnJlbGF0aW9ucy5nZXQoJ1VzZXInKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbDIse2RlcHRoOiA1fSkpO1xuXG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwyLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuXG4gICAgICAgIGV4cGVjdCh1LnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwcycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCN1c2VyJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhwZWN0KGcudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QodWcudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcicsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvOiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdncm91cCcsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvOiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgREVGQVVMVF9JRF9GSUVMRCxcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuICAgICAgZGVzY3JpYmUoJ2ZpeCBNOk4gcmVsYXRpb25zJywgKCk9PiB7XG5cbiAgICAgICAgbGV0IHUgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXBzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnI3VzZXInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZyA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBnMiA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJyMnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdWcgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ0dyb3VwIycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IEZpeCBlbnRpdHkgb2YgdGhlIHJlbGF0aW9uLnJlZiBpZicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdCh1LmZpZWxkcy5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLnRvT2JqZWN0KCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ211c3Qgc2V0IG5hbWUgb2YgcmVsYXRpb24gdG8gZW50aXR5IG5hbWUgcmVsYXRpb24ucmVmJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcuZmllbGRzLmdldCgndXNlcnMnKS5yZWxhdGlvbi50b09iamVjdCgpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IHVzZSBFbnRpdHkgbmFtZSBhcyB1c2luZyBmaWVsZCBpbiBoYXNNYW55IHJlbGF0aW9uJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcyLmZpZWxkcy5nZXQoJ3VzZXJzJykucmVsYXRpb24udG9PYmplY3QoKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodS50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZy50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVnLnRvT2JqZWN0KCkse2RlcHRoOiA3fSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC91bml0L21vZGVsLmpzXG4gKiovIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXRpbC91dGlsLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtFbnRpdHl9IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCB7RmllbGR9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHtNb2RlbFBhY2thZ2V9IGZyb20gJy4vbW9kZWxwYWNrYWdlJztcbmltcG9ydCB7SGFzT25lfSBmcm9tICcuL2hhc29uZSc7XG5pbXBvcnQge0hhc01hbnl9IGZyb20gJy4vaGFzbWFueSc7XG5pbXBvcnQge0JlbG9uZ3NUb30gZnJvbSAnLi9iZWxvbmdzdG8nO1xuaW1wb3J0IHtCZWxvbmdzVG9NYW55fSBmcm9tICcuL2JlbG9uZ3N0b21hbnknO1xuaW1wb3J0IHtERUZBVUxUX0lEX0ZJRUxEfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSAnLi9jb21wb3NlJztcblxuZXhwb3J0IHtcbiAgY29tcG9zZSxcbiAgRW50aXR5LFxuICBGaWVsZCxcbiAgSGFzT25lLFxuICBIYXNNYW55LFxuICBCZWxvbmdzVG8sXG4gIEJlbG9uZ3NUb01hbnksXG4gIE1vZGVsUGFja2FnZSxcbiAgREVGQVVMVF9JRF9GSUVMRCxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7TW9kZWxCYXNlfSBmcm9tICcuL21vZGVsYmFzZSc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7SGFzT25lfSBmcm9tICcuL2hhc29uZSc7XG5pbXBvcnQge0hhc01hbnl9IGZyb20gJy4vaGFzbWFueSc7XG5pbXBvcnQge0JlbG9uZ3NUb30gZnJvbSAnLi9iZWxvbmdzdG8nO1xuaW1wb3J0IHtCZWxvbmdzVG9NYW55fSBmcm9tICcuL2JlbG9uZ3N0b21hbnknO1xuaW1wb3J0IHtERUZBVUxUX0lEX0ZJRUxEfSBmcm9tICcuL2RlZmluaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eSBleHRlbmRzIE1vZGVsQmFzZSB7XG5cbiAgc3RhdGljIGNvbXBvc2UocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICByZXR1cm4gbmV3IEVudGl0eSh7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGZpZWxkczogY2hpbGRyZW4sXG4gICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRW50aXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGVuc3VyZUlkcyhtb2RlbFBhY2thZ2UpIHtcbiAgICB0aGlzLmlkZW50aXR5LmZvckVhY2goKHZhbHVlKT0+IHtcbiAgICAgIHZhciBpZHMgPSB0aGlzLmZpZWxkcy5nZXQodmFsdWUpO1xuICAgICAgbW9kZWxQYWNrYWdlLmlkZW50aXR5RmllbGRzLnNldChpZHMuaWRLZXkudG9TdHJpbmcoKSwgdGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICBlbnN1cmVGS3MobW9kZWxQYWNrYWdlKSB7XG4gICAgaWYgKG1vZGVsUGFja2FnZSkge1xuICAgICAgbGV0IG1vZGVsUmVsYXRpb25zO1xuICAgICAgaWYgKG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuaGFzKHRoaXMubmFtZSkpIHtcbiAgICAgICAgbW9kZWxSZWxhdGlvbnMgPSBtb2RlbFBhY2thZ2UucmVsYXRpb25zLmdldCh0aGlzLm5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kZWxSZWxhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuc2V0KHRoaXMubmFtZSwgbW9kZWxSZWxhdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbGF0aW9ucy5mb3JFYWNoKCh2YWx1ZSk9PiB7XG4gICAgICAgIGxldCByZWYgPSB0aGlzLmZpZWxkcy5nZXQodmFsdWUpO1xuICAgICAgICAvLyBtdXN0IGJlIGRpZmZlcmVudCB0byBhcHBseSBmaXh1cFxuICAgICAgICBtb2RlbFJlbGF0aW9ucy5zZXQocmVmLm5hbWUsIHJlZi5jbG9uZSgpKTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbWlzc2luZyA9IHRoaXMuY2hlY2tSZWxhdGlvbnMobW9kZWxQYWNrYWdlKTtcbiAgICAgIG1pc3NpbmcuZm9yRWFjaCgocik9PiB7XG4gICAgICAgIG1vZGVsUmVsYXRpb25zLmRlbGV0ZShyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tSZWxhdGlvbnMobW9kZWxQYWNrYWdlKSB7XG4gICAgbGV0IG1pc3NpbmcgPSBbXTtcbiAgICBpZiAobW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5oYXModGhpcy5uYW1lKSkge1xuICAgICAgbGV0IG1vZGVsUmVsYXRpb25zID0gbW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5nZXQodGhpcy5uYW1lKTtcbiAgICAgIG1vZGVsUmVsYXRpb25zLmZvckVhY2goKGZpZWxkKT0+IHtcbiAgICAgICAgbGV0IHIgPSBmaWVsZC5yZWxhdGlvbjtcbiAgICAgICAgbGV0IG1pc3NpbmdSZWYgPSB0cnVlO1xuICAgICAgICBpZiAoIXIucmVmLmZpZWxkKSB7XG4gICAgICAgICAgLy8gZGlzY292ZXIgZmllbGROYW1lXG4gICAgICAgICAgaWYgKG1vZGVsUGFja2FnZS5lbnRpdGllcy5oYXMoci5yZWYuZW50aXR5KSkge1xuICAgICAgICAgICAgbGV0IGUgPSBtb2RlbFBhY2thZ2UuZW50aXRpZXMuZ2V0KHIucmVmLmVudGl0eSk7XG4gICAgICAgICAgICByLnJlZi5maWVsZCA9IGUuaWRlbnRpdHlbMF07XG4gICAgICAgICAgICBtaXNzaW5nUmVmID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZlR5cGUgPSAociBpbnN0YW5jZW9mIEhhc09uZSkgPyAnSGFzT25lJyA6IChyIGluc3RhbmNlb2YgSGFzTWFueSA/ICdIYXNNYW55JyA6IChyIGluc3RhbmNlb2YgQmVsb25nc1RvTWFueSA/ICdCZWxvbmdzVG9NYW55JyA6ICdCZWxvbmdzVG8nKSk7XG4gICAgICAgIHN3aXRjaCAoZlR5cGUpe1xuICAgICAgICAgIGNhc2UgJ0hhc09uZSc6XG4gICAgICAgICAgICBpZiAobW9kZWxQYWNrYWdlLmVudGl0aWVzLmhhcyhyLnJlZi5lbnRpdHkpKSB7XG4gICAgICAgICAgICAgIGxldCByZWZlID0gbW9kZWxQYWNrYWdlLmVudGl0aWVzLmdldChyLnJlZi5lbnRpdHkpO1xuICAgICAgICAgICAgICBpZiAocmVsYXRpb25zLmZpZWxkcy5oYXMoci5yZWYuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1JlZiA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSGFzTWFueSc6XG4gICAgICAgICAgICAvLyBtdXN0IGJlIGluIHJlZiBzdG9yZVxuICAgICAgICAgICAgaWYgKG1vZGVsUGFja2FnZS5lbnRpdGllcy5oYXMoci5yZWYuZW50aXR5KSkge1xuICAgICAgICAgICAgICBsZXQgcmVmZSA9IG1vZGVsUGFja2FnZS5lbnRpdGllcy5nZXQoci5yZWYuZW50aXR5KTtcbiAgICAgICAgICAgICAgaWYgKHJlZmUuZmllbGRzLmhhcyhyLnJlZi5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nUmVmID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdCZWxvbmdzVG9NYW55JzpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgaW4gcmVmIHN0b3JlXG4gICAgICAgICAgICBpZiAobW9kZWxQYWNrYWdlLmVudGl0aWVzLmhhcyhyLnJlZi5lbnRpdHkpKSB7XG4gICAgICAgICAgICAgIGxldCByZWZlID0gbW9kZWxQYWNrYWdlLmVudGl0aWVzLmdldChyLnJlZi5lbnRpdHkpO1xuICAgICAgICAgICAgICBpZiAocmVmZS5maWVsZHMuaGFzKHIucmVmLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIG1pc3NpbmdSZWYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IHVzaW5nID0gci51c2luZztcbiAgICAgICAgICAgICAgaWYgKHVzaW5nICYmIG1vZGVsUGFja2FnZS5lbnRpdGllcy5oYXModXNpbmcuZW50aXR5KSkge1xuICAgICAgICAgICAgICAgIC8vINC30LTQtdGB0Ywg0L3Rg9C20L3QviDQsdGD0LTQtdGCINC40LfQvNC10L3QuNGC0Ywg0YLQuNC/INCw0YHRgdC+0YbQuNCw0YbQuNC4XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZVJlZiA9IHIudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVJlZi5oYXNNYW55ID0gcmVwbGFjZVJlZi51c2luZztcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXBsYWNlUmVmLmJlbG9uZ3NUb01hbnk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlcGxhY2VSZWYudXNpbmc7XG5cbiAgICAgICAgICAgICAgICBmaWVsZC4kb2JqLnJlbGF0aW9uID0gbmV3IEhhc01hbnkocmVwbGFjZVJlZik7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1JlZiA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQmVsb25nc1RvJzpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgaW4gaWRlbnRpdHkgc3RvcmVcbiAgICAgICAgICAgIGlmIChtb2RlbFBhY2thZ2UuaWRlbnRpdHlGaWVsZHMuaGFzKHIucmVmLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgIG1pc3NpbmdSZWYgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaXNzaW5nUmVmKSB7XG4gICAgICAgICAgbWlzc2luZy5wdXNoKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtaXNzaW5nO1xuICB9XG5cbiAgcmVtb3ZlSWRzKG1vZGVsUGFja2FnZSkge1xuICAgIHRoaXMuaWRlbnRpdHkuZm9yRWFjaCgodmFsdWUpPT4ge1xuICAgICAgdmFyIGlkcyA9IHRoaXMuZmllbGRzLmdldCh2YWx1ZSk7XG4gICAgICBtb2RlbFBhY2thZ2UuaWRlbnRpdHlGaWVsZHMuZGVsZXRlKGlkcy5pZEtleS50b1N0cmluZygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCByZWxhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5yZWxhdGlvbnMgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5yZXF1aXJlZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmlkZW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmZpZWxkcyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpbmRleGVkKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaW5kZXhlZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgc3VwZXIudXBkYXRlV2l0aChvYmopO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICByZXN1bHQubmFtZSA9IChyZXN1bHQubmFtZS5zbGljZSgwLDEpKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0Lm5hbWUuc2xpY2UoMSk7XG5cbiAgICAgIGNvbnN0IGZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICAgIGNvbnN0IHJlbGF0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgIGNvbnN0IGlkZW50aXR5ID0gbmV3IFNldCgpO1xuICAgICAgY29uc3QgcmVxdWlyZWQgPSBuZXcgU2V0KCk7XG4gICAgICBjb25zdCBpbmRleGVkID0gbmV3IFNldCgpO1xuXG4gICAgICBvYmouZmllbGRzLmZvckVhY2goZiA9PiB7XG5cbiAgICAgICAgbGV0IGZpZWxkID0gbmV3IEZpZWxkKHsuLi5mLCBlbnRpdHk6IHJlc3VsdC5uYW1lfSk7XG5cbiAgICAgICAgaWYgKGZpZWxkcy5oYXMoZmllbGQubmFtZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBzYW1lIGZpZWxkICR7ZmllbGQubmFtZX0gaXMgYWxyZWFkeSBleGlzdHMgaW4gJHtvYmoubmFtZX0gZW50cnlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkcy5zZXQoZmllbGQubmFtZSwgZmllbGQpO1xuXG4gICAgICAgIGlmIChmaWVsZC5pZGVudGl0eSkge1xuICAgICAgICAgIGlkZW50aXR5LmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5yZXF1aXJlZCkge1xuICAgICAgICAgIHJlcXVpcmVkLmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5yZWxhdGlvbikge1xuICAgICAgICAgIHJlbGF0aW9ucy5hZGQoZmllbGQubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQuaW5kZXhlZCkge1xuICAgICAgICAgIGluZGV4ZWQuYWRkKGZpZWxkLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaWRlbnRpdHkuc2l6ZSA9PSAwKSB7XG4gICAgICAgIGxldCBmO1xuICAgICAgICBpZiAoZmllbGRzLmhhcygnaWQnKSkge1xuICAgICAgICAgIGYgPSBmaWVsZHMuZ2V0KCdpZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkcy5oYXMoJ19pZCcpKSB7XG4gICAgICAgICAgZiA9IGZpZWxkcy5nZXQoJ19pZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYgPSBuZXcgRmllbGQoey4uLkRFRkFVTFRfSURfRklFTEQsIGVudGl0eTogcmVzdWx0Lm5hbWV9KTtcbiAgICAgICAgICBmaWVsZHMuc2V0KGYubmFtZSwgZik7XG4gICAgICAgIH1cblxuICAgICAgICBmLmlkZW50aXR5ID0gdHJ1ZTtcbiAgICAgICAgaWRlbnRpdHkuYWRkKGYubmFtZSk7XG4gICAgICAgIHJlcXVpcmVkLmFkZChmLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucmVsYXRpb25zID0gcmVsYXRpb25zO1xuICAgICAgcmVzdWx0LmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICByZXN1bHQucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAgIHJlc3VsdC5maWVsZHMgPSBmaWVsZHM7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvT2JqZWN0KG1vZGVsUGFja2FnZSkge1xuICAgIGlmICghbW9kZWxQYWNrYWdlKSB7XG4gICAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGZpZWxkczogWy4uLnByb3BzLmZpZWxkcy52YWx1ZXMoKV0ubWFwKGY9PiBmLnRvT2JqZWN0KCkpLFxuICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1vZGVsUmVsYXRpb25zID0gbW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5nZXQodGhpcy5uYW1lKTtcbiAgICAgIGlmIChtb2RlbFJlbGF0aW9ucykge1xuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4ucmVzLFxuICAgICAgICAgIGZpZWxkczogWy4uLnByb3BzLmZpZWxkcy52YWx1ZXMoKV0ubWFwKGY9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWxhdGlvbnMuaGFzKGYubmFtZSkpIHtcbiAgICAgICAgICAgICAgaWYgKG1vZGVsUmVsYXRpb25zLmhhcyhmLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYudG9PYmplY3QobW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGYudG9PYmplY3QobW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5maWx0ZXIoZj0+ZiksXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b0pTT04obW9kZWxQYWNrYWdlKSB7XG4gICAgaWYgKCFtb2RlbFBhY2thZ2UpIHtcbiAgICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGZpZWxkczogWy4uLnByb3BzLmZpZWxkcy52YWx1ZXMoKV0ubWFwKGY9PiBmLnRvSlNPTigpKSxcbiAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtb2RlbFJlbGF0aW9ucyA9IG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuZ2V0KHRoaXMubmFtZSk7XG4gICAgICBpZiAobW9kZWxSZWxhdGlvbnMpIHtcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgICAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAuLi5yZXMsXG4gICAgICAgICAgZmllbGRzOiBbLi4ucHJvcHMuZmllbGRzLnZhbHVlcygpXS5tYXAoZj0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbGF0aW9ucy5oYXMoZi5uYW1lKSkge1xuICAgICAgICAgICAgICBpZiAobW9kZWxSZWxhdGlvbnMuaGFzKGYubmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZi50b0pTT04obW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGYudG9KU09OKG1vZGVsUGFja2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkuZmlsdGVyKGY9PmYpLFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9lbnRpdHkuanNcbiAqKi8iLCJpbXBvcnQgY2FtZWxjYXNlIGZyb20gJ2NhbWVsY2FzZSc7XG5pbXBvcnQgZGVjYW1lbGl6ZSBmcm9tICdkZWNhbWVsaXplJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMudXBkYXRlV2l0aChvYmopO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoubmFtZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IChwcm9wcy50aXRsZSB8fCBwcm9wcy50aXRsZV8pIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gKHByb3BzLmRlc2NyaXB0aW9uIHx8IHByb3BzLmRlc2NyaXB0aW9uXykgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b09iamVjdCgpKTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZSB8fCBwcm9wcy5uYW1lXyxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSB8fCBwcm9wcy50aXRsZV8sXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24gfHwgcHJvcHMuZGVzY3JpcHRpb25fLFxuICAgIH07XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXyxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZV8sXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb25fLFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IG5hbWVfID0gb2JqLm5hbWU7XG4gICAgICBsZXQgdGl0bGVfID0gb2JqLnRpdGxlO1xuICAgICAgbGV0IGRlc2NyaXB0aW9uXyA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgICAgbGV0IG5hbWUgPSBjYW1lbGNhc2UobmFtZV8udHJpbSgpKTtcblxuICAgICAgbGV0IHRpdGxlID0gdGl0bGVfID8gdGl0bGVfLnRyaW0oKSA6ICcnO1xuXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbl8gPyBkZXNjcmlwdGlvbl8udHJpbSgpIDogJyc7XG5cbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSBkZWNhbWVsaXplKG5hbWUsICcgJyk7XG4gICAgICB9XG4gICAgICB0aXRsZSA9ICh0aXRsZS5zbGljZSgwLDEpKS50b1VwcGVyQ2FzZSgpICsgdGl0bGUuc2xpY2UoMSk7XG5cbiAgICAgIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSB0aXRsZSB8fCB0aXRsZV87XG4gICAgICB9XG4gICAgICBkZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbi5zbGljZSgwLDEpKS50b1VwcGVyQ2FzZSgpICsgZGVzY3JpcHRpb24uc2xpY2UoMSk7XG5cbiAgICAgIHJlc3VsdC5uYW1lXyA9IG5hbWVfO1xuICAgICAgcmVzdWx0Lm5hbWUgPSBuYW1lO1xuXG4gICAgICByZXN1bHQudGl0bGVfID0gdGl0bGVfO1xuICAgICAgcmVzdWx0LnRpdGxlID0gdGl0bGU7XG5cbiAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbl8gPSBkZXNjcmlwdGlvbl87XG4gICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMudG9KU09OKCkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9tb2RlbGJhc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHByZXNlcnZlQ2FtZWxDYXNlKHN0cikge1xuXHR2YXIgaXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG5cblx0XHRpZiAoaXNMYXN0Q2hhckxvd2VyICYmICgvW2EtekEtWl0vKS50ZXN0KGMpICYmIGMudG9VcHBlckNhc2UoKSA9PT0gYykge1xuXHRcdFx0c3RyID0gc3RyLnN1YnN0cigwLCBpKSArICctJyArIHN0ci5zdWJzdHIoaSk7XG5cdFx0XHRpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNMYXN0Q2hhckxvd2VyID0gKGMudG9Mb3dlckNhc2UoKSA9PT0gYyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzdHIgPSBbXS5tYXAuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChzdHIpIHtcblx0XHRyZXR1cm4gc3RyLnRyaW0oKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcblx0XHRyZXR1cm4gc3RyLmxlbmd0aDtcblx0fSkuam9pbignLScpO1xuXG5cdGlmICghc3RyLmxlbmd0aCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmIChzdHIubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXG5cdGlmICghKC9bXy5cXC0gXSsvKS50ZXN0KHN0cikpIHtcblx0XHRpZiAoc3RyID09PSBzdHIudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdGlmIChzdHJbMF0gIT09IHN0clswXS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gc3RyWzBdLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXG5cdHN0ciA9IHByZXNlcnZlQ2FtZWxDYXNlKHN0cik7XG5cblx0cmV0dXJuIHN0clxuXHQucmVwbGFjZSgvXltfLlxcLSBdKy8sICcnKVxuXHQudG9Mb3dlckNhc2UoKVxuXHQucmVwbGFjZSgvW18uXFwtIF0rKFxcd3wkKS9nLCBmdW5jdGlvbiAobSwgcDEpIHtcblx0XHRyZXR1cm4gcDEudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2FtZWxjYXNlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgc2VwKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRzZXAgPSB0eXBlb2Ygc2VwID09PSAndW5kZWZpbmVkJyA/ICdfJyA6IHNlcDtcblxuXHRyZXR1cm4gc3RyXG5cdFx0LnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMScgKyBzZXAgKyAnJDInKVxuXHRcdC5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpcXGRdKykvZywgJyQxJyArIHNlcCArICckMicpXG5cdFx0LnRvTG93ZXJDYXNlKCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVjYW1lbGl6ZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0ZpZWxkQmFzZX0gZnJvbSAnLi9maWVsZGJhc2UnO1xuaW1wb3J0IHtFbnRpdHl9IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCB7SGFzT25lfSBmcm9tICcuL2hhc29uZSc7XG5pbXBvcnQge0hhc01hbnl9IGZyb20gJy4vaGFzbWFueSc7XG5pbXBvcnQge0JlbG9uZ3NUb30gZnJvbSAnLi9iZWxvbmdzdG8nO1xuaW1wb3J0IHtCZWxvbmdzVG9NYW55fSBmcm9tICcuL2JlbG9uZ3N0b21hbnknO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcblxuZnVuY3Rpb24gZGlzY292ZXJGaWVsZFR5cGUob2JqKSB7XG4gIC8vINGB0LTQtdC70LDRgtGMINC/0YDQvtCy0LXRgNC60YMg0L/QviDQv9C+0LvRji4uLlxuICBpZiAob2JqLmhhc09uZSkge1xuICAgIHJldHVybiAnSGFzT25lJztcbiAgfSBlbHNlIGlmIChvYmouaGFzTWFueSkge1xuICAgIHJldHVybiAnSGFzTWFueSc7XG4gIH0gZWxzZSBpZiAob2JqLmJlbG9uZ3NUbykge1xuICAgIHJldHVybiAnQmVsb25nc1RvJztcbiAgfSBlbHNlIGlmIChvYmouYmVsb25nc1RvTWFueSkge1xuICAgIHJldHVybiAnQmVsb25nc1RvTWFueSc7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKGB1bmRlZmluZWQgcmVsYXRpb24gdHlwZSBvZiAke0pTT04uc3RyaW5naWZ5KG9iail9YCk7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgRmllbGQgZXh0ZW5kcyBGaWVsZEJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIHJlbGF0aW9uOiBjaGlsZHJlbiA/IGNoaWxkcmVuWzBdIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai50eXBlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlkZW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaWRlbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBzZXQgaWRlbnRpdHkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuJG9iai5pZEtleSA9IG5ldyBSZWYodGhpcy4kb2JqLmVudGl0eSwgdGhpcy4kb2JqLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRvYmouaWRLZXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuJG9iai5pZGVudGl0eSA9IHRoaXMuJG9iai5pZGVudGl0eV8gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLnJlcXVpcmVkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGluZGV4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5pbmRleGVkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlkS2V5KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaWRLZXkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgcmVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5yZWxhdGlvbiA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgc3VwZXIudXBkYXRlV2l0aChvYmopO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IHR5cGVfID0gb2JqLnR5cGU7XG4gICAgICBsZXQgdHlwZSA9IHR5cGVfIHx8ICdzdHJpbmcnO1xuXG4gICAgICBsZXQgaWRlbnRpdHlfID0gb2JqLmlkZW50aXR5O1xuICAgICAgbGV0IGlkZW50aXR5ID0gaWRlbnRpdHlfIHx8IGZhbHNlO1xuXG4gICAgICBsZXQgcmVxdWlyZWRfID0gb2JqLnJlcXVpcmVkO1xuICAgICAgbGV0IHJlcXVpcmVkID0gcmVxdWlyZWQgfHwgZmFsc2U7XG5cbiAgICAgIGxldCBpbmRleGVkXyA9IG9iai5pbmRleGVkO1xuICAgICAgbGV0IGluZGV4ZWQgPSBpbmRleGVkIHx8IGlkZW50aXR5O1xuXG4gICAgICByZXN1bHQudHlwZV8gPSB0eXBlXztcbiAgICAgIHJlc3VsdC50eXBlID0gdHlwZTtcblxuICAgICAgcmVzdWx0LmlkZW50aXR5XyA9IGlkZW50aXR5XztcbiAgICAgIHJlc3VsdC5pZGVudGl0eSA9IGlkZW50aXR5O1xuXG4gICAgICByZXN1bHQuaW5kZXhlZF8gPSBpbmRleGVkXztcbiAgICAgIHJlc3VsdC5pbmRleGVkID0gaW5kZXhlZDtcblxuICAgICAgaWYgKHJlc3VsdC5pZGVudGl0eSkge1xuICAgICAgICAvLyDRjdGC0L4g0YLQviDQutCw0Log0LLRi9Cz0LvRj9C00LjRgiDQutC70Y7RhyDQtNC70Y8g0LLQvdC10YjQvdC40YUg0YHRgdGL0LvQvtC6XG4gICAgICAgIHJlc3VsdC5pZEtleSA9IG5ldyBSZWYocmVzdWx0LmVudGl0eSwgcmVzdWx0Lm5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucmVxdWlyZWRfID0gcmVxdWlyZWRfO1xuICAgICAgcmVzdWx0LnJlcXVpcmVkID0gaWRlbnRpdHlfIHx8IHJlcXVpcmVkXyB8fCBmYWxzZTtcblxuICAgICAgaWYgKG9iai5yZWxhdGlvbikge1xuICAgICAgICBsZXQgcmVsYXRpb25fID0gb2JqLnJlbGF0aW9uO1xuICAgICAgICBsZXQgcmVsYXRpb247XG5cbiAgICAgICAgc3dpdGNoIChkaXNjb3ZlckZpZWxkVHlwZShyZWxhdGlvbl8pKXtcbiAgICAgICAgICBjYXNlICdIYXNPbmUnOlxuICAgICAgICAgICAgcmVsYXRpb24gPSBuZXcgSGFzT25lKHsuLi5yZWxhdGlvbl8sIGVudGl0eTogb2JqLmVudGl0eX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hhc01hbnknOlxuICAgICAgICAgICAgcmVsYXRpb24gPSBuZXcgSGFzTWFueSh7Li4ucmVsYXRpb25fLCBlbnRpdHk6IG9iai5lbnRpdHkgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQmVsb25nc1RvJzpcbiAgICAgICAgICAgIHJlbGF0aW9uID0gbmV3IEJlbG9uZ3NUbyh7Li4ucmVsYXRpb25fLCBlbnRpdHk6IG9iai5lbnRpdHl9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdCZWxvbmdzVG9NYW55JzpcbiAgICAgICAgICAgIHJlbGF0aW9uID0gbmV3IEJlbG9uZ3NUb01hbnkoey4uLnJlbGF0aW9uXywgZW50aXR5OiBvYmouZW50aXR5fSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5rbm93bic6XG4gICAgICAgICAgICByZWxhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5yZWxhdGlvbiA9IHJlbGF0aW9uO1xuICAgICAgICBkZWxldGUgcmVzdWx0LnR5cGVfO1xuICAgICAgICBkZWxldGUgcmVzdWx0LnR5cGU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUgfHwgcHJvcHMudHlwZV8sXG4gICAgICBpZGVudGl0eTogcHJvcHMuaWRlbnRpdHkgfHwgcHJvcHMuaWRlbnRpdHlfICxcbiAgICAgIHJlcXVpcmVkOiBwcm9wcy5yZXF1aXJlZCB8fCBwcm9wcy5yZXF1aXJlZF8sXG4gICAgICBpbmRleGVkOiBwcm9wcy5pbmRleGVkIHx8IHByb3BzLmluZGV4ZWRfLFxuICAgICAgaWRLZXk6IHByb3BzLmlkS2V5ID8gcHJvcHMuaWRLZXkudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJlbGF0aW9uOiBwcm9wcy5yZWxhdGlvbiA/IHByb3BzLnJlbGF0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXQgZ2V0IGNsZWFuIG9iamVjdCB3aXRoIG5vIGRlZmF1bHQgdmFsdWVzXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGVfLFxuICAgICAgaWRlbnRpdHk6IHByb3BzLmlkZW50aXR5XyxcbiAgICAgIHJlcXVpcmVkOiBwcm9wcy5yZXF1aXJlZF8sXG4gICAgICBpbmRleGVkOiBwcm9wcy5pbmRleGVkXyxcbiAgICAgIHJlbGF0aW9uOiBwcm9wcy5yZWxhdGlvbiA/IHByb3BzLnJlbGF0aW9uLnRvSlNPTigpIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvZmllbGQuanNcbiAqKi8iLCJpbXBvcnQge01vZGVsQmFzZX0gZnJvbSAnLi9tb2RlbGJhc2UnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRCYXNlIGV4dGVuZHMgTW9kZWxCYXNlIHtcbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCBlbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5lbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGVudGl0eV8gPSBvYmouZW50aXR5O1xuICAgICAgbGV0IGVudGl0eSA9IGVudGl0eV87XG5cbiAgICAgIHJlc3VsdC5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICByZXN1bHQuZW50aXR5XyA9IGVudGl0eV87XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGVudGl0eTogcHJvcHMuZW50aXR5IHx8IHByb3BzLmVudGl0eV8gLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIGl0IGdldCBjbGVhbiBvYmplY3Qgd2l0aCBubyBkZWZhdWx0IHZhbHVlc1xuICB0b0pTT04oKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICAvLyBlbnRpdHk6IHByb3BzLmVudGl0eV8sXG4gICAgfSkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9maWVsZGJhc2UuanNcbiAqKi8iLCJpbXBvcnQge1JlZkJhc2V9IGZyb20gJy4vcmVmYmFzZSc7XG5pbXBvcnQge1JFRl9QQVRURVJOfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmltcG9ydCB7UmVmfSBmcm9tICcuL3JlZic7XG5pbXBvcnQgY2FtZWxjYXNlIGZyb20gJ2NhbWVsY2FzZSc7XG5cbmV4cG9ydCBjbGFzcyBIYXNPbmUgZXh0ZW5kcyBSZWZCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnJlZiAmJiAhcmVzdWx0Lmhhc09uZSkge1xuICAgICAgcmVzdWx0Lmhhc09uZSA9IHJlc3VsdC5yZWY7XG4gICAgICBkZWxldGUgcmVzdWx0LnJlZjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHN1cGVyKG9iaik7XG4gIH1cblxuICBnZXQgaGFzT25lKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaGFzT25lIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlZigpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmhhc09uZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgc3VwZXIudXBkYXRlV2l0aChvYmopO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICBsZXQgaGFzT25lXyA9IG9iai5oYXNPbmU7XG5cbiAgICAgIGxldCBoYXNPbmU7XG4gICAgICBpZiAoaGFzT25lXykge1xuICAgICAgICBoYXNPbmUgPSBuZXcgUmVmKCk7XG4gICAgICAgIGxldCByZXMgPSBoYXNPbmVfLm1hdGNoKFJFRl9QQVRURVJOKTtcbiAgICAgICAgaGFzT25lLmVudGl0eSA9IHJlc1sxXSB8fCBvYmouZW50aXR5O1xuICAgICAgICBoYXNPbmUuZmllbGQgPSByZXNbMl0gPyBjYW1lbGNhc2UocmVzWzJdLnRyaW0oKSkgOiAnJztcbiAgICAgIH1cblxuICAgICAgcmVzdWx0Lmhhc09uZV8gPSBoYXNPbmVfO1xuICAgICAgcmVzdWx0Lmhhc09uZSA9IGhhc09uZTtcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gaXQgZ2V0IGZpeGVkIG9iamVjdFxuICB0b09iamVjdCgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvT2JqZWN0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgaGFzT25lOiBwcm9wcy5oYXNPbmUgPyBwcm9wcy5oYXNPbmUudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgaGFzT25lOiBwcm9wcy5oYXNPbmVfLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvaGFzb25lLmpzXG4gKiovIiwiaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgUmVmQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMudXBkYXRlV2l0aChvYmopO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoubmFtZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvT2JqZWN0KCkpO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lIHx8IHByb3BzLm5hbWVfLFxuICAgIH07XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXyxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCBuYW1lXyA9IG9iai5uYW1lO1xuXG4gICAgICBsZXQgbmFtZSA9IG5hbWUgPyBjYW1lbGNhc2UobmFtZV8udHJpbSgpKSA6IG5hbWU7XG5cbiAgICAgIHJlc3VsdC5uYW1lXyA9IG5hbWVfO1xuICAgICAgcmVzdWx0Lm5hbWUgPSBuYW1lO1xuXG4gICAgICB0aGlzLiRvYmogPSB7XG4gICAgICAgIC4uLnJlc3VsdFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy50b0pTT04oKSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL3JlZmJhc2UuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgUkVGX1BBVFRFUk4gPSAvXiguKj8pKD86IyguKj8pKT8kLztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSURfRklFTEROQU1FID0gJ2lkJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSURfRklFTEQgPSB7XG4gIG5hbWU6IERFRkFVTFRfSURfRklFTEROQU1FLFxuICBpZGVudGl0eTogdHJ1ZSxcbiAgcmVxdWlyZWQ6IHRydWUsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvZGVmaW5pdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgeyBERUZBVUxUX0lEX0ZJRUxETkFNRSB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgUmVmIHtcbiAgY29uc3RydWN0b3IoZW50aXR5LCBmaWVsZCkge1xuICAgIGlmICh0eXBlb2YgZW50aXR5ID09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICB9IGVsc2UgaWYgKGVudGl0eSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHkuZW50aXR5O1xuICAgICAgdGhpcy5maWVsZCA9IGVudGl0eS5maWVsZDtcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5lbnRpdHl9IyR7dGhpcy5maWVsZCB8fCBERUZBVUxUX0lEX0ZJRUxETkFNRX1gO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvcmVmLmpzXG4gKiovIiwiaW1wb3J0IHtSZWZCYXNlfSBmcm9tICcuL3JlZmJhc2UnO1xuaW1wb3J0IHtSRUZfUEFUVEVSTn0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5pbXBvcnQge1JlZn0gZnJvbSAnLi9yZWYnO1xuaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueSBleHRlbmRzIFJlZkJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAuLi5wcm9wcyxcbiAgICB9O1xuICAgIGlmIChyZXN1bHQucmVmICYmICFyZXN1bHQuaGFzTWFueSkge1xuICAgICAgcmVzdWx0Lmhhc01hbnkgPSByZXN1bHQucmVmO1xuICAgICAgZGVsZXRlIHJlc3VsdC5yZWY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IGhhc01hbnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5oYXNNYW55IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlZigpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmhhc01hbnkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGhhc01hbnlfID0gb2JqLmhhc01hbnk7XG5cbiAgICAgIGxldCBoYXNNYW55O1xuICAgICAgaWYgKGhhc01hbnlfKSB7XG4gICAgICAgIGhhc01hbnkgPSBuZXcgUmVmKCk7XG4gICAgICAgIGxldCByZXMgPSBoYXNNYW55Xy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIGhhc01hbnkuZW50aXR5ID0gcmVzWzFdIHx8IG9iai5lbnRpdHk7XG4gICAgICAgIGhhc01hbnkuZmllbGQgPSByZXNbMl0gPyBjYW1lbGNhc2UocmVzWzJdLnRyaW0oKSkgOiAnJztcbiAgICAgIH1cblxuICAgICAgcmVzdWx0Lmhhc01hbnlfID0gaGFzTWFueV87XG4gICAgICByZXN1bHQuaGFzTWFueSA9IGhhc01hbnk7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICAvLyBpdCBnZXQgZml4ZWQgb2JqZWN0XG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBoYXNNYW55OiBwcm9wcy5oYXNNYW55ID8gcHJvcHMuaGFzTWFueS50b1N0cmluZygpIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIGl0IGdldCBjbGVhbiBvYmplY3Qgd2l0aCBubyBkZWZhdWx0IHZhbHVlc1xuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBoYXNNYW55OiBwcm9wcy5oYXNNYW55XyxcbiAgICB9KSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2hhc21hbnkuanNcbiAqKi8iLCJpbXBvcnQge1JlZkJhc2V9IGZyb20gJy4vcmVmYmFzZSc7XG5pbXBvcnQge1JFRl9QQVRURVJOfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmltcG9ydCB7UmVmfSBmcm9tICcuL3JlZic7XG5pbXBvcnQgY2FtZWxjYXNlIGZyb20gJ2NhbWVsY2FzZSc7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG8gZXh0ZW5kcyBSZWZCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnJlZiAmJiAhcmVzdWx0LmJlbG9uZ3NUbykge1xuICAgICAgcmVzdWx0LmJlbG9uZ3NUbyA9IHJlc3VsdC5yZWY7XG4gICAgICBkZWxldGUgcmVzdWx0LnJlZjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHN1cGVyKG9iaik7XG4gIH1cblxuICBnZXQgYmVsb25nc1RvKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouYmVsb25nc1RvIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlZigpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmJlbG9uZ3NUbyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgc3VwZXIudXBkYXRlV2l0aChvYmopO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICBsZXQgYmVsb25nc1RvXyA9IG9iai5iZWxvbmdzVG87XG5cbiAgICAgIGxldCBiZWxvbmdzVG87XG4gICAgICBpZiAoYmVsb25nc1RvXykge1xuICAgICAgICBiZWxvbmdzVG8gPSBuZXcgUmVmKCk7XG4gICAgICAgIGxldCByZXMgPSBiZWxvbmdzVG9fLm1hdGNoKFJFRl9QQVRURVJOKTtcbiAgICAgICAgYmVsb25nc1RvLmVudGl0eSA9IHJlc1sxXSB8fCBvYmouZW50aXR5O1xuICAgICAgICBiZWxvbmdzVG8uZmllbGQgPSByZXNbMl0gPyBjYW1lbGNhc2UocmVzWzJdLnRyaW0oKSkgOiAnJztcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LmJlbG9uZ3NUb18gPSBiZWxvbmdzVG9fO1xuICAgICAgcmVzdWx0LmJlbG9uZ3NUbyA9IGJlbG9uZ3NUbztcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gaXQgZ2V0IGZpeGVkIG9iamVjdFxuICB0b09iamVjdCgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvT2JqZWN0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgYmVsb25nc1RvOiBwcm9wcy5iZWxvbmdzVG8gPyBwcm9wcy5iZWxvbmdzVG8udG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgYmVsb25nc1RvOiBwcm9wcy5iZWxvbmdzVG9fLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvYmVsb25nc3RvLmpzXG4gKiovIiwiaW1wb3J0IHtSZWZCYXNlfSBmcm9tICcuL3JlZmJhc2UnO1xuaW1wb3J0IHtSRUZfUEFUVEVSTn0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5pbXBvcnQge1JlZn0gZnJvbSAnLi9yZWYnO1xuaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvTWFueSBleHRlbmRzIFJlZkJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAuLi5wcm9wcyxcbiAgICB9O1xuICAgIGlmIChyZXN1bHQucmVmICYmICFyZXN1bHQuYmVsb25nc1RvTWFueSkge1xuICAgICAgcmVzdWx0LmJlbG9uZ3NUb01hbnkgPSByZXN1bHQucmVmO1xuICAgICAgZGVsZXRlIHJlc3VsdC5yZWY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IGJlbG9uZ3NUb01hbnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5iZWxvbmdzVG9NYW55IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHVzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoudXNpbmcgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgcmVmKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouYmVsb25nc1RvTWFueSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgc3VwZXIudXBkYXRlV2l0aChvYmopO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICBsZXQgYmVsb25nc1RvTWFueV8gPSBvYmouYmVsb25nc1RvTWFueTtcblxuICAgICAgbGV0IHVzaW5nXyA9IG9iai51c2luZztcblxuICAgICAgbGV0IGJlbG9uZ3NUb01hbnk7XG4gICAgICBpZiAoYmVsb25nc1RvTWFueV8pIHtcbiAgICAgICAgYmVsb25nc1RvTWFueSA9IG5ldyBSZWYoKTtcbiAgICAgICAgbGV0IHJlcyA9IGJlbG9uZ3NUb01hbnlfLm1hdGNoKFJFRl9QQVRURVJOKTtcbiAgICAgICAgYmVsb25nc1RvTWFueS5lbnRpdHkgPSByZXNbMV0gfHwgb2JqLmVudGl0eTtcbiAgICAgICAgYmVsb25nc1RvTWFueS5maWVsZCA9IHJlc1syXSA/IGNhbWVsY2FzZShyZXNbMl0udHJpbSgpKSA6ICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXNpbmc7XG4gICAgICBpZiAodXNpbmdfKSB7XG4gICAgICAgIHVzaW5nID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gdXNpbmdfLm1hdGNoKFJFRl9QQVRURVJOKTtcbiAgICAgICAgdXNpbmcuZW50aXR5ID0gcmVzWzFdIHx8IG9iai5uYW1lIHx8IG9iai5lbnRpdHk7XG4gICAgICAgIHVzaW5nLmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogb2JqLmVudGl0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXNpbmcgPSBuZXcgUmVmKGAke29iai5uYW1lIHx8IG9iai5lbnRpdHl9IyR7b2JqLmVudGl0eS50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5uYW1lXyAmJiB1c2luZykge1xuICAgICAgICByZXN1bHQubmFtZSA9IHVzaW5nLmVudGl0eTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LmJlbG9uZ3NUb01hbnlfID0gYmVsb25nc1RvTWFueV87XG4gICAgICByZXN1bHQuYmVsb25nc1RvTWFueSA9IGJlbG9uZ3NUb01hbnk7XG5cbiAgICAgIHJlc3VsdC51c2luZ18gPSB1c2luZ187XG4gICAgICByZXN1bHQudXNpbmcgPSB1c2luZztcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGJlbG9uZ3NUb01hbnk6IHByb3BzLmJlbG9uZ3NUb01hbnkgPyBwcm9wcy5iZWxvbmdzVG9NYW55LnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgICB1c2luZzogcHJvcHMudXNpbmcgPyBwcm9wcy51c2luZy50b1N0cmluZygpIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIGl0IGdldCBjbGVhbiBvYmplY3Qgd2l0aCBubyBkZWZhdWx0IHZhbHVlc1xuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBiZWxvbmdzVG9NYW55OiBwcm9wcy5iZWxvbmdzVG9NYW55XyxcbiAgICAgIHVzaW5nOiBwcm9wcy51c2luZ18sXG4gICAgfSkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9iZWxvbmdzdG9tYW55LmpzXG4gKiovIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vbW9kZWwvZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIE1vZGVsUGFja2FnZSB7XG5cbiAgc3RhdGljIGNvbXBvc2UocHJvcHMsIGVudGl0eUxpc3QpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1vZGVsUGFja2FnZShwcm9wcyk7XG4gICAgZW50aXR5TGlzdC5mb3JFYWNoKChlbnRpdHkpPT4ge1xuICAgICAgcmVzdWx0LmFkZChlbnRpdHkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDRgdC/0LjRgdC+0Log0LLRgdC10YUgZW50aXR5XG4gICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAvLyDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LUg0LIg0L/QsNC60LXRgtC1IGlkZW50aXR5XG4gICAgdGhpcy5pZGVudGl0eUZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICAvLyByZWYg0LTQu9GPINC40YHQv9GA0LDQstC70LXQvdC40LlcbiAgICB0aGlzLnJlbGF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGFkZChlbnRpdHkpIHtcbiAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgRW50aXR5KSB7XG4gICAgICB0aGlzLmVudGl0aWVzLnNldChlbnRpdHkubmFtZSwgZW50aXR5KTtcbiAgICAgIGVudGl0eS5lbnN1cmVJZHModGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBlbnRpdHk7XG4gIH1cblxuICBnZXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmdldChuYW1lKTtcbiAgfVxuXG4gIGNyZWF0ZShqc29uKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG5ldyBFbnRpdHkoanNvbikpO1xuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcbiAgICBsZXQgZW50aXR5ID0gdGhpcy5lbnRpdGllcy5nZXQobmFtZSk7XG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUobmFtZSk7XG4gICAgICBlbnRpdHkucmVtb3ZlSWRzKHRoaXMpO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5zaXplO1xuICB9XG4gIGVuc3VyZUFsbCgpIHtcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGUpPT4ge1xuICAgICAgZS5lbnN1cmVGS3ModGhpcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL21vZGVscGFja2FnZS5qc1xuICoqLyIsImltcG9ydCB7RW50aXR5fSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7TW9kZWxQYWNrYWdlfSBmcm9tICcuL21vZGVscGFja2FnZSc7XG5pbXBvcnQge0hhc09uZX0gZnJvbSAnLi9oYXNvbmUnO1xuaW1wb3J0IHtIYXNNYW55fSBmcm9tICcuL2hhc21hbnknO1xuaW1wb3J0IHtCZWxvbmdzVG99IGZyb20gJy4vYmVsb25nc3RvJztcbmltcG9ydCB7QmVsb25nc1RvTWFueX0gZnJvbSAnLi9iZWxvbmdzdG9tYW55JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoVF8sIHByb3BzLCAuLi5hdHRyKSB7XG4gIGxldCBUO1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIFRfKSB7XG4gICAgc3dpdGNoIChUXy50b0xvd2VyQ2FzZSgpKXtcbiAgICAgIGNhc2UgJ2VudGl0eSc6XG4gICAgICAgIFQgPSBFbnRpdHk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpZWxkJzpcbiAgICAgICAgVCA9IEZpZWxkO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYXNvbmUnOlxuICAgICAgICBUID0gSGFzT25lO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYXNtYW55JzpcbiAgICAgICAgVCA9IEhhc01hbnk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JlbG9uZ3N0byc6XG4gICAgICAgIFQgPSBCZWxvbmdzVG87XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JlbG9uZ3N0b21hbnknOlxuICAgICAgICBUID0gQmVsb25nc1RvTWFueTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9kZWwnOlxuICAgICAgY2FzZSAnbW9kZWxQYWNrYWdlJzpcbiAgICAgICAgVCA9IE1vZGVsUGFja2FnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBUID0gVF87XG4gIH1cbiAgcmV0dXJuIFQuY29tcG9zZShwcm9wcywgYXR0cik7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvY29tcG9zZS5qc1xuICoqLyIsIi8qKiBAanN4IGNvbXBvc2UgKi9cbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5pbXBvcnQge2NvbXBvc2UsIEVudGl0eSwgRmllbGQsIEhhc01hbnksIEhhc09uZSwgQmVsb25nc1RvLCBCZWxvbmdzVG9NYW55LCBNb2RlbFBhY2thZ2UsIERFRkFVTFRfSURfRklFTER9IGZyb20gJy4uLy4uL3NyYy9tb2RlbCc7XG5cbmRlc2NyaWJlKCdyZWFjdC13YXknLCAoKT0+IHtcblxuICBkZXNjcmliZSgnRW50aXR5JywgKCkgPT4ge1xuXG4gICAgaXQoJ2NyZWF0ZSBlbXB0eSBtb2RlbCcsKCkgPT4ge1xuICAgICAgZXhwZWN0KCgpPT48RW50aXR5Lz4pLnRvLm5vdC50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ25vdCBjcmVhdGUgd3JvbmcgbW9kZWwnLCgpID0+IHtcbiAgICAgIGV4cGVjdCgoKT0+PEVudGl0eSBzb21lPXsxfS8+KS50by50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ25vdCB0aHJvd3Mgd2l0aCBlbXB0eSBkYXRhJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IDxFbnRpdHkvPjtcbiAgICAgIGV4cGVjdCgoKT0+IGUudXBkYXRlV2l0aCgpKS50by5ub3QudGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCd0aHJvd3Mgd2l0aCBpbnZhbGlkIGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gPEVudGl0eS8+O1xuICAgICAgZXhwZWN0KCgpPT4gZS51cGRhdGVXaXRoKHtzb21lOiAxfSkpLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnY2FuXFwndCBhY2Nlc3MgdG8gcHJpdmF0ZSBmaWVsZHMnLCgpID0+IHtcbiAgICAgIGxldCBlID0gPEVudGl0eS8+O1xuXG4gICAgICBleHBlY3QoKCk9PiBlLnRpdGxlID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLmRlc2NyaXB0aW9uID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLm5hbWUgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUucmVsYXRpb25zID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnJlcXVpcmVkID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLmlkZW50aXR5ID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLmZpZWxkcyA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnZGVmYXVsdCBkYXRhIGlzIHVuZGVmaW5lZCcsKCkgPT4ge1xuICAgICAgbGV0IGUgPSA8RW50aXR5Lz47XG4gICAgICBleHBlY3QoZS50aXRsZSkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUuZGVzY3JpcHRpb24pLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLm5hbWUpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLnJlbGF0aW9ucykudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUucmVxdWlyZWQpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLmlkZW50aXR5KS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5maWVsZHMpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICB9KTtcblxuICAgIGl0KCdfaWQgYW5kIGlkIGlzIHRoZSBzYW1lJywgKCk9PiB7XG4gICAgICBleHBlY3QoKCk9PlxuICAgICAgICA8ZW50aXR5IG5hbWU9J0EnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdfaWQnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nX2lkJyBpZGVudGl0eS8+XG4gICAgICAgIDwvZW50aXR5PikudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdhY2NlcHQgdmFsaWQgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSA8ZW50aXR5Lz47XG5cbiAgICAgIGV4cGVjdCgoKT0+XG4gICAgICBlLnVwZGF0ZVdpdGgoe1xuICAgICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbiAgICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIHRlc3QgRW50aXR5IGRlc2NyaWJlICcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUgZmllbGQyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZCAzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDQgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ1JyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBiZWxvbmdzVG86ICcjRmllbGQxJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgKS50by5ub3QudGhyb3coKTtcblxuICAgICAgZXhwZWN0KGUubmFtZSkudG8uYmUuZXF1YWwoJ1Rlc3RFbnRpdHknKTtcbiAgICAgIGV4cGVjdChlLmZpZWxkcy5zaXplKS50by5iZS5lcXVhbCg5KTtcbiAgICAgIGV4cGVjdChlLnJlbGF0aW9ucy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChlLmlkZW50aXR5LnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgZXhwZWN0KGUucmVxdWlyZWQuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG5cbiAgICAgIGV4cGVjdChlLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgbmFtZTogJyB0ZXN0IEVudGl0eSAnLFxuICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJyB0ZXN0IEVudGl0eSBkZXNjcmliZSAnLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlIGZpZWxkMicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRmllbGQgMycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDMgZGVzY3JpcHRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4gICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGhhc09uZTogJ01vZGVsL1VzZXIjaWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBoYXNPbmU6ICdBY3RvciNpZCcsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGJlbG9uZ3NUbzogJyNGaWVsZDEnLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgZXhwZWN0KGUudG9PYmplY3QoKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIG5hbWU6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgdGl0bGU6ICdUZXN0IEVudGl0eSB0aXRsZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVzdCBFbnRpdHkgZGVzY3JpYmUnLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIGlkS2V5OiAnVGVzdEVudGl0eSNpZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQxJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDEnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDInLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMycsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ0JyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDQgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNScsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ1JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ1JyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ2UmVmJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDYgcmVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ2IHJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkN1JlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ3IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNyByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ4UmVmJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDggcmVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ4IHJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBiZWxvbmdzVG86ICdUZXN0RW50aXR5I2ZpZWxkMScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmaXh1cCBpZGVudGl0eSBmaWVsZHMnLCgpPT4ge1xuICAgICAgaXQoJ25vIGZpZWxkcycsKCk9PiB7XG4gICAgICAgIGxldCBlMSA9IDxlbnRpdHkgbmFtZT0ndGVzdDEnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJy8+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBleHBlY3QoZTEudG9KU09OKCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkZW50aXR5JzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnaWQnLFxuICAgICAgICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ2lkIGZpZWxkJywoKT0+IHtcblxuICAgICAgICBsZXQgZTIgPSA8ZW50aXR5IG5hbWU9J3Rlc3QxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdJZCcvPlxuICAgICAgICA8L2VudGl0eT47XG5cbiAgICAgICAgZXhwZWN0KGUyLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZGVudGl0eSc6IHRydWUsXG4gICAgICAgICAgICAgICduYW1lJzogJ0lkJyxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdfaWQgZmllbGQnLCgpPT4ge1xuICAgICAgICBsZXQgZTMgPSA8ZW50aXR5IG5hbWU9J3Rlc3QxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdfSWQnLz5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGV4cGVjdChlMy50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaWRlbnRpdHknOiB0cnVlLFxuICAgICAgICAgICAgICAnbmFtZSc6ICdfSWQnLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ2ZpeHVwIGZpZWxkIGNvbnRhaW5zIGVudGl0eScsKCk9PiB7XG4gICAgICAgIGxldCBmMSA9IDxlbnRpdHkgbmFtZT0nZml4dXAxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScgdHlwZT0nc3RyaW5nJy8+XG4gICAgICAgIDwvZW50aXR5PjtcbiAgICAgICAgZXhwZWN0KGYxLm5hbWUpLnRvLmJlLmVxdWFsKCdGaXh1cDEnKTtcbiAgICAgICAgZXhwZWN0KGYxLmZpZWxkcy5nZXQoJ2lkJykuZW50aXR5KS50by5iZS5lcXVhbCgnRml4dXAxJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmayBhbmQgaWRzJywoKT0+IHtcbiAgICAgIGl0KCd2YWxpZGF0ZSBmayByZWZlcmVuY2UnLCAoKT0+IHtcbiAgICAgICAgbGV0IGUxID0gPGVudGl0eSBuYW1lPSdURXN0MSc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5Lz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0naWQnIGlkZW50aXR5Lz5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBlMiA9IDxlbnRpdHkgbmFtZT0nVGVzdDInPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJyBpZGVudGl0eS8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJyBpZGVudGl0eS8+XG4gICAgICAgIDwvZW50aXR5PjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnTW9kZWxQYWNrYWdlJywoKT0+IHtcblxuICAgIGl0KCdjcmVhdGUgZW1wdHkgbW9kZWwnLCgpPT4ge1xuICAgICAgbGV0IG1vZGVsID0gPG1vZGVsLz47XG4gICAgICBleHBlY3QobW9kZWwpLnRvLmJlLmluc3RhbmNlb2YoTW9kZWxQYWNrYWdlKTtcbiAgICAgIGV4cGVjdChtb2RlbC5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnY3JlYXRlIG1vZGVsIHdpdGggZW50aXRpZXMnLCgpPT4ge1xuICAgICAgbGV0IG1vZGVsID0gPG1vZGVsPlxuICAgICAgICA8ZW50aXR5IG5hbWU9J1VzZXInPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJy8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2dyb3Vwcyc+XG4gICAgICAgICAgICA8YmVsb25nc1RvTWFueSByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PlxuICAgICAgICA8ZW50aXR5IG5hbWU9J0dyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdtb2RlcmF0b3InPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J3VzZXJzJz5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IHJlZj0nVXNlcicgbmFtZT0nVXNlckdyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+XG4gICAgICAgIDxlbnRpdHkgbmFtZT0nVXNlckdyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0ndXNlcic+XG4gICAgICAgICAgICA8YmVsb25nc1RvIHJlZj0nVXNlcicgbmFtZT0nVXNlckdyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nZ3JvdXAnPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PlxuICAgICAgPC9tb2RlbD47XG4gICAgICBleHBlY3QobW9kZWwpLnRvLmJlLmluc3RhbmNlb2YoTW9kZWxQYWNrYWdlKTtcbiAgICAgIGV4cGVjdChtb2RlbC5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnY3J1ZCBlbnRpdHknLCAoKT0+IHtcbiAgICAgIGxldCBtb2RlbCA9IDxtb2RlbC8+O1xuICAgICAgZXhwZWN0KG1vZGVsLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuICAgICAgZXhwZWN0KCgpPT5tb2RlbC5hZGQoXG4gICAgICAgIDxlbnRpdHkgbmFtZSA9ICdUZXN0Mic+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5IC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJyBpZGVudGl0eSAvPlxuICAgICAgICA8L2VudGl0eT4pXG4gICAgICApLnRvLm5vdC50aHJvdygpO1xuXG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICBleHBlY3QobW9kZWwuZ2V0KCdUZXN0MicpLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVGVzdDInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIGV4cGVjdCgoKT0+bW9kZWwucmVtb3ZlKCdUZXN0MicpKS50by5ub3QudGhyb3coKTtcbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdFbnRpdHknLCgpPT4ge1xuICAgICAgaXQoJ2NoZWNrIHJlbGF0aW9ucycsKCk9PiB7XG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgZXhwZWN0KCgpPT5tb2RlbC5hZGQoXG4gICAgICAgICAgPGVudGl0eSBuYW1lPSdBJz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPSdpZCcgLz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPSdBX2lkJyBpZGVudGl0eS8+XG4gICAgICAgICAgPC9lbnRpdHk+XG4gICAgICAgICkpLnRvLm5vdC50aHJvdygpO1xuXG4gICAgICAgIGV4cGVjdCgoKT0+bW9kZWwuYWRkKFxuICAgICAgICAgIDxlbnRpdHkgbmFtZT0nQic+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT0naWQnIC8+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT0nQXJlZic+XG4gICAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdBJy8+XG4gICAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICAgIDwvZW50aXR5PlxuICAgICAgICApKS50by5ub3QudGhyb3coKTtcbiAgICAgICAgbGV0IGIgPSBtb2RlbC5nZXQoJ0InKTtcbiAgICAgICAgbGV0IG1pc3NpbmdSZWxhdGlvbnMgPSBiLmNoZWNrUmVsYXRpb25zKG1vZGVsKTtcbiAgICAgICAgZXhwZWN0KG1pc3NpbmdSZWxhdGlvbnMubGVuZ3RoKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnbXVsdGlwbGUgbW9kZWxzIGZpbHRlcicsKCk9PiB7XG4gICAgICAgIGxldCB1ID0gPGVudGl0eSBuYW1lPSdVc2VyJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J2lkJyAvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0nbmFtZScgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J2dyb3VwcycgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdHcm91cCNpZCcgdXNpbmc9J1VzZXJHcm91cCN1c2VyJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBnID0gPGVudGl0eSBuYW1lPSdHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J25hbWUnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSd1c2VycycgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdVc2VyI2lkJyB1c2luZz0nVXNlckdyb3VwI2dyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCB1ZyA9XG4gICAgICAgIDxlbnRpdHkgbmFtZT0nVXNlckdyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J3VzZXInID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdVc2VyI2lkJyAvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdncm91cCcgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J0dyb3VwI2lkJyAvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodSx7ZGVwdGg6IDZ9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChnLHtkZXB0aDogNn0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVnLHtkZXB0aDogNn0pKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIG1vZGVsLmFkZCh1KTtcbiAgICAgICAgbW9kZWwuYWRkKGcpO1xuICAgICAgICBtb2RlbC5hZGQodWcpO1xuICAgICAgICBtb2RlbC5lbnN1cmVBbGwoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QobW9kZWwse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1LnRvSlNPTihtb2RlbCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1Zy50b0pTT04obW9kZWwpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuaGFzKCdHcm91cCNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLmhhcygnVXNlcicpKS50by5iZS50cnVlO1xuXG4gICAgICAgIGxldCB1c2VyTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdVc2VyJyk7XG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwuaGFzKCdncm91cHMnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbC5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLmJlbG9uZ3NUb01hbnkpLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ0dyb3VwJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLmhhcygnR3JvdXAnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IGdyb3VwTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdHcm91cCcpO1xuICAgICAgICBleHBlY3QoZ3JvdXBNb2RlbC5oYXMoJ3VzZXJzJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChncm91cE1vZGVsLmdldCgndXNlcnMnKS5yZWxhdGlvbi5iZWxvbmdzVG9NYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLmhhcygnVXNlckdyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyR3JvdXBNb2RlbCA9IG1vZGVsLnJlbGF0aW9ucy5nZXQoJ1VzZXJHcm91cCcpO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuaGFzKCd1c2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5nZXQoJ3VzZXInKS5yZWxhdGlvbi5iZWxvbmdzVG8pLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ1VzZXInLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5oYXMoJ2dyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5nZXQoJ2dyb3VwJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdHcm91cCcsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgbGV0IG1vZGVsMSA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgbW9kZWwxLmFkZCh1KTtcbiAgICAgICAgbW9kZWwxLmFkZCh1Zyk7XG4gICAgICAgIG1vZGVsMS5lbnN1cmVBbGwoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsMSx7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGcudG9KU09OKG1vZGVsMSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1LnRvSlNPTihtb2RlbDEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsMSkpO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyI2lkJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdHcm91cCNpZCcpKS50by5iZS5mYWxzZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMS5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXJHcm91cCNpZCcpKS50by5iZS50cnVlO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEucmVsYXRpb25zLmhhcygnVXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlck1vZGVsMSA9IG1vZGVsMS5yZWxhdGlvbnMuZ2V0KCdVc2VyJyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsMSx7ZGVwdGg6IDd9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1c2VyTW9kZWwxLHtkZXB0aDogN30pKTtcblxuICAgICAgICBleHBlY3QodXNlck1vZGVsMS5oYXMoJ2dyb3VwcycpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlck1vZGVsMS5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLmhhc01hbnkpLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ1VzZXJHcm91cCcsIGZpZWxkOiAndXNlcid9KTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ0dyb3VwJykpLnRvLmJlLmZhbHNlO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEucmVsYXRpb25zLmhhcygnVXNlckdyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyR3JvdXBNb2RlbDEgPSBtb2RlbDEucmVsYXRpb25zLmdldCgnVXNlckdyb3VwJyk7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbDEuaGFzKCd1c2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbDEuZ2V0KCd1c2VyJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBsZXQgbW9kZWwyID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICBtb2RlbDIuYWRkKHUpO1xuICAgICAgICBtb2RlbDIuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsMix7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGcudG9KU09OKG1vZGVsMikpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1LnRvSlNPTihtb2RlbDIpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsMikpO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDIuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyI2lkJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdHcm91cCNpZCcpKS50by5iZS5mYWxzZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMi5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXJHcm91cCNpZCcpKS50by5iZS5mYWxzZTtcblxuICAgICAgICBleHBlY3QobW9kZWwyLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJNb2RlbDIgPSBtb2RlbDIucmVsYXRpb25zLmdldCgnVXNlcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsMix7ZGVwdGg6IDV9KSk7XG5cbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDIuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG5cbiAgICAgICAgZXhwZWN0KHUudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXBzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI3VzZXInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBleHBlY3QoZy50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ0dyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdCh1Zy50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdHcm91cCNpZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBERUZBVUxUX0lEX0ZJRUxELFxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG4gICAgICBkZXNjcmliZSgnZml4IE06TiByZWxhdGlvbnMnLCAoKT0+IHtcblxuICAgICAgICBsZXQgdSA9IDxlbnRpdHkgbmFtZT0nVXNlcic+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJy8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nZ3JvdXBzJz5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IG5hbWU9J1VzZXJHcm91cCcgcmVmPSdHcm91cCNpZCcgdXNpbmc9JyN1c2VyJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBnID0gPGVudGl0eSBuYW1lPSdHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J25hbWUnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSd1c2VycycgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdVc2VyI2lkJyB1c2luZz0nVXNlckdyb3VwI2dyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBnMiA9IDxlbnRpdHkgbmFtZT0nR3JvdXAnPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lID0nbmFtZScgLz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lID0ndXNlcnMnID5cbiAgICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgbmFtZT0nVXNlckdyb3VwJyByZWY9J1VzZXIjaWQnIHVzaW5nPScjJy8+XG4gICAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICA8L2VudGl0eT47XG5cbiAgICAgICAgbGV0IHVnID1cbiAgICAgICAgPGVudGl0eSBuYW1lPSdVc2VyR3JvdXAnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0ndXNlcicgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXIjaWQnIC8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J2dyb3VwJyA+XG4gICAgICAgICAgICA8YmVsb25nc1RvIHJlZj0nR3JvdXAjaWQnIC8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGl0KCdtdXN0IEZpeCBlbnRpdHkgb2YgdGhlIHJlbGF0aW9uLnJlZiBpZicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdCh1LmZpZWxkcy5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLnRvT2JqZWN0KCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ211c3Qgc2V0IG5hbWUgb2YgcmVsYXRpb24gdG8gZW50aXR5IG5hbWUgcmVsYXRpb24ucmVmJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcuZmllbGRzLmdldCgndXNlcnMnKS5yZWxhdGlvbi50b09iamVjdCgpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IHVzZSBFbnRpdHkgbmFtZSBhcyB1c2luZyBmaWVsZCBpbiBoYXNNYW55IHJlbGF0aW9uJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcyLmZpZWxkcy5nZXQoJ3VzZXJzJykucmVsYXRpb24udG9PYmplY3QoKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodS50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZy50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVnLnRvT2JqZWN0KCkse2RlcHRoOiA3fSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdjcmVhdGUgRW50aXR5IHdpdGggVXBwZXJDYXNlTmFtZScsICgpPT4ge1xuICAgIGxldCByb2xlID0gY29tcG9zZShcbiAgICAgIEVudGl0eSxcbiAgICAgIHsgbmFtZTogJ1JvbGUnIH0sXG4gICAgICBjb21wb3NlKEZpZWxkLCB7IG5hbWU6ICduYW1lJyAsIGlkZW50aXR5OiB0cnVlfSlcbiAgICApO1xuXG4gICAgZXhwZWN0KHJvbGUpLnRvLmJlLmFuLmluc3RhbmNlb2YoRW50aXR5KTtcbiAgICBleHBlY3Qocm9sZS5uYW1lKS50by5iZS5lcXVhbCgnUm9sZScpO1xuICAgIGV4cGVjdChyb2xlLmZpZWxkcy5oYXMoJ25hbWUnKSkudG8uYmUudHJ1ZTtcblxuICAgIGV4cGVjdChyb2xlLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgIG5hbWU6ICdSb2xlJyxcbiAgICAgIGZpZWxkczogW3tcbiAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgIH1dXG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgaXQoJ2NyZWF0ZSBFbnRpdHkgd2l0aCBVcHBlckNhc2VOYW1lJywgKCk9PiB7XG4gICAgbGV0IHJvbGUgPSA8RW50aXR5IG5hbWU9J1JvbGUnPlxuICAgICAgPEZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5Lz5cbiAgICA8L0VudGl0eT47XG5cbiAgICBleHBlY3Qocm9sZSkudG8uYmUuYW4uaW5zdGFuY2VvZihFbnRpdHkpO1xuICAgIGV4cGVjdChyb2xlLm5hbWUpLnRvLmJlLmVxdWFsKCdSb2xlJyk7XG4gICAgZXhwZWN0KHJvbGUuZmllbGRzLmhhcygnbmFtZScpKS50by5iZS50cnVlO1xuXG4gICAgZXhwZWN0KHJvbGUudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgbmFtZTogJ1JvbGUnLFxuICAgICAgZmllbGRzOiBbe1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgfV1cbiAgICB9KTtcblxuICB9KTtcblxuICBpdCgnY3JlYXRlIEVudGl0eSB3aXRoIFVwcGVyQ2FzZU5hbWUnLCAoKT0+IHtcbiAgICBsZXQgcm9sZSA9IDxlbnRpdHkgbmFtZT0nUm9sZSc+XG4gICAgICA8ZmllbGQgbmFtZT0nbmFtZScgaWRlbnRpdHkvPlxuICAgIDwvZW50aXR5PjtcblxuICAgIGV4cGVjdChyb2xlKS50by5iZS5hbi5pbnN0YW5jZW9mKEVudGl0eSk7XG4gICAgZXhwZWN0KHJvbGUubmFtZSkudG8uYmUuZXF1YWwoJ1JvbGUnKTtcbiAgICBleHBlY3Qocm9sZS5maWVsZHMuaGFzKCduYW1lJykpLnRvLmJlLnRydWU7XG5cbiAgICBleHBlY3Qocm9sZS50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICBuYW1lOiAnUm9sZScsXG4gICAgICBmaWVsZHM6IFt7XG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICB9XVxuICAgIH0pO1xuXG4gIH0pO1xufSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC91bml0L3JlYWN0LXdheS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=