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
	
	        /*expect(()=>*/model.create({
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
	        }) /*).to.not.throw()*/;
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
	
	var _field = __webpack_require__(12);
	
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
	
	var _modelbase = __webpack_require__(14);
	
	var _field = __webpack_require__(12);
	
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
	
	            f.makeIdentity();
	            identity.add(f.name);
	            required.add(f.name);
	          }
	
	          result.relations = relations;
	          result.identity = identity;
	          result.required = required;
	          result.indexed = indexed;
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
	exports.Field = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fieldbase = __webpack_require__(13);
	
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
	    key: 'makeIdentity',
	
	
	    // this is to make sure that if we internally set
	    value: function makeIdentity() {
	      this.$obj.idKey = new _ref.Ref(this.$obj.entity, this.$obj.name);
	      this.$obj.identity = this.$obj.identity_ = true;
	    }
	  }, {
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
	    }
	  }, {
	    key: 'required',
	    get: function get() {
	      return this.$obj ? this.$obj.required || this.$obj.required_ : undefined;
	    }
	  }, {
	    key: 'indexed',
	    get: function get() {
	      return this.$obj ? this.$obj.indexed || this.$obj.indexed_ : undefined;
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FieldBase = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _modelbase = __webpack_require__(14);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModelBase = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _camelcase = __webpack_require__(15);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	var _decamelize = __webpack_require__(16);
	
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
/* 15 */
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
/* 16 */
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
	
	var _camelcase = __webpack_require__(15);
	
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
	
	var _camelcase = __webpack_require__(15);
	
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
	
	var _camelcase = __webpack_require__(15);
	
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
	
	var _camelcase = __webpack_require__(15);
	
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
	
	var _camelcase = __webpack_require__(15);
	
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
	
	var _field = __webpack_require__(12);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDhhZTZmNzE4NzVjZmNhN2FlZTAiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zZXR1cC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc2V0dXAvLmdsb2JhbHMuanNvbiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NldHVwL3NldHVwLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdW5pdC9jaGVja1NjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3VuaXQvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2ZpZWxkYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvbW9kZWxiYXNlLmpzIiwid2VicGFjazovLy8uL34vY2FtZWxjYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGVjYW1lbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaGFzb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9yZWZiYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9oYXNtYW55LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9iZWxvbmdzdG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2JlbG9uZ3N0b21hbnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL21vZGVscGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3VuaXQvcmVhY3Qtd2F5LmpzIl0sIm5hbWVzIjpbIm1vY2hhR2xvYmFscyIsInJlcXVpcmUiLCJnbG9iYWxzIiwid2luZG93IiwibW9jaGEiLCJzZXR1cCIsIm9ubG9hZCIsImNoZWNrTGVha3MiLCJPYmplY3QiLCJrZXlzIiwicnVuIiwibW9kdWxlIiwiZXhwb3J0cyIsInJvb3QiLCJnbG9iYWwiLCJleHBlY3QiLCJjaGFpIiwiYmVmb3JlRWFjaCIsInNhbmRib3giLCJzaW5vbiIsImNyZWF0ZSIsInN0dWIiLCJiaW5kIiwic3B5IiwibW9jayIsInVzZUZha2VUaW1lcnMiLCJ1c2VGYWtlWE1MSHR0cFJlcXVlc3QiLCJ1c2VGYWtlU2VydmVyIiwiYWZ0ZXJFYWNoIiwicmVzdG9yZSIsImRlc2NyaWJlIiwiaXQiLCJ0byIsIm5vdCIsInRocm93Iiwic29tZSIsImUiLCJ1cGRhdGVXaXRoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJyZWxhdGlvbnMiLCJyZXF1aXJlZCIsImlkZW50aXR5IiwiZmllbGRzIiwiYmUiLCJhbiIsInR5cGUiLCJyZWxhdGlvbiIsImhhc09uZSIsImJlbG9uZ3NUbyIsImVxdWFsIiwic2l6ZSIsInRvSlNPTiIsImRlZXAiLCJ0b09iamVjdCIsImVudGl0eSIsImlkS2V5IiwiaW5kZXhlZCIsImUxIiwiZTIiLCJlMyIsImYxIiwiZ2V0IiwibW9kZWwiLCJpZGVudGl0eUZpZWxkcyIsInJlbW92ZSIsImIiLCJtaXNzaW5nUmVsYXRpb25zIiwiY2hlY2tSZWxhdGlvbnMiLCJsZW5ndGgiLCJ1IiwiYmVsb25nc1RvTWFueSIsInVzaW5nIiwiZyIsInVnIiwiYWRkIiwiZW5zdXJlQWxsIiwiZW50aXRpZXMiLCJoYXMiLCJ0cnVlIiwidXNlck1vZGVsIiwiZmllbGQiLCJncm91cE1vZGVsIiwidXNlckdyb3VwTW9kZWwiLCJtb2RlbDEiLCJmYWxzZSIsInVzZXJNb2RlbDEiLCJoYXNNYW55IiwidXNlckdyb3VwTW9kZWwxIiwibW9kZWwyIiwidXNlck1vZGVsMiIsImcyIiwiY29tcG9zZSIsIkVudGl0eSIsIkZpZWxkIiwiSGFzT25lIiwiSGFzTWFueSIsIkJlbG9uZ3NUbyIsIkJlbG9uZ3NUb01hbnkiLCJNb2RlbFBhY2thZ2UiLCJERUZBVUxUX0lEX0ZJRUxEIiwicHJvcHMiLCJjaGlsZHJlbiIsIm9iaiIsIm1vZGVsUGFja2FnZSIsImZvckVhY2giLCJ2YWx1ZSIsImlkcyIsInNldCIsInRvU3RyaW5nIiwibW9kZWxSZWxhdGlvbnMiLCJNYXAiLCJyZWYiLCJjbG9uZSIsIm1pc3NpbmciLCJyIiwiZGVsZXRlIiwibWlzc2luZ1JlZiIsImZUeXBlIiwicmVmZSIsInJlcGxhY2VSZWYiLCIkb2JqIiwicHVzaCIsInJlc3VsdCIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJTZXQiLCJmIiwiRXJyb3IiLCJtYWtlSWRlbnRpdHkiLCJyZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ2YWx1ZXMiLCJtYXAiLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJkaXNjb3ZlckZpZWxkVHlwZSIsImNvbnNvbGUiLCJ3YXJuIiwiaWRlbnRpdHlfIiwidHlwZV8iLCJyZXF1aXJlZF8iLCJpbmRleGVkXyIsInJlbGF0aW9uXyIsIkZpZWxkQmFzZSIsImVudGl0eV8iLCJNb2RlbEJhc2UiLCJuYW1lXyIsInRpdGxlXyIsImRlc2NyaXB0aW9uXyIsInRyaW0iLCJjb25zdHJ1Y3RvciIsImhhc09uZV8iLCJtYXRjaCIsIlJlZkJhc2UiLCJSRUZfUEFUVEVSTiIsIkRFRkFVTFRfSURfRklFTEROQU1FIiwiUmVmIiwiaGFzTWFueV8iLCJiZWxvbmdzVG9fIiwiYmVsb25nc1RvTWFueV8iLCJ1c2luZ18iLCJ0b0xvd2VyQ2FzZSIsImVudGl0eUxpc3QiLCJlbnN1cmVJZHMiLCJqc29uIiwicmVtb3ZlSWRzIiwiZW5zdXJlRktzIiwiVF8iLCJUIiwiYXR0ciIsImluc3RhbmNlb2YiLCJyb2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJQSxlQUFlLG1CQUFBQyxDQUFRLENBQVIsRUFBMkJDLE9BQTlDOztBQUVBQyxRQUFPQyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsS0FBbkI7QUFDQUYsUUFBT0csTUFBUCxHQUFnQixZQUFXO0FBQ3pCSCxVQUFPQyxLQUFQLENBQWFHLFVBQWI7QUFDQUosVUFBT0MsS0FBUCxDQUFhRixPQUFiLENBQXFCTSxPQUFPQyxJQUFQLENBQVlULFlBQVosQ0FBckI7QUFDQUcsVUFBT0MsS0FBUCxDQUFhTSxHQUFiO0FBQ0FULEdBQUEsbUJBQUFBLENBQVEsQ0FBUixFQUFtQkUsTUFBbkI7QUFDRCxFQUxELEM7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ1hBUSxRQUFPQyxPQUFQLEdBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUM5QkEsVUFBT0EsT0FBT0EsSUFBUCxHQUFjQyxNQUFyQjtBQUNBRCxRQUFLRSxNQUFMLEdBQWNGLEtBQUtHLElBQUwsQ0FBVUQsTUFBeEI7O0FBRUFFLGNBQVcsWUFBVztBQUNwQjtBQUNBO0FBQ0FKLFVBQUtLLE9BQUwsR0FBZUwsS0FBS00sS0FBTCxDQUFXRCxPQUFYLENBQW1CRSxNQUFuQixFQUFmO0FBQ0FQLFVBQUtRLElBQUwsR0FBWVIsS0FBS0ssT0FBTCxDQUFhRyxJQUFiLENBQWtCQyxJQUFsQixDQUF1QlQsS0FBS0ssT0FBNUIsQ0FBWjtBQUNBTCxVQUFLVSxHQUFMLEdBQVdWLEtBQUtLLE9BQUwsQ0FBYUssR0FBYixDQUFpQkQsSUFBakIsQ0FBc0JULEtBQUtLLE9BQTNCLENBQVg7QUFDQUwsVUFBS1csSUFBTCxHQUFZWCxLQUFLSyxPQUFMLENBQWFNLElBQWIsQ0FBa0JGLElBQWxCLENBQXVCVCxLQUFLSyxPQUE1QixDQUFaO0FBQ0FMLFVBQUtZLGFBQUwsR0FBcUJaLEtBQUtLLE9BQUwsQ0FBYU8sYUFBYixDQUEyQkgsSUFBM0IsQ0FBZ0NULEtBQUtLLE9BQXJDLENBQXJCO0FBQ0FMLFVBQUthLHFCQUFMLEdBQTZCYixLQUFLSyxPQUFMLENBQWFRLHFCQUFiLENBQW1DSixJQUFuQyxDQUF3Q1QsS0FBS0ssT0FBN0MsQ0FBN0I7QUFDQUwsVUFBS2MsYUFBTCxHQUFxQmQsS0FBS0ssT0FBTCxDQUFhUyxhQUFiLENBQTJCTCxJQUEzQixDQUFnQ1QsS0FBS0ssT0FBckMsQ0FBckI7QUFDRCxJQVZEOztBQVlBVSxhQUFVLFlBQVc7QUFDbkIsWUFBT2YsS0FBS1EsSUFBWjtBQUNBLFlBQU9SLEtBQUtVLEdBQVo7QUFDQVYsVUFBS0ssT0FBTCxDQUFhVyxPQUFiO0FBQ0QsSUFKRDtBQUtELEVBckJELEM7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQzlPQTs7OztBQUVBOzs7O0FBRUFDLFVBQVMsUUFBVCxFQUFtQixZQUFLOztBQUV0QkEsWUFBUyxRQUFULEVBQW1CLFlBQU07O0FBRXZCQyxRQUFHLG9CQUFILEVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6a0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FB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bUMsSUFBdEM7O0FBRUFqRSxZQUFPZ0ssS0FBSzFILE1BQUwsRUFBUCxFQUFzQnJCLEVBQXRCLENBQXlCYSxFQUF6QixDQUE0QlMsSUFBNUIsQ0FBaUNILEtBQWpDLENBQXVDO0FBQ3JDWCxhQUFNLE1BRCtCO0FBRXJDSSxlQUFRLENBQUM7QUFDUEosZUFBTSxNQURDO0FBRVBHLG1CQUFVO0FBRkgsUUFBRDtBQUY2QixNQUF2QztBQVFELElBakJEO0FBa0JELEVBanVCRCxFIiwiZmlsZSI6Il9fc3BlYy1idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDhhZTZmNzE4NzVjZmNhN2FlZTBcbiAqKi8iLCJ2YXIgbW9jaGFHbG9iYWxzID0gcmVxdWlyZSgnLi8uZ2xvYmFscy5qc29uJykuZ2xvYmFscztcblxud2luZG93Lm1vY2hhLnNldHVwKCdiZGQnKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93Lm1vY2hhLmNoZWNrTGVha3MoKTtcbiAgd2luZG93Lm1vY2hhLmdsb2JhbHMoT2JqZWN0LmtleXMobW9jaGFHbG9iYWxzKSk7XG4gIHdpbmRvdy5tb2NoYS5ydW4oKTtcbiAgcmVxdWlyZSgnLi9zZXR1cCcpKHdpbmRvdyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3NldHVwL2Jyb3dzZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnbG9iYWxzXCI6IHtcblx0XHRcImV4cGVjdFwiOiB0cnVlLFxuXHRcdFwibW9ja1wiOiB0cnVlLFxuXHRcdFwic2FuZGJveFwiOiB0cnVlLFxuXHRcdFwic3B5XCI6IHRydWUsXG5cdFx0XCJzdHViXCI6IHRydWUsXG5cdFx0XCJ1c2VGYWtlU2VydmVyXCI6IHRydWUsXG5cdFx0XCJ1c2VGYWtlVGltZXJzXCI6IHRydWUsXG5cdFx0XCJ1c2VGYWtlWE1MSHR0cFJlcXVlc3RcIjogdHJ1ZVxuXHR9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90ZXN0L3NldHVwLy5nbG9iYWxzLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdCA9IHJvb3QgPyByb290IDogZ2xvYmFsO1xuICByb290LmV4cGVjdCA9IHJvb3QuY2hhaS5leHBlY3Q7XG5cbiAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAvLyBVc2luZyB0aGVzZSBnbG9iYWxseS1hdmFpbGFibGUgU2lub24gZmVhdHVyZXMgaXMgcHJlZmVycmFibGUsIGFzIHRoZXkncmVcbiAgICAvLyBhdXRvbWF0aWNhbGx5IHJlc3RvcmVkIGZvciB5b3UgaW4gdGhlIHN1YnNlcXVlbnQgYGFmdGVyRWFjaGBcbiAgICByb290LnNhbmRib3ggPSByb290LnNpbm9uLnNhbmRib3guY3JlYXRlKCk7XG4gICAgcm9vdC5zdHViID0gcm9vdC5zYW5kYm94LnN0dWIuYmluZChyb290LnNhbmRib3gpO1xuICAgIHJvb3Quc3B5ID0gcm9vdC5zYW5kYm94LnNweS5iaW5kKHJvb3Quc2FuZGJveCk7XG4gICAgcm9vdC5tb2NrID0gcm9vdC5zYW5kYm94Lm1vY2suYmluZChyb290LnNhbmRib3gpO1xuICAgIHJvb3QudXNlRmFrZVRpbWVycyA9IHJvb3Quc2FuZGJveC51c2VGYWtlVGltZXJzLmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnVzZUZha2VYTUxIdHRwUmVxdWVzdCA9IHJvb3Quc2FuZGJveC51c2VGYWtlWE1MSHR0cFJlcXVlc3QuYmluZChyb290LnNhbmRib3gpO1xuICAgIHJvb3QudXNlRmFrZVNlcnZlciA9IHJvb3Quc2FuZGJveC51c2VGYWtlU2VydmVyLmJpbmQocm9vdC5zYW5kYm94KTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSByb290LnN0dWI7XG4gICAgZGVsZXRlIHJvb3Quc3B5O1xuICAgIHJvb3Quc2FuZGJveC5yZXN0b3JlKCk7XG4gIH0pO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zZXR1cC9zZXR1cC5qc1xuICoqLyIsIi8vICd1c2Ugc3RyaWN0JztcblxuLy8gbGV0IFZhbGlkYXRvciA9IHJlcXVpcmUoJ2pzb25zY2hlbWEnKS5WYWxpZGF0b3I7XG5cbi8vIGxldCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XG5cbi8vIGNvbnN0IEVudGl0eVNjaGVtYSA9IHtcbi8vICAgaWQ6ICcvRW50aXR5Jyxcbi8vICAgdGl0bGU6ICdFbnRpdHknLFxuLy8gICBkZXNjcmlwdGlvbjogJ1RoZSBFbnRpdHkgZGVmaW5pdGlvbicsXG4vLyAgIHR5cGU6ICdvYmplY3QnLFxuLy8gICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgbmFtZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZydcbi8vICAgICB9LFxuLy8gICAgIGRlc2NyaXB0aW9uOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIGZpZWxkczoge1xuLy8gICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBsaXN0Jyxcbi8vICAgICAgIHR5cGU6ICdhcnJheScsXG4vLyAgICAgICBpdGVtczoge1xuLy8gICAgICAgICBhbnlPZjogW1xuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAkcmVmOiAnL0JlbG9uZ3NUbycsXG4vLyAgICAgICAgICAgICB9LHtcbi8vICAgICAgICAgICAgICAgJHJlZjogJy9IYXNPbmUnLFxuLy8gICAgICAgICAgICAgfSx7XG4vLyAgICAgICAgICAgICAgICRyZWY6ICcvSGFzTWFueScsXG4vLyAgICAgICAgICAgICB9LHtcbi8vICAgICAgICAgICAgICAgJHJlZjogJy9GaWVsZCcsXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgXVxuLy8gICAgICAgfSxcbi8vICAgICAgIG1pbkl0ZW1zOiAxLFxuLy8gICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFtcbi8vICAgICAnbmFtZScsXG4vLyAgICAgJ2ZpZWxkcycsXG4vLyAgIF0sXG4vLyAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbi8vIH07XG5cbi8vIGNvbnN0IFJlZlNjaGVtYSA9IHtcbi8vICAgaWQ6ICcvUmVmJyxcbi8vICAgdHlwZTogJ3N0cmluZycsXG4vLyAgIHBhdGVybjogJ14oLio/KSMoLio/KSQnLFxuLy8gfTtcblxuLy8gY29uc3QgRmllbGRTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0ZpZWxkJyxcbi8vICAgdGl0bGU6ICdGaWVsZCcsXG4vLyAgIGRlc2NyaXB0aW9uOiAnZmllbGQgZGVmaW5pdGlvbicsXG4vLyAgIHByb3BlcnRpZXM6IHtcbi8vICAgICB0aXRsZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBuYW1lOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJ1xuLy8gICAgIH0sXG4vLyAgICAgZGVzY3JpcHRpb246IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgdHlwZToge1xuLy8gICAgICAgZW51bTogWydpbnRlZ2VyJywgJ251bWJlcicsICdib29sZWFuJywgJ3N0cmluZyddLFxuLy8gICAgICAgZGVmYXVsdDogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBpZGVudGl0eTogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlIH0sXG4vLyAgICAgcmVxdWlyZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZSB9LFxuLy8gICB9LFxuLy8gICByZXF1aXJlZDogWyduYW1lJ10sXG4vLyAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbi8vIH07XG5cbi8vIGNvbnN0IEhhc09uZVNjaGVtYSA9IHtcbi8vICAgaWQ6ICcvSGFzT25lJyxcbi8vICAgdGl0bGU6ICdMaW5rJyxcbi8vICAgZGVzY3JpcHRpb246ICdsaW5rIGRlZmluaXRpb24nLFxuLy8gICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgbmFtZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZydcbi8vICAgICB9LFxuLy8gICAgIGRlc2NyaXB0aW9uOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIGhhc09uZToge1xuLy8gICAgICAgJHJlZjogJy9SZWYnLFxuLy8gICAgIH0sXG4vLyAgICAgdXNpbmc6IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gICByZXF1aXJlZDogWyduYW1lJywnaGFzT25lJ10sXG4vLyAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbi8vIH07XG5cbi8vIGNvbnN0IEhhc01hbnlTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0hhc01hbnknLFxuLy8gICB0aXRsZTogJ0xpbmsnLFxuLy8gICBkZXNjcmlwdGlvbjogJ2xpbmsgZGVmaW5pdGlvbicsXG4vLyAgIHByb3BlcnRpZXM6IHtcbi8vICAgICB0aXRsZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBuYW1lOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJ1xuLy8gICAgIH0sXG4vLyAgICAgZGVzY3JpcHRpb246IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgaGFzTWFueToge1xuLy8gICAgICAgJHJlZjogJy9SZWYnLFxuLy8gICAgIH0sXG4vLyAgICAgdXNpbmc6IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gICByZXF1aXJlZDogWyduYW1lJywnaGFzTWFueSddLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBCZWxvbmdzVG9TY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0JlbG9uZ3NUbycsXG4vLyAgIHRpdGxlOiAnTGluaycsXG4vLyAgIGRlc2NyaXB0aW9uOiAnbGluayBkZWZpbml0aW9uJyxcbi8vICAgcHJvcGVydGllczoge1xuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIG5hbWU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnXG4vLyAgICAgfSxcbi8vICAgICBkZXNjcmlwdGlvbjoge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBiZWxvbmdzVG86IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICAgIHVzaW5nOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZScsJ2JlbG9uZ3NUbyddLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyB2YWxpZGF0b3IuYWRkU2NoZW1hKFJlZlNjaGVtYSk7XG4vLyB2YWxpZGF0b3IuYWRkU2NoZW1hKEhhc09uZVNjaGVtYSk7XG4vLyB2YWxpZGF0b3IuYWRkU2NoZW1hKEhhc01hbnlTY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShCZWxvbmdzVG9TY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShFbnRpdHlTY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShGaWVsZFNjaGVtYSk7XG5cbi8vIGxldCBvYmogPSB7XG4vLyAgICAgICAgICAgbmFtZTogJyB0ZXN0IEVudGl0eSAnLFxuLy8gICAgICAgICAgIHRpdGxlOiAnIHRlc3QgRW50aXR5IHRpdGxlICcsXG4vLyAgICAgICAgICAgZGVzY3JpcHRpb246ICcgdGVzdCBFbnRpdHkgZGVzY3JpYmUgJyxcbi8vICAgICAgICAgICBmaWVsZHM6IFtcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuLy8gICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4vLyAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnRmllbGQxJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdmaWVsZDInLFxuLy8gICAgICAgICAgICAgdGl0bGU6ICd0aXRsZSBmaWVsZDInLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ0ZpZWxkIDMnLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDMgZGVzY3JpcHRpb24nLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4vLyAgICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNCB0aXRsZScsXG4vLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkNCBkZXNjcmlwdGlvbicsXG4vLyAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuLy8gICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnZmllbGQ2UmVmJyxcbi8vICAgICAgICAgICAgIGhhc09uZTogJ01vZGVsL1VzZXIjaWQnLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2ZpZWxkN1JlZicsXG4vLyAgICAgICAgICAgICBoYXNPbmU6ICdBY3RvciNpZCcsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnZmllbGQ4UmVmJyxcbi8vICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ0ZpZWxkMScsXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIF1cbi8vICAgICAgICAgfTtcblxuLy8gbGV0IHJlcyA9IHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEVudGl0eVNjaGVtYSk7XG5cbi8vIGZ1bmN0aW9uIGRpc2NvdmVyRmllbGRUeXBlKG9iaikge1xuLy8gICBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgSGFzT25lU2NoZW1hKS52YWxpZCkge1xuLy8gICAgIHJldHVybiAnSGFzT25lJztcbi8vICAgfSBlbHNlIGlmICh2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBIYXNNYW55U2NoZW1hKS52YWxpZCkge1xuLy8gICAgIHJldHVybiAnSGFzTWFueSc7XG4vLyAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgQmVsb25nc1RvU2NoZW1hKS52YWxpZCkge1xuLy8gICAgIHJldHVybiAnQmVsb25nc1RvJztcbi8vICAgfSBlbHNlIGlmICh2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBGaWVsZFNjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0ZpZWxkJztcbi8vICAgfVxuLy8gfTtcblxuLy8gb2JqLmZpZWxkcy5mb3JFYWNoKGYgPT4ge1xuXG4vLyAgIGNvbnN0IGZpZWxkVHlwZSA9IGRpc2NvdmVyRmllbGRUeXBlKGYpO1xuLy8gICBjb25zb2xlLmxvZyhmaWVsZFR5cGUpO1xuLy8gICBzd2l0Y2ggKGZpZWxkVHlwZSl7XG4vLyAgICAgY2FzZSAnRmllbGQnOlxuLy8gICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgJ0hhc09uZSc6XG4vLyAgICAgYnJlYWs7XG4vLyAgICAgY2FzZSAnSGFzTWFueSc6XG4vLyAgICAgYnJlYWs7XG4vLyAgICAgY2FzZSAnQmVsb25nc1RvJzpcbi8vICAgICBicmVhaztcbi8vICAgfVxuXG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2cocmVzLnZhbGlkKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC91bml0L2NoZWNrU2NoZW1hLmpzXG4gKiovIiwiaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cbmltcG9ydCB7RW50aXR5LCBGaWVsZCwgTW9kZWxQYWNrYWdlLCBERUZBVUxUX0lEX0ZJRUxEfSBmcm9tICcuLi8uLi9zcmMvbW9kZWwnO1xuXG5kZXNjcmliZSgnU2NoZW1hJywgKCk9PiB7XG5cbiAgZGVzY3JpYmUoJ0VudGl0eScsICgpID0+IHtcblxuICAgIGl0KCdjcmVhdGUgZW1wdHkgbW9kZWwnLCgpID0+IHtcbiAgICAgIGV4cGVjdCgoKT0+bmV3IEVudGl0eSgpKS50by5ub3QudGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdub3QgY3JlYXRlIHdyb25nIG1vZGVsJywoKSA9PiB7XG4gICAgICBleHBlY3QoKCk9Pm5ldyBFbnRpdHkoe3NvbWU6IDF9KSkudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdub3QgdGhyb3dzIHdpdGggZW1wdHkgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSBuZXcgRW50aXR5KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnVwZGF0ZVdpdGgoKSkudG8ubm90LnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgndGhyb3dzIHdpdGggaW52YWxpZCBkYXRhJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IG5ldyBFbnRpdHkoKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUudXBkYXRlV2l0aCh7c29tZTogMX0pKS50by50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ2NhblxcJ3QgYWNjZXNzIHRvIHByaXZhdGUgZmllbGRzJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IG5ldyBFbnRpdHkoKTtcblxuICAgICAgZXhwZWN0KCgpPT4gZS50aXRsZSA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5kZXNjcmlwdGlvbiA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5uYW1lID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnJlbGF0aW9ucyA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5yZXF1aXJlZCA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5pZGVudGl0eSA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5maWVsZHMgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2RlZmF1bHQgZGF0YSBpcyB1bmRlZmluZWQnLCgpID0+IHtcbiAgICAgIGxldCBlID0gbmV3IEVudGl0eSgpO1xuICAgICAgZXhwZWN0KGUudGl0bGUpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLmRlc2NyaXB0aW9uKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5uYW1lKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5yZWxhdGlvbnMpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLnJlcXVpcmVkKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5pZGVudGl0eSkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUuZmllbGRzKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgfSk7XG5cbiAgICBpdCgnX2lkIGFuZCBpZCBpcyB0aGUgc2FtZScsICgpPT4ge1xuICAgICAgZXhwZWN0KCgpPT4gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ0EnLFxuICAgICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIG5hbWU6ICdfaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICB9XVxuICAgICAgICB9KSkudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdhY2NlcHQgdmFsaWQgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSBuZXcgRW50aXR5KCk7XG5cbiAgICAgIGV4cGVjdCgoKT0+XG4gICAgICBlLnVwZGF0ZVdpdGgoe1xuICAgICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbiAgICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIHRlc3QgRW50aXR5IGRlc2NyaWJlICcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUgZmllbGQyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZCAzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDQgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ1JyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBiZWxvbmdzVG86ICcjRmllbGQxJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgKS50by5ub3QudGhyb3coKTtcblxuICAgICAgZXhwZWN0KGUubmFtZSkudG8uYmUuZXF1YWwoJ1Rlc3RFbnRpdHknKTtcbiAgICAgIGV4cGVjdChlLmZpZWxkcy5zaXplKS50by5iZS5lcXVhbCg5KTtcbiAgICAgIGV4cGVjdChlLnJlbGF0aW9ucy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChlLmlkZW50aXR5LnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgZXhwZWN0KGUucmVxdWlyZWQuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG5cbiAgICAgIGV4cGVjdChlLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgbmFtZTogJyB0ZXN0IEVudGl0eSAnLFxuICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJyB0ZXN0IEVudGl0eSBkZXNjcmliZSAnLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlIGZpZWxkMicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRmllbGQgMycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDMgZGVzY3JpcHRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4gICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGhhc09uZTogJ01vZGVsL1VzZXIjaWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBoYXNPbmU6ICdBY3RvciNpZCcsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGJlbG9uZ3NUbzogJyNGaWVsZDEnLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgZXhwZWN0KGUudG9PYmplY3QoKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIG5hbWU6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgdGl0bGU6ICdUZXN0IEVudGl0eSB0aXRsZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVzdCBFbnRpdHkgZGVzY3JpYmUnLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIGlkS2V5OiAnVGVzdEVudGl0eSNpZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQxJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDEnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDInLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMycsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ0JyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDQgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNScsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ1JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ1JyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ2UmVmJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDYgcmVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ2IHJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkN1JlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ3IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNyByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ4UmVmJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDggcmVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ4IHJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBiZWxvbmdzVG86ICdUZXN0RW50aXR5I2ZpZWxkMScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmaXh1cCBpZGVudGl0eSBmaWVsZHMnLCgpPT4ge1xuICAgICAgaXQoJ25vIGZpZWxkcycsKCk9PiB7XG4gICAgICAgIGxldCBlMSA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChlMS50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaWRlbnRpdHknOiB0cnVlLFxuICAgICAgICAgICAgICAnbmFtZSc6ICdpZCcsXG4gICAgICAgICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnaWQgZmllbGQnLCgpPT4ge1xuICAgICAgICBsZXQgZTIgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTogJ0lkJyxcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KGUyLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZGVudGl0eSc6IHRydWUsXG4gICAgICAgICAgICAgICduYW1lJzogJ0lkJyxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdfaWQgZmllbGQnLCgpPT4ge1xuICAgICAgICBsZXQgZTMgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdfSWQnLFxuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QoZTMudG9KU09OKCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkZW50aXR5JzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnX0lkJyxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdmaXh1cCBmaWVsZCBjb250YWlucyBlbnRpdHknLCgpPT4ge1xuICAgICAgICBsZXQgZjEgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnZml4dXAxJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QoZjEubmFtZSkudG8uYmUuZXF1YWwoJ0ZpeHVwMScpO1xuICAgICAgICBleHBlY3QoZjEuZmllbGRzLmdldCgnaWQnKS5lbnRpdHkpLnRvLmJlLmVxdWFsKCdGaXh1cDEnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2ZrIGFuZCBpZHMnLCgpPT4ge1xuICAgICAgLy8g0YHRgdGL0LvQutC4INC/0L4g0LLQvdC10YjQvdC10LzRgyDQutC70Y7Rh9GDINC80L7Qs9GD0YIg0LHRi9GC0Ywg0L3QtSDRgtC+0LvRjNC60L4g0L3QsCBQS1xuICAgICAgLy8sINC90L4g0L3QsCDQu9GO0LHRi9C1INC60LvRjtGH0LhcbiAgICAgIGl0KCd2YWxpZGF0ZSBmayByZWZlcmVuY2UnLCAoKT0+IHtcbiAgICAgICAgbGV0IGUxID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ1RFc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGUyID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ1Rlc3QyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9KTtcblxuICBkZXNjcmliZSgnTW9kZWxQYWNrYWdlJywoKT0+IHtcbiAgICBpdCgnY3J1ZCBlbnRpdHknLCAoKT0+IHtcbiAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdCgoKT0+bW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiAnVGVzdDInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KSkudG8ubm90LnRocm93KCk7XG5cbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgxKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgyKTtcbiAgICAgIGV4cGVjdChtb2RlbC5nZXQoJ1Rlc3QyJykudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdUZXN0MicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgZXhwZWN0KCgpPT5tb2RlbC5yZW1vdmUoJ1Rlc3QyJykpLnRvLm5vdC50aHJvdygpO1xuICAgICAgZXhwZWN0KG1vZGVsLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ0VudGl0eScsKCk9PiB7XG4gICAgICBpdCgnY2hlY2sgcmVsYXRpb25zJywoKT0+IHtcbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICAvKmV4cGVjdCgoKT0+Ki9tb2RlbC5jcmVhdGUoe1xuICAgICAgICAgIG5hbWU6ICdBJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICBuYW1lOiAnQV9pZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgIH1dXG4gICAgICAgIH0pLyopLnRvLm5vdC50aHJvdygpKi87XG5cbiAgICAgICAgLypleHBlY3QoKCk9PiovbW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiAnQicsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FyZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnQSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9KS8qKS50by5ub3QudGhyb3coKSovO1xuICAgICAgICBsZXQgYiA9IG1vZGVsLmdldCgnQicpO1xuICAgICAgICBsZXQgbWlzc2luZ1JlbGF0aW9ucyA9IGIuY2hlY2tSZWxhdGlvbnMobW9kZWwpO1xuICAgICAgICBleHBlY3QobWlzc2luZ1JlbGF0aW9ucy5sZW5ndGgpLnRvLmJlLmVxdWFsKDApO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdtdWx0aXBsZSBtb2RlbHMgZmlsdGVyJywoKT0+IHtcbiAgICAgICAgbGV0IHUgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXBzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI3VzZXInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZyA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVnID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdHcm91cCNpZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1LHtkZXB0aDogNn0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KGcse2RlcHRoOiA2fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodWcse2RlcHRoOiA2fSkpO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgbW9kZWwuYWRkKHUpO1xuICAgICAgICBtb2RlbC5hZGQoZyk7XG4gICAgICAgIG1vZGVsLmFkZCh1Zyk7XG4gICAgICAgIG1vZGVsLmVuc3VyZUFsbCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbCx7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGcudG9KU09OKG1vZGVsKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHUudG9KU09OKG1vZGVsKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbCkpO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbC5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDMpO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyI2lkJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5oYXMoJ0dyb3VwI2lkJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXJHcm91cCNpZCcpKS50by5iZS50cnVlO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuaGFzKCdVc2VyJykpLnRvLmJlLnRydWU7XG5cbiAgICAgICAgbGV0IHVzZXJNb2RlbCA9IG1vZGVsLnJlbGF0aW9ucy5nZXQoJ1VzZXInKTtcbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbC5oYXMoJ2dyb3VwcycpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlck1vZGVsLmdldCgnZ3JvdXBzJykucmVsYXRpb24uYmVsb25nc1RvTWFueSkudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnR3JvdXAnLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuaGFzKCdHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgZ3JvdXBNb2RlbCA9IG1vZGVsLnJlbGF0aW9ucy5nZXQoJ0dyb3VwJyk7XG4gICAgICAgIGV4cGVjdChncm91cE1vZGVsLmhhcygndXNlcnMnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KGdyb3VwTW9kZWwuZ2V0KCd1c2VycycpLnJlbGF0aW9uLmJlbG9uZ3NUb01hbnkpLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ1VzZXInLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuaGFzKCdVc2VyR3JvdXAnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJHcm91cE1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnVXNlckdyb3VwJyk7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5oYXMoJ3VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsLmdldCgndXNlcicpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsLmhhcygnZ3JvdXAnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsLmdldCgnZ3JvdXAnKS5yZWxhdGlvbi5iZWxvbmdzVG8pLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ0dyb3VwJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBsZXQgbW9kZWwxID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICBtb2RlbDEuYWRkKHUpO1xuICAgICAgICBtb2RlbDEuYWRkKHVnKTtcbiAgICAgICAgbW9kZWwxLmVuc3VyZUFsbCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1c2VyTW9kZWwse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QobW9kZWwxLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZy50b0pTT04obW9kZWwxKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHUudG9KU09OKG1vZGVsMSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1Zy50b0pTT04obW9kZWwxKSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMS5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgyKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMS5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgyKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMS5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXIjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMS5pZGVudGl0eUZpZWxkcy5oYXMoJ0dyb3VwI2lkJykpLnRvLmJlLmZhbHNlO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnVXNlckdyb3VwI2lkJykpLnRvLmJlLnRydWU7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMS5yZWxhdGlvbnMuaGFzKCdVc2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyTW9kZWwxID0gbW9kZWwxLnJlbGF0aW9ucy5nZXQoJ1VzZXInKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QobW9kZWwxLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbDEse2RlcHRoOiA3fSkpO1xuXG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwxLmhhcygnZ3JvdXBzJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwxLmdldCgnZ3JvdXBzJykucmVsYXRpb24uaGFzTWFueSkudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlckdyb3VwJywgZmllbGQ6ICd1c2VyJ30pO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEucmVsYXRpb25zLmhhcygnR3JvdXAnKSkudG8uYmUuZmFsc2U7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMS5yZWxhdGlvbnMuaGFzKCdVc2VyR3JvdXAnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJHcm91cE1vZGVsMSA9IG1vZGVsMS5yZWxhdGlvbnMuZ2V0KCdVc2VyR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsMS5oYXMoJ3VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsMS5nZXQoJ3VzZXInKS5yZWxhdGlvbi5iZWxvbmdzVG8pLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ1VzZXInLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGxldCBtb2RlbDIgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIG1vZGVsMi5hZGQodSk7XG4gICAgICAgIG1vZGVsMi5lbnN1cmVBbGwoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QobW9kZWwyLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZy50b0pTT04obW9kZWwyKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHUudG9KU09OKG1vZGVsMikpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1Zy50b0pTT04obW9kZWwyKSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMi5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgxKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMi5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgxKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMi5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXIjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMi5pZGVudGl0eUZpZWxkcy5oYXMoJ0dyb3VwI2lkJykpLnRvLmJlLmZhbHNlO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnVXNlckdyb3VwI2lkJykpLnRvLmJlLmZhbHNlO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDIucmVsYXRpb25zLmhhcygnVXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlck1vZGVsMiA9IG1vZGVsMi5yZWxhdGlvbnMuZ2V0KCdVc2VyJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1c2VyTW9kZWwyLHtkZXB0aDogNX0pKTtcblxuICAgICAgICBleHBlY3QodXNlck1vZGVsMi5zaXplKS50by5iZS5lcXVhbCgwKTtcblxuICAgICAgICBleHBlY3QodS50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ1VzZXInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdncm91cHMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdHcm91cCNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4cGVjdChnLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnR3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VycycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KHVnLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIERFRkFVTFRfSURfRklFTEQsXG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgfSk7XG5cbiAgICAgIGRlc2NyaWJlKCdmaXggTTpOIHJlbGF0aW9ucycsICgpPT4ge1xuXG4gICAgICAgIGxldCB1ID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ1VzZXInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwcycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJyN1c2VyJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGcgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnR3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZzIgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnR3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICcjJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVnID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdHcm91cCMnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnbXVzdCBGaXggZW50aXR5IG9mIHRoZSByZWxhdGlvbi5yZWYgaWYnLCAoKT0+IHtcbiAgICAgICAgICBleHBlY3QodS5maWVsZHMuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi50b09iamVjdCgpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI3VzZXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IHNldCBuYW1lIG9mIHJlbGF0aW9uIHRvIGVudGl0eSBuYW1lIHJlbGF0aW9uLnJlZicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdChnLmZpZWxkcy5nZXQoJ3VzZXJzJykucmVsYXRpb24udG9PYmplY3QoKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnbXVzdCB1c2UgRW50aXR5IG5hbWUgYXMgdXNpbmcgZmllbGQgaW4gaGFzTWFueSByZWxhdGlvbicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdChnMi5maWVsZHMuZ2V0KCd1c2VycycpLnJlbGF0aW9uLnRvT2JqZWN0KCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUudG9PYmplY3QoKSx7ZGVwdGg6IDd9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1LHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KGcudG9PYmplY3QoKSx7ZGVwdGg6IDd9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1Zy50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3QvdW5pdC9tb2RlbC5qc1xuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3V0aWwvdXRpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7RW50aXR5fSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7TW9kZWxQYWNrYWdlfSBmcm9tICcuL21vZGVscGFja2FnZSc7XG5pbXBvcnQge0hhc09uZX0gZnJvbSAnLi9oYXNvbmUnO1xuaW1wb3J0IHtIYXNNYW55fSBmcm9tICcuL2hhc21hbnknO1xuaW1wb3J0IHtCZWxvbmdzVG99IGZyb20gJy4vYmVsb25nc3RvJztcbmltcG9ydCB7QmVsb25nc1RvTWFueX0gZnJvbSAnLi9iZWxvbmdzdG9tYW55JztcbmltcG9ydCB7REVGQVVMVF9JRF9GSUVMRH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5pbXBvcnQge2NvbXBvc2V9IGZyb20gJy4vY29tcG9zZSc7XG5cbmV4cG9ydCB7XG4gIGNvbXBvc2UsXG4gIEVudGl0eSxcbiAgRmllbGQsXG4gIEhhc09uZSxcbiAgSGFzTWFueSxcbiAgQmVsb25nc1RvLFxuICBCZWxvbmdzVG9NYW55LFxuICBNb2RlbFBhY2thZ2UsXG4gIERFRkFVTFRfSURfRklFTEQsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQge01vZGVsQmFzZX0gZnJvbSAnLi9tb2RlbGJhc2UnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQge0hhc09uZX0gZnJvbSAnLi9oYXNvbmUnO1xuaW1wb3J0IHtIYXNNYW55fSBmcm9tICcuL2hhc21hbnknO1xuaW1wb3J0IHtCZWxvbmdzVG99IGZyb20gJy4vYmVsb25nc3RvJztcbmltcG9ydCB7QmVsb25nc1RvTWFueX0gZnJvbSAnLi9iZWxvbmdzdG9tYW55JztcbmltcG9ydCB7REVGQVVMVF9JRF9GSUVMRH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBNb2RlbEJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIGlmIChwcm9wcykge1xuICAgICAgcmV0dXJuIG5ldyBFbnRpdHkoe1xuICAgICAgLi4ucHJvcHMsXG4gICAgICBmaWVsZHM6IGNoaWxkcmVuLFxuICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEVudGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHN1cGVyKG9iaik7XG4gIH1cblxuICBlbnN1cmVJZHMobW9kZWxQYWNrYWdlKSB7XG4gICAgdGhpcy5pZGVudGl0eS5mb3JFYWNoKCh2YWx1ZSk9PiB7XG4gICAgICB2YXIgaWRzID0gdGhpcy5maWVsZHMuZ2V0KHZhbHVlKTtcbiAgICAgIG1vZGVsUGFja2FnZS5pZGVudGl0eUZpZWxkcy5zZXQoaWRzLmlkS2V5LnRvU3RyaW5nKCksIHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5zdXJlRktzKG1vZGVsUGFja2FnZSkge1xuICAgIGlmIChtb2RlbFBhY2thZ2UpIHtcbiAgICAgIGxldCBtb2RlbFJlbGF0aW9ucztcbiAgICAgIGlmIChtb2RlbFBhY2thZ2UucmVsYXRpb25zLmhhcyh0aGlzLm5hbWUpKSB7XG4gICAgICAgIG1vZGVsUmVsYXRpb25zID0gbW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5nZXQodGhpcy5uYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsUmVsYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICBtb2RlbFBhY2thZ2UucmVsYXRpb25zLnNldCh0aGlzLm5hbWUsIG1vZGVsUmVsYXRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWxhdGlvbnMuZm9yRWFjaCgodmFsdWUpPT4ge1xuICAgICAgICBsZXQgcmVmID0gdGhpcy5maWVsZHMuZ2V0KHZhbHVlKTtcbiAgICAgICAgLy8gbXVzdCBiZSBkaWZmZXJlbnQgdG8gYXBwbHkgZml4dXBcbiAgICAgICAgbW9kZWxSZWxhdGlvbnMuc2V0KHJlZi5uYW1lLCByZWYuY2xvbmUoKSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IG1pc3NpbmcgPSB0aGlzLmNoZWNrUmVsYXRpb25zKG1vZGVsUGFja2FnZSk7XG4gICAgICBtaXNzaW5nLmZvckVhY2goKHIpPT4ge1xuICAgICAgICBtb2RlbFJlbGF0aW9ucy5kZWxldGUoci5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrUmVsYXRpb25zKG1vZGVsUGFja2FnZSkge1xuICAgIGxldCBtaXNzaW5nID0gW107XG4gICAgaWYgKG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuaGFzKHRoaXMubmFtZSkpIHtcbiAgICAgIGxldCBtb2RlbFJlbGF0aW9ucyA9IG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuZ2V0KHRoaXMubmFtZSk7XG4gICAgICBtb2RlbFJlbGF0aW9ucy5mb3JFYWNoKChmaWVsZCk9PiB7XG4gICAgICAgIGxldCByID0gZmllbGQucmVsYXRpb247XG4gICAgICAgIGxldCBtaXNzaW5nUmVmID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFyLnJlZi5maWVsZCkge1xuICAgICAgICAgIC8vIGRpc2NvdmVyIGZpZWxkTmFtZVxuICAgICAgICAgIGlmIChtb2RlbFBhY2thZ2UuZW50aXRpZXMuaGFzKHIucmVmLmVudGl0eSkpIHtcbiAgICAgICAgICAgIGxldCBlID0gbW9kZWxQYWNrYWdlLmVudGl0aWVzLmdldChyLnJlZi5lbnRpdHkpO1xuICAgICAgICAgICAgci5yZWYuZmllbGQgPSBlLmlkZW50aXR5WzBdO1xuICAgICAgICAgICAgbWlzc2luZ1JlZiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZUeXBlID0gKHIgaW5zdGFuY2VvZiBIYXNPbmUpID8gJ0hhc09uZScgOiAociBpbnN0YW5jZW9mIEhhc01hbnkgPyAnSGFzTWFueScgOiAociBpbnN0YW5jZW9mIEJlbG9uZ3NUb01hbnkgPyAnQmVsb25nc1RvTWFueScgOiAnQmVsb25nc1RvJykpO1xuICAgICAgICBzd2l0Y2ggKGZUeXBlKXtcbiAgICAgICAgICBjYXNlICdIYXNPbmUnOlxuICAgICAgICAgICAgaWYgKG1vZGVsUGFja2FnZS5lbnRpdGllcy5oYXMoci5yZWYuZW50aXR5KSkge1xuICAgICAgICAgICAgICBsZXQgcmVmZSA9IG1vZGVsUGFja2FnZS5lbnRpdGllcy5nZXQoci5yZWYuZW50aXR5KTtcbiAgICAgICAgICAgICAgaWYgKHJlbGF0aW9ucy5maWVsZHMuaGFzKHIucmVmLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIG1pc3NpbmdSZWYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hhc01hbnknOlxuICAgICAgICAgICAgLy8gbXVzdCBiZSBpbiByZWYgc3RvcmVcbiAgICAgICAgICAgIGlmIChtb2RlbFBhY2thZ2UuZW50aXRpZXMuaGFzKHIucmVmLmVudGl0eSkpIHtcbiAgICAgICAgICAgICAgbGV0IHJlZmUgPSBtb2RlbFBhY2thZ2UuZW50aXRpZXMuZ2V0KHIucmVmLmVudGl0eSk7XG4gICAgICAgICAgICAgIGlmIChyZWZlLmZpZWxkcy5oYXMoci5yZWYuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1JlZiA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQmVsb25nc1RvTWFueSc6XG4gICAgICAgICAgICAvLyBtdXN0IGJlIGluIHJlZiBzdG9yZVxuICAgICAgICAgICAgaWYgKG1vZGVsUGFja2FnZS5lbnRpdGllcy5oYXMoci5yZWYuZW50aXR5KSkge1xuICAgICAgICAgICAgICBsZXQgcmVmZSA9IG1vZGVsUGFja2FnZS5lbnRpdGllcy5nZXQoci5yZWYuZW50aXR5KTtcbiAgICAgICAgICAgICAgaWYgKHJlZmUuZmllbGRzLmhhcyhyLnJlZi5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nUmVmID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCB1c2luZyA9IHIudXNpbmc7XG4gICAgICAgICAgICAgIGlmICh1c2luZyAmJiBtb2RlbFBhY2thZ2UuZW50aXRpZXMuaGFzKHVzaW5nLmVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICAvLyDQt9C00LXRgdGMINC90YPQttC90L4g0LHRg9C00LXRgiDQuNC30LzQtdC90LjRgtGMINGC0LjQvyDQsNGB0YHQvtGG0LjQsNGG0LjQuFxuXG4gICAgICAgICAgICAgICAgbGV0IHJlcGxhY2VSZWYgPSByLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWYuaGFzTWFueSA9IHJlcGxhY2VSZWYudXNpbmc7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgcmVwbGFjZVJlZi5iZWxvbmdzVG9NYW55O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXBsYWNlUmVmLnVzaW5nO1xuXG4gICAgICAgICAgICAgICAgZmllbGQuJG9iai5yZWxhdGlvbiA9IG5ldyBIYXNNYW55KHJlcGxhY2VSZWYpO1xuICAgICAgICAgICAgICAgIG1pc3NpbmdSZWYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0JlbG9uZ3NUbyc6XG4gICAgICAgICAgICAvLyBtdXN0IGJlIGluIGlkZW50aXR5IHN0b3JlXG4gICAgICAgICAgICBpZiAobW9kZWxQYWNrYWdlLmlkZW50aXR5RmllbGRzLmhhcyhyLnJlZi50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBtaXNzaW5nUmVmID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWlzc2luZ1JlZikge1xuICAgICAgICAgIG1pc3NpbmcucHVzaChmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWlzc2luZztcbiAgfVxuXG4gIHJlbW92ZUlkcyhtb2RlbFBhY2thZ2UpIHtcbiAgICB0aGlzLmlkZW50aXR5LmZvckVhY2goKHZhbHVlKT0+IHtcbiAgICAgIHZhciBpZHMgPSB0aGlzLmZpZWxkcy5nZXQodmFsdWUpO1xuICAgICAgbW9kZWxQYWNrYWdlLmlkZW50aXR5RmllbGRzLmRlbGV0ZShpZHMuaWRLZXkudG9TdHJpbmcoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmVsYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoucmVsYXRpb25zIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoucmVxdWlyZWQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgaWRlbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5pZGVudGl0eSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBmaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5maWVsZHMgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgaW5kZXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmluZGV4ZWQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgcmVzdWx0Lm5hbWUgPSAocmVzdWx0Lm5hbWUuc2xpY2UoMCwxKSkudG9VcHBlckNhc2UoKSArIHJlc3VsdC5uYW1lLnNsaWNlKDEpO1xuXG4gICAgICBjb25zdCBmaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgICBjb25zdCByZWxhdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICBjb25zdCBpZGVudGl0eSA9IG5ldyBTZXQoKTtcbiAgICAgIGNvbnN0IHJlcXVpcmVkID0gbmV3IFNldCgpO1xuICAgICAgY29uc3QgaW5kZXhlZCA9IG5ldyBTZXQoKTtcblxuICAgICAgb2JqLmZpZWxkcy5mb3JFYWNoKGYgPT4ge1xuXG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCh7Li4uZiwgZW50aXR5OiByZXN1bHQubmFtZX0pO1xuXG4gICAgICAgIGlmIChmaWVsZHMuaGFzKGZpZWxkLm5hbWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgc2FtZSBmaWVsZCAke2ZpZWxkLm5hbWV9IGlzIGFscmVhZHkgZXhpc3RzIGluICR7b2JqLm5hbWV9IGVudHJ5YCk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZHMuc2V0KGZpZWxkLm5hbWUsIGZpZWxkKTtcblxuICAgICAgICBpZiAoZmllbGQuaWRlbnRpdHkpIHtcbiAgICAgICAgICBpZGVudGl0eS5hZGQoZmllbGQubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgICByZXF1aXJlZC5hZGQoZmllbGQubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQucmVsYXRpb24pIHtcbiAgICAgICAgICByZWxhdGlvbnMuYWRkKGZpZWxkLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkLmluZGV4ZWQpIHtcbiAgICAgICAgICBpbmRleGVkLmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlkZW50aXR5LnNpemUgPT0gMCkge1xuICAgICAgICBsZXQgZjtcbiAgICAgICAgaWYgKGZpZWxkcy5oYXMoJ2lkJykpIHtcbiAgICAgICAgICBmID0gZmllbGRzLmdldCgnaWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZHMuaGFzKCdfaWQnKSkge1xuICAgICAgICAgIGYgPSBmaWVsZHMuZ2V0KCdfaWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmID0gbmV3IEZpZWxkKHsuLi5ERUZBVUxUX0lEX0ZJRUxELCBlbnRpdHk6IHJlc3VsdC5uYW1lfSk7XG4gICAgICAgICAgZmllbGRzLnNldChmLm5hbWUsIGYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZi5tYWtlSWRlbnRpdHkoKTtcbiAgICAgICAgaWRlbnRpdHkuYWRkKGYubmFtZSk7XG4gICAgICAgIHJlcXVpcmVkLmFkZChmLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucmVsYXRpb25zID0gcmVsYXRpb25zO1xuICAgICAgcmVzdWx0LmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICByZXN1bHQucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAgIHJlc3VsdC5pbmRleGVkID0gaW5kZXhlZDtcbiAgICAgIHJlc3VsdC5maWVsZHMgPSBmaWVsZHM7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvT2JqZWN0KG1vZGVsUGFja2FnZSkge1xuICAgIGlmICghbW9kZWxQYWNrYWdlKSB7XG4gICAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGZpZWxkczogWy4uLnByb3BzLmZpZWxkcy52YWx1ZXMoKV0ubWFwKGY9PiBmLnRvT2JqZWN0KCkpLFxuICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1vZGVsUmVsYXRpb25zID0gbW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5nZXQodGhpcy5uYW1lKTtcbiAgICAgIGlmIChtb2RlbFJlbGF0aW9ucykge1xuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4ucmVzLFxuICAgICAgICAgIGZpZWxkczogWy4uLnByb3BzLmZpZWxkcy52YWx1ZXMoKV0ubWFwKGY9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWxhdGlvbnMuaGFzKGYubmFtZSkpIHtcbiAgICAgICAgICAgICAgaWYgKG1vZGVsUmVsYXRpb25zLmhhcyhmLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYudG9PYmplY3QobW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGYudG9PYmplY3QobW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5maWx0ZXIoZj0+ZiksXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b0pTT04obW9kZWxQYWNrYWdlKSB7XG4gICAgaWYgKCFtb2RlbFBhY2thZ2UpIHtcbiAgICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGZpZWxkczogWy4uLnByb3BzLmZpZWxkcy52YWx1ZXMoKV0ubWFwKGY9PiBmLnRvSlNPTigpKSxcbiAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtb2RlbFJlbGF0aW9ucyA9IG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuZ2V0KHRoaXMubmFtZSk7XG4gICAgICBpZiAobW9kZWxSZWxhdGlvbnMpIHtcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgICAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAuLi5yZXMsXG4gICAgICAgICAgZmllbGRzOiBbLi4ucHJvcHMuZmllbGRzLnZhbHVlcygpXS5tYXAoZj0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbGF0aW9ucy5oYXMoZi5uYW1lKSkge1xuICAgICAgICAgICAgICBpZiAobW9kZWxSZWxhdGlvbnMuaGFzKGYubmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZi50b0pTT04obW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGYudG9KU09OKG1vZGVsUGFja2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkuZmlsdGVyKGY9PmYpLFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9lbnRpdHkuanNcbiAqKi8iLCJpbXBvcnQge0ZpZWxkQmFzZX0gZnJvbSAnLi9maWVsZGJhc2UnO1xuaW1wb3J0IHtFbnRpdHl9IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCB7SGFzT25lfSBmcm9tICcuL2hhc29uZSc7XG5pbXBvcnQge0hhc01hbnl9IGZyb20gJy4vaGFzbWFueSc7XG5pbXBvcnQge0JlbG9uZ3NUb30gZnJvbSAnLi9iZWxvbmdzdG8nO1xuaW1wb3J0IHtCZWxvbmdzVG9NYW55fSBmcm9tICcuL2JlbG9uZ3N0b21hbnknO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcblxuZnVuY3Rpb24gZGlzY292ZXJGaWVsZFR5cGUob2JqKSB7XG4gIC8vINGB0LTQtdC70LDRgtGMINC/0YDQvtCy0LXRgNC60YMg0L/QviDQv9C+0LvRji4uLlxuICBpZiAob2JqLmhhc09uZSkge1xuICAgIHJldHVybiAnSGFzT25lJztcbiAgfSBlbHNlIGlmIChvYmouaGFzTWFueSkge1xuICAgIHJldHVybiAnSGFzTWFueSc7XG4gIH0gZWxzZSBpZiAob2JqLmJlbG9uZ3NUbykge1xuICAgIHJldHVybiAnQmVsb25nc1RvJztcbiAgfSBlbHNlIGlmIChvYmouYmVsb25nc1RvTWFueSkge1xuICAgIHJldHVybiAnQmVsb25nc1RvTWFueSc7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKGB1bmRlZmluZWQgcmVsYXRpb24gdHlwZSBvZiAke0pTT04uc3RyaW5naWZ5KG9iail9YCk7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgRmllbGQgZXh0ZW5kcyBGaWVsZEJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIHJlbGF0aW9uOiBjaGlsZHJlbiA/IGNoaWxkcmVuWzBdIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai50eXBlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlkZW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaWRlbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyB0aGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IGlmIHdlIGludGVybmFsbHkgc2V0XG4gIG1ha2VJZGVudGl0eSgpIHtcbiAgICB0aGlzLiRvYmouaWRLZXkgPSBuZXcgUmVmKHRoaXMuJG9iai5lbnRpdHksIHRoaXMuJG9iai5uYW1lKTtcbiAgICB0aGlzLiRvYmouaWRlbnRpdHkgPSB0aGlzLiRvYmouaWRlbnRpdHlfID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gKHRoaXMuJG9iai5yZXF1aXJlZCB8fCB0aGlzLiRvYmoucmVxdWlyZWRfKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpbmRleGVkKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyAodGhpcy4kb2JqLmluZGV4ZWQgfHwgdGhpcy4kb2JqLmluZGV4ZWRfKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpZEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmlkS2V5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoucmVsYXRpb24gOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCB0eXBlXyA9IG9iai50eXBlO1xuICAgICAgbGV0IHR5cGUgPSB0eXBlXyB8fCAnc3RyaW5nJztcblxuICAgICAgbGV0IGlkZW50aXR5XyA9IG9iai5pZGVudGl0eTtcbiAgICAgIGxldCBpZGVudGl0eSA9IGlkZW50aXR5XyB8fCBmYWxzZTtcblxuICAgICAgbGV0IHJlcXVpcmVkXyA9IG9iai5yZXF1aXJlZDtcbiAgICAgIGxldCByZXF1aXJlZCA9IHJlcXVpcmVkIHx8IGZhbHNlO1xuXG4gICAgICBsZXQgaW5kZXhlZF8gPSBvYmouaW5kZXhlZDtcbiAgICAgIGxldCBpbmRleGVkID0gaW5kZXhlZCB8fCBpZGVudGl0eTtcblxuICAgICAgcmVzdWx0LnR5cGVfID0gdHlwZV87XG4gICAgICByZXN1bHQudHlwZSA9IHR5cGU7XG5cbiAgICAgIHJlc3VsdC5pZGVudGl0eV8gPSBpZGVudGl0eV87XG4gICAgICByZXN1bHQuaWRlbnRpdHkgPSBpZGVudGl0eTtcblxuICAgICAgcmVzdWx0LmluZGV4ZWRfID0gaW5kZXhlZF87XG4gICAgICByZXN1bHQuaW5kZXhlZCA9IGluZGV4ZWQ7XG5cbiAgICAgIGlmIChyZXN1bHQuaWRlbnRpdHkpIHtcbiAgICAgICAgLy8g0Y3RgtC+INGC0L4g0LrQsNC6INCy0YvQs9C70Y/QtNC40YIg0LrQu9GO0Ycg0LTQu9GPINCy0L3QtdGI0L3QuNGFINGB0YHRi9C70L7QulxuICAgICAgICByZXN1bHQuaWRLZXkgPSBuZXcgUmVmKHJlc3VsdC5lbnRpdHksIHJlc3VsdC5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnJlcXVpcmVkXyA9IHJlcXVpcmVkXztcbiAgICAgIHJlc3VsdC5yZXF1aXJlZCA9IGlkZW50aXR5XyB8fCByZXF1aXJlZF8gfHwgZmFsc2U7XG5cbiAgICAgIGlmIChvYmoucmVsYXRpb24pIHtcbiAgICAgICAgbGV0IHJlbGF0aW9uXyA9IG9iai5yZWxhdGlvbjtcbiAgICAgICAgbGV0IHJlbGF0aW9uO1xuXG4gICAgICAgIHN3aXRjaCAoZGlzY292ZXJGaWVsZFR5cGUocmVsYXRpb25fKSl7XG4gICAgICAgICAgY2FzZSAnSGFzT25lJzpcbiAgICAgICAgICAgIHJlbGF0aW9uID0gbmV3IEhhc09uZSh7Li4ucmVsYXRpb25fLCBlbnRpdHk6IG9iai5lbnRpdHl9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIYXNNYW55JzpcbiAgICAgICAgICAgIHJlbGF0aW9uID0gbmV3IEhhc01hbnkoey4uLnJlbGF0aW9uXywgZW50aXR5OiBvYmouZW50aXR5IH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0JlbG9uZ3NUbyc6XG4gICAgICAgICAgICByZWxhdGlvbiA9IG5ldyBCZWxvbmdzVG8oey4uLnJlbGF0aW9uXywgZW50aXR5OiBvYmouZW50aXR5fSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQmVsb25nc1RvTWFueSc6XG4gICAgICAgICAgICByZWxhdGlvbiA9IG5ldyBCZWxvbmdzVG9NYW55KHsuLi5yZWxhdGlvbl8sIGVudGl0eTogb2JqLmVudGl0eX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Vua25vd24nOlxuICAgICAgICAgICAgcmVsYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucmVsYXRpb24gPSByZWxhdGlvbjtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC50eXBlXztcbiAgICAgICAgZGVsZXRlIHJlc3VsdC50eXBlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRvYmogPSB7XG4gICAgICAgIC4uLnJlc3VsdFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBpdCBnZXQgZml4ZWQgb2JqZWN0XG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICB0eXBlOiBwcm9wcy50eXBlIHx8IHByb3BzLnR5cGVfLFxuICAgICAgaWRlbnRpdHk6IHByb3BzLmlkZW50aXR5IHx8IHByb3BzLmlkZW50aXR5XyAsXG4gICAgICByZXF1aXJlZDogcHJvcHMucmVxdWlyZWQgfHwgcHJvcHMucmVxdWlyZWRfLFxuICAgICAgaW5kZXhlZDogcHJvcHMuaW5kZXhlZCB8fCBwcm9wcy5pbmRleGVkXyxcbiAgICAgIGlkS2V5OiBwcm9wcy5pZEtleSA/IHByb3BzLmlkS2V5LnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgICByZWxhdGlvbjogcHJvcHMucmVsYXRpb24gPyBwcm9wcy5yZWxhdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIGl0IGdldCBjbGVhbiBvYmplY3Qgd2l0aCBubyBkZWZhdWx0IHZhbHVlc1xuICB0b0pTT04oKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICB0eXBlOiBwcm9wcy50eXBlXyxcbiAgICAgIGlkZW50aXR5OiBwcm9wcy5pZGVudGl0eV8sXG4gICAgICByZXF1aXJlZDogcHJvcHMucmVxdWlyZWRfLFxuICAgICAgaW5kZXhlZDogcHJvcHMuaW5kZXhlZF8sXG4gICAgICByZWxhdGlvbjogcHJvcHMucmVsYXRpb24gPyBwcm9wcy5yZWxhdGlvbi50b0pTT04oKSA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2ZpZWxkLmpzXG4gKiovIiwiaW1wb3J0IHtNb2RlbEJhc2V9IGZyb20gJy4vbW9kZWxiYXNlJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkQmFzZSBleHRlbmRzIE1vZGVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHN1cGVyKG9iaik7XG4gIH1cblxuICBnZXQgZW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouZW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBzdXBlci51cGRhdGVXaXRoKG9iaik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCBlbnRpdHlfID0gb2JqLmVudGl0eTtcbiAgICAgIGxldCBlbnRpdHkgPSBlbnRpdHlfO1xuXG4gICAgICByZXN1bHQuZW50aXR5ID0gZW50aXR5O1xuICAgICAgcmVzdWx0LmVudGl0eV8gPSBlbnRpdHlfO1xuXG4gICAgICB0aGlzLiRvYmogPSB7XG4gICAgICAgIC4uLnJlc3VsdFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBpdCBnZXQgZml4ZWQgb2JqZWN0XG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBlbnRpdHk6IHByb3BzLmVudGl0eSB8fCBwcm9wcy5lbnRpdHlfICxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgLy8gZW50aXR5OiBwcm9wcy5lbnRpdHlfLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvZmllbGRiYXNlLmpzXG4gKiovIiwiaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuaW1wb3J0IGRlY2FtZWxpemUgZnJvbSAnZGVjYW1lbGl6ZSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICB0aGlzLnVwZGF0ZVdpdGgob2JqKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLm5hbWUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB0aGlzLiRvYmogPyAocHJvcHMudGl0bGUgfHwgcHJvcHMudGl0bGVfKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IChwcm9wcy5kZXNjcmlwdGlvbiB8fCBwcm9wcy5kZXNjcmlwdGlvbl8pIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9PYmplY3QoKSk7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUgfHwgcHJvcHMubmFtZV8sXG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUgfHwgcHJvcHMudGl0bGVfLFxuICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uIHx8IHByb3BzLmRlc2NyaXB0aW9uXyxcbiAgICB9O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZV8sXG4gICAgICB0aXRsZTogcHJvcHMudGl0bGVfLFxuICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uXyxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCBuYW1lXyA9IG9iai5uYW1lO1xuICAgICAgbGV0IHRpdGxlXyA9IG9iai50aXRsZTtcbiAgICAgIGxldCBkZXNjcmlwdGlvbl8gPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBuYW1lID0gY2FtZWxjYXNlKG5hbWVfLnRyaW0oKSk7XG5cbiAgICAgIGxldCB0aXRsZSA9IHRpdGxlXyA/IHRpdGxlXy50cmltKCkgOiAnJztcblxuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25fID8gZGVzY3JpcHRpb25fLnRyaW0oKSA6ICcnO1xuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gZGVjYW1lbGl6ZShuYW1lLCAnICcpO1xuICAgICAgfVxuICAgICAgdGl0bGUgPSAodGl0bGUuc2xpY2UoMCwxKSkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEpO1xuXG4gICAgICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gdGl0bGUgfHwgdGl0bGVfO1xuICAgICAgfVxuICAgICAgZGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24uc2xpY2UoMCwxKSkudG9VcHBlckNhc2UoKSArIGRlc2NyaXB0aW9uLnNsaWNlKDEpO1xuXG4gICAgICByZXN1bHQubmFtZV8gPSBuYW1lXztcbiAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcblxuICAgICAgcmVzdWx0LnRpdGxlXyA9IHRpdGxlXztcbiAgICAgIHJlc3VsdC50aXRsZSA9IHRpdGxlO1xuXG4gICAgICByZXN1bHQuZGVzY3JpcHRpb25fID0gZGVzY3JpcHRpb25fO1xuICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnRvSlNPTigpKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvbW9kZWxiYXNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBwcmVzZXJ2ZUNhbWVsQ2FzZShzdHIpIHtcblx0dmFyIGlzTGFzdENoYXJMb3dlciA9IGZhbHNlO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuXG5cdFx0aWYgKGlzTGFzdENoYXJMb3dlciAmJiAoL1thLXpBLVpdLykudGVzdChjKSAmJiBjLnRvVXBwZXJDYXNlKCkgPT09IGMpIHtcblx0XHRcdHN0ciA9IHN0ci5zdWJzdHIoMCwgaSkgKyAnLScgKyBzdHIuc3Vic3RyKGkpO1xuXHRcdFx0aXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzTGFzdENoYXJMb3dlciA9IChjLnRvTG93ZXJDYXNlKCkgPT09IGMpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc3RyID0gW10ubWFwLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAoc3RyKSB7XG5cdFx0cmV0dXJuIHN0ci50cmltKCk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoc3RyKSB7XG5cdFx0cmV0dXJuIHN0ci5sZW5ndGg7XG5cdH0pLmpvaW4oJy0nKTtcblxuXHRpZiAoIXN0ci5sZW5ndGgpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoc3RyLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuXHRpZiAoISgvW18uXFwtIF0rLykudGVzdChzdHIpKSB7XG5cdFx0aWYgKHN0ciA9PT0gc3RyLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cblx0XHRpZiAoc3RyWzBdICE9PSBzdHJbMF0udG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0cmV0dXJuIHN0clswXS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuXHRzdHIgPSBwcmVzZXJ2ZUNhbWVsQ2FzZShzdHIpO1xuXG5cdHJldHVybiBzdHJcblx0LnJlcGxhY2UoL15bXy5cXC0gXSsvLCAnJylcblx0LnRvTG93ZXJDYXNlKClcblx0LnJlcGxhY2UoL1tfLlxcLSBdKyhcXHd8JCkvZywgZnVuY3Rpb24gKG0sIHAxKSB7XG5cdFx0cmV0dXJuIHAxLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NhbWVsY2FzZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIHNlcCkge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0c2VwID0gdHlwZW9mIHNlcCA9PT0gJ3VuZGVmaW5lZCcgPyAnXycgOiBzZXA7XG5cblx0cmV0dXJuIHN0clxuXHRcdC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEnICsgc2VwICsgJyQyJylcblx0XHQucmVwbGFjZSgvKFtBLVpdKykoW0EtWl1bYS16XFxkXSspL2csICckMScgKyBzZXAgKyAnJDInKVxuXHRcdC50b0xvd2VyQ2FzZSgpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RlY2FtZWxpemUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtSZWZCYXNlfSBmcm9tICcuL3JlZmJhc2UnO1xuaW1wb3J0IHtSRUZfUEFUVEVSTn0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5pbXBvcnQge1JlZn0gZnJvbSAnLi9yZWYnO1xuaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgSGFzT25lIGV4dGVuZHMgUmVmQmFzZSB7XG5cbiAgc3RhdGljIGNvbXBvc2UocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIC4uLnByb3BzLFxuICAgIH07XG4gICAgaWYgKHJlc3VsdC5yZWYgJiYgIXJlc3VsdC5oYXNPbmUpIHtcbiAgICAgIHJlc3VsdC5oYXNPbmUgPSByZXN1bHQucmVmO1xuICAgICAgZGVsZXRlIHJlc3VsdC5yZWY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IGhhc09uZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmhhc09uZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCByZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5oYXNPbmUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGhhc09uZV8gPSBvYmouaGFzT25lO1xuXG4gICAgICBsZXQgaGFzT25lO1xuICAgICAgaWYgKGhhc09uZV8pIHtcbiAgICAgICAgaGFzT25lID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gaGFzT25lXy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIGhhc09uZS5lbnRpdHkgPSByZXNbMV0gfHwgb2JqLmVudGl0eTtcbiAgICAgICAgaGFzT25lLmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5oYXNPbmVfID0gaGFzT25lXztcbiAgICAgIHJlc3VsdC5oYXNPbmUgPSBoYXNPbmU7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGhhc09uZTogcHJvcHMuaGFzT25lID8gcHJvcHMuaGFzT25lLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXQgZ2V0IGNsZWFuIG9iamVjdCB3aXRoIG5vIGRlZmF1bHQgdmFsdWVzXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGhhc09uZTogcHJvcHMuaGFzT25lXyxcbiAgICB9KSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2hhc29uZS5qc1xuICoqLyIsImltcG9ydCBjYW1lbGNhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuZXhwb3J0IGNsYXNzIFJlZkJhc2Uge1xuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICB0aGlzLnVwZGF0ZVdpdGgob2JqKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLm5hbWUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b09iamVjdCgpKTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZSB8fCBwcm9wcy5uYW1lXyxcbiAgICB9O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZV8sXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICBsZXQgbmFtZV8gPSBvYmoubmFtZTtcblxuICAgICAgbGV0IG5hbWUgPSBuYW1lID8gY2FtZWxjYXNlKG5hbWVfLnRyaW0oKSkgOiBuYW1lO1xuXG4gICAgICByZXN1bHQubmFtZV8gPSBuYW1lXztcbiAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMudG9KU09OKCkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9yZWZiYXNlLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFJFRl9QQVRURVJOID0gL14oLio/KSg/OiMoLio/KSk/JC87XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lEX0ZJRUxETkFNRSA9ICdpZCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lEX0ZJRUxEID0ge1xuICBuYW1lOiBERUZBVUxUX0lEX0ZJRUxETkFNRSxcbiAgaWRlbnRpdHk6IHRydWUsXG4gIHJlcXVpcmVkOiB0cnVlLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2RlZmluaXRpb25zLmpzXG4gKiovIiwiaW1wb3J0IHsgREVGQVVMVF9JRF9GSUVMRE5BTUUgfSBmcm9tICcuL2RlZmluaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIFJlZiB7XG4gIGNvbnN0cnVjdG9yKGVudGl0eSwgZmllbGQpIHtcbiAgICBpZiAodHlwZW9mIGVudGl0eSA9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgfSBlbHNlIGlmIChlbnRpdHkgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5LmVudGl0eTtcbiAgICAgIHRoaXMuZmllbGQgPSBlbnRpdHkuZmllbGQ7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuZW50aXR5fSMke3RoaXMuZmllbGQgfHwgREVGQVVMVF9JRF9GSUVMRE5BTUV9YDtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL3JlZi5qc1xuICoqLyIsImltcG9ydCB7UmVmQmFzZX0gZnJvbSAnLi9yZWZiYXNlJztcbmltcG9ydCB7UkVGX1BBVFRFUk59IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcbmltcG9ydCBjYW1lbGNhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuZXhwb3J0IGNsYXNzIEhhc01hbnkgZXh0ZW5kcyBSZWZCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnJlZiAmJiAhcmVzdWx0Lmhhc01hbnkpIHtcbiAgICAgIHJlc3VsdC5oYXNNYW55ID0gcmVzdWx0LnJlZjtcbiAgICAgIGRlbGV0ZSByZXN1bHQucmVmO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCBoYXNNYW55KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaGFzTWFueSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCByZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5oYXNNYW55IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBzdXBlci51cGRhdGVXaXRoKG9iaik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCBoYXNNYW55XyA9IG9iai5oYXNNYW55O1xuXG4gICAgICBsZXQgaGFzTWFueTtcbiAgICAgIGlmIChoYXNNYW55Xykge1xuICAgICAgICBoYXNNYW55ID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gaGFzTWFueV8ubWF0Y2goUkVGX1BBVFRFUk4pO1xuICAgICAgICBoYXNNYW55LmVudGl0eSA9IHJlc1sxXSB8fCBvYmouZW50aXR5O1xuICAgICAgICBoYXNNYW55LmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5oYXNNYW55XyA9IGhhc01hbnlfO1xuICAgICAgcmVzdWx0Lmhhc01hbnkgPSBoYXNNYW55O1xuXG4gICAgICB0aGlzLiRvYmogPSB7XG4gICAgICAgIC4uLnJlc3VsdFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgLy8gaXQgZ2V0IGZpeGVkIG9iamVjdFxuICB0b09iamVjdCgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvT2JqZWN0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgaGFzTWFueTogcHJvcHMuaGFzTWFueSA/IHByb3BzLmhhc01hbnkudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgaGFzTWFueTogcHJvcHMuaGFzTWFueV8sXG4gICAgfSkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9oYXNtYW55LmpzXG4gKiovIiwiaW1wb3J0IHtSZWZCYXNlfSBmcm9tICcuL3JlZmJhc2UnO1xuaW1wb3J0IHtSRUZfUEFUVEVSTn0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5pbXBvcnQge1JlZn0gZnJvbSAnLi9yZWYnO1xuaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvIGV4dGVuZHMgUmVmQmFzZSB7XG5cbiAgc3RhdGljIGNvbXBvc2UocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIC4uLnByb3BzLFxuICAgIH07XG4gICAgaWYgKHJlc3VsdC5yZWYgJiYgIXJlc3VsdC5iZWxvbmdzVG8pIHtcbiAgICAgIHJlc3VsdC5iZWxvbmdzVG8gPSByZXN1bHQucmVmO1xuICAgICAgZGVsZXRlIHJlc3VsdC5yZWY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IGJlbG9uZ3NUbygpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmJlbG9uZ3NUbyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCByZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5iZWxvbmdzVG8gOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGJlbG9uZ3NUb18gPSBvYmouYmVsb25nc1RvO1xuXG4gICAgICBsZXQgYmVsb25nc1RvO1xuICAgICAgaWYgKGJlbG9uZ3NUb18pIHtcbiAgICAgICAgYmVsb25nc1RvID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gYmVsb25nc1RvXy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIGJlbG9uZ3NUby5lbnRpdHkgPSByZXNbMV0gfHwgb2JqLmVudGl0eTtcbiAgICAgICAgYmVsb25nc1RvLmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5iZWxvbmdzVG9fID0gYmVsb25nc1RvXztcbiAgICAgIHJlc3VsdC5iZWxvbmdzVG8gPSBiZWxvbmdzVG87XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGJlbG9uZ3NUbzogcHJvcHMuYmVsb25nc1RvID8gcHJvcHMuYmVsb25nc1RvLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXQgZ2V0IGNsZWFuIG9iamVjdCB3aXRoIG5vIGRlZmF1bHQgdmFsdWVzXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGJlbG9uZ3NUbzogcHJvcHMuYmVsb25nc1RvXyxcbiAgICB9KSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2JlbG9uZ3N0by5qc1xuICoqLyIsImltcG9ydCB7UmVmQmFzZX0gZnJvbSAnLi9yZWZiYXNlJztcbmltcG9ydCB7UkVGX1BBVFRFUk59IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcbmltcG9ydCBjYW1lbGNhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuZXhwb3J0IGNsYXNzIEJlbG9uZ3NUb01hbnkgZXh0ZW5kcyBSZWZCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnJlZiAmJiAhcmVzdWx0LmJlbG9uZ3NUb01hbnkpIHtcbiAgICAgIHJlc3VsdC5iZWxvbmdzVG9NYW55ID0gcmVzdWx0LnJlZjtcbiAgICAgIGRlbGV0ZSByZXN1bHQucmVmO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCBiZWxvbmdzVG9NYW55KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouYmVsb25nc1RvTWFueSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCB1c2luZygpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLnVzaW5nIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlZigpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmJlbG9uZ3NUb01hbnkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGJlbG9uZ3NUb01hbnlfID0gb2JqLmJlbG9uZ3NUb01hbnk7XG5cbiAgICAgIGxldCB1c2luZ18gPSBvYmoudXNpbmc7XG5cbiAgICAgIGxldCBiZWxvbmdzVG9NYW55O1xuICAgICAgaWYgKGJlbG9uZ3NUb01hbnlfKSB7XG4gICAgICAgIGJlbG9uZ3NUb01hbnkgPSBuZXcgUmVmKCk7XG4gICAgICAgIGxldCByZXMgPSBiZWxvbmdzVG9NYW55Xy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIGJlbG9uZ3NUb01hbnkuZW50aXR5ID0gcmVzWzFdIHx8IG9iai5lbnRpdHk7XG4gICAgICAgIGJlbG9uZ3NUb01hbnkuZmllbGQgPSByZXNbMl0gPyBjYW1lbGNhc2UocmVzWzJdLnRyaW0oKSkgOiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IHVzaW5nO1xuICAgICAgaWYgKHVzaW5nXykge1xuICAgICAgICB1c2luZyA9IG5ldyBSZWYoKTtcbiAgICAgICAgbGV0IHJlcyA9IHVzaW5nXy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIHVzaW5nLmVudGl0eSA9IHJlc1sxXSB8fCBvYmoubmFtZSB8fCBvYmouZW50aXR5O1xuICAgICAgICB1c2luZy5maWVsZCA9IHJlc1syXSA/IGNhbWVsY2FzZShyZXNbMl0udHJpbSgpKSA6IG9iai5lbnRpdHkudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVzaW5nID0gbmV3IFJlZihgJHtvYmoubmFtZSB8fCBvYmouZW50aXR5fSMke29iai5lbnRpdHkudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmoubmFtZV8gJiYgdXNpbmcpIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSB1c2luZy5lbnRpdHk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5iZWxvbmdzVG9NYW55XyA9IGJlbG9uZ3NUb01hbnlfO1xuICAgICAgcmVzdWx0LmJlbG9uZ3NUb01hbnkgPSBiZWxvbmdzVG9NYW55O1xuXG4gICAgICByZXN1bHQudXNpbmdfID0gdXNpbmdfO1xuICAgICAgcmVzdWx0LnVzaW5nID0gdXNpbmc7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICAvLyBpdCBnZXQgZml4ZWQgb2JqZWN0XG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBiZWxvbmdzVG9NYW55OiBwcm9wcy5iZWxvbmdzVG9NYW55ID8gcHJvcHMuYmVsb25nc1RvTWFueS50b1N0cmluZygpIDogdW5kZWZpbmVkLFxuICAgICAgdXNpbmc6IHByb3BzLnVzaW5nID8gcHJvcHMudXNpbmcudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgYmVsb25nc1RvTWFueTogcHJvcHMuYmVsb25nc1RvTWFueV8sXG4gICAgICB1c2luZzogcHJvcHMudXNpbmdfLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvYmVsb25nc3RvbWFueS5qc1xuICoqLyIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL21vZGVsL2VudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbFBhY2thZ2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBlbnRpdHlMaXN0KSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNb2RlbFBhY2thZ2UocHJvcHMpO1xuICAgIGVudGl0eUxpc3QuZm9yRWFjaCgoZW50aXR5KT0+IHtcbiAgICAgIHJlc3VsdC5hZGQoZW50aXR5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g0YHQv9C40YHQvtC6INCy0YHQtdGFIGVudGl0eVxuICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgTWFwKCk7XG4gICAgLy8g0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC1INCyINC/0LDQutC10YLQtSBpZGVudGl0eVxuICAgIHRoaXMuaWRlbnRpdHlGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgLy8gcmVmINC00LvRjyDQuNGB0L/RgNCw0LLQu9C10L3QuNC5XG4gICAgdGhpcy5yZWxhdGlvbnMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBhZGQoZW50aXR5KSB7XG4gICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIEVudGl0eSkge1xuICAgICAgdGhpcy5lbnRpdGllcy5zZXQoZW50aXR5Lm5hbWUsIGVudGl0eSk7XG4gICAgICBlbnRpdHkuZW5zdXJlSWRzKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5nZXQobmFtZSk7XG4gIH1cblxuICBjcmVhdGUoanNvbikge1xuICAgIHJldHVybiB0aGlzLmFkZChuZXcgRW50aXR5KGpzb24pKTtcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG4gICAgbGV0IGVudGl0eSA9IHRoaXMuZW50aXRpZXMuZ2V0KG5hbWUpO1xuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHRoaXMuZW50aXRpZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgZW50aXR5LnJlbW92ZUlkcyh0aGlzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuc2l6ZTtcbiAgfVxuICBlbnN1cmVBbGwoKSB7XG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlKT0+IHtcbiAgICAgIGUuZW5zdXJlRktzKHRoaXMpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9tb2RlbHBhY2thZ2UuanNcbiAqKi8iLCJpbXBvcnQge0VudGl0eX0gZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQge01vZGVsUGFja2FnZX0gZnJvbSAnLi9tb2RlbHBhY2thZ2UnO1xuaW1wb3J0IHtIYXNPbmV9IGZyb20gJy4vaGFzb25lJztcbmltcG9ydCB7SGFzTWFueX0gZnJvbSAnLi9oYXNtYW55JztcbmltcG9ydCB7QmVsb25nc1RvfSBmcm9tICcuL2JlbG9uZ3N0byc7XG5pbXBvcnQge0JlbG9uZ3NUb01hbnl9IGZyb20gJy4vYmVsb25nc3RvbWFueSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlKFRfLCBwcm9wcywgLi4uYXR0cikge1xuICBsZXQgVDtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBUXykge1xuICAgIHN3aXRjaCAoVF8udG9Mb3dlckNhc2UoKSl7XG4gICAgICBjYXNlICdlbnRpdHknOlxuICAgICAgICBUID0gRW50aXR5O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWVsZCc6XG4gICAgICAgIFQgPSBGaWVsZDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGFzb25lJzpcbiAgICAgICAgVCA9IEhhc09uZTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGFzbWFueSc6XG4gICAgICAgIFQgPSBIYXNNYW55O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiZWxvbmdzdG8nOlxuICAgICAgICBUID0gQmVsb25nc1RvO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiZWxvbmdzdG9tYW55JzpcbiAgICAgICAgVCA9IEJlbG9uZ3NUb01hbnk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vZGVsJzpcbiAgICAgIGNhc2UgJ21vZGVsUGFja2FnZSc6XG4gICAgICAgIFQgPSBNb2RlbFBhY2thZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVCA9IFRfO1xuICB9XG4gIHJldHVybiBULmNvbXBvc2UocHJvcHMsIGF0dHIpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2NvbXBvc2UuanNcbiAqKi8iLCIvKiogQGpzeCBjb21wb3NlICovXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcblxuaW1wb3J0IHtjb21wb3NlLCBFbnRpdHksIEZpZWxkLCBIYXNNYW55LCBIYXNPbmUsIEJlbG9uZ3NUbywgQmVsb25nc1RvTWFueSwgTW9kZWxQYWNrYWdlLCBERUZBVUxUX0lEX0ZJRUxEfSBmcm9tICcuLi8uLi9zcmMvbW9kZWwnO1xuXG5kZXNjcmliZSgncmVhY3Qtd2F5JywgKCk9PiB7XG5cbiAgZGVzY3JpYmUoJ0VudGl0eScsICgpID0+IHtcblxuICAgIGl0KCdjcmVhdGUgZW1wdHkgbW9kZWwnLCgpID0+IHtcbiAgICAgIGV4cGVjdCgoKT0+PEVudGl0eS8+KS50by5ub3QudGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdub3QgY3JlYXRlIHdyb25nIG1vZGVsJywoKSA9PiB7XG4gICAgICBleHBlY3QoKCk9PjxFbnRpdHkgc29tZT17MX0vPikudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdub3QgdGhyb3dzIHdpdGggZW1wdHkgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSA8RW50aXR5Lz47XG4gICAgICBleHBlY3QoKCk9PiBlLnVwZGF0ZVdpdGgoKSkudG8ubm90LnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgndGhyb3dzIHdpdGggaW52YWxpZCBkYXRhJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IDxFbnRpdHkvPjtcbiAgICAgIGV4cGVjdCgoKT0+IGUudXBkYXRlV2l0aCh7c29tZTogMX0pKS50by50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ2NhblxcJ3QgYWNjZXNzIHRvIHByaXZhdGUgZmllbGRzJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IDxFbnRpdHkvPjtcblxuICAgICAgZXhwZWN0KCgpPT4gZS50aXRsZSA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5kZXNjcmlwdGlvbiA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5uYW1lID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnJlbGF0aW9ucyA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5yZXF1aXJlZCA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5pZGVudGl0eSA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5maWVsZHMgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2RlZmF1bHQgZGF0YSBpcyB1bmRlZmluZWQnLCgpID0+IHtcbiAgICAgIGxldCBlID0gPEVudGl0eS8+O1xuICAgICAgZXhwZWN0KGUudGl0bGUpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLmRlc2NyaXB0aW9uKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5uYW1lKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5yZWxhdGlvbnMpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLnJlcXVpcmVkKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5pZGVudGl0eSkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUuZmllbGRzKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgfSk7XG5cbiAgICBpdCgnX2lkIGFuZCBpZCBpcyB0aGUgc2FtZScsICgpPT4ge1xuICAgICAgZXhwZWN0KCgpPT5cbiAgICAgICAgPGVudGl0eSBuYW1lPSdBJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nX2lkJy8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J19pZCcgaWRlbnRpdHkvPlxuICAgICAgICA8L2VudGl0eT4pLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnYWNjZXB0IHZhbGlkIGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gPGVudGl0eS8+O1xuXG4gICAgICBleHBlY3QoKCk9PlxuICAgICAgZS51cGRhdGVXaXRoKHtcbiAgICAgICAgICBuYW1lOiAnIHRlc3QgRW50aXR5ICcsXG4gICAgICAgICAgdGl0bGU6ICcgdGVzdCBFbnRpdHkgdGl0bGUgJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJyB0ZXN0IEVudGl0eSBkZXNjcmliZSAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZDEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMicsXG4gICAgICAgICAgICB0aXRsZTogJ3RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmllbGQgMycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkMyBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ0JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDZSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnTW9kZWwvVXNlciNpZCcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ3UmVmJyxcbiAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgIGhhc09uZTogJ0FjdG9yI2lkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDhSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnI0ZpZWxkMScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgICkudG8ubm90LnRocm93KCk7XG5cbiAgICAgIGV4cGVjdChlLm5hbWUpLnRvLmJlLmVxdWFsKCdUZXN0RW50aXR5Jyk7XG4gICAgICBleHBlY3QoZS5maWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoOSk7XG4gICAgICBleHBlY3QoZS5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICBleHBlY3QoZS5pZGVudGl0eS5zaXplKS50by5iZS5lcXVhbCgxKTtcbiAgICAgIGV4cGVjdChlLnJlcXVpcmVkLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuXG4gICAgICBleHBlY3QoZS50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbiAgICAgICAgdGl0bGU6ICcgdGVzdCBFbnRpdHkgdGl0bGUgJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcgdGVzdCBFbnRpdHkgZGVzY3JpYmUgJyxcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdGaWVsZDEnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkMicsXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZSBmaWVsZDInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZpZWxkIDMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkNCBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQ1JyxcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDZSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQ3UmVmJyxcbiAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDhSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBiZWxvbmdzVG86ICcjRmllbGQxJyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIGV4cGVjdChlLnRvT2JqZWN0KCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICBuYW1lOiAnVGVzdEVudGl0eScsXG4gICAgICAgIHRpdGxlOiAnVGVzdCBFbnRpdHkgdGl0bGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rlc3QgRW50aXR5IGRlc2NyaWJlJyxcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHRpdGxlOiAnSWQnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICBpZEtleTogJ1Rlc3RFbnRpdHkjaWQnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMScsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQxJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdUaXRsZSBmaWVsZDInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaXRsZSBmaWVsZDInLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDMnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkMycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkMyBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ2IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNiByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnTW9kZWwvVXNlciNpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNyByZWYnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDcgcmVmJyxcbiAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgIGhhc09uZTogJ0FjdG9yI2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ4IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkOCByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnVGVzdEVudGl0eSNmaWVsZDEnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZml4dXAgaWRlbnRpdHkgZmllbGRzJywoKT0+IHtcbiAgICAgIGl0KCdubyBmaWVsZHMnLCgpPT4ge1xuICAgICAgICBsZXQgZTEgPSA8ZW50aXR5IG5hbWU9J3Rlc3QxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICA8L2VudGl0eT47XG5cbiAgICAgICAgZXhwZWN0KGUxLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZGVudGl0eSc6IHRydWUsXG4gICAgICAgICAgICAgICduYW1lJzogJ2lkJyxcbiAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdpZCBmaWVsZCcsKCk9PiB7XG5cbiAgICAgICAgbGV0IGUyID0gPGVudGl0eSBuYW1lPSd0ZXN0MSc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nSWQnLz5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGV4cGVjdChlMi50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaWRlbnRpdHknOiB0cnVlLFxuICAgICAgICAgICAgICAnbmFtZSc6ICdJZCcsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnX2lkIGZpZWxkJywoKT0+IHtcbiAgICAgICAgbGV0IGUzID0gPGVudGl0eSBuYW1lPSd0ZXN0MSc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nX0lkJy8+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBleHBlY3QoZTMudG9KU09OKCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkZW50aXR5JzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnX0lkJyxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdmaXh1cCBmaWVsZCBjb250YWlucyBlbnRpdHknLCgpPT4ge1xuICAgICAgICBsZXQgZjEgPSA8ZW50aXR5IG5hbWU9J2ZpeHVwMSc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnIHR5cGU9J3N0cmluZycvPlxuICAgICAgICA8L2VudGl0eT47XG4gICAgICAgIGV4cGVjdChmMS5uYW1lKS50by5iZS5lcXVhbCgnRml4dXAxJyk7XG4gICAgICAgIGV4cGVjdChmMS5maWVsZHMuZ2V0KCdpZCcpLmVudGl0eSkudG8uYmUuZXF1YWwoJ0ZpeHVwMScpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZmsgYW5kIGlkcycsKCk9PiB7XG4gICAgICBpdCgndmFsaWRhdGUgZmsgcmVmZXJlbmNlJywgKCk9PiB7XG4gICAgICAgIGxldCBlMSA9IDxlbnRpdHkgbmFtZT0nVEVzdDEnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJyBpZGVudGl0eS8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJyBpZGVudGl0eS8+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBsZXQgZTIgPSA8ZW50aXR5IG5hbWU9J1Rlc3QyJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScgaWRlbnRpdHkvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdpZCcgaWRlbnRpdHkvPlxuICAgICAgICA8L2VudGl0eT47XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ01vZGVsUGFja2FnZScsKCk9PiB7XG5cbiAgICBpdCgnY3JlYXRlIGVtcHR5IG1vZGVsJywoKT0+IHtcbiAgICAgIGxldCBtb2RlbCA9IDxtb2RlbC8+O1xuICAgICAgZXhwZWN0KG1vZGVsKS50by5iZS5pbnN0YW5jZW9mKE1vZGVsUGFja2FnZSk7XG4gICAgICBleHBlY3QobW9kZWwuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuICAgIH0pO1xuXG4gICAgaXQoJ2NyZWF0ZSBtb2RlbCB3aXRoIGVudGl0aWVzJywoKT0+IHtcbiAgICAgIGxldCBtb2RlbCA9IDxtb2RlbD5cbiAgICAgICAgPGVudGl0eSBuYW1lPSdVc2VyJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdncm91cHMnPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdVc2VyJyBuYW1lPSdVc2VyR3JvdXAnLz5cbiAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICA8L2VudGl0eT5cbiAgICAgICAgPGVudGl0eSBuYW1lPSdHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbW9kZXJhdG9yJz5cbiAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdVc2VyJyBuYW1lPSdVc2VyR3JvdXAnLz5cbiAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSd1c2Vycyc+XG4gICAgICAgICAgICA8YmVsb25nc1RvTWFueSByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PlxuICAgICAgICA8ZW50aXR5IG5hbWU9J1VzZXJHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J3VzZXInPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2dyb3VwJz5cbiAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdVc2VyJyBuYW1lPSdVc2VyR3JvdXAnLz5cbiAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICA8L2VudGl0eT5cbiAgICAgIDwvbW9kZWw+O1xuICAgICAgZXhwZWN0KG1vZGVsKS50by5iZS5pbnN0YW5jZW9mKE1vZGVsUGFja2FnZSk7XG4gICAgICBleHBlY3QobW9kZWwuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuICAgIH0pO1xuXG4gICAgaXQoJ2NydWQgZW50aXR5JywgKCk9PiB7XG4gICAgICBsZXQgbW9kZWwgPSA8bW9kZWwvPjtcbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdCgoKT0+bW9kZWwuYWRkKFxuICAgICAgICA8ZW50aXR5IG5hbWUgPSAnVGVzdDInPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJyBpZGVudGl0eSAvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdpZCcgaWRlbnRpdHkgLz5cbiAgICAgICAgPC9lbnRpdHk+KVxuICAgICAgKS50by5ub3QudGhyb3coKTtcblxuICAgICAgZXhwZWN0KG1vZGVsLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgZXhwZWN0KG1vZGVsLmdldCgnVGVzdDInKS50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ1Rlc3QyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICBleHBlY3QoKCk9Pm1vZGVsLnJlbW92ZSgnVGVzdDInKSkudG8ubm90LnRocm93KCk7XG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnRW50aXR5JywoKT0+IHtcbiAgICAgIGl0KCdjaGVjayByZWxhdGlvbnMnLCgpPT4ge1xuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIGV4cGVjdCgoKT0+bW9kZWwuYWRkKFxuICAgICAgICAgIDxlbnRpdHkgbmFtZT0nQSc+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT0naWQnIC8+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT0nQV9pZCcgaWRlbnRpdHkvPlxuICAgICAgICAgIDwvZW50aXR5PlxuICAgICAgICApKS50by5ub3QudGhyb3coKTtcblxuICAgICAgICBleHBlY3QoKCk9Pm1vZGVsLmFkZChcbiAgICAgICAgICA8ZW50aXR5IG5hbWU9J0InPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJyAvPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWU9J0FyZWYnPlxuICAgICAgICAgICAgICA8YmVsb25nc1RvIHJlZj0nQScvPlxuICAgICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgICA8L2VudGl0eT5cbiAgICAgICAgKSkudG8ubm90LnRocm93KCk7XG4gICAgICAgIGxldCBiID0gbW9kZWwuZ2V0KCdCJyk7XG4gICAgICAgIGxldCBtaXNzaW5nUmVsYXRpb25zID0gYi5jaGVja1JlbGF0aW9ucyhtb2RlbCk7XG4gICAgICAgIGV4cGVjdChtaXNzaW5nUmVsYXRpb25zLmxlbmd0aCkudG8uYmUuZXF1YWwoMCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ211bHRpcGxlIG1vZGVscyBmaWx0ZXInLCgpPT4ge1xuICAgICAgICBsZXQgdSA9IDxlbnRpdHkgbmFtZT0nVXNlcic+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J25hbWUnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdncm91cHMnID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IHJlZj0nR3JvdXAjaWQnIHVzaW5nPSdVc2VyR3JvdXAjdXNlcicvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBsZXQgZyA9IDxlbnRpdHkgbmFtZT0nR3JvdXAnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0naWQnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSduYW1lJyAvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0ndXNlcnMnID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IHJlZj0nVXNlciNpZCcgdXNpbmc9J1VzZXJHcm91cCNncm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBsZXQgdWcgPVxuICAgICAgICA8ZW50aXR5IG5hbWU9J1VzZXJHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSd1c2VyJyA+XG4gICAgICAgICAgICA8YmVsb25nc1RvIHJlZj0nVXNlciNpZCcgLz5cbiAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0nZ3JvdXAnID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdHcm91cCNpZCcgLz5cbiAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICA8L2VudGl0eT47XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA2fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZyx7ZGVwdGg6IDZ9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1Zyx7ZGVwdGg6IDZ9KSk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICBtb2RlbC5hZGQodSk7XG4gICAgICAgIG1vZGVsLmFkZChnKTtcbiAgICAgICAgbW9kZWwuYWRkKHVnKTtcbiAgICAgICAgbW9kZWwuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZy50b0pTT04obW9kZWwpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsKSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDMpO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXIjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnVXNlckdyb3VwI2lkJykpLnRvLmJlLnRydWU7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBsZXQgdXNlck1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnVXNlcicpO1xuICAgICAgICBleHBlY3QodXNlck1vZGVsLmhhcygnZ3JvdXBzJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi5iZWxvbmdzVG9NYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdHcm91cCcsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ0dyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCBncm91cE1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KGdyb3VwTW9kZWwuaGFzKCd1c2VycycpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QoZ3JvdXBNb2RlbC5nZXQoJ3VzZXJzJykucmVsYXRpb24uYmVsb25nc1RvTWFueSkudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ1VzZXJHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlckdyb3VwTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdVc2VyR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsLmhhcygndXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuZ2V0KCd1c2VyJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuaGFzKCdncm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuZ2V0KCdncm91cCcpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnR3JvdXAnLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGxldCBtb2RlbDEgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIG1vZGVsMS5hZGQodSk7XG4gICAgICAgIG1vZGVsMS5hZGQodWcpO1xuICAgICAgICBtb2RlbDEuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbCx7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDEse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbDEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwxKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbDEpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJNb2RlbDEgPSBtb2RlbDEucmVsYXRpb25zLmdldCgnVXNlcicpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDEse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsMSx7ZGVwdGg6IDd9KSk7XG5cbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDEuaGFzKCdncm91cHMnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDEuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi5oYXNNYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyR3JvdXAnLCBmaWVsZDogJ3VzZXInfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMS5yZWxhdGlvbnMuaGFzKCdHcm91cCcpKS50by5iZS5mYWxzZTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ1VzZXJHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlckdyb3VwTW9kZWwxID0gbW9kZWwxLnJlbGF0aW9ucy5nZXQoJ1VzZXJHcm91cCcpO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwxLmhhcygndXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwxLmdldCgndXNlcicpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgbGV0IG1vZGVsMiA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgbW9kZWwyLmFkZCh1KTtcbiAgICAgICAgbW9kZWwyLmVuc3VyZUFsbCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDIse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbDIpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwyKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbDIpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwyLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMi5yZWxhdGlvbnMuaGFzKCdVc2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyTW9kZWwyID0gbW9kZWwyLnJlbGF0aW9ucy5nZXQoJ1VzZXInKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbDIse2RlcHRoOiA1fSkpO1xuXG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwyLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuXG4gICAgICAgIGV4cGVjdCh1LnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwcycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCN1c2VyJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhwZWN0KGcudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QodWcudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcicsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvOiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdncm91cCcsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvOiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgREVGQVVMVF9JRF9GSUVMRCxcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuICAgICAgZGVzY3JpYmUoJ2ZpeCBNOk4gcmVsYXRpb25zJywgKCk9PiB7XG5cbiAgICAgICAgbGV0IHUgPSA8ZW50aXR5IG5hbWU9J1VzZXInPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdpZCcvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJy8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2dyb3Vwcyc+XG4gICAgICAgICAgICA8YmVsb25nc1RvTWFueSBuYW1lPSdVc2VyR3JvdXAnIHJlZj0nR3JvdXAjaWQnIHVzaW5nPScjdXNlcicvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBsZXQgZyA9IDxlbnRpdHkgbmFtZT0nR3JvdXAnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0naWQnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSduYW1lJyAvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0ndXNlcnMnID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IHJlZj0nVXNlciNpZCcgdXNpbmc9J1VzZXJHcm91cCNncm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBsZXQgZzIgPSA8ZW50aXR5IG5hbWU9J0dyb3VwJz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lID0naWQnIC8+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZSA9J25hbWUnIC8+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZSA9J3VzZXJzJyA+XG4gICAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IG5hbWU9J1VzZXJHcm91cCcgcmVmPSdVc2VyI2lkJyB1c2luZz0nIycvPlxuICAgICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCB1ZyA9XG4gICAgICAgIDxlbnRpdHkgbmFtZT0nVXNlckdyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J3VzZXInID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdVc2VyI2lkJyAvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdncm91cCcgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J0dyb3VwI2lkJyAvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBpdCgnbXVzdCBGaXggZW50aXR5IG9mIHRoZSByZWxhdGlvbi5yZWYgaWYnLCAoKT0+IHtcbiAgICAgICAgICBleHBlY3QodS5maWVsZHMuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi50b09iamVjdCgpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI3VzZXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IHNldCBuYW1lIG9mIHJlbGF0aW9uIHRvIGVudGl0eSBuYW1lIHJlbGF0aW9uLnJlZicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdChnLmZpZWxkcy5nZXQoJ3VzZXJzJykucmVsYXRpb24udG9PYmplY3QoKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnbXVzdCB1c2UgRW50aXR5IG5hbWUgYXMgdXNpbmcgZmllbGQgaW4gaGFzTWFueSByZWxhdGlvbicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdChnMi5maWVsZHMuZ2V0KCd1c2VycycpLnJlbGF0aW9uLnRvT2JqZWN0KCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUudG9PYmplY3QoKSx7ZGVwdGg6IDd9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1LHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KGcudG9PYmplY3QoKSx7ZGVwdGg6IDd9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1Zy50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBpdCgnY3JlYXRlIEVudGl0eSB3aXRoIFVwcGVyQ2FzZU5hbWUnLCAoKT0+IHtcbiAgICBsZXQgcm9sZSA9IGNvbXBvc2UoXG4gICAgICBFbnRpdHksXG4gICAgICB7IG5hbWU6ICdSb2xlJyB9LFxuICAgICAgY29tcG9zZShGaWVsZCwgeyBuYW1lOiAnbmFtZScgLCBpZGVudGl0eTogdHJ1ZX0pXG4gICAgKTtcblxuICAgIGV4cGVjdChyb2xlKS50by5iZS5hbi5pbnN0YW5jZW9mKEVudGl0eSk7XG4gICAgZXhwZWN0KHJvbGUubmFtZSkudG8uYmUuZXF1YWwoJ1JvbGUnKTtcbiAgICBleHBlY3Qocm9sZS5maWVsZHMuaGFzKCduYW1lJykpLnRvLmJlLnRydWU7XG5cbiAgICBleHBlY3Qocm9sZS50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICBuYW1lOiAnUm9sZScsXG4gICAgICBmaWVsZHM6IFt7XG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICB9XVxuICAgIH0pO1xuXG4gIH0pO1xuXG4gIGl0KCdjcmVhdGUgRW50aXR5IHdpdGggVXBwZXJDYXNlTmFtZScsICgpPT4ge1xuICAgIGxldCByb2xlID0gPEVudGl0eSBuYW1lPSdSb2xlJz5cbiAgICAgIDxGaWVsZCBuYW1lPSduYW1lJyBpZGVudGl0eS8+XG4gICAgPC9FbnRpdHk+O1xuXG4gICAgZXhwZWN0KHJvbGUpLnRvLmJlLmFuLmluc3RhbmNlb2YoRW50aXR5KTtcbiAgICBleHBlY3Qocm9sZS5uYW1lKS50by5iZS5lcXVhbCgnUm9sZScpO1xuICAgIGV4cGVjdChyb2xlLmZpZWxkcy5oYXMoJ25hbWUnKSkudG8uYmUudHJ1ZTtcblxuICAgIGV4cGVjdChyb2xlLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgIG5hbWU6ICdSb2xlJyxcbiAgICAgIGZpZWxkczogW3tcbiAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgIH1dXG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgaXQoJ2NyZWF0ZSBFbnRpdHkgd2l0aCBVcHBlckNhc2VOYW1lJywgKCk9PiB7XG4gICAgbGV0IHJvbGUgPSA8ZW50aXR5IG5hbWU9J1JvbGUnPlxuICAgICAgPGZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5Lz5cbiAgICA8L2VudGl0eT47XG5cbiAgICBleHBlY3Qocm9sZSkudG8uYmUuYW4uaW5zdGFuY2VvZihFbnRpdHkpO1xuICAgIGV4cGVjdChyb2xlLm5hbWUpLnRvLmJlLmVxdWFsKCdSb2xlJyk7XG4gICAgZXhwZWN0KHJvbGUuZmllbGRzLmhhcygnbmFtZScpKS50by5iZS50cnVlO1xuXG4gICAgZXhwZWN0KHJvbGUudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgbmFtZTogJ1JvbGUnLFxuICAgICAgZmllbGRzOiBbe1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgfV1cbiAgICB9KTtcblxuICB9KTtcbn0pO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3QvdW5pdC9yZWFjdC13YXkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9