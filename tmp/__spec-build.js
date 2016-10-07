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
	module.exports = __webpack_require__(48);


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
	
	var _field = __webpack_require__(37);
	
	var _modelpackage = __webpack_require__(46);
	
	var _hasone = __webpack_require__(39);
	
	var _hasmany = __webpack_require__(43);
	
	var _belongsto = __webpack_require__(44);
	
	var _belongstomany = __webpack_require__(45);
	
	var _definitions = __webpack_require__(41);
	
	var _compose = __webpack_require__(47);
	
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
	
	var _field = __webpack_require__(37);
	
	var _hasone = __webpack_require__(39);
	
	var _hasmany = __webpack_require__(43);
	
	var _belongsto = __webpack_require__(44);
	
	var _belongstomany = __webpack_require__(45);
	
	var _validator = __webpack_require__(24);
	
	var _definitions = __webpack_require__(41);
	
	var _schema = __webpack_require__(13);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.EntitySchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
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
	
	var _schema = __webpack_require__(13);
	
	var _validator = __webpack_require__(24);
	
	var _camelcase = __webpack_require__(35);
	
	var _camelcase2 = _interopRequireDefault(_camelcase);
	
	var _decamelize = __webpack_require__(36);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.ModelBaseSchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        this.validateSchema(obj);
	
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BelongsToManySchema = exports.BelongsToSchema = exports.HasManySchema = exports.HasOneSchema = exports.FieldSchema = exports.RefSchema = exports.EntitySchema = exports.RefBaseSchema = exports.ModelBaseSchema = undefined;
	
	var _modelbase = __webpack_require__(14);
	
	var _refbase = __webpack_require__(15);
	
	var _entity = __webpack_require__(16);
	
	var _ref = __webpack_require__(17);
	
	var _field = __webpack_require__(18);
	
	var _hasone = __webpack_require__(19);
	
	var _hasmany = __webpack_require__(20);
	
	var _belongsto = __webpack_require__(21);
	
	var _belongstomany = __webpack_require__(22);
	
	exports.ModelBaseSchema = _modelbase.ModelBaseSchema;
	exports.RefBaseSchema = _refbase.RefBaseSchema;
	exports.EntitySchema = _entity.EntitySchema;
	exports.RefSchema = _ref.RefSchema;
	exports.FieldSchema = _field.FieldSchema;
	exports.HasOneSchema = _hasone.HasOneSchema;
	exports.HasManySchema = _hasmany.HasManySchema;
	exports.BelongsToSchema = _belongsto.BelongsToSchema;
	exports.BelongsToManySchema = _belongstomany.BelongsToManySchema;

/***/ },
/* 14 */
/***/ function(module, exports) {

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

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RefBaseSchema = exports.RefBaseSchema = {
	  id: '/RefBaseSchema',
	  title: 'RefBaseSchema',
	  description: 'The RefBaseSchema definition',
	  type: 'object',
	  properties: {
	    name: {
	      type: 'string'
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EntitySchema = exports.EntitySchema = {
	  id: '/Entity',
	  title: 'Entity',
	  description: 'The Entity definition',
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
	    },
	    fields: {
	      description: 'Field list',
	      type: 'array',
	      items: {
	        $ref: '/Field'
	      },
	      minItems: 1,
	      uniqueItems: true
	    },
	    indexes: {
	      description: 'index list',
	      type: 'array',
	      items: {
	        $ref: '/Index'
	      },
	      minItems: 1,
	      uniqueItems: true
	    }
	  },
	  required: ['name', 'fields'],
	  additionalProperties: false
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RefSchema = exports.RefSchema = {
	  id: '/Ref',
	  type: 'string',
	  patern: '^(.*?)#(.*?)$'
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FieldSchema = exports.FieldSchema = {
	  id: '/Field',
	  title: 'Field',
	  description: 'field definition',
	  properties: {
	    title: {
	      type: 'string'
	    },
	    name: {
	      type: 'string'
	    },
	    description: {
	      type: 'string'
	    },
	    entity: {
	      type: 'string'
	    },
	    type: {
	      enum: ['integer', 'number', 'boolean', 'string'],
	      default: 'string'
	    },
	    default: {
	      type: {
	        anyOf: [{ type: 'integer' }, { type: 'number' }, { type: 'boolean' }, { type: 'string' }, { type: 'null' }, { type: 'object' }]
	      }
	    },
	    identity: { type: 'boolean', default: false },
	    required: { type: 'boolean', default: false },
	    indexed: { type: 'boolean', default: false },
	    relation: {
	      type: {
	        anyOf: [{
	          $ref: '/BelongsTo'
	        }, {
	          $ref: '/HasOne'
	        }, {
	          $ref: '/HasMany'
	        }, {
	          $ref: '/BelongsToMany'
	        }]
	      }
	    }
	  },
	  required: ['name'],
	  additionalProperties: false
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HasOneSchema = exports.HasOneSchema = {
	  id: '/HasOne',
	  title: 'Link',
	  description: 'link definition',
	  properties: {
	    name: {
	      type: 'string'
	    },
	    hasOne: {
	      $ref: '/Ref'
	    },
	    entity: {
	      type: 'string'
	    }
	  },
	  required: ['hasOne'],
	  additionalProperties: false
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HasManySchema = exports.HasManySchema = {
	  id: '/HasMany',
	  title: 'Link',
	  description: 'link definition',
	  properties: {
	    name: {
	      type: 'string'
	    },
	    hasMany: {
	      $ref: '/Ref'
	    },
	    entity: {
	      type: 'string'
	    },
	    field: {
	      type: 'string'
	    }
	  },
	  required: ['hasMany'],
	  additionalProperties: false
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BelongsToSchema = exports.BelongsToSchema = {
	  id: '/BelongsTo',
	  title: 'Link',
	  description: 'link definition',
	  properties: {
	    name: {
	      type: 'string'
	    },
	    belongsTo: {
	      $ref: '/Ref'
	    },
	    entity: {
	      type: 'string'
	    }
	  },
	  required: ['belongsTo'],
	  additionalProperties: false
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

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

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validator = undefined;
	
	var _schema = __webpack_require__(13);
	
	var _jsonschema = __webpack_require__(25);
	
	var validator = exports.validator = new _jsonschema.Validator();
	
	validator.addSchema(_schema.ModelBaseSchema);
	validator.addSchema(_schema.RefSchema);
	validator.addSchema(_schema.HasOneSchema);
	validator.addSchema(_schema.HasManySchema);
	validator.addSchema(_schema.BelongsToSchema);
	validator.addSchema(_schema.BelongsToManySchema);
	validator.addSchema(_schema.EntitySchema);
	validator.addSchema(_schema.FieldSchema);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Validator = module.exports.Validator = __webpack_require__(26);
	
	module.exports.ValidatorResult = __webpack_require__(34).ValidatorResult;
	module.exports.ValidationError = __webpack_require__(34).ValidationError;
	module.exports.SchemaError = __webpack_require__(34).SchemaError;
	
	module.exports.validate = function (instance, schema, options) {
	  var v = new Validator();
	  return v.validate(instance, schema, options);
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var urilib = __webpack_require__(27);
	
	var attribute = __webpack_require__(33);
	var helpers = __webpack_require__(34);
	var ValidatorResult = helpers.ValidatorResult;
	var SchemaError = helpers.SchemaError;
	var SchemaContext = helpers.SchemaContext;
	
	/**
	 * Creates a new Validator object
	 * @name Validator
	 * @constructor
	 */
	var Validator = function Validator () {
	  // Allow a validator instance to override global custom formats or to have their
	  // own custom formats.
	  this.customFormats = Object.create(Validator.prototype.customFormats);
	  this.schemas = {};
	  this.unresolvedRefs = [];
	
	  // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
	  this.types = Object.create(types);
	  this.attributes = Object.create(attribute.validators);
	};
	
	// Allow formats to be registered globally.
	Validator.prototype.customFormats = {};
	
	// Hint at the presence of a property
	Validator.prototype.schemas = null;
	Validator.prototype.types = null;
	Validator.prototype.attributes = null;
	Validator.prototype.unresolvedRefs = null;
	
	/**
	 * Adds a schema with a certain urn to the Validator instance.
	 * @param schema
	 * @param urn
	 * @return {Object}
	 */
	Validator.prototype.addSchema = function addSchema (schema, uri) {
	  if (!schema) {
	    return null;
	  }
	  var ourUri = uri || schema.id;
	  this.addSubSchema(ourUri, schema);
	  if (ourUri) {
	    this.schemas[ourUri] = schema;
	  }
	  return this.schemas[ourUri];
	};
	
	Validator.prototype.addSubSchema = function addSubSchema(baseuri, schema) {
	  if(!schema || typeof schema!='object') return;
	  // Mark all referenced schemas so we can tell later which schemas are referred to, but never defined
	  if(schema.$ref){
	    var resolvedUri = urilib.resolve(baseuri, schema.$ref);
	    // Only mark unknown schemas as unresolved
	    if (this.schemas[resolvedUri] === undefined) {
	      this.schemas[resolvedUri] = null;
	      this.unresolvedRefs.push(resolvedUri);
	    }
	    return;
	  }
	  var ourUri = schema.id && urilib.resolve(baseuri, schema.id);
	  var ourBase = ourUri || baseuri;
	  if (ourUri) {
	    if(this.schemas[ourUri]){
	      if(!helpers.deepCompareStrict(this.schemas[ourUri], schema)){
	        throw new Error('Schema <'+schema+'> already exists with different definition');
	      }
	      return this.schemas[ourUri];
	    }
	    this.schemas[ourUri] = schema;
	    var documentUri = ourUri.replace(/^([^#]*)#$/, '$1');
	    this.schemas[documentUri] = schema;
	  }
	  this.addSubSchemaArray(ourBase, ((schema.items instanceof Array)?schema.items:[schema.items]));
	  this.addSubSchemaArray(ourBase, ((schema.extends instanceof Array)?schema.extends:[schema.extends]));
	  this.addSubSchema(ourBase, schema.additionalItems);
	  this.addSubSchemaObject(ourBase, schema.properties);
	  this.addSubSchema(ourBase, schema.additionalProperties);
	  this.addSubSchemaObject(ourBase, schema.definitions);
	  this.addSubSchemaObject(ourBase, schema.patternProperties);
	  this.addSubSchemaObject(ourBase, schema.dependencies);
	  this.addSubSchemaArray(ourBase, schema.disallow);
	  this.addSubSchemaArray(ourBase, schema.allOf);
	  this.addSubSchemaArray(ourBase, schema.anyOf);
	  this.addSubSchemaArray(ourBase, schema.oneOf);
	  this.addSubSchema(ourBase, schema.not);
	  return this.schemas[ourUri];
	};
	
	Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
	  if(!(schemas instanceof Array)) return;
	  for(var i=0; i<schemas.length; i++){
	    this.addSubSchema(baseuri, schemas[i]);
	  }
	};
	
	Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
	  if(!schemas || typeof schemas!='object') return;
	  for(var p in schemas){
	    this.addSubSchema(baseuri, schemas[p]);
	  }
	};
	
	
	
	/**
	 * Sets all the schemas of the Validator instance.
	 * @param schemas
	 */
	Validator.prototype.setSchemas = function setSchemas (schemas) {
	  this.schemas = schemas;
	};
	
	/**
	 * Returns the schema of a certain urn
	 * @param urn
	 */
	Validator.prototype.getSchema = function getSchema (urn) {
	  return this.schemas[urn];
	};
	
	/**
	 * Validates instance against the provided schema
	 * @param instance
	 * @param schema
	 * @param [options]
	 * @param [ctx]
	 * @return {Array}
	 */
	Validator.prototype.validate = function validate (instance, schema, options, ctx) {
	  if (!options) {
	    options = {};
	  }
	  var propertyName = options.propertyName || 'instance';
	  // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
	  var base = urilib.resolve(options.base||'/', schema.id||'');
	  if(!ctx){
	    ctx = new SchemaContext(schema, options, propertyName, base, Object.create(this.schemas));
	    if (!ctx.schemas[base]) {
	      ctx.schemas[base] = schema;
	    }
	  }
	  if (schema) {
	    var result = this.validateSchema(instance, schema, options, ctx);
	    if (!result) {
	      throw new Error('Result undefined');
	    }
	    return result;
	  }
	  throw new SchemaError('no schema specified', schema);
	};
	
	/**
	 * Validates an instance against the schema (the actual work horse)
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @private
	 * @return {ValidatorResult}
	 */
	Validator.prototype.validateSchema = function validateSchema (instance, schema, options, ctx) {
	  var self = this;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!schema) {
	    throw new Error("schema is undefined");
	  }
	
	  /**
	  * @param Object schema
	  * @return mixed schema uri or false
	  */
	  function shouldResolve(schema) {
	    var ref = (typeof schema === 'string') ? schema : schema.$ref;
	    if (typeof ref=='string') return ref;
	    return false;
	  }
	  /**
	  * @param Object schema
	  * @param SchemaContext ctx
	  * @returns Object schema or resolved schema
	  */
	  function resolve(schema, ctx) {
	    var ref;
	    if(ref = shouldResolve(schema)) {
	      return self.resolve(schema, ref, ctx).subschema;
	    }
	    return schema;
	  }
	
	  if (schema['extends']) {
	    if (schema['extends'] instanceof Array) {
	      schema['extends'].forEach(function (s) {
	        schema = helpers.deepMerge(schema, resolve(s, ctx));
	      });
	    } else {
	      schema = helpers.deepMerge(schema, resolve(schema['extends'], ctx));
	    }
	  }
	
	  var switchSchema;
	  if (switchSchema = shouldResolve(schema)) {
	    var resolved = this.resolve(schema, switchSchema, ctx);
	    var subctx = new SchemaContext(resolved.subschema, options, ctx.propertyPath, resolved.switchSchema, ctx.schemas);
	    return this.validateSchema(instance, resolved.subschema, options, subctx);
	  }
	
	  var skipAttributes = options && options.skipAttributes || [];
	  // Validate each schema attribute against the instance
	  for (var key in schema) {
	    if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
	      var validatorErr = null;
	      var validator = self.attributes[key];
	      if (validator) {
	        validatorErr = validator.call(self, instance, schema, options, ctx);
	      } else if (options.allowUnknownAttributes === false) {
	        // This represents an error with the schema itself, not an invalid instance
	        throw new SchemaError("Unsupported attribute: " + key, schema);
	      }
	      if (validatorErr) {
	        result.importErrors(validatorErr);
	      }
	    }
	  }
	
	  if (typeof options.rewrite == 'function') {
	    var value = options.rewrite.call(this, instance, schema, options, ctx);
	    result.instance = value;
	  }
	  return result;
	};
	
	/**
	* @private
	* @param Object schema
	* @param Object switchSchema
	* @param SchemaContext ctx
	* @return Object resolved schemas {subschema:String, switchSchema: String}
	* @thorws SchemaError
	*/
	Validator.prototype.resolve = function resolve (schema, switchSchema, ctx) {
	  switchSchema = ctx.resolve(switchSchema);
	  // First see if the schema exists under the provided URI
	  if (ctx.schemas[switchSchema]) {
	    return {subschema: ctx.schemas[switchSchema], switchSchema: switchSchema};
	  }
	  // Else try walking the property pointer
	  var parsed = urilib.parse(switchSchema);
	  var fragment = parsed && parsed.hash;
	  var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
	  if (!document || !ctx.schemas[document]) {
	    throw new SchemaError("no such schema <" + switchSchema + ">", schema);
	  }
	  var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
	  if(subschema===undefined){
	    throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
	  }
	  return {subschema: subschema, switchSchema: switchSchema};
	};
	
	/**
	 * Tests whether the instance if of a certain type.
	 * @private
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @param type
	 * @return {boolean}
	 */
	Validator.prototype.testType = function validateType (instance, schema, options, ctx, type) {
	  if (typeof this.types[type] == 'function') {
	    return this.types[type].call(this, instance);
	  }
	  if (type && typeof type == 'object') {
	    var res = this.validateSchema(instance, type, options, ctx);
	    return res === undefined || !(res && res.errors.length);
	  }
	  // Undefined or properties not on the list are acceptable, same as not being defined
	  return true;
	};
	
	var types = Validator.prototype.types = {};
	types.string = function testString (instance) {
	  return typeof instance == 'string';
	};
	types.number = function testNumber (instance) {
	  // isFinite returns false for NaN, Infinity, and -Infinity
	  return typeof instance == 'number' && isFinite(instance);
	};
	types.integer = function testInteger (instance) {
	  return (typeof instance == 'number') && instance % 1 === 0;
	};
	types.boolean = function testBoolean (instance) {
	  return typeof instance == 'boolean';
	};
	types.array = function testArray (instance) {
	  return instance instanceof Array;
	};
	types['null'] = function testNull (instance) {
	  return instance === null;
	};
	types.date = function testDate (instance) {
	  return instance instanceof Date;
	};
	types.any = function testAny (instance) {
	  return true;
	};
	types.object = function testObject (instance) {
	  // TODO: fix this - see #15
	  return instance && (typeof instance) === 'object' && !(instance instanceof Array) && !(instance instanceof Date);
	};
	
	module.exports = Validator;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
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
	
	var punycode = __webpack_require__(28);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(30);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};
	
	function isString(arg) {
	  return typeof arg === "string";
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module), (function() { return this; }())))

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(31);
	exports.encode = exports.stringify = __webpack_require__(32);


/***/ },
/* 31 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
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
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
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
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var helpers = __webpack_require__(34);
	
	/** @type ValidatorResult */
	var ValidatorResult = helpers.ValidatorResult;
	/** @type SchemaError */
	var SchemaError = helpers.SchemaError;
	
	var attribute = {};
	
	attribute.ignoreProperties = {
	  // informative properties
	  'id': true,
	  'default': true,
	  'description': true,
	  'title': true,
	  // arguments to other properties
	  'exclusiveMinimum': true,
	  'exclusiveMaximum': true,
	  'additionalItems': true,
	  // special-handled properties
	  '$schema': true,
	  '$ref': true,
	  'extends': true
	};
	
	/**
	 * @name validators
	 */
	var validators = attribute.validators = {};
	
	/**
	 * Validates whether the instance if of a certain type
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {ValidatorResult|null}
	 */
	validators.type = function validateType (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var types = (schema.type instanceof Array) ? schema.type : [schema.type];
	  if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
	    var list = types.map(function (v) {
	      return v.id && ('<' + v.id + '>') || (v+'');
	    });
	    result.addError({
	      name: 'type',
	      argument: list,
	      message: "is not of a type(s) " + list,
	    });
	  }
	  return result;
	};
	
	function testSchema(instance, options, ctx, schema){
	  return this.validateSchema(instance, schema, options, ctx).valid;
	}
	
	/**
	 * Validates whether the instance matches some of the given schemas
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {ValidatorResult|null}
	 */
	validators.anyOf = function validateAnyOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(schema.anyOf instanceof Array)){
	    throw new SchemaError("anyOf must be an array");
	  }
	  if (!schema.anyOf.some(testSchema.bind(this, instance, options, ctx))) {
	    var list = schema.anyOf.map(function (v, i) {
	      return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	    });
	    result.addError({
	      name: 'anyOf',
	      argument: list,
	      message: "is not any of " + list.join(','),
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance matches every given schema
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null}
	 */
	validators.allOf = function validateAllOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  if (!(schema.allOf instanceof Array)){
	    throw new SchemaError("allOf must be an array");
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var self = this;
	  schema.allOf.forEach(function(v, i){
	    var valid = self.validateSchema(instance, v, options, ctx);
	    if(!valid.valid){
	      var msg = (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	      result.addError({
	        name: 'allOf',
	        argument: { id: msg, length: valid.errors.length, valid: valid },
	        message: 'does not match allOf schema ' + msg + ' with ' + valid.errors.length + ' error[s]:',
	      });
	      result.importErrors(valid);
	    }
	  });
	  return result;
	};
	
	/**
	 * Validates whether the instance matches exactly one of the given schemas
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null}
	 */
	validators.oneOf = function validateOneOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  if (!(schema.oneOf instanceof Array)){
	    throw new SchemaError("oneOf must be an array");
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var count = schema.oneOf.filter(testSchema.bind(this, instance, options, ctx)).length;
	  var list = schema.oneOf.map(function (v, i) {
	    return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	  });
	  if (count!==1) {
	    result.addError({
	      name: 'oneOf',
	      argument: list,
	      message: "is not exactly one from " + list.join(','),
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates properties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.properties = function validateProperties (instance, schema, options, ctx) {
	  if(instance === undefined || !(instance instanceof Object)) return;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var properties = schema.properties || {};
	  for (var property in properties) {
	    var prop = (instance || undefined) && instance[property];
	    var res = this.validateSchema(prop, properties[property], options, ctx.makeChild(properties[property], property));
	    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	    result.importErrors(res);
	  }
	  return result;
	};
	
	/**
	 * Test a specific property within in instance against the additionalProperties schema attribute
	 * This ignores properties with definitions in the properties schema attribute, but no other attributes.
	 * If too many more types of property-existance tests pop up they may need their own class of tests (like `type` has)
	 * @private
	 * @return {boolean}
	 */
	function testAdditionalProperty (instance, schema, options, ctx, property, result) {
	  if (schema.properties && schema.properties[property] !== undefined) {
	    return;
	  }
	  if (schema.additionalProperties === false) {
	    result.addError({
	      name: 'additionalProperties',
	      argument: property,
	      message: "additionalProperty " + JSON.stringify(property) + " exists in instance when not allowed",
	    });
	  } else {
	    var additionalProperties = schema.additionalProperties || {};
	    var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
	    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	    result.importErrors(res);
	  }
	}
	
	/**
	 * Validates patternProperties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.patternProperties = function validatePatternProperties (instance, schema, options, ctx) {
	  if(instance === undefined) return;
	  if(!this.types.object(instance)) return;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var patternProperties = schema.patternProperties || {};
	
	  for (var property in instance) {
	    var test = true;
	    for (var pattern in patternProperties) {
	      var expr = new RegExp(pattern);
	      if (!expr.test(property)) {
	        continue;
	      }
	      test = false;
	      var res = this.validateSchema(instance[property], patternProperties[pattern], options, ctx.makeChild(patternProperties[pattern], property));
	      if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	      result.importErrors(res);
	    }
	    if (test) {
	      testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
	    }
	  }
	
	  return result;
	};
	
	/**
	 * Validates additionalProperties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.additionalProperties = function validateAdditionalProperties (instance, schema, options, ctx) {
	  if(instance === undefined) return;
	  if(!this.types.object(instance)) return;
	  // if patternProperties is defined then we'll test when that one is called instead
	  if (schema.patternProperties) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  for (var property in instance) {
	    testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minProperties = function validateMinProperties (instance, schema, options, ctx) {
	  if (!instance || typeof instance !== 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var keys = Object.keys(instance);
	  if (!(keys.length >= schema.minProperties)) {
	    result.addError({
	      name: 'minProperties',
	      argument: schema.minProperties,
	      message: "does not meet minimum property length of " + schema.minProperties,
	    })
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxProperties = function validateMaxProperties (instance, schema, options, ctx) {
	  if (!instance || typeof instance !== 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var keys = Object.keys(instance);
	  if (!(keys.length <= schema.maxProperties)) {
	    result.addError({
	      name: 'maxProperties',
	      argument: schema.maxProperties,
	      message: "does not meet maximum property length of " + schema.maxProperties,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates items when instance is an array
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.items = function validateItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var self = this;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance === undefined || !schema.items) {
	    return result;
	  }
	  instance.every(function (value, i) {
	    var items = (schema.items instanceof Array) ? (schema.items[i] || schema.additionalItems) : schema.items;
	    if (items === undefined) {
	      return true;
	    }
	    if (items === false) {
	      result.addError({
	        name: 'items',
	        message: "additionalItems not permitted",
	      });
	      return false;
	    }
	    var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
	    if(res.instance !== result.instance[i]) result.instance[i] = res.instance;
	    result.importErrors(res);
	    return true;
	  });
	  return result;
	};
	
	/**
	 * Validates minimum and exclusiveMinimum when the type of the instance value is a number.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minimum = function validateMinimum (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var valid = true;
	  if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
	    valid = instance > schema.minimum;
	  } else {
	    valid = instance >= schema.minimum;
	  }
	  if (!valid) {
	    result.addError({
	      name: 'minimum',
	      argument: schema.minimum,
	      message: "must have a minimum value of " + schema.minimum,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates maximum and exclusiveMaximum when the type of the instance value is a number.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maximum = function validateMaximum (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var valid;
	  if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
	    valid = instance < schema.maximum;
	  } else {
	    valid = instance <= schema.maximum;
	  }
	  if (!valid) {
	    result.addError({
	      name: 'maximum',
	      argument: schema.maximum,
	      message: "must have a maximum value of " + schema.maximum,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates divisibleBy when the type of the instance value is a number.
	 * Of course, this is susceptible to floating point error since it compares the floating points
	 * and not the JSON byte sequences to arbitrary precision.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.divisibleBy = function validateDivisibleBy (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	
	  if (schema.divisibleBy == 0) {
	    throw new SchemaError("divisibleBy cannot be zero");
	  }
	
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance / schema.divisibleBy % 1) {
	    result.addError({
	      name: 'divisibleBy',
	      argument: schema.divisibleBy,
	      message: "is not divisible by (multiple of) " + JSON.stringify(schema.divisibleBy),
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates divisibleBy when the type of the instance value is a number.
	 * Of course, this is susceptible to floating point error since it compares the floating points
	 * and not the JSON byte sequences to arbitrary precision.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.multipleOf = function validateMultipleOf (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	
	  if (schema.multipleOf == 0) {
	    throw new SchemaError("multipleOf cannot be zero");
	  }
	
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance / schema.multipleOf % 1) {
	    result.addError({
	      name: 'multipleOf',
	      argument:  schema.multipleOf,
	      message: "is not a multiple of (divisible by) " + JSON.stringify(schema.multipleOf),
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is present.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.required = function validateRequired (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance === undefined && schema.required === true) {
	    result.addError({
	      name: 'required',
	      message: "is required"
	    });
	  } else if (instance && typeof instance==='object' && Array.isArray(schema.required)) {
	    schema.required.forEach(function(n){
	      if(instance[n]===undefined){
	        result.addError({
	          name: 'required',
	          argument: n,
	          message: "requires property " + JSON.stringify(n),
	        });
	      }
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value matches the regular expression, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.pattern = function validatePattern (instance, schema, options, ctx) {
	  if (typeof instance !== 'string') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!instance.match(schema.pattern)) {
	    result.addError({
	      name: 'pattern',
	      argument: schema.pattern,
	      message: "does not match pattern " + JSON.stringify(schema.pattern),
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is of a certain defined format or a custom
	 * format.
	 * The following formats are supported for string types:
	 *   - date-time
	 *   - date
	 *   - time
	 *   - ip-address
	 *   - ipv6
	 *   - uri
	 *   - color
	 *   - host-name
	 *   - alpha
	 *   - alpha-numeric
	 *   - utc-millisec
	 * @param instance
	 * @param schema
	 * @param [options]
	 * @param [ctx]
	 * @return {String|null}
	 */
	validators.format = function validateFormat (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) {
	    result.addError({
	      name: 'format',
	      argument: schema.format,
	      message: "does not conform to the " + JSON.stringify(schema.format) + " format",
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minLength = function validateMinLength (instance, schema, options, ctx) {
	  if (!(typeof instance === 'string')) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length >= schema.minLength)) {
	    result.addError({
	      name: 'minLength',
	      argument: schema.minLength,
	      message: "does not meet minimum length of " + schema.minLength,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxLength = function validateMaxLength (instance, schema, options, ctx) {
	  if (!(typeof instance === 'string')) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length <= schema.maxLength)) {
	    result.addError({
	      name: 'maxLength',
	      argument: schema.maxLength,
	      message: "does not meet maximum length of " + schema.maxLength,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether instance contains at least a minimum number of items, when the instance is an Array.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minItems = function validateMinItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length >= schema.minItems)) {
	    result.addError({
	      name: 'minItems',
	      argument: schema.minItems,
	      message: "does not meet minimum length of " + schema.minItems,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxItems = function validateMaxItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length <= schema.maxItems)) {
	    result.addError({
	      name: 'maxItems',
	      argument: schema.maxItems,
	      message: "does not meet maximum length of " + schema.maxItems,
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates that every item in an instance array is unique, when instance is an array
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance instanceof Array)) {
	    return result;
	  }
	  function testArrays (v, i, a) {
	    for (var j = i + 1; j < a.length; j++) if (helpers.deepCompareStrict(v, a[j])) {
	      return false;
	    }
	    return true;
	  }
	  if (!instance.every(testArrays)) {
	    result.addError({
	      name: 'uniqueItems',
	      message: "contains duplicate item",
	    });
	  }
	  return result;
	};
	
	/**
	 * Deep compares arrays for duplicates
	 * @param v
	 * @param i
	 * @param a
	 * @private
	 * @return {boolean}
	 */
	function testArrays (v, i, a) {
	  var j, len = a.length;
	  for (j = i + 1, len; j < len; j++) {
	    if (helpers.deepCompareStrict(v, a[j])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Validates whether there are no duplicates, when the instance is an Array.
	 * @param instance
	 * @return {String|null}
	 */
	validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!instance.every(testArrays)) {
	    result.addError({
	      name: 'uniqueItems',
	      message: "contains duplicate item",
	    });
	  }
	  return result;
	};
	
	/**
	 * Validate for the presence of dependency properties, if the instance is an object.
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {null|ValidatorResult}
	 */
	validators.dependencies = function validateDependencies (instance, schema, options, ctx) {
	  if (!instance || typeof instance != 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  for (var property in schema.dependencies) {
	    if (instance[property] === undefined) {
	      continue;
	    }
	    var dep = schema.dependencies[property];
	    var childContext = ctx.makeChild(dep, property);
	    if (typeof dep == 'string') {
	      dep = [dep];
	    }
	    if (dep instanceof Array) {
	      dep.forEach(function (prop) {
	        if (instance[prop] === undefined) {
	          result.addError({
	            // FIXME there's two different "dependencies" errors here with slightly different outputs
	            // Can we make these the same? Or should we create different error types?
	            name: 'dependencies',
	            argument: childContext.propertyPath,
	            message: "property " + prop + " not found, required by " + childContext.propertyPath,
	          });
	        }
	      });
	    } else {
	      var res = this.validateSchema(instance, dep, options, childContext);
	      if(result.instance !== res.instance) result.instance = res.instance;
	      if (res && res.errors.length) {
	        result.addError({
	          name: 'dependencies',
	          argument: childContext.propertyPath,
	          message: "does not meet dependency required by " + childContext.propertyPath,
	        });
	        result.importErrors(res);
	      }
	    }
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance value is one of the enumerated values.
	 *
	 * @param instance
	 * @param schema
	 * @return {ValidatorResult|null}
	 */
	validators['enum'] = function validateEnum (instance, schema, options, ctx) {
	  if (!(schema['enum'] instanceof Array)) {
	    throw new SchemaError("enum expects an array", schema);
	  }
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!schema['enum'].some(helpers.deepCompareStrict.bind(null, instance))) {
	    result.addError({
	      name: 'enum',
	      argument: schema['enum'],
	      message: "is not one of enum values: " + schema['enum'].join(','),
	    });
	  }
	  return result;
	};
	
	/**
	 * Validates whether the instance if of a prohibited type.
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {null|ValidatorResult}
	 */
	validators.not = validators.disallow = function validateNot (instance, schema, options, ctx) {
	  var self = this;
	  if(instance===undefined) return null;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var notTypes = schema.not || schema.disallow;
	  if(!notTypes) return null;
	  if(!(notTypes instanceof Array)) notTypes=[notTypes];
	  notTypes.forEach(function (type) {
	    if (self.testType(instance, schema, options, ctx, type)) {
	      var schemaId = type && type.id && ('<' + type.id + '>') || type;
	      result.addError({
	        name: 'not',
	        argument: schemaId,
	        message: "is of prohibited type " + schemaId,
	      });
	    }
	  });
	  return result;
	};
	
	module.exports = attribute;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var uri = __webpack_require__(27);
	
	var ValidationError = exports.ValidationError = function ValidationError (message, instance, schema, propertyPath, name, argument) {
	  if (propertyPath) {
	    this.property = propertyPath;
	  }
	  if (message) {
	    this.message = message;
	  }
	  if (schema) {
	    if (schema.id) {
	      this.schema = schema.id;
	    } else {
	      this.schema = schema;
	    }
	  }
	  if (instance) {
	    this.instance = instance;
	  }
	  this.name = name;
	  this.argument = argument;
	  this.stack = this.toString();
	};
	
	ValidationError.prototype.toString = function toString() {
	  return this.property + ' ' + this.message;
	};
	
	var ValidatorResult = exports.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
	  this.instance = instance;
	  this.schema = schema;
	  this.propertyPath = ctx.propertyPath;
	  this.errors = [];
	  this.throwError = options && options.throwError;
	  this.disableFormat = options && options.disableFormat === true;
	};
	
	ValidatorResult.prototype.addError = function addError(detail) {
	  var err;
	  if (typeof detail == 'string') {
	    err = new ValidationError(detail, this.instance, this.schema, this.propertyPath);
	  } else {
	    if (!detail) throw new Error('Missing error detail');
	    if (!detail.message) throw new Error('Missing error message');
	    if (!detail.name) throw new Error('Missing validator type');
	    err = new ValidationError(detail.message, this.instance, this.schema, this.propertyPath, detail.name, detail.argument);
	  }
	
	  if (this.throwError) {
	    throw err;
	  }
	  this.errors.push(err);
	  return err;
	};
	
	ValidatorResult.prototype.importErrors = function importErrors(res) {
	  if (typeof res == 'string' || (res && res.validatorType)) {
	    this.addError(res);
	  } else if (res && res.errors) {
	    var errs = this.errors;
	    res.errors.forEach(function (v) {
	      errs.push(v);
	    });
	  }
	};
	
	ValidatorResult.prototype.toString = function toString(res) {
	  return this.errors.map(function(v,i){ return i+': '+v.toString()+'\n'; }).join('');
	};
	
	Object.defineProperty(ValidatorResult.prototype, "valid", { get: function() {
	  return !this.errors.length;
	} });
	
	/**
	 * Describes a problem with a Schema which prevents validation of an instance
	 * @name SchemaError
	 * @constructor
	 */
	var SchemaError = exports.SchemaError = function SchemaError (msg, schema) {
	  this.message = msg;
	  this.schema = schema;
	  Error.call(this, msg);
	  Error.captureStackTrace(this, SchemaError);
	};
	SchemaError.prototype = Object.create(Error.prototype,
	  { constructor: {value: SchemaError, enumerable: false}
	  , name: {value: 'SchemaError', enumerable: false}
	  });
	
	var SchemaContext = exports.SchemaContext = function SchemaContext (schema, options, propertyPath, base, schemas) {
	  this.schema = schema;
	  this.options = options;
	  this.propertyPath = propertyPath;
	  this.base = base;
	  this.schemas = schemas;
	};
	
	SchemaContext.prototype.resolve = function resolve (target) {
	  return uri.resolve(this.base, target);
	};
	
	SchemaContext.prototype.makeChild = function makeChild(schema, propertyName){
	  var propertyPath = (propertyName===undefined) ? this.propertyPath : this.propertyPath+makeSuffix(propertyName);
	  var base = uri.resolve(this.base, schema.id||'');
	  var ctx = new SchemaContext(schema, this.options, propertyPath, base, Object.create(this.schemas));
	  if(schema.id && !ctx.schemas[base]){
	    ctx.schemas[base] = schema;
	  }
	  return ctx;
	}
	
	var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
	  'date-time': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
	  'date': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
	  'time': /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
	
	  'email': /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
	  'ip-address': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
	  'ipv6': /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	  'uri': /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
	
	  'color': /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
	
	  // hostname regex from: http://stackoverflow.com/a/1420225/5628
	  'hostname': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
	  'host-name': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
	
	  'alpha': /^[a-zA-Z]+$/,
	  'alphanumeric': /^[a-zA-Z0-9]+$/,
	  'utc-millisec': function (input) {
	    return (typeof input === 'string') && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
	  },
	  'regex': function (input) {
	    var result = true;
	    try {
	      new RegExp(input);
	    } catch (e) {
	      result = false;
	    }
	    return result;
	  },
	  'style': /\s*(.+?):\s*([^;]+);?/g,
	  'phone': /^\+(?:[0-9] ?){6,14}[0-9]$/
	};
	
	FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
	FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
	FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS['ip-address'];
	
	exports.isFormat = function isFormat (input, format, validator) {
	  if (typeof input === 'string' && FORMAT_REGEXPS[format] !== undefined) {
	    if (FORMAT_REGEXPS[format] instanceof RegExp) {
	      return FORMAT_REGEXPS[format].test(input);
	    }
	    if (typeof FORMAT_REGEXPS[format] === 'function') {
	      return FORMAT_REGEXPS[format](input);
	    }
	  } else if (validator && validator.customFormats &&
	      typeof validator.customFormats[format] === 'function') {
	    return validator.customFormats[format](input);
	  }
	  return true;
	};
	
	var makeSuffix = exports.makeSuffix = function makeSuffix (key) {
	  key = key.toString();
	  // This function could be capable of outputting valid a ECMAScript string, but the
	  // resulting code for testing which form to use would be tens of thousands of characters long
	  // That means this will use the name form for some illegal forms
	  if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
	    return '.' + key;
	  }
	  if (key.match(/^\d+$/)) {
	    return '[' + key + ']';
	  }
	  return '[' + JSON.stringify(key) + ']';
	};
	
	exports.deepCompareStrict = function deepCompareStrict (a, b) {
	  if (typeof a !== typeof b) {
	    return false;
	  }
	  if (a instanceof Array) {
	    if (!(b instanceof Array)) {
	      return false;
	    }
	    if (a.length !== b.length) {
	      return false;
	    }
	    return a.every(function (v, i) {
	      return deepCompareStrict(a[i], b[i]);
	    });
	  }
	  if (typeof a === 'object') {
	    if (!a || !b) {
	      return a === b;
	    }
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	    return aKeys.every(function (v) {
	      return deepCompareStrict(a[v], b[v]);
	    });
	  }
	  return a === b;
	};
	
	module.exports.deepMerge = function deepMerge (target, src) {
	  var array = Array.isArray(src);
	  var dst = array && [] || {};
	
	  if (array) {
	    target = target || [];
	    dst = dst.concat(target);
	    src.forEach(function (e, i) {
	      if (typeof e === 'object') {
	        dst[i] = deepMerge(target[i], e)
	      } else {
	        if (target.indexOf(e) === -1) {
	          dst.push(e)
	        }
	      }
	    });
	  } else {
	    if (target && typeof target === 'object') {
	      Object.keys(target).forEach(function (key) {
	        dst[key] = target[key];
	      });
	    }
	    Object.keys(src).forEach(function (key) {
	      if (typeof src[key] !== 'object' || !src[key]) {
	        dst[key] = src[key];
	      }
	      else {
	        if (!target[key]) {
	          dst[key] = src[key];
	        } else {
	          dst[key] = deepMerge(target[key], src[key])
	        }
	      }
	    });
	  }
	
	  return dst;
	};
	
	/**
	 * Validates instance against the provided schema
	 * Implements URI+JSON Pointer encoding, e.g. "%7e"="~0"=>"~", "~1"="%2f"=>"/"
	 * @param o
	 * @param s The path to walk o along
	 * @return any
	 */
	exports.objectGetPath = function objectGetPath(o, s) {
	  var parts = s.split('/').slice(1);
	  var k;
	  while (typeof (k=parts.shift()) == 'string') {
	    var n = decodeURIComponent(k.replace(/~0/,'~').replace(/~1/g,'/'));
	    if (!(n in o)) return;
	    o = o[n];
	  }
	  return o;
	};
	
	/**
	 * Accept an Array of property names and return a JSON Pointer URI fragment
	 * @param Array a
	 * @return {String}
	 */
	exports.encodePath = function encodePointer(a){
		// ~ must be encoded explicitly because hacks
		// the slash is encoded by encodeURIComponent
		return a.map(function(v){ return '/'+encodeURIComponent(v).replace(/~/g,'%7E'); }).join('');
	};


/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Field = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fieldbase = __webpack_require__(38);
	
	var _validator = __webpack_require__(24);
	
	var _entity = __webpack_require__(11);
	
	var _hasone = __webpack_require__(39);
	
	var _hasmany = __webpack_require__(43);
	
	var _belongsto = __webpack_require__(44);
	
	var _belongstomany = __webpack_require__(45);
	
	var _ref = __webpack_require__(42);
	
	var _schema = __webpack_require__(13);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function discoverFieldType(obj) {
	  if (_validator.validator.validate(obj, _schema.HasOneSchema).valid) {
	    return 'HasOne';
	  } else if (_validator.validator.validate(obj, _schema.HasManySchema).valid) {
	    return 'HasMany';
	  } else if (_validator.validator.validate(obj, _schema.BelongsToSchema).valid) {
	    return 'BelongsTo';
	  } else if (_validator.validator.validate(obj, _schema.BelongsToManySchema).valid) {
	    return 'BelongsToMany';
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.FieldSchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
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
/* 38 */
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
	
	var _validator = __webpack_require__(24);
	
	var _schema = __webpack_require__(13);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.FieldSchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HasOne = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(40);
	
	var _schema = __webpack_require__(13);
	
	var _validator = __webpack_require__(24);
	
	var _definitions = __webpack_require__(41);
	
	var _ref = __webpack_require__(42);
	
	var _camelcase = __webpack_require__(35);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.HasOneSchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RefBase = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _schema = __webpack_require__(13);
	
	var _validator = __webpack_require__(24);
	
	var _camelcase = __webpack_require__(35);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.RefBaseSchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
	    key: 'updateWith',
	    value: function updateWith(obj) {
	      if (obj) {
	
	        var result = this.$obj ? _extends({}, this.$obj) : {};
	
	        this.validateSchema(obj);
	
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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Ref = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _definitions = __webpack_require__(41);
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HasMany = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(40);
	
	var _schema = __webpack_require__(13);
	
	var _validator = __webpack_require__(24);
	
	var _definitions = __webpack_require__(41);
	
	var _ref = __webpack_require__(42);
	
	var _camelcase = __webpack_require__(35);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.HasManySchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BelongsTo = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(40);
	
	var _schema = __webpack_require__(13);
	
	var _validator = __webpack_require__(24);
	
	var _definitions = __webpack_require__(41);
	
	var _ref = __webpack_require__(42);
	
	var _camelcase = __webpack_require__(35);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.BelongsToSchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BelongsToMany = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _refbase = __webpack_require__(40);
	
	var _schema = __webpack_require__(13);
	
	var _validator = __webpack_require__(24);
	
	var _definitions = __webpack_require__(41);
	
	var _ref = __webpack_require__(42);
	
	var _camelcase = __webpack_require__(35);
	
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
	    key: 'validateSchema',
	    value: function validateSchema(obj) {
	      var validation = _validator.validator.validate(obj, _schema.BelongsToManySchema);
	      if (!validation.valid) {
	        throw new Error(validation.toString());
	      }
	    }
	  }, {
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = compose;
	
	var _entity = __webpack_require__(11);
	
	var _field = __webpack_require__(37);
	
	var _modelpackage = __webpack_require__(46);
	
	var _hasone = __webpack_require__(39);
	
	var _hasmany = __webpack_require__(43);
	
	var _belongsto = __webpack_require__(44);
	
	var _belongstomany = __webpack_require__(45);
	
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
/* 48 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTU1ZjM4ZjIyN2VjMzgyMmY4OGEiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zZXR1cC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc2V0dXAvLmdsb2JhbHMuanNvbiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NldHVwL3NldHVwLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdW5pdC9jaGVja1NjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3VuaXQvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvbW9kZWxiYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS9tb2RlbGJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS9yZWZiYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS9oYXNvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS9oYXNtYW55LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvYmVsb25nc3RvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvYmVsb25nc3RvbWFueS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL34vanNvbnNjaGVtYS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9qc29uc2NoZW1hL2xpYi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cmwvdXJsLmpzIiwid2VicGFjazovLy8uL34vdXJsL34vcHVueWNvZGUvcHVueWNvZGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vanNvbnNjaGVtYS9saWIvYXR0cmlidXRlLmpzIiwid2VicGFjazovLy8uL34vanNvbnNjaGVtYS9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NhbWVsY2FzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlY2FtZWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9maWVsZGJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2hhc29uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcmVmYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGVmaW5pdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaGFzbWFueS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvYmVsb25nc3RvLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9iZWxvbmdzdG9tYW55LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9tb2RlbHBhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC91bml0L3JlYWN0LXdheS5qcyJdLCJuYW1lcyI6WyJtb2NoYUdsb2JhbHMiLCJyZXF1aXJlIiwiZ2xvYmFscyIsIndpbmRvdyIsIm1vY2hhIiwic2V0dXAiLCJvbmxvYWQiLCJjaGVja0xlYWtzIiwiT2JqZWN0Iiwia2V5cyIsInJ1biIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb290IiwiZ2xvYmFsIiwiZXhwZWN0IiwiY2hhaSIsImJlZm9yZUVhY2giLCJzYW5kYm94Iiwic2lub24iLCJjcmVhdGUiLCJzdHViIiwiYmluZCIsInNweSIsIm1vY2siLCJ1c2VGYWtlVGltZXJzIiwidXNlRmFrZVhNTEh0dHBSZXF1ZXN0IiwidXNlRmFrZVNlcnZlciIsImFmdGVyRWFjaCIsInJlc3RvcmUiLCJkZXNjcmliZSIsIml0IiwidG8iLCJub3QiLCJ0aHJvdyIsInNvbWUiLCJlIiwidXBkYXRlV2l0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwicmVsYXRpb25zIiwicmVxdWlyZWQiLCJpZGVudGl0eSIsImZpZWxkcyIsImJlIiwiYW4iLCJ0eXBlIiwicmVsYXRpb24iLCJoYXNPbmUiLCJiZWxvbmdzVG8iLCJlcXVhbCIsInNpemUiLCJ0b0pTT04iLCJkZWVwIiwidG9PYmplY3QiLCJlbnRpdHkiLCJpZEtleSIsImluZGV4ZWQiLCJlMSIsImUyIiwiZTMiLCJmMSIsImdldCIsIm1vZGVsIiwiaWRlbnRpdHlGaWVsZHMiLCJyZW1vdmUiLCJiIiwibWlzc2luZ1JlbGF0aW9ucyIsImNoZWNrUmVsYXRpb25zIiwibGVuZ3RoIiwidSIsImJlbG9uZ3NUb01hbnkiLCJ1c2luZyIsImciLCJ1ZyIsImFkZCIsImVuc3VyZUFsbCIsImVudGl0aWVzIiwiaGFzIiwidHJ1ZSIsInVzZXJNb2RlbCIsImZpZWxkIiwiZ3JvdXBNb2RlbCIsInVzZXJHcm91cE1vZGVsIiwibW9kZWwxIiwiZmFsc2UiLCJ1c2VyTW9kZWwxIiwiaGFzTWFueSIsInVzZXJHcm91cE1vZGVsMSIsIm1vZGVsMiIsInVzZXJNb2RlbDIiLCJnMiIsImNvbXBvc2UiLCJFbnRpdHkiLCJGaWVsZCIsIkhhc09uZSIsIkhhc01hbnkiLCJCZWxvbmdzVG8iLCJCZWxvbmdzVG9NYW55IiwiTW9kZWxQYWNrYWdlIiwiREVGQVVMVF9JRF9GSUVMRCIsInByb3BzIiwiY2hpbGRyZW4iLCJvYmoiLCJtb2RlbFBhY2thZ2UiLCJmb3JFYWNoIiwidmFsdWUiLCJpZHMiLCJzZXQiLCJ0b1N0cmluZyIsIm1vZGVsUmVsYXRpb25zIiwiTWFwIiwicmVmIiwiY2xvbmUiLCJtaXNzaW5nIiwiciIsImRlbGV0ZSIsIm1pc3NpbmdSZWYiLCJmVHlwZSIsInJlZmUiLCJyZXBsYWNlUmVmIiwiJG9iaiIsInB1c2giLCJ2YWxpZGF0aW9uIiwidmFsaWRhdGUiLCJ2YWxpZCIsIkVycm9yIiwicmVzdWx0Iiwic2xpY2UiLCJ0b1VwcGVyQ2FzZSIsIlNldCIsImYiLCJyZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ2YWx1ZXMiLCJtYXAiLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJNb2RlbEJhc2UiLCJuYW1lXyIsInRpdGxlXyIsImRlc2NyaXB0aW9uXyIsInZhbGlkYXRlU2NoZW1hIiwidHJpbSIsImNvbnN0cnVjdG9yIiwiTW9kZWxCYXNlU2NoZW1hIiwiUmVmQmFzZVNjaGVtYSIsIkVudGl0eVNjaGVtYSIsIlJlZlNjaGVtYSIsIkZpZWxkU2NoZW1hIiwiSGFzT25lU2NoZW1hIiwiSGFzTWFueVNjaGVtYSIsIkJlbG9uZ3NUb1NjaGVtYSIsIkJlbG9uZ3NUb01hbnlTY2hlbWEiLCJpZCIsInByb3BlcnRpZXMiLCJpdGVtcyIsIiRyZWYiLCJtaW5JdGVtcyIsInVuaXF1ZUl0ZW1zIiwiaW5kZXhlcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwicGF0ZXJuIiwiZW51bSIsImRlZmF1bHQiLCJhbnlPZiIsInZhbGlkYXRvciIsImFkZFNjaGVtYSIsImRpc2NvdmVyRmllbGRUeXBlIiwidHlwZV8iLCJpZGVudGl0eV8iLCJyZXF1aXJlZF8iLCJpbmRleGVkXyIsInJlbGF0aW9uXyIsIkZpZWxkQmFzZSIsImVudGl0eV8iLCJoYXNPbmVfIiwibWF0Y2giLCJSZWZCYXNlIiwiUkVGX1BBVFRFUk4iLCJERUZBVUxUX0lEX0ZJRUxETkFNRSIsIlJlZiIsImhhc01hbnlfIiwiYmVsb25nc1RvXyIsImJlbG9uZ3NUb01hbnlfIiwidXNpbmdfIiwidG9Mb3dlckNhc2UiLCJlbnRpdHlMaXN0IiwiZW5zdXJlSWRzIiwianNvbiIsInJlbW92ZUlkcyIsImVuc3VyZUZLcyIsIlRfIiwiVCIsImF0dHIiLCJpbnN0YW5jZW9mIiwicm9sZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSUEsZUFBZSxtQkFBQUMsQ0FBUSxDQUFSLEVBQTJCQyxPQUE5Qzs7QUFFQUMsUUFBT0MsS0FBUCxDQUFhQyxLQUFiLENBQW1CLEtBQW5CO0FBQ0FGLFFBQU9HLE1BQVAsR0FBZ0IsWUFBVztBQUN6QkgsVUFBT0MsS0FBUCxDQUFhRyxVQUFiO0FBQ0FKLFVBQU9DLEtBQVAsQ0FBYUYsT0FBYixDQUFxQk0sT0FBT0MsSUFBUCxDQUFZVCxZQUFaLENBQXJCO0FBQ0FHLFVBQU9DLEtBQVAsQ0FBYU0sR0FBYjtBQUNBVCxHQUFBLG1CQUFBQSxDQUFRLENBQVIsRUFBbUJFLE1BQW5CO0FBQ0QsRUFMRCxDOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNYQVEsUUFBT0MsT0FBUCxHQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDOUJBLFVBQU9BLE9BQU9BLElBQVAsR0FBY0MsTUFBckI7QUFDQUQsUUFBS0UsTUFBTCxHQUFjRixLQUFLRyxJQUFMLENBQVVELE1BQXhCOztBQUVBRSxjQUFXLFlBQVc7QUFDcEI7QUFDQTtBQUNBSixVQUFLSyxPQUFMLEdBQWVMLEtBQUtNLEtBQUwsQ0FBV0QsT0FBWCxDQUFtQkUsTUFBbkIsRUFBZjtBQUNBUCxVQUFLUSxJQUFMLEdBQVlSLEtBQUtLLE9BQUwsQ0FBYUcsSUFBYixDQUFrQkMsSUFBbEIsQ0FBdUJULEtBQUtLLE9BQTVCLENBQVo7QUFDQUwsVUFBS1UsR0FBTCxHQUFXVixLQUFLSyxPQUFMLENBQWFLLEdBQWIsQ0FBaUJELElBQWpCLENBQXNCVCxLQUFLSyxPQUEzQixDQUFYO0FBQ0FMLFVBQUtXLElBQUwsR0FBWVgsS0FBS0ssT0FBTCxDQUFhTSxJQUFiLENBQWtCRixJQUFsQixDQUF1QlQsS0FBS0ssT0FBNUIsQ0FBWjtBQUNBTCxVQUFLWSxhQUFMLEdBQXFCWixLQUFLSyxPQUFMLENBQWFPLGFBQWIsQ0FBMkJILElBQTNCLENBQWdDVCxLQUFLSyxPQUFyQyxDQUFyQjtBQUNBTCxVQUFLYSxxQkFBTCxHQUE2QmIsS0FBS0ssT0FBTCxDQUFhUSxxQkFBYixDQUFtQ0osSUFBbkMsQ0FBd0NULEtBQUtLLE9BQTdDLENBQTdCO0FBQ0FMLFVBQUtjLGFBQUwsR0FBcUJkLEtBQUtLLE9BQUwsQ0FBYVMsYUFBYixDQUEyQkwsSUFBM0IsQ0FBZ0NULEtBQUtLLE9BQXJDLENBQXJCO0FBQ0QsSUFWRDs7QUFZQVUsYUFBVSxZQUFXO0FBQ25CLFlBQU9mLEtBQUtRLElBQVo7QUFDQSxZQUFPUixLQUFLVSxHQUFaO0FBQ0FWLFVBQUtLLE9BQUwsQ0FBYVcsT0FBYjtBQUNELElBSkQ7QUFLRCxFQXJCRCxDOzs7Ozs7O0FDQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6a0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlB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QUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0IsS0FBSzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQSwyQ0FBMEMsS0FBSztBQUMvQywwQ0FBeUMsS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7bUNDbHNCQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QSxPQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRix1Q0FBc0M7QUFDdEM7QUFDQSxJQUFHLE9BQU87QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUUsT0FBTztBQUNUO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7QUNqaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7O0FBRUE7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIscURBQXFEO0FBQ3hFO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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UEcsbUJBQVU7QUFGSCxRQUFEO0FBRjZCLE1BQXZDO0FBUUQsSUFqQkQ7O0FBbUJBWixNQUFHLGtDQUFILEVBQXVDLFlBQUs7QUFDMUMsU0FBSXdLLE9BQU87QUFBQTtBQUFBLFNBQVEsTUFBSyxNQUFiO0FBQ1Qsc0NBQU8sTUFBSyxNQUFaLEVBQW1CLGNBQW5CO0FBRFMsTUFBWDs7QUFJQXhMLFlBQU93TCxJQUFQLEVBQWF2SyxFQUFiLENBQWdCYSxFQUFoQixDQUFtQkMsRUFBbkIsQ0FBc0J3SixVQUF0QjtBQUNBdkwsWUFBT3dMLEtBQUsvSixJQUFaLEVBQWtCUixFQUFsQixDQUFxQmEsRUFBckIsQ0FBd0JNLEtBQXhCLENBQThCLE1BQTlCO0FBQ0FwQyxZQUFPd0wsS0FBSzNKLE1BQUwsQ0FBWW1DLEdBQVosQ0FBZ0IsTUFBaEIsQ0FBUCxFQUFnQy9DLEVBQWhDLENBQW1DYSxFQUFuQyxDQUFzQ21DLElBQXRDOztBQUVBakUsWUFBT3dMLEtBQUtsSixNQUFMLEVBQVAsRUFBc0JyQixFQUF0QixDQUF5QmEsRUFBekIsQ0FBNEJTLElBQTVCLENBQWlDSCxLQUFqQyxDQUF1QztBQUNyQ1gsYUFBTSxNQUQrQjtBQUVyQ0ksZUFBUSxDQUFDO0FBQ1BKLGVBQU0sTUFEQztBQUVQRyxtQkFBVTtBQUZILFFBQUQ7QUFGNkIsTUFBdkM7QUFRRCxJQWpCRDtBQWtCRCxFQWp1QkQsRSIsImZpbGUiOiJfX3NwZWMtYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDk1NWYzOGYyMjdlYzM4MjJmODhhXG4gKiovIiwidmFyIG1vY2hhR2xvYmFscyA9IHJlcXVpcmUoJy4vLmdsb2JhbHMuanNvbicpLmdsb2JhbHM7XG5cbndpbmRvdy5tb2NoYS5zZXR1cCgnYmRkJyk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5tb2NoYS5jaGVja0xlYWtzKCk7XG4gIHdpbmRvdy5tb2NoYS5nbG9iYWxzKE9iamVjdC5rZXlzKG1vY2hhR2xvYmFscykpO1xuICB3aW5kb3cubW9jaGEucnVuKCk7XG4gIHJlcXVpcmUoJy4vc2V0dXAnKSh3aW5kb3cpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zZXR1cC9icm93c2VyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2xvYmFsc1wiOiB7XG5cdFx0XCJleHBlY3RcIjogdHJ1ZSxcblx0XHRcIm1vY2tcIjogdHJ1ZSxcblx0XHRcInNhbmRib3hcIjogdHJ1ZSxcblx0XHRcInNweVwiOiB0cnVlLFxuXHRcdFwic3R1YlwiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVNlcnZlclwiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVRpbWVyc1wiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVhNTEh0dHBSZXF1ZXN0XCI6IHRydWVcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdGVzdC9zZXR1cC8uZ2xvYmFscy5qc29uXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb290KSB7XG4gIHJvb3QgPSByb290ID8gcm9vdCA6IGdsb2JhbDtcbiAgcm9vdC5leHBlY3QgPSByb290LmNoYWkuZXhwZWN0O1xuXG4gIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNpbmcgdGhlc2UgZ2xvYmFsbHktYXZhaWxhYmxlIFNpbm9uIGZlYXR1cmVzIGlzIHByZWZlcnJhYmxlLCBhcyB0aGV5J3JlXG4gICAgLy8gYXV0b21hdGljYWxseSByZXN0b3JlZCBmb3IgeW91IGluIHRoZSBzdWJzZXF1ZW50IGBhZnRlckVhY2hgXG4gICAgcm9vdC5zYW5kYm94ID0gcm9vdC5zaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xuICAgIHJvb3Quc3R1YiA9IHJvb3Quc2FuZGJveC5zdHViLmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnNweSA9IHJvb3Quc2FuZGJveC5zcHkuYmluZChyb290LnNhbmRib3gpO1xuICAgIHJvb3QubW9jayA9IHJvb3Quc2FuZGJveC5tb2NrLmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnVzZUZha2VUaW1lcnMgPSByb290LnNhbmRib3gudXNlRmFrZVRpbWVycy5iaW5kKHJvb3Quc2FuZGJveCk7XG4gICAgcm9vdC51c2VGYWtlWE1MSHR0cFJlcXVlc3QgPSByb290LnNhbmRib3gudXNlRmFrZVhNTEh0dHBSZXF1ZXN0LmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290LnVzZUZha2VTZXJ2ZXIgPSByb290LnNhbmRib3gudXNlRmFrZVNlcnZlci5iaW5kKHJvb3Quc2FuZGJveCk7XG4gIH0pO1xuXG4gIGFmdGVyRWFjaChmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgcm9vdC5zdHViO1xuICAgIGRlbGV0ZSByb290LnNweTtcbiAgICByb290LnNhbmRib3gucmVzdG9yZSgpO1xuICB9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3Qvc2V0dXAvc2V0dXAuanNcbiAqKi8iLCIvLyAndXNlIHN0cmljdCc7XG5cbi8vIGxldCBWYWxpZGF0b3IgPSByZXF1aXJlKCdqc29uc2NoZW1hJykuVmFsaWRhdG9yO1xuXG4vLyBsZXQgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xuXG4vLyBjb25zdCBFbnRpdHlTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0VudGl0eScsXG4vLyAgIHRpdGxlOiAnRW50aXR5Jyxcbi8vICAgZGVzY3JpcHRpb246ICdUaGUgRW50aXR5IGRlZmluaXRpb24nLFxuLy8gICB0eXBlOiAnb2JqZWN0Jyxcbi8vICAgcHJvcGVydGllczoge1xuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIG5hbWU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnXG4vLyAgICAgfSxcbi8vICAgICBkZXNjcmlwdGlvbjoge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBmaWVsZHM6IHtcbi8vICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbGlzdCcsXG4vLyAgICAgICB0eXBlOiAnYXJyYXknLFxuLy8gICAgICAgaXRlbXM6IHtcbi8vICAgICAgICAgYW55T2Y6IFtcbi8vICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgJHJlZjogJy9CZWxvbmdzVG8nLFxuLy8gICAgICAgICAgICAgfSx7XG4vLyAgICAgICAgICAgICAgICRyZWY6ICcvSGFzT25lJyxcbi8vICAgICAgICAgICAgIH0se1xuLy8gICAgICAgICAgICAgICAkcmVmOiAnL0hhc01hbnknLFxuLy8gICAgICAgICAgICAgfSx7XG4vLyAgICAgICAgICAgICAgICRyZWY6ICcvRmllbGQnLFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIF1cbi8vICAgICAgIH0sXG4vLyAgICAgICBtaW5JdGVtczogMSxcbi8vICAgICAgIHVuaXF1ZUl0ZW1zOiB0cnVlLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIHJlcXVpcmVkOiBbXG4vLyAgICAgJ25hbWUnLFxuLy8gICAgICdmaWVsZHMnLFxuLy8gICBdLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBSZWZTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL1JlZicsXG4vLyAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICBwYXRlcm46ICdeKC4qPykjKC4qPykkJyxcbi8vIH07XG5cbi8vIGNvbnN0IEZpZWxkU2NoZW1hID0ge1xuLy8gICBpZDogJy9GaWVsZCcsXG4vLyAgIHRpdGxlOiAnRmllbGQnLFxuLy8gICBkZXNjcmlwdGlvbjogJ2ZpZWxkIGRlZmluaXRpb24nLFxuLy8gICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgbmFtZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZydcbi8vICAgICB9LFxuLy8gICAgIGRlc2NyaXB0aW9uOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIHR5cGU6IHtcbi8vICAgICAgIGVudW06IFsnaW50ZWdlcicsICdudW1iZXInLCAnYm9vbGVhbicsICdzdHJpbmcnXSxcbi8vICAgICAgIGRlZmF1bHQ6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgaWRlbnRpdHk6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZSB9LFxuLy8gICAgIHJlcXVpcmVkOiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogZmFsc2UgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZSddLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBIYXNPbmVTY2hlbWEgPSB7XG4vLyAgIGlkOiAnL0hhc09uZScsXG4vLyAgIHRpdGxlOiAnTGluaycsXG4vLyAgIGRlc2NyaXB0aW9uOiAnbGluayBkZWZpbml0aW9uJyxcbi8vICAgcHJvcGVydGllczoge1xuLy8gICAgIHRpdGxlOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIG5hbWU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnXG4vLyAgICAgfSxcbi8vICAgICBkZXNjcmlwdGlvbjoge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBoYXNPbmU6IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICAgIHVzaW5nOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZScsJ2hhc09uZSddLFxuLy8gICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4vLyB9O1xuXG4vLyBjb25zdCBIYXNNYW55U2NoZW1hID0ge1xuLy8gICBpZDogJy9IYXNNYW55Jyxcbi8vICAgdGl0bGU6ICdMaW5rJyxcbi8vICAgZGVzY3JpcHRpb246ICdsaW5rIGRlZmluaXRpb24nLFxuLy8gICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgdGl0bGU6IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgbmFtZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZydcbi8vICAgICB9LFxuLy8gICAgIGRlc2NyaXB0aW9uOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJyxcbi8vICAgICB9LFxuLy8gICAgIGhhc01hbnk6IHtcbi8vICAgICAgICRyZWY6ICcvUmVmJyxcbi8vICAgICB9LFxuLy8gICAgIHVzaW5nOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgcmVxdWlyZWQ6IFsnbmFtZScsJ2hhc01hbnknXSxcbi8vICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuLy8gfTtcblxuLy8gY29uc3QgQmVsb25nc1RvU2NoZW1hID0ge1xuLy8gICBpZDogJy9CZWxvbmdzVG8nLFxuLy8gICB0aXRsZTogJ0xpbmsnLFxuLy8gICBkZXNjcmlwdGlvbjogJ2xpbmsgZGVmaW5pdGlvbicsXG4vLyAgIHByb3BlcnRpZXM6IHtcbi8vICAgICB0aXRsZToge1xuLy8gICAgICAgdHlwZTogJ3N0cmluZycsXG4vLyAgICAgfSxcbi8vICAgICBuYW1lOiB7XG4vLyAgICAgICB0eXBlOiAnc3RyaW5nJ1xuLy8gICAgIH0sXG4vLyAgICAgZGVzY3JpcHRpb246IHtcbi8vICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuLy8gICAgIH0sXG4vLyAgICAgYmVsb25nc1RvOiB7XG4vLyAgICAgICAkcmVmOiAnL1JlZicsXG4vLyAgICAgfSxcbi8vICAgICB1c2luZzoge1xuLy8gICAgICAgJHJlZjogJy9SZWYnLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIHJlcXVpcmVkOiBbJ25hbWUnLCdiZWxvbmdzVG8nXSxcbi8vICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuLy8gfTtcblxuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShSZWZTY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShIYXNPbmVTY2hlbWEpO1xuLy8gdmFsaWRhdG9yLmFkZFNjaGVtYShIYXNNYW55U2NoZW1hKTtcbi8vIHZhbGlkYXRvci5hZGRTY2hlbWEoQmVsb25nc1RvU2NoZW1hKTtcbi8vIHZhbGlkYXRvci5hZGRTY2hlbWEoRW50aXR5U2NoZW1hKTtcbi8vIHZhbGlkYXRvci5hZGRTY2hlbWEoRmllbGRTY2hlbWEpO1xuXG4vLyBsZXQgb2JqID0ge1xuLy8gICAgICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbi8vICAgICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuLy8gICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIHRlc3QgRW50aXR5IGRlc2NyaWJlICcsXG4vLyAgICAgICAgICAgZmllbGRzOiBbXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2lkJyxcbi8vICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuLy8gICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbi8vICAgICAgICAgICAgIHRpdGxlOiAndGl0bGUgZmllbGQyJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdGaWVsZCAzJyxcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuLy8gICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDQgZGVzY3JpcHRpb24nLFxuLy8gICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiAnZmllbGQ1Jyxcbi8vICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4vLyAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuLy8gICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4vLyAgICAgICAgICAgICBiZWxvbmdzVG86ICdGaWVsZDEnLFxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBdXG4vLyAgICAgICAgIH07XG5cbi8vIGxldCByZXMgPSB2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBFbnRpdHlTY2hlbWEpO1xuXG4vLyBmdW5jdGlvbiBkaXNjb3ZlckZpZWxkVHlwZShvYmopIHtcbi8vICAgaWYgKHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEhhc09uZVNjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0hhc09uZSc7XG4vLyAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgSGFzTWFueVNjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0hhc01hbnknO1xuLy8gICB9IGVsc2UgaWYgKHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEJlbG9uZ3NUb1NjaGVtYSkudmFsaWQpIHtcbi8vICAgICByZXR1cm4gJ0JlbG9uZ3NUbyc7XG4vLyAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgRmllbGRTY2hlbWEpLnZhbGlkKSB7XG4vLyAgICAgcmV0dXJuICdGaWVsZCc7XG4vLyAgIH1cbi8vIH07XG5cbi8vIG9iai5maWVsZHMuZm9yRWFjaChmID0+IHtcblxuLy8gICBjb25zdCBmaWVsZFR5cGUgPSBkaXNjb3ZlckZpZWxkVHlwZShmKTtcbi8vICAgY29uc29sZS5sb2coZmllbGRUeXBlKTtcbi8vICAgc3dpdGNoIChmaWVsZFR5cGUpe1xuLy8gICAgIGNhc2UgJ0ZpZWxkJzpcbi8vICAgICBicmVhaztcbi8vICAgICBjYXNlICdIYXNPbmUnOlxuLy8gICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgJ0hhc01hbnknOlxuLy8gICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgJ0JlbG9uZ3NUbyc6XG4vLyAgICAgYnJlYWs7XG4vLyAgIH1cblxuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKHJlcy52YWxpZCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Rlc3QvdW5pdC9jaGVja1NjaGVtYS5qc1xuICoqLyIsImltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5pbXBvcnQge0VudGl0eSwgRmllbGQsIE1vZGVsUGFja2FnZSwgREVGQVVMVF9JRF9GSUVMRH0gZnJvbSAnLi4vLi4vc3JjL21vZGVsJztcblxuZGVzY3JpYmUoJ1NjaGVtYScsICgpPT4ge1xuXG4gIGRlc2NyaWJlKCdFbnRpdHknLCAoKSA9PiB7XG5cbiAgICBpdCgnY3JlYXRlIGVtcHR5IG1vZGVsJywoKSA9PiB7XG4gICAgICBleHBlY3QoKCk9Pm5ldyBFbnRpdHkoKSkudG8ubm90LnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbm90IGNyZWF0ZSB3cm9uZyBtb2RlbCcsKCkgPT4ge1xuICAgICAgZXhwZWN0KCgpPT5uZXcgRW50aXR5KHtzb21lOiAxfSkpLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnbm90IHRocm93cyB3aXRoIGVtcHR5IGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gbmV3IEVudGl0eSgpO1xuICAgICAgZXhwZWN0KCgpPT4gZS51cGRhdGVXaXRoKCkpLnRvLm5vdC50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Rocm93cyB3aXRoIGludmFsaWQgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSBuZXcgRW50aXR5KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnVwZGF0ZVdpdGgoe3NvbWU6IDF9KSkudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdjYW5cXCd0IGFjY2VzcyB0byBwcml2YXRlIGZpZWxkcycsKCkgPT4ge1xuICAgICAgbGV0IGUgPSBuZXcgRW50aXR5KCk7XG5cbiAgICAgIGV4cGVjdCgoKT0+IGUudGl0bGUgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUuZGVzY3JpcHRpb24gPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUubmFtZSA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuICAgICAgZXhwZWN0KCgpPT4gZS5yZWxhdGlvbnMgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUucmVxdWlyZWQgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUuaWRlbnRpdHkgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUuZmllbGRzID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG5cbiAgICB9KTtcblxuICAgIGl0KCdkZWZhdWx0IGRhdGEgaXMgdW5kZWZpbmVkJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IG5ldyBFbnRpdHkoKTtcbiAgICAgIGV4cGVjdChlLnRpdGxlKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5kZXNjcmlwdGlvbikudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUubmFtZSkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUucmVsYXRpb25zKS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5yZXF1aXJlZCkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUuaWRlbnRpdHkpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLmZpZWxkcykudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgIH0pO1xuXG4gICAgaXQoJ19pZCBhbmQgaWQgaXMgdGhlIHNhbWUnLCAoKT0+IHtcbiAgICAgIGV4cGVjdCgoKT0+IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdBJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICBuYW1lOiAnX2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgfV1cbiAgICAgICAgfSkpLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnYWNjZXB0IHZhbGlkIGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gbmV3IEVudGl0eSgpO1xuXG4gICAgICBleHBlY3QoKCk9PlxuICAgICAgZS51cGRhdGVXaXRoKHtcbiAgICAgICAgICBuYW1lOiAnIHRlc3QgRW50aXR5ICcsXG4gICAgICAgICAgdGl0bGU6ICcgdGVzdCBFbnRpdHkgdGl0bGUgJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJyB0ZXN0IEVudGl0eSBkZXNjcmliZSAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZDEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMicsXG4gICAgICAgICAgICB0aXRsZTogJ3RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmllbGQgMycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkMyBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ0JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDZSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnTW9kZWwvVXNlciNpZCcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ3UmVmJyxcbiAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgIGhhc09uZTogJ0FjdG9yI2lkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDhSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnI0ZpZWxkMScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgICkudG8ubm90LnRocm93KCk7XG5cbiAgICAgIGV4cGVjdChlLm5hbWUpLnRvLmJlLmVxdWFsKCdUZXN0RW50aXR5Jyk7XG4gICAgICBleHBlY3QoZS5maWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoOSk7XG4gICAgICBleHBlY3QoZS5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICBleHBlY3QoZS5pZGVudGl0eS5zaXplKS50by5iZS5lcXVhbCgxKTtcbiAgICAgIGV4cGVjdChlLnJlcXVpcmVkLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuXG4gICAgICBleHBlY3QoZS50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbiAgICAgICAgdGl0bGU6ICcgdGVzdCBFbnRpdHkgdGl0bGUgJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcgdGVzdCBFbnRpdHkgZGVzY3JpYmUgJyxcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdGaWVsZDEnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkMicsXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZSBmaWVsZDInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZpZWxkIDMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpZWxkNCBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQ1JyxcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDZSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQ3UmVmJyxcbiAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDhSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBiZWxvbmdzVG86ICcjRmllbGQxJyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIGV4cGVjdChlLnRvT2JqZWN0KCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICBuYW1lOiAnVGVzdEVudGl0eScsXG4gICAgICAgIHRpdGxlOiAnVGVzdCBFbnRpdHkgdGl0bGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rlc3QgRW50aXR5IGRlc2NyaWJlJyxcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHRpdGxlOiAnSWQnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICBpZEtleTogJ1Rlc3RFbnRpdHkjaWQnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMScsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQxJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdUaXRsZSBmaWVsZDInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaXRsZSBmaWVsZDInLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDMnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkMycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkMyBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ0IHRpdGxlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNScsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ2IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNiByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnTW9kZWwvVXNlciNpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ0ZpZWxkNyByZWYnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDcgcmVmJyxcbiAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgIGhhc09uZTogJ0FjdG9yI2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ4IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkOCByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnVGVzdEVudGl0eSNmaWVsZDEnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZml4dXAgaWRlbnRpdHkgZmllbGRzJywoKT0+IHtcbiAgICAgIGl0KCdubyBmaWVsZHMnLCgpPT4ge1xuICAgICAgICBsZXQgZTEgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QoZTEudG9KU09OKCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkZW50aXR5JzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnaWQnLFxuICAgICAgICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ2lkIGZpZWxkJywoKT0+IHtcbiAgICAgICAgbGV0IGUyID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIG5hbWU6ICdJZCcsXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChlMi50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaWRlbnRpdHknOiB0cnVlLFxuICAgICAgICAgICAgICAnbmFtZSc6ICdJZCcsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnX2lkIGZpZWxkJywoKT0+IHtcbiAgICAgICAgbGV0IGUzID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnX0lkJyxcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KGUzLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZGVudGl0eSc6IHRydWUsXG4gICAgICAgICAgICAgICduYW1lJzogJ19JZCcsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnZml4dXAgZmllbGQgY29udGFpbnMgZW50aXR5JywoKT0+IHtcbiAgICAgICAgbGV0IGYxID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ2ZpeHVwMScsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KGYxLm5hbWUpLnRvLmJlLmVxdWFsKCdGaXh1cDEnKTtcbiAgICAgICAgZXhwZWN0KGYxLmZpZWxkcy5nZXQoJ2lkJykuZW50aXR5KS50by5iZS5lcXVhbCgnRml4dXAxJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmayBhbmQgaWRzJywoKT0+IHtcbiAgICAgIC8vINGB0YHRi9C70LrQuCDQv9C+INCy0L3QtdGI0L3QtdC80YMg0LrQu9GO0YfRgyDQvNC+0LPRg9GCINCx0YvRgtGMINC90LUg0YLQvtC70YzQutC+INC90LAgUEtcbiAgICAgIC8vLCDQvdC+INC90LAg0LvRjtCx0YvQtSDQutC70Y7Rh9C4XG4gICAgICBpdCgndmFsaWRhdGUgZmsgcmVmZXJlbmNlJywgKCk9PiB7XG4gICAgICAgIGxldCBlMSA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdURXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlMiA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdUZXN0MicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ01vZGVsUGFja2FnZScsKCk9PiB7XG4gICAgaXQoJ2NydWQgZW50aXR5JywgKCk9PiB7XG4gICAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgICBleHBlY3QoKCk9Pm1vZGVsLmNyZWF0ZSh7XG4gICAgICAgICAgbmFtZTogJ1Rlc3QyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSkpLnRvLm5vdC50aHJvdygpO1xuXG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICBleHBlY3QobW9kZWwuZ2V0KCdUZXN0MicpLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVGVzdDInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIGV4cGVjdCgoKT0+bW9kZWwucmVtb3ZlKCdUZXN0MicpKS50by5ub3QudGhyb3coKTtcbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdFbnRpdHknLCgpPT4ge1xuICAgICAgaXQoJ2NoZWNrIHJlbGF0aW9ucycsKCk9PiB7XG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgLypleHBlY3QoKCk9PiovbW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiAnQScsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTogJ0FfaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgICAgICB9XVxuICAgICAgICB9KS8qKS50by5ub3QudGhyb3coKSovO1xuXG4gICAgICAgIGV4cGVjdCgoKT0+bW9kZWwuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiAnQicsXG4gICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FyZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgYmVsb25nc1RvOiAnQSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9KSkudG8ubm90LnRocm93KCk7XG4gICAgICAgIGxldCBiID0gbW9kZWwuZ2V0KCdCJyk7XG4gICAgICAgIGxldCBtaXNzaW5nUmVsYXRpb25zID0gYi5jaGVja1JlbGF0aW9ucyhtb2RlbCk7XG4gICAgICAgIGV4cGVjdChtaXNzaW5nUmVsYXRpb25zLmxlbmd0aCkudG8uYmUuZXF1YWwoMCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ211bHRpcGxlIG1vZGVscyBmaWx0ZXInLCgpPT4ge1xuICAgICAgICBsZXQgdSA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdncm91cHMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdHcm91cCNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBnID0gbmV3IEVudGl0eSh7XG4gICAgICAgICAgbmFtZTogJ0dyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VycycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdWcgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA2fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZyx7ZGVwdGg6IDZ9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1Zyx7ZGVwdGg6IDZ9KSk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICBtb2RlbC5hZGQodSk7XG4gICAgICAgIG1vZGVsLmFkZChnKTtcbiAgICAgICAgbW9kZWwuYWRkKHVnKTtcbiAgICAgICAgbW9kZWwuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZy50b0pTT04obW9kZWwpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsKSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDMpO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXIjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnVXNlckdyb3VwI2lkJykpLnRvLmJlLnRydWU7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBsZXQgdXNlck1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnVXNlcicpO1xuICAgICAgICBleHBlY3QodXNlck1vZGVsLmhhcygnZ3JvdXBzJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi5iZWxvbmdzVG9NYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdHcm91cCcsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ0dyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCBncm91cE1vZGVsID0gbW9kZWwucmVsYXRpb25zLmdldCgnR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KGdyb3VwTW9kZWwuaGFzKCd1c2VycycpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QoZ3JvdXBNb2RlbC5nZXQoJ3VzZXJzJykucmVsYXRpb24uYmVsb25nc1RvTWFueSkudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsLnJlbGF0aW9ucy5oYXMoJ1VzZXJHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlckdyb3VwTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdVc2VyR3JvdXAnKTtcbiAgICAgICAgZXhwZWN0KHVzZXJHcm91cE1vZGVsLmhhcygndXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuZ2V0KCd1c2VyJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuaGFzKCdncm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuZ2V0KCdncm91cCcpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnR3JvdXAnLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGxldCBtb2RlbDEgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIG1vZGVsMS5hZGQodSk7XG4gICAgICAgIG1vZGVsMS5hZGQodWcpO1xuICAgICAgICBtb2RlbDEuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbCx7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDEse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbDEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwxKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbDEpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDIpO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwxLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJNb2RlbDEgPSBtb2RlbDEucmVsYXRpb25zLmdldCgnVXNlcicpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDEse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsMSx7ZGVwdGg6IDd9KSk7XG5cbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDEuaGFzKCdncm91cHMnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDEuZ2V0KCdncm91cHMnKS5yZWxhdGlvbi5oYXNNYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyR3JvdXAnLCBmaWVsZDogJ3VzZXInfSk7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMS5yZWxhdGlvbnMuaGFzKCdHcm91cCcpKS50by5iZS5mYWxzZTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ1VzZXJHcm91cCcpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlckdyb3VwTW9kZWwxID0gbW9kZWwxLnJlbGF0aW9ucy5nZXQoJ1VzZXJHcm91cCcpO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwxLmhhcygndXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwxLmdldCgndXNlcicpLnJlbGF0aW9uLmJlbG9uZ3NUbykudG8uYmUuZGVlcC5lcXVhbCh7ZW50aXR5OiAnVXNlcicsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgbGV0IG1vZGVsMiA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgbW9kZWwyLmFkZCh1KTtcbiAgICAgICAgbW9kZWwyLmVuc3VyZUFsbCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChtb2RlbDIse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbDIpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codS50b0pTT04obW9kZWwyKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVnLnRvSlNPTihtb2RlbDIpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwyLmVudGl0aWVzLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwyLmlkZW50aXR5RmllbGRzLmhhcygnR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUuZmFsc2U7XG5cbiAgICAgICAgZXhwZWN0KG1vZGVsMi5yZWxhdGlvbnMuaGFzKCdVc2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyTW9kZWwyID0gbW9kZWwyLnJlbGF0aW9ucy5nZXQoJ1VzZXInKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVzZXJNb2RlbDIse2RlcHRoOiA1fSkpO1xuXG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwyLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuXG4gICAgICAgIGV4cGVjdCh1LnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwcycsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ0dyb3VwI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCN1c2VyJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhwZWN0KGcudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QodWcudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcicsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvOiAnVXNlciNpZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdncm91cCcsXG4gICAgICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmVsb25nc1RvOiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgREVGQVVMVF9JRF9GSUVMRCxcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuICAgICAgZGVzY3JpYmUoJ2ZpeCBNOk4gcmVsYXRpb25zJywgKCk9PiB7XG5cbiAgICAgICAgbGV0IHUgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXBzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnI3VzZXInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZyA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBnMiA9IG5ldyBFbnRpdHkoe1xuICAgICAgICAgIG5hbWU6ICdHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJyMnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdWcgPSBuZXcgRW50aXR5KHtcbiAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUbzogJ0dyb3VwIycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IEZpeCBlbnRpdHkgb2YgdGhlIHJlbGF0aW9uLnJlZiBpZicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdCh1LmZpZWxkcy5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLnRvT2JqZWN0KCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ211c3Qgc2V0IG5hbWUgb2YgcmVsYXRpb24gdG8gZW50aXR5IG5hbWUgcmVsYXRpb24ucmVmJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcuZmllbGRzLmdldCgndXNlcnMnKS5yZWxhdGlvbi50b09iamVjdCgpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IHVzZSBFbnRpdHkgbmFtZSBhcyB1c2luZyBmaWVsZCBpbiBoYXNNYW55IHJlbGF0aW9uJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcyLmZpZWxkcy5nZXQoJ3VzZXJzJykucmVsYXRpb24udG9PYmplY3QoKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodS50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZy50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVnLnRvT2JqZWN0KCkse2RlcHRoOiA3fSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC91bml0L21vZGVsLmpzXG4gKiovIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXRpbC91dGlsLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtFbnRpdHl9IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCB7RmllbGR9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHtNb2RlbFBhY2thZ2V9IGZyb20gJy4vbW9kZWxwYWNrYWdlJztcbmltcG9ydCB7SGFzT25lfSBmcm9tICcuL2hhc29uZSc7XG5pbXBvcnQge0hhc01hbnl9IGZyb20gJy4vaGFzbWFueSc7XG5pbXBvcnQge0JlbG9uZ3NUb30gZnJvbSAnLi9iZWxvbmdzdG8nO1xuaW1wb3J0IHtCZWxvbmdzVG9NYW55fSBmcm9tICcuL2JlbG9uZ3N0b21hbnknO1xuaW1wb3J0IHtERUZBVUxUX0lEX0ZJRUxEfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSAnLi9jb21wb3NlJztcblxuZXhwb3J0IHtcbiAgY29tcG9zZSxcbiAgRW50aXR5LFxuICBGaWVsZCxcbiAgSGFzT25lLFxuICBIYXNNYW55LFxuICBCZWxvbmdzVG8sXG4gIEJlbG9uZ3NUb01hbnksXG4gIE1vZGVsUGFja2FnZSxcbiAgREVGQVVMVF9JRF9GSUVMRCxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7TW9kZWxCYXNlfSBmcm9tICcuL21vZGVsYmFzZSc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7SGFzT25lfSBmcm9tICcuL2hhc29uZSc7XG5pbXBvcnQge0hhc01hbnl9IGZyb20gJy4vaGFzbWFueSc7XG5pbXBvcnQge0JlbG9uZ3NUb30gZnJvbSAnLi9iZWxvbmdzdG8nO1xuaW1wb3J0IHtCZWxvbmdzVG9NYW55fSBmcm9tICcuL2JlbG9uZ3N0b21hbnknO1xuaW1wb3J0IHt2YWxpZGF0b3J9IGZyb20gJy4uL3ZhbGlkYXRvcic7XG5pbXBvcnQge0RFRkFVTFRfSURfRklFTER9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuXG5pbXBvcnQge1xuICBGaWVsZFNjaGVtYSxcbiAgRW50aXR5U2NoZW1hLFxufSBmcm9tICcuLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5IGV4dGVuZHMgTW9kZWxCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIHJldHVybiBuZXcgRW50aXR5KHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgZmllbGRzOiBjaGlsZHJlbixcbiAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBFbnRpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZW5zdXJlSWRzKG1vZGVsUGFja2FnZSkge1xuICAgIHRoaXMuaWRlbnRpdHkuZm9yRWFjaCgodmFsdWUpPT4ge1xuICAgICAgdmFyIGlkcyA9IHRoaXMuZmllbGRzLmdldCh2YWx1ZSk7XG4gICAgICBtb2RlbFBhY2thZ2UuaWRlbnRpdHlGaWVsZHMuc2V0KGlkcy5pZEtleS50b1N0cmluZygpLCB0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuc3VyZUZLcyhtb2RlbFBhY2thZ2UpIHtcbiAgICBpZiAobW9kZWxQYWNrYWdlKSB7XG4gICAgICBsZXQgbW9kZWxSZWxhdGlvbnM7XG4gICAgICBpZiAobW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5oYXModGhpcy5uYW1lKSkge1xuICAgICAgICBtb2RlbFJlbGF0aW9ucyA9IG1vZGVsUGFja2FnZS5yZWxhdGlvbnMuZ2V0KHRoaXMubmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlbFJlbGF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5zZXQodGhpcy5uYW1lLCBtb2RlbFJlbGF0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVsYXRpb25zLmZvckVhY2goKHZhbHVlKT0+IHtcbiAgICAgICAgbGV0IHJlZiA9IHRoaXMuZmllbGRzLmdldCh2YWx1ZSk7XG4gICAgICAgIC8vIG11c3QgYmUgZGlmZmVyZW50IHRvIGFwcGx5IGZpeHVwXG4gICAgICAgIG1vZGVsUmVsYXRpb25zLnNldChyZWYubmFtZSwgcmVmLmNsb25lKCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCBtaXNzaW5nID0gdGhpcy5jaGVja1JlbGF0aW9ucyhtb2RlbFBhY2thZ2UpO1xuICAgICAgbWlzc2luZy5mb3JFYWNoKChyKT0+IHtcbiAgICAgICAgbW9kZWxSZWxhdGlvbnMuZGVsZXRlKHIubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGVja1JlbGF0aW9ucyhtb2RlbFBhY2thZ2UpIHtcbiAgICBsZXQgbWlzc2luZyA9IFtdO1xuICAgIGlmIChtb2RlbFBhY2thZ2UucmVsYXRpb25zLmhhcyh0aGlzLm5hbWUpKSB7XG4gICAgICBsZXQgbW9kZWxSZWxhdGlvbnMgPSBtb2RlbFBhY2thZ2UucmVsYXRpb25zLmdldCh0aGlzLm5hbWUpO1xuICAgICAgbW9kZWxSZWxhdGlvbnMuZm9yRWFjaCgoZmllbGQpPT4ge1xuICAgICAgICBsZXQgciA9IGZpZWxkLnJlbGF0aW9uO1xuICAgICAgICBsZXQgbWlzc2luZ1JlZiA9IHRydWU7XG4gICAgICAgIGlmICghci5yZWYuZmllbGQpIHtcbiAgICAgICAgICAvLyBkaXNjb3ZlciBmaWVsZE5hbWVcbiAgICAgICAgICBpZiAobW9kZWxQYWNrYWdlLmVudGl0aWVzLmhhcyhyLnJlZi5lbnRpdHkpKSB7XG4gICAgICAgICAgICBsZXQgZSA9IG1vZGVsUGFja2FnZS5lbnRpdGllcy5nZXQoci5yZWYuZW50aXR5KTtcbiAgICAgICAgICAgIHIucmVmLmZpZWxkID0gZS5pZGVudGl0eVswXTtcbiAgICAgICAgICAgIG1pc3NpbmdSZWYgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmVHlwZSA9IChyIGluc3RhbmNlb2YgSGFzT25lKSA/ICdIYXNPbmUnIDogKHIgaW5zdGFuY2VvZiBIYXNNYW55ID8gJ0hhc01hbnknIDogKHIgaW5zdGFuY2VvZiBCZWxvbmdzVG9NYW55ID8gJ0JlbG9uZ3NUb01hbnknIDogJ0JlbG9uZ3NUbycpKTtcbiAgICAgICAgc3dpdGNoIChmVHlwZSl7XG4gICAgICAgICAgY2FzZSAnSGFzT25lJzpcbiAgICAgICAgICAgIGlmIChtb2RlbFBhY2thZ2UuZW50aXRpZXMuaGFzKHIucmVmLmVudGl0eSkpIHtcbiAgICAgICAgICAgICAgbGV0IHJlZmUgPSBtb2RlbFBhY2thZ2UuZW50aXRpZXMuZ2V0KHIucmVmLmVudGl0eSk7XG4gICAgICAgICAgICAgIGlmIChyZWxhdGlvbnMuZmllbGRzLmhhcyhyLnJlZi5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nUmVmID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIYXNNYW55JzpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgaW4gcmVmIHN0b3JlXG4gICAgICAgICAgICBpZiAobW9kZWxQYWNrYWdlLmVudGl0aWVzLmhhcyhyLnJlZi5lbnRpdHkpKSB7XG4gICAgICAgICAgICAgIGxldCByZWZlID0gbW9kZWxQYWNrYWdlLmVudGl0aWVzLmdldChyLnJlZi5lbnRpdHkpO1xuICAgICAgICAgICAgICBpZiAocmVmZS5maWVsZHMuaGFzKHIucmVmLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIG1pc3NpbmdSZWYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0JlbG9uZ3NUb01hbnknOlxuICAgICAgICAgICAgLy8gbXVzdCBiZSBpbiByZWYgc3RvcmVcbiAgICAgICAgICAgIGlmIChtb2RlbFBhY2thZ2UuZW50aXRpZXMuaGFzKHIucmVmLmVudGl0eSkpIHtcbiAgICAgICAgICAgICAgbGV0IHJlZmUgPSBtb2RlbFBhY2thZ2UuZW50aXRpZXMuZ2V0KHIucmVmLmVudGl0eSk7XG4gICAgICAgICAgICAgIGlmIChyZWZlLmZpZWxkcy5oYXMoci5yZWYuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1JlZiA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgdXNpbmcgPSByLnVzaW5nO1xuICAgICAgICAgICAgICBpZiAodXNpbmcgJiYgbW9kZWxQYWNrYWdlLmVudGl0aWVzLmhhcyh1c2luZy5lbnRpdHkpKSB7XG4gICAgICAgICAgICAgICAgLy8g0LfQtNC10YHRjCDQvdGD0LbQvdC+INCx0YPQtNC10YIg0LjQt9C80LXQvdC40YLRjCDRgtC40L8g0LDRgdGB0L7RhtC40LDRhtC40LhcblxuICAgICAgICAgICAgICAgIGxldCByZXBsYWNlUmVmID0gci50b0pTT04oKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlUmVmLmhhc01hbnkgPSByZXBsYWNlUmVmLnVzaW5nO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlcGxhY2VSZWYuYmVsb25nc1RvTWFueTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVwbGFjZVJlZi51c2luZztcblxuICAgICAgICAgICAgICAgIGZpZWxkLiRvYmoucmVsYXRpb24gPSBuZXcgSGFzTWFueShyZXBsYWNlUmVmKTtcbiAgICAgICAgICAgICAgICBtaXNzaW5nUmVmID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdCZWxvbmdzVG8nOlxuICAgICAgICAgICAgLy8gbXVzdCBiZSBpbiBpZGVudGl0eSBzdG9yZVxuICAgICAgICAgICAgaWYgKG1vZGVsUGFja2FnZS5pZGVudGl0eUZpZWxkcy5oYXMoci5yZWYudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgbWlzc2luZ1JlZiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pc3NpbmdSZWYpIHtcbiAgICAgICAgICBtaXNzaW5nLnB1c2goZmllbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1pc3Npbmc7XG4gIH1cblxuICByZW1vdmVJZHMobW9kZWxQYWNrYWdlKSB7XG4gICAgdGhpcy5pZGVudGl0eS5mb3JFYWNoKCh2YWx1ZSk9PiB7XG4gICAgICB2YXIgaWRzID0gdGhpcy5maWVsZHMuZ2V0KHZhbHVlKTtcbiAgICAgIG1vZGVsUGFja2FnZS5pZGVudGl0eUZpZWxkcy5kZWxldGUoaWRzLmlkS2V5LnRvU3RyaW5nKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLnJlbGF0aW9ucyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLnJlcXVpcmVkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlkZW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaWRlbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgZmllbGRzKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouZmllbGRzIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGVTY2hlbWEob2JqKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEVudGl0eVNjaGVtYSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IodmFsaWRhdGlvbi50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgcmVzdWx0Lm5hbWUgPSAocmVzdWx0Lm5hbWUuc2xpY2UoMCwxKSkudG9VcHBlckNhc2UoKSArIHJlc3VsdC5uYW1lLnNsaWNlKDEpO1xuXG4gICAgICBjb25zdCBmaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgICBjb25zdCByZWxhdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICBjb25zdCBpZGVudGl0eSA9IG5ldyBTZXQoKTtcbiAgICAgIGNvbnN0IHJlcXVpcmVkID0gbmV3IFNldCgpO1xuXG4gICAgICBvYmouZmllbGRzLmZvckVhY2goZiA9PiB7XG5cbiAgICAgICAgbGV0IGZpZWxkID0gbmV3IEZpZWxkKHsuLi5mLCBlbnRpdHk6IHJlc3VsdC5uYW1lfSk7XG5cbiAgICAgICAgaWYgKGZpZWxkcy5oYXMoZmllbGQubmFtZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBzYW1lIGZpZWxkICR7ZmllbGQubmFtZX0gaXMgYWxyZWFkeSBleGlzdHMgaW4gJHtvYmoubmFtZX0gZW50cnlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkcy5zZXQoZmllbGQubmFtZSwgZmllbGQpO1xuXG4gICAgICAgIGlmIChmaWVsZC5pZGVudGl0eSkge1xuICAgICAgICAgIGlkZW50aXR5LmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5yZXF1aXJlZCkge1xuICAgICAgICAgIHJlcXVpcmVkLmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5yZWxhdGlvbikge1xuICAgICAgICAgIHJlbGF0aW9ucy5hZGQoZmllbGQubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpZGVudGl0eS5zaXplID09IDApIHtcbiAgICAgICAgbGV0IGY7XG4gICAgICAgIGlmIChmaWVsZHMuaGFzKCdpZCcpKSB7XG4gICAgICAgICAgZiA9IGZpZWxkcy5nZXQoJ2lkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRzLmhhcygnX2lkJykpIHtcbiAgICAgICAgICBmID0gZmllbGRzLmdldCgnX2lkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZiA9IG5ldyBGaWVsZCh7Li4uREVGQVVMVF9JRF9GSUVMRCwgZW50aXR5OiByZXN1bHQubmFtZX0pO1xuICAgICAgICAgIGZpZWxkcy5zZXQoZi5uYW1lLCBmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGYuaWRlbnRpdHkgPSB0cnVlO1xuICAgICAgICBpZGVudGl0eS5hZGQoZi5uYW1lKTtcbiAgICAgICAgcmVxdWlyZWQuYWRkKGYubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5yZWxhdGlvbnMgPSByZWxhdGlvbnM7XG4gICAgICByZXN1bHQuaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICAgIHJlc3VsdC5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgICAgcmVzdWx0LmZpZWxkcyA9IGZpZWxkcztcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdG9PYmplY3QobW9kZWxQYWNrYWdlKSB7XG4gICAgaWYgKCFtb2RlbFBhY2thZ2UpIHtcbiAgICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgZmllbGRzOiBbLi4ucHJvcHMuZmllbGRzLnZhbHVlcygpXS5tYXAoZj0+IGYudG9PYmplY3QoKSksXG4gICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbW9kZWxSZWxhdGlvbnMgPSBtb2RlbFBhY2thZ2UucmVsYXRpb25zLmdldCh0aGlzLm5hbWUpO1xuICAgICAgaWYgKG1vZGVsUmVsYXRpb25zKSB7XG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICAgICAgbGV0IHJlcyA9IHN1cGVyLnRvT2JqZWN0KCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAuLi5yZXMsXG4gICAgICAgICAgZmllbGRzOiBbLi4ucHJvcHMuZmllbGRzLnZhbHVlcygpXS5tYXAoZj0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbGF0aW9ucy5oYXMoZi5uYW1lKSkge1xuICAgICAgICAgICAgICBpZiAobW9kZWxSZWxhdGlvbnMuaGFzKGYubmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZi50b09iamVjdChtb2RlbFBhY2thZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZi50b09iamVjdChtb2RlbFBhY2thZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLmZpbHRlcihmPT5mKSxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvSlNPTihtb2RlbFBhY2thZ2UpIHtcbiAgICBpZiAoIW1vZGVsUGFja2FnZSkge1xuICAgICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgZmllbGRzOiBbLi4ucHJvcHMuZmllbGRzLnZhbHVlcygpXS5tYXAoZj0+IGYudG9KU09OKCkpLFxuICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1vZGVsUmVsYXRpb25zID0gbW9kZWxQYWNrYWdlLnJlbGF0aW9ucy5nZXQodGhpcy5uYW1lKTtcbiAgICAgIGlmIChtb2RlbFJlbGF0aW9ucykge1xuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIC4uLnJlcyxcbiAgICAgICAgICBmaWVsZHM6IFsuLi5wcm9wcy5maWVsZHMudmFsdWVzKCldLm1hcChmPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVsYXRpb25zLmhhcyhmLm5hbWUpKSB7XG4gICAgICAgICAgICAgIGlmIChtb2RlbFJlbGF0aW9ucy5oYXMoZi5uYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmLnRvSlNPTihtb2RlbFBhY2thZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZi50b0pTT04obW9kZWxQYWNrYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5maWx0ZXIoZj0+ZiksXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2VudGl0eS5qc1xuICoqLyIsImltcG9ydCB7TW9kZWxCYXNlU2NoZW1hfSBmcm9tICcuLi9zY2hlbWEnO1xuaW1wb3J0IHt2YWxpZGF0b3J9IGZyb20gJy4uL3ZhbGlkYXRvcic7XG5pbXBvcnQgY2FtZWxjYXNlIGZyb20gJ2NhbWVsY2FzZSc7XG5pbXBvcnQgZGVjYW1lbGl6ZSBmcm9tICdkZWNhbWVsaXplJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMudXBkYXRlV2l0aChvYmopO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoubmFtZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IChwcm9wcy50aXRsZSB8fCBwcm9wcy50aXRsZV8pIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gKHByb3BzLmRlc2NyaXB0aW9uIHx8IHByb3BzLmRlc2NyaXB0aW9uXykgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b09iamVjdCgpKTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZSB8fCBwcm9wcy5uYW1lXyxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSB8fCBwcm9wcy50aXRsZV8sXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24gfHwgcHJvcHMuZGVzY3JpcHRpb25fLFxuICAgIH07XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXyxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZV8sXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb25fLFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZVNjaGVtYShvYmopIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgTW9kZWxCYXNlU2NoZW1hKTtcbiAgICBpZiAoIXZhbGlkYXRpb24udmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih2YWxpZGF0aW9uLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICB0aGlzLnZhbGlkYXRlU2NoZW1hKG9iaik7XG5cbiAgICAgIGxldCBuYW1lXyA9IG9iai5uYW1lO1xuICAgICAgbGV0IHRpdGxlXyA9IG9iai50aXRsZTtcbiAgICAgIGxldCBkZXNjcmlwdGlvbl8gPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBuYW1lID0gY2FtZWxjYXNlKG5hbWVfLnRyaW0oKSk7XG5cbiAgICAgIGxldCB0aXRsZSA9IHRpdGxlXyA/IHRpdGxlXy50cmltKCkgOiAnJztcblxuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25fID8gZGVzY3JpcHRpb25fLnRyaW0oKSA6ICcnO1xuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gZGVjYW1lbGl6ZShuYW1lLCAnICcpO1xuICAgICAgfVxuICAgICAgdGl0bGUgPSAodGl0bGUuc2xpY2UoMCwxKSkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEpO1xuXG4gICAgICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gdGl0bGUgfHwgdGl0bGVfO1xuICAgICAgfVxuICAgICAgZGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24uc2xpY2UoMCwxKSkudG9VcHBlckNhc2UoKSArIGRlc2NyaXB0aW9uLnNsaWNlKDEpO1xuXG4gICAgICByZXN1bHQubmFtZV8gPSBuYW1lXztcbiAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcblxuICAgICAgcmVzdWx0LnRpdGxlXyA9IHRpdGxlXztcbiAgICAgIHJlc3VsdC50aXRsZSA9IHRpdGxlO1xuXG4gICAgICByZXN1bHQuZGVzY3JpcHRpb25fID0gZGVzY3JpcHRpb25fO1xuICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnRvSlNPTigpKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvbW9kZWxiYXNlLmpzXG4gKiovIiwiaW1wb3J0IHtNb2RlbEJhc2VTY2hlbWF9IGZyb20gJy4vbW9kZWxiYXNlJztcbmltcG9ydCB7UmVmQmFzZVNjaGVtYX0gZnJvbSAnLi9yZWZiYXNlJztcbmltcG9ydCB7RW50aXR5U2NoZW1hfSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQge1JlZlNjaGVtYX0gZnJvbSAnLi9yZWYnO1xuaW1wb3J0IHtGaWVsZFNjaGVtYX0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQge0hhc09uZVNjaGVtYX0gZnJvbSAnLi9oYXNvbmUnO1xuaW1wb3J0IHtIYXNNYW55U2NoZW1hfSBmcm9tICcuL2hhc21hbnknO1xuaW1wb3J0IHtCZWxvbmdzVG9TY2hlbWF9IGZyb20gJy4vYmVsb25nc3RvJztcbmltcG9ydCB7QmVsb25nc1RvTWFueVNjaGVtYX0gZnJvbSAnLi9iZWxvbmdzdG9tYW55JztcblxuZXhwb3J0IHtcbiAgTW9kZWxCYXNlU2NoZW1hLFxuICBSZWZCYXNlU2NoZW1hLFxuICBFbnRpdHlTY2hlbWEsXG4gIFJlZlNjaGVtYSxcbiAgRmllbGRTY2hlbWEsXG4gIEhhc09uZVNjaGVtYSxcbiAgSGFzTWFueVNjaGVtYSxcbiAgQmVsb25nc1RvU2NoZW1hLFxuICBCZWxvbmdzVG9NYW55U2NoZW1hLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjaGVtYS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBNb2RlbEJhc2VTY2hlbWEgPSB7XG4gIGlkOiAnL01vZGVsQmFzZScsXG4gIHRpdGxlOiAnTW9kZWxCYXNlJyxcbiAgZGVzY3JpcHRpb246ICdUaGUgTW9kZWxCYXNlIGRlZmluaXRpb24nLFxuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFtcbiAgICAnbmFtZScsXG4gIF0sXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NoZW1hL21vZGVsYmFzZS5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBSZWZCYXNlU2NoZW1hID0ge1xuICBpZDogJy9SZWZCYXNlU2NoZW1hJyxcbiAgdGl0bGU6ICdSZWZCYXNlU2NoZW1hJyxcbiAgZGVzY3JpcHRpb246ICdUaGUgUmVmQmFzZVNjaGVtYSBkZWZpbml0aW9uJyxcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NoZW1hL3JlZmJhc2UuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgRW50aXR5U2NoZW1hID0ge1xuICBpZDogJy9FbnRpdHknLFxuICB0aXRsZTogJ0VudGl0eScsXG4gIGRlc2NyaXB0aW9uOiAnVGhlIEVudGl0eSBkZWZpbml0aW9uJyxcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIH0sXG4gICAgZmllbGRzOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIGxpc3QnLFxuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgICRyZWY6ICcvRmllbGQnLFxuICAgICAgfSxcbiAgICAgIG1pbkl0ZW1zOiAxLFxuICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgfSxcbiAgICBpbmRleGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ2luZGV4IGxpc3QnLFxuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgICRyZWY6ICcvSW5kZXgnLFxuICAgICAgfSxcbiAgICAgIG1pbkl0ZW1zOiAxLFxuICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFtcbiAgICAnbmFtZScsXG4gICAgJ2ZpZWxkcycsXG4gIF0sXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY2hlbWEvZW50aXR5LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFJlZlNjaGVtYSA9IHtcbiAgaWQ6ICcvUmVmJyxcbiAgdHlwZTogJ3N0cmluZycsXG4gIHBhdGVybjogJ14oLio/KSMoLio/KSQnLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjaGVtYS9yZWYuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgRmllbGRTY2hlbWEgPSB7XG4gIGlkOiAnL0ZpZWxkJyxcbiAgdGl0bGU6ICdGaWVsZCcsXG4gIGRlc2NyaXB0aW9uOiAnZmllbGQgZGVmaW5pdGlvbicsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIH0sXG4gICAgZW50aXR5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIGVudW06IFsnaW50ZWdlcicsICdudW1iZXInLCAnYm9vbGVhbicsICdzdHJpbmcnXSxcbiAgICAgIGRlZmF1bHQ6ICdzdHJpbmcnLFxuICAgIH0sXG4gICAgZGVmYXVsdDoge1xuICAgICAgdHlwZToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgIHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgIHsgdHlwZTogJ251bGwnIH0sXG4gICAgICAgICAgeyB0eXBlOiAnb2JqZWN0JyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIGlkZW50aXR5OiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogZmFsc2UgfSxcbiAgICByZXF1aXJlZDogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgaW5kZXhlZDogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkcmVmOiAnL0JlbG9uZ3NUbycsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgJHJlZjogJy9IYXNPbmUnLFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICRyZWY6ICcvSGFzTWFueScsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgJHJlZjogJy9CZWxvbmdzVG9NYW55JyxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ25hbWUnXSxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjaGVtYS9maWVsZC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBIYXNPbmVTY2hlbWEgPSB7XG4gIGlkOiAnL0hhc09uZScsXG4gIHRpdGxlOiAnTGluaycsXG4gIGRlc2NyaXB0aW9uOiAnbGluayBkZWZpbml0aW9uJyxcbiAgcHJvcGVydGllczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBoYXNPbmU6IHtcbiAgICAgICRyZWY6ICcvUmVmJyxcbiAgICB9LFxuICAgIGVudGl0eToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnaGFzT25lJ10sXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY2hlbWEvaGFzb25lLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IEhhc01hbnlTY2hlbWEgPSB7XG4gIGlkOiAnL0hhc01hbnknLFxuICB0aXRsZTogJ0xpbmsnLFxuICBkZXNjcmlwdGlvbjogJ2xpbmsgZGVmaW5pdGlvbicsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgaGFzTWFueToge1xuICAgICAgJHJlZjogJy9SZWYnLFxuICAgIH0sXG4gICAgZW50aXR5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB9LFxuICAgIGZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB9LFxuICB9LFxuICByZXF1aXJlZDogWydoYXNNYW55J10sXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY2hlbWEvaGFzbWFueS5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBCZWxvbmdzVG9TY2hlbWEgPSB7XG4gIGlkOiAnL0JlbG9uZ3NUbycsXG4gIHRpdGxlOiAnTGluaycsXG4gIGRlc2NyaXB0aW9uOiAnbGluayBkZWZpbml0aW9uJyxcbiAgcHJvcGVydGllczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBiZWxvbmdzVG86IHtcbiAgICAgICRyZWY6ICcvUmVmJyxcbiAgICB9LFxuICAgIGVudGl0eToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnYmVsb25nc1RvJ10sXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY2hlbWEvYmVsb25nc3RvLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IEJlbG9uZ3NUb01hbnlTY2hlbWEgPSB7XG4gIGlkOiAnL0JlbG9uZ3NUb01hbnknLFxuICB0aXRsZTogJ0xpbmsnLFxuICBkZXNjcmlwdGlvbjogJ2xpbmsgZGVmaW5pdGlvbicsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgYmVsb25nc1RvTWFueToge1xuICAgICAgJHJlZjogJy9SZWYnLFxuICAgIH0sXG4gICAgdXNpbmc6IHtcbiAgICAgICRyZWY6ICcvUmVmJyxcbiAgICB9LFxuICAgIGVudGl0eToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgICBmaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnYmVsb25nc1RvTWFueSddLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NoZW1hL2JlbG9uZ3N0b21hbnkuanNcbiAqKi8iLCJpbXBvcnQge1xuICBNb2RlbEJhc2VTY2hlbWEsXG4gIEVudGl0eVNjaGVtYSxcbiAgRmllbGRCYXNlU2NoZW1hLFxuICBGaWVsZFNjaGVtYSxcbiAgUmVmU2NoZW1hLFxuICBIYXNPbmVTY2hlbWEsXG4gIEhhc01hbnlTY2hlbWEsXG4gIEJlbG9uZ3NUb1NjaGVtYSxcbiAgQmVsb25nc1RvTWFueVNjaGVtYSxcbn0gZnJvbSAnLi9zY2hlbWEnO1xuXG5pbXBvcnQge1ZhbGlkYXRvcn0gZnJvbSAnanNvbnNjaGVtYSc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XG5cbnZhbGlkYXRvci5hZGRTY2hlbWEoTW9kZWxCYXNlU2NoZW1hKTtcbnZhbGlkYXRvci5hZGRTY2hlbWEoUmVmU2NoZW1hKTtcbnZhbGlkYXRvci5hZGRTY2hlbWEoSGFzT25lU2NoZW1hKTtcbnZhbGlkYXRvci5hZGRTY2hlbWEoSGFzTWFueVNjaGVtYSk7XG52YWxpZGF0b3IuYWRkU2NoZW1hKEJlbG9uZ3NUb1NjaGVtYSk7XG52YWxpZGF0b3IuYWRkU2NoZW1hKEJlbG9uZ3NUb01hbnlTY2hlbWEpO1xudmFsaWRhdG9yLmFkZFNjaGVtYShFbnRpdHlTY2hlbWEpO1xudmFsaWRhdG9yLmFkZFNjaGVtYShGaWVsZFNjaGVtYSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWxpZGF0b3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWYWxpZGF0b3IgPSBtb2R1bGUuZXhwb3J0cy5WYWxpZGF0b3IgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cy5WYWxpZGF0b3JSZXN1bHQgPSByZXF1aXJlKCcuL2hlbHBlcnMnKS5WYWxpZGF0b3JSZXN1bHQ7XG5tb2R1bGUuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSByZXF1aXJlKCcuL2hlbHBlcnMnKS5WYWxpZGF0aW9uRXJyb3I7XG5tb2R1bGUuZXhwb3J0cy5TY2hlbWFFcnJvciA9IHJlcXVpcmUoJy4vaGVscGVycycpLlNjaGVtYUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cy52YWxpZGF0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zKSB7XG4gIHZhciB2ID0gbmV3IFZhbGlkYXRvcigpO1xuICByZXR1cm4gdi52YWxpZGF0ZShpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qc29uc2NoZW1hL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cmlsaWIgPSByZXF1aXJlKCd1cmwnKTtcblxudmFyIGF0dHJpYnV0ZSA9IHJlcXVpcmUoJy4vYXR0cmlidXRlJyk7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xudmFyIFZhbGlkYXRvclJlc3VsdCA9IGhlbHBlcnMuVmFsaWRhdG9yUmVzdWx0O1xudmFyIFNjaGVtYUVycm9yID0gaGVscGVycy5TY2hlbWFFcnJvcjtcbnZhciBTY2hlbWFDb250ZXh0ID0gaGVscGVycy5TY2hlbWFDb250ZXh0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVmFsaWRhdG9yIG9iamVjdFxuICogQG5hbWUgVmFsaWRhdG9yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvciAoKSB7XG4gIC8vIEFsbG93IGEgdmFsaWRhdG9yIGluc3RhbmNlIHRvIG92ZXJyaWRlIGdsb2JhbCBjdXN0b20gZm9ybWF0cyBvciB0byBoYXZlIHRoZWlyXG4gIC8vIG93biBjdXN0b20gZm9ybWF0cy5cbiAgdGhpcy5jdXN0b21Gb3JtYXRzID0gT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IucHJvdG90eXBlLmN1c3RvbUZvcm1hdHMpO1xuICB0aGlzLnNjaGVtYXMgPSB7fTtcbiAgdGhpcy51bnJlc29sdmVkUmVmcyA9IFtdO1xuXG4gIC8vIFVzZSBPYmplY3QuY3JlYXRlIHRvIG1ha2UgdGhpcyBleHRlbnNpYmxlIHdpdGhvdXQgVmFsaWRhdG9yIGluc3RhbmNlcyBzdGVwcGluZyBvbiBlYWNoIG90aGVyJ3MgdG9lcy5cbiAgdGhpcy50eXBlcyA9IE9iamVjdC5jcmVhdGUodHlwZXMpO1xuICB0aGlzLmF0dHJpYnV0ZXMgPSBPYmplY3QuY3JlYXRlKGF0dHJpYnV0ZS52YWxpZGF0b3JzKTtcbn07XG5cbi8vIEFsbG93IGZvcm1hdHMgdG8gYmUgcmVnaXN0ZXJlZCBnbG9iYWxseS5cblZhbGlkYXRvci5wcm90b3R5cGUuY3VzdG9tRm9ybWF0cyA9IHt9O1xuXG4vLyBIaW50IGF0IHRoZSBwcmVzZW5jZSBvZiBhIHByb3BlcnR5XG5WYWxpZGF0b3IucHJvdG90eXBlLnNjaGVtYXMgPSBudWxsO1xuVmFsaWRhdG9yLnByb3RvdHlwZS50eXBlcyA9IG51bGw7XG5WYWxpZGF0b3IucHJvdG90eXBlLmF0dHJpYnV0ZXMgPSBudWxsO1xuVmFsaWRhdG9yLnByb3RvdHlwZS51bnJlc29sdmVkUmVmcyA9IG51bGw7XG5cbi8qKlxuICogQWRkcyBhIHNjaGVtYSB3aXRoIGEgY2VydGFpbiB1cm4gdG8gdGhlIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSB1cm5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRTY2hlbWEgPSBmdW5jdGlvbiBhZGRTY2hlbWEgKHNjaGVtYSwgdXJpKSB7XG4gIGlmICghc2NoZW1hKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG91clVyaSA9IHVyaSB8fCBzY2hlbWEuaWQ7XG4gIHRoaXMuYWRkU3ViU2NoZW1hKG91clVyaSwgc2NoZW1hKTtcbiAgaWYgKG91clVyaSkge1xuICAgIHRoaXMuc2NoZW1hc1tvdXJVcmldID0gc2NoZW1hO1xuICB9XG4gIHJldHVybiB0aGlzLnNjaGVtYXNbb3VyVXJpXTtcbn07XG5cblZhbGlkYXRvci5wcm90b3R5cGUuYWRkU3ViU2NoZW1hID0gZnVuY3Rpb24gYWRkU3ViU2NoZW1hKGJhc2V1cmksIHNjaGVtYSkge1xuICBpZighc2NoZW1hIHx8IHR5cGVvZiBzY2hlbWEhPSdvYmplY3QnKSByZXR1cm47XG4gIC8vIE1hcmsgYWxsIHJlZmVyZW5jZWQgc2NoZW1hcyBzbyB3ZSBjYW4gdGVsbCBsYXRlciB3aGljaCBzY2hlbWFzIGFyZSByZWZlcnJlZCB0bywgYnV0IG5ldmVyIGRlZmluZWRcbiAgaWYoc2NoZW1hLiRyZWYpe1xuICAgIHZhciByZXNvbHZlZFVyaSA9IHVyaWxpYi5yZXNvbHZlKGJhc2V1cmksIHNjaGVtYS4kcmVmKTtcbiAgICAvLyBPbmx5IG1hcmsgdW5rbm93biBzY2hlbWFzIGFzIHVucmVzb2x2ZWRcbiAgICBpZiAodGhpcy5zY2hlbWFzW3Jlc29sdmVkVXJpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNjaGVtYXNbcmVzb2x2ZWRVcmldID0gbnVsbDtcbiAgICAgIHRoaXMudW5yZXNvbHZlZFJlZnMucHVzaChyZXNvbHZlZFVyaSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB2YXIgb3VyVXJpID0gc2NoZW1hLmlkICYmIHVyaWxpYi5yZXNvbHZlKGJhc2V1cmksIHNjaGVtYS5pZCk7XG4gIHZhciBvdXJCYXNlID0gb3VyVXJpIHx8IGJhc2V1cmk7XG4gIGlmIChvdXJVcmkpIHtcbiAgICBpZih0aGlzLnNjaGVtYXNbb3VyVXJpXSl7XG4gICAgICBpZighaGVscGVycy5kZWVwQ29tcGFyZVN0cmljdCh0aGlzLnNjaGVtYXNbb3VyVXJpXSwgc2NoZW1hKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2NoZW1hIDwnK3NjaGVtYSsnPiBhbHJlYWR5IGV4aXN0cyB3aXRoIGRpZmZlcmVudCBkZWZpbml0aW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWFzW291clVyaV07XG4gICAgfVxuICAgIHRoaXMuc2NoZW1hc1tvdXJVcmldID0gc2NoZW1hO1xuICAgIHZhciBkb2N1bWVudFVyaSA9IG91clVyaS5yZXBsYWNlKC9eKFteI10qKSMkLywgJyQxJyk7XG4gICAgdGhpcy5zY2hlbWFzW2RvY3VtZW50VXJpXSA9IHNjaGVtYTtcbiAgfVxuICB0aGlzLmFkZFN1YlNjaGVtYUFycmF5KG91ckJhc2UsICgoc2NoZW1hLml0ZW1zIGluc3RhbmNlb2YgQXJyYXkpP3NjaGVtYS5pdGVtczpbc2NoZW1hLml0ZW1zXSkpO1xuICB0aGlzLmFkZFN1YlNjaGVtYUFycmF5KG91ckJhc2UsICgoc2NoZW1hLmV4dGVuZHMgaW5zdGFuY2VvZiBBcnJheSk/c2NoZW1hLmV4dGVuZHM6W3NjaGVtYS5leHRlbmRzXSkpO1xuICB0aGlzLmFkZFN1YlNjaGVtYShvdXJCYXNlLCBzY2hlbWEuYWRkaXRpb25hbEl0ZW1zKTtcbiAgdGhpcy5hZGRTdWJTY2hlbWFPYmplY3Qob3VyQmFzZSwgc2NoZW1hLnByb3BlcnRpZXMpO1xuICB0aGlzLmFkZFN1YlNjaGVtYShvdXJCYXNlLCBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuICB0aGlzLmFkZFN1YlNjaGVtYU9iamVjdChvdXJCYXNlLCBzY2hlbWEuZGVmaW5pdGlvbnMpO1xuICB0aGlzLmFkZFN1YlNjaGVtYU9iamVjdChvdXJCYXNlLCBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpO1xuICB0aGlzLmFkZFN1YlNjaGVtYU9iamVjdChvdXJCYXNlLCBzY2hlbWEuZGVwZW5kZW5jaWVzKTtcbiAgdGhpcy5hZGRTdWJTY2hlbWFBcnJheShvdXJCYXNlLCBzY2hlbWEuZGlzYWxsb3cpO1xuICB0aGlzLmFkZFN1YlNjaGVtYUFycmF5KG91ckJhc2UsIHNjaGVtYS5hbGxPZik7XG4gIHRoaXMuYWRkU3ViU2NoZW1hQXJyYXkob3VyQmFzZSwgc2NoZW1hLmFueU9mKTtcbiAgdGhpcy5hZGRTdWJTY2hlbWFBcnJheShvdXJCYXNlLCBzY2hlbWEub25lT2YpO1xuICB0aGlzLmFkZFN1YlNjaGVtYShvdXJCYXNlLCBzY2hlbWEubm90KTtcbiAgcmV0dXJuIHRoaXMuc2NoZW1hc1tvdXJVcmldO1xufTtcblxuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRTdWJTY2hlbWFBcnJheSA9IGZ1bmN0aW9uIGFkZFN1YlNjaGVtYUFycmF5KGJhc2V1cmksIHNjaGVtYXMpIHtcbiAgaWYoIShzY2hlbWFzIGluc3RhbmNlb2YgQXJyYXkpKSByZXR1cm47XG4gIGZvcih2YXIgaT0wOyBpPHNjaGVtYXMubGVuZ3RoOyBpKyspe1xuICAgIHRoaXMuYWRkU3ViU2NoZW1hKGJhc2V1cmksIHNjaGVtYXNbaV0pO1xuICB9XG59O1xuXG5WYWxpZGF0b3IucHJvdG90eXBlLmFkZFN1YlNjaGVtYU9iamVjdCA9IGZ1bmN0aW9uIGFkZFN1YlNjaGVtYUFycmF5KGJhc2V1cmksIHNjaGVtYXMpIHtcbiAgaWYoIXNjaGVtYXMgfHwgdHlwZW9mIHNjaGVtYXMhPSdvYmplY3QnKSByZXR1cm47XG4gIGZvcih2YXIgcCBpbiBzY2hlbWFzKXtcbiAgICB0aGlzLmFkZFN1YlNjaGVtYShiYXNldXJpLCBzY2hlbWFzW3BdKTtcbiAgfVxufTtcblxuXG5cbi8qKlxuICogU2V0cyBhbGwgdGhlIHNjaGVtYXMgb2YgdGhlIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSBzY2hlbWFzXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuc2V0U2NoZW1hcyA9IGZ1bmN0aW9uIHNldFNjaGVtYXMgKHNjaGVtYXMpIHtcbiAgdGhpcy5zY2hlbWFzID0gc2NoZW1hcztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2NoZW1hIG9mIGEgY2VydGFpbiB1cm5cbiAqIEBwYXJhbSB1cm5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5nZXRTY2hlbWEgPSBmdW5jdGlvbiBnZXRTY2hlbWEgKHVybikge1xuICByZXR1cm4gdGhpcy5zY2hlbWFzW3Vybl07XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBpbnN0YW5jZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWFcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIFtvcHRpb25zXVxuICogQHBhcmFtIFtjdHhdXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIHZhbGlkYXRlIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBvcHRpb25zLnByb3BlcnR5TmFtZSB8fCAnaW5zdGFuY2UnO1xuICAvLyBUaGlzIHdpbGwgd29yayBzbyBsb25nIGFzIHRoZSBmdW5jdGlvbiBhdCB1cmkucmVzb2x2ZSgpIHdpbGwgcmVzb2x2ZSBhIHJlbGF0aXZlIFVSSSB0byBhIHJlbGF0aXZlIFVSSVxuICB2YXIgYmFzZSA9IHVyaWxpYi5yZXNvbHZlKG9wdGlvbnMuYmFzZXx8Jy8nLCBzY2hlbWEuaWR8fCcnKTtcbiAgaWYoIWN0eCl7XG4gICAgY3R4ID0gbmV3IFNjaGVtYUNvbnRleHQoc2NoZW1hLCBvcHRpb25zLCBwcm9wZXJ0eU5hbWUsIGJhc2UsIE9iamVjdC5jcmVhdGUodGhpcy5zY2hlbWFzKSk7XG4gICAgaWYgKCFjdHguc2NoZW1hc1tiYXNlXSkge1xuICAgICAgY3R4LnNjaGVtYXNbYmFzZV0gPSBzY2hlbWE7XG4gICAgfVxuICB9XG4gIGlmIChzY2hlbWEpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWxpZGF0ZVNjaGVtYShpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3VsdCB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoJ25vIHNjaGVtYSBzcGVjaWZpZWQnLCBzY2hlbWEpO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYW4gaW5zdGFuY2UgYWdhaW5zdCB0aGUgc2NoZW1hICh0aGUgYWN0dWFsIHdvcmsgaG9yc2UpXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7VmFsaWRhdG9yUmVzdWx0fVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlU2NoZW1hID0gZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWEgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghc2NoZW1hKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwic2NoZW1hIGlzIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBPYmplY3Qgc2NoZW1hXG4gICogQHJldHVybiBtaXhlZCBzY2hlbWEgdXJpIG9yIGZhbHNlXG4gICovXG4gIGZ1bmN0aW9uIHNob3VsZFJlc29sdmUoc2NoZW1hKSB7XG4gICAgdmFyIHJlZiA9ICh0eXBlb2Ygc2NoZW1hID09PSAnc3RyaW5nJykgPyBzY2hlbWEgOiBzY2hlbWEuJHJlZjtcbiAgICBpZiAodHlwZW9mIHJlZj09J3N0cmluZycpIHJldHVybiByZWY7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAqIEBwYXJhbSBPYmplY3Qgc2NoZW1hXG4gICogQHBhcmFtIFNjaGVtYUNvbnRleHQgY3R4XG4gICogQHJldHVybnMgT2JqZWN0IHNjaGVtYSBvciByZXNvbHZlZCBzY2hlbWFcbiAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZShzY2hlbWEsIGN0eCkge1xuICAgIHZhciByZWY7XG4gICAgaWYocmVmID0gc2hvdWxkUmVzb2x2ZShzY2hlbWEpKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZXNvbHZlKHNjaGVtYSwgcmVmLCBjdHgpLnN1YnNjaGVtYTtcbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG4gIGlmIChzY2hlbWFbJ2V4dGVuZHMnXSkge1xuICAgIGlmIChzY2hlbWFbJ2V4dGVuZHMnXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBzY2hlbWFbJ2V4dGVuZHMnXS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHNjaGVtYSA9IGhlbHBlcnMuZGVlcE1lcmdlKHNjaGVtYSwgcmVzb2x2ZShzLCBjdHgpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlbWEgPSBoZWxwZXJzLmRlZXBNZXJnZShzY2hlbWEsIHJlc29sdmUoc2NoZW1hWydleHRlbmRzJ10sIGN0eCkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzd2l0Y2hTY2hlbWE7XG4gIGlmIChzd2l0Y2hTY2hlbWEgPSBzaG91bGRSZXNvbHZlKHNjaGVtYSkpIHtcbiAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoc2NoZW1hLCBzd2l0Y2hTY2hlbWEsIGN0eCk7XG4gICAgdmFyIHN1YmN0eCA9IG5ldyBTY2hlbWFDb250ZXh0KHJlc29sdmVkLnN1YnNjaGVtYSwgb3B0aW9ucywgY3R4LnByb3BlcnR5UGF0aCwgcmVzb2x2ZWQuc3dpdGNoU2NoZW1hLCBjdHguc2NoZW1hcyk7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVTY2hlbWEoaW5zdGFuY2UsIHJlc29sdmVkLnN1YnNjaGVtYSwgb3B0aW9ucywgc3ViY3R4KTtcbiAgfVxuXG4gIHZhciBza2lwQXR0cmlidXRlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5za2lwQXR0cmlidXRlcyB8fCBbXTtcbiAgLy8gVmFsaWRhdGUgZWFjaCBzY2hlbWEgYXR0cmlidXRlIGFnYWluc3QgdGhlIGluc3RhbmNlXG4gIGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZS5pZ25vcmVQcm9wZXJ0aWVzW2tleV0gJiYgc2tpcEF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgdmFyIHZhbGlkYXRvckVyciA9IG51bGw7XG4gICAgICB2YXIgdmFsaWRhdG9yID0gc2VsZi5hdHRyaWJ1dGVzW2tleV07XG4gICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgIHZhbGlkYXRvckVyciA9IHZhbGlkYXRvci5jYWxsKHNlbGYsIGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dVbmtub3duQXR0cmlidXRlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gVGhpcyByZXByZXNlbnRzIGFuIGVycm9yIHdpdGggdGhlIHNjaGVtYSBpdHNlbGYsIG5vdCBhbiBpbnZhbGlkIGluc3RhbmNlXG4gICAgICAgIHRocm93IG5ldyBTY2hlbWFFcnJvcihcIlVuc3VwcG9ydGVkIGF0dHJpYnV0ZTogXCIgKyBrZXksIHNjaGVtYSk7XG4gICAgICB9XG4gICAgICBpZiAodmFsaWRhdG9yRXJyKSB7XG4gICAgICAgIHJlc3VsdC5pbXBvcnRFcnJvcnModmFsaWRhdG9yRXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMucmV3cml0ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHZhbHVlID0gb3B0aW9ucy5yZXdyaXRlLmNhbGwodGhpcywgaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgICByZXN1bHQuaW5zdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4qIEBwcml2YXRlXG4qIEBwYXJhbSBPYmplY3Qgc2NoZW1hXG4qIEBwYXJhbSBPYmplY3Qgc3dpdGNoU2NoZW1hXG4qIEBwYXJhbSBTY2hlbWFDb250ZXh0IGN0eFxuKiBAcmV0dXJuIE9iamVjdCByZXNvbHZlZCBzY2hlbWFzIHtzdWJzY2hlbWE6U3RyaW5nLCBzd2l0Y2hTY2hlbWE6IFN0cmluZ31cbiogQHRob3J3cyBTY2hlbWFFcnJvclxuKi9cblZhbGlkYXRvci5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUgKHNjaGVtYSwgc3dpdGNoU2NoZW1hLCBjdHgpIHtcbiAgc3dpdGNoU2NoZW1hID0gY3R4LnJlc29sdmUoc3dpdGNoU2NoZW1hKTtcbiAgLy8gRmlyc3Qgc2VlIGlmIHRoZSBzY2hlbWEgZXhpc3RzIHVuZGVyIHRoZSBwcm92aWRlZCBVUklcbiAgaWYgKGN0eC5zY2hlbWFzW3N3aXRjaFNjaGVtYV0pIHtcbiAgICByZXR1cm4ge3N1YnNjaGVtYTogY3R4LnNjaGVtYXNbc3dpdGNoU2NoZW1hXSwgc3dpdGNoU2NoZW1hOiBzd2l0Y2hTY2hlbWF9O1xuICB9XG4gIC8vIEVsc2UgdHJ5IHdhbGtpbmcgdGhlIHByb3BlcnR5IHBvaW50ZXJcbiAgdmFyIHBhcnNlZCA9IHVyaWxpYi5wYXJzZShzd2l0Y2hTY2hlbWEpO1xuICB2YXIgZnJhZ21lbnQgPSBwYXJzZWQgJiYgcGFyc2VkLmhhc2g7XG4gIHZhciBkb2N1bWVudCA9IGZyYWdtZW50ICYmIGZyYWdtZW50Lmxlbmd0aCAmJiBzd2l0Y2hTY2hlbWEuc3Vic3RyKDAsIHN3aXRjaFNjaGVtYS5sZW5ndGggLSBmcmFnbWVudC5sZW5ndGgpO1xuICBpZiAoIWRvY3VtZW50IHx8ICFjdHguc2NoZW1hc1tkb2N1bWVudF0pIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJubyBzdWNoIHNjaGVtYSA8XCIgKyBzd2l0Y2hTY2hlbWEgKyBcIj5cIiwgc2NoZW1hKTtcbiAgfVxuICB2YXIgc3Vic2NoZW1hID0gaGVscGVycy5vYmplY3RHZXRQYXRoKGN0eC5zY2hlbWFzW2RvY3VtZW50XSwgZnJhZ21lbnQuc3Vic3RyKDEpKTtcbiAgaWYoc3Vic2NoZW1hPT09dW5kZWZpbmVkKXtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJubyBzdWNoIHNjaGVtYSBcIiArIGZyYWdtZW50ICsgXCIgbG9jYXRlZCBpbiA8XCIgKyBkb2N1bWVudCArIFwiPlwiLCBzY2hlbWEpO1xuICB9XG4gIHJldHVybiB7c3Vic2NoZW1hOiBzdWJzY2hlbWEsIHN3aXRjaFNjaGVtYTogc3dpdGNoU2NoZW1hfTtcbn07XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciB0aGUgaW5zdGFuY2UgaWYgb2YgYSBjZXJ0YWluIHR5cGUuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudGVzdFR5cGUgPSBmdW5jdGlvbiB2YWxpZGF0ZVR5cGUgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCwgdHlwZSkge1xuICBpZiAodHlwZW9mIHRoaXMudHlwZXNbdHlwZV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzLnR5cGVzW3R5cGVdLmNhbGwodGhpcywgaW5zdGFuY2UpO1xuICB9XG4gIGlmICh0eXBlICYmIHR5cGVvZiB0eXBlID09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJlcyA9IHRoaXMudmFsaWRhdGVTY2hlbWEoaW5zdGFuY2UsIHR5cGUsIG9wdGlvbnMsIGN0eCk7XG4gICAgcmV0dXJuIHJlcyA9PT0gdW5kZWZpbmVkIHx8ICEocmVzICYmIHJlcy5lcnJvcnMubGVuZ3RoKTtcbiAgfVxuICAvLyBVbmRlZmluZWQgb3IgcHJvcGVydGllcyBub3Qgb24gdGhlIGxpc3QgYXJlIGFjY2VwdGFibGUsIHNhbWUgYXMgbm90IGJlaW5nIGRlZmluZWRcbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdHlwZXMgPSBWYWxpZGF0b3IucHJvdG90eXBlLnR5cGVzID0ge307XG50eXBlcy5zdHJpbmcgPSBmdW5jdGlvbiB0ZXN0U3RyaW5nIChpbnN0YW5jZSkge1xuICByZXR1cm4gdHlwZW9mIGluc3RhbmNlID09ICdzdHJpbmcnO1xufTtcbnR5cGVzLm51bWJlciA9IGZ1bmN0aW9uIHRlc3ROdW1iZXIgKGluc3RhbmNlKSB7XG4gIC8vIGlzRmluaXRlIHJldHVybnMgZmFsc2UgZm9yIE5hTiwgSW5maW5pdHksIGFuZCAtSW5maW5pdHlcbiAgcmV0dXJuIHR5cGVvZiBpbnN0YW5jZSA9PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShpbnN0YW5jZSk7XG59O1xudHlwZXMuaW50ZWdlciA9IGZ1bmN0aW9uIHRlc3RJbnRlZ2VyIChpbnN0YW5jZSkge1xuICByZXR1cm4gKHR5cGVvZiBpbnN0YW5jZSA9PSAnbnVtYmVyJykgJiYgaW5zdGFuY2UgJSAxID09PSAwO1xufTtcbnR5cGVzLmJvb2xlYW4gPSBmdW5jdGlvbiB0ZXN0Qm9vbGVhbiAoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIHR5cGVvZiBpbnN0YW5jZSA9PSAnYm9vbGVhbic7XG59O1xudHlwZXMuYXJyYXkgPSBmdW5jdGlvbiB0ZXN0QXJyYXkgKGluc3RhbmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEFycmF5O1xufTtcbnR5cGVzWydudWxsJ10gPSBmdW5jdGlvbiB0ZXN0TnVsbCAoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlID09PSBudWxsO1xufTtcbnR5cGVzLmRhdGUgPSBmdW5jdGlvbiB0ZXN0RGF0ZSAoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGF0ZTtcbn07XG50eXBlcy5hbnkgPSBmdW5jdGlvbiB0ZXN0QW55IChpbnN0YW5jZSkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG50eXBlcy5vYmplY3QgPSBmdW5jdGlvbiB0ZXN0T2JqZWN0IChpbnN0YW5jZSkge1xuICAvLyBUT0RPOiBmaXggdGhpcyAtIHNlZSAjMTVcbiAgcmV0dXJuIGluc3RhbmNlICYmICh0eXBlb2YgaW5zdGFuY2UpID09PSAnb2JqZWN0JyAmJiAhKGluc3RhbmNlIGluc3RhbmNlb2YgQXJyYXkpICYmICEoaW5zdGFuY2UgaW5zdGFuY2VvZiBEYXRlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdG9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanNvbnNjaGVtYS9saWIvdmFsaWRhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xuXG5leHBvcnRzLnBhcnNlID0gdXJsUGFyc2U7XG5leHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuZXhwb3J0cy5yZXNvbHZlT2JqZWN0ID0gdXJsUmVzb2x2ZU9iamVjdDtcbmV4cG9ydHMuZm9ybWF0ID0gdXJsRm9ybWF0O1xuXG5leHBvcnRzLlVybCA9IFVybDtcblxuZnVuY3Rpb24gVXJsKCkge1xuICB0aGlzLnByb3RvY29sID0gbnVsbDtcbiAgdGhpcy5zbGFzaGVzID0gbnVsbDtcbiAgdGhpcy5hdXRoID0gbnVsbDtcbiAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgdGhpcy5wb3J0ID0gbnVsbDtcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG4gIHRoaXMuaGFzaCA9IG51bGw7XG4gIHRoaXMuc2VhcmNoID0gbnVsbDtcbiAgdGhpcy5xdWVyeSA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xuICB0aGlzLnBhdGggPSBudWxsO1xuICB0aGlzLmhyZWYgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgcmVzZXJ2ZWQgZm9yIGRlbGltaXRpbmcgVVJMcy5cbiAgICAvLyBXZSBhY3R1YWxseSBqdXN0IGF1dG8tZXNjYXBlIHRoZXNlLlxuICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG4gICAgLy8gQ2hhcmFjdGVycyB0aGF0IGFyZSBuZXZlciBldmVyIGFsbG93ZWQgaW4gYSBob3N0bmFtZS5cbiAgICAvLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4gICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG4gICAgLy8gdGhlbS5cbiAgICBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eW2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oW2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgY2FuIGFsbG93IFwidW5zYWZlXCIgYW5kIFwidW53aXNlXCIgY2hhcnMuXG4gICAgdW5zYWZlUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH0sXG4gICAgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCFpc1N0cmluZyh1cmwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmFtZXRlciAndXJsJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgdXJsKTtcbiAgfVxuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55IGNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIFwiZG9tYWluXCIuXG4gICAgICAvLyBJdCBvbmx5IGNvbnZlcnRzIHRoZSBwYXJ0IG9mIHRoZSBkb21haW4gbmFtZSB0aGF0XG4gICAgICAvLyBoYXMgbm9uIEFTQ0lJIGNoYXJhY3RlcnMuIEkuZS4gaXQgZG9zZW50IG1hdHRlciBpZlxuICAgICAgLy8geW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0IGFscmVhZHkgaXMgaW4gQVNDSUkuXG4gICAgICB2YXIgZG9tYWluQXJyYXkgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgbmV3T3V0ID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbWFpbkFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBzID0gZG9tYWluQXJyYXlbaV07XG4gICAgICAgIG5ld091dC5wdXNoKHMubWF0Y2goL1teQS1aYS16MC05Xy1dLykgP1xuICAgICAgICAgICAgJ3huLS0nICsgcHVueWNvZGUuZW5jb2RlKHMpIDogcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3RuYW1lID0gbmV3T3V0LmpvaW4oJy4nKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcbiAgICAgIGlmIChlc2MgPT09IGFlKSB7XG4gICAgICAgIGVzYyA9IGVzY2FwZShhZSk7XG4gICAgICB9XG4gICAgICByZXN0ID0gcmVzdC5zcGxpdChhZSkuam9pbihlc2MpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cbiAgdmFyIGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2ggIT09IC0xKSB7XG4gICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuICAgIHRoaXMuaGFzaCA9IHJlc3Quc3Vic3RyKGhhc2gpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIGhhc2gpO1xuICB9XG4gIHZhciBxbSA9IHJlc3QuaW5kZXhPZignPycpO1xuICBpZiAocW0gIT09IC0xKSB7XG4gICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG4gICAgdGhpcy5xdWVyeSA9IHJlc3Quc3Vic3RyKHFtICsgMSk7XG4gICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pO1xuICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAvLyBubyBxdWVyeSBzdHJpbmcsIGJ1dCBwYXJzZVF1ZXJ5U3RyaW5nIHN0aWxsIHJlcXVlc3RlZFxuICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICB9XG4gIGlmIChyZXN0KSB0aGlzLnBhdGhuYW1lID0gcmVzdDtcbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnLyc7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhdGhuYW1lIHx8ICcnO1xuICAgIHZhciBzID0gdGhpcy5zZWFyY2ggfHwgJyc7XG4gICAgdGhpcy5wYXRoID0gcCArIHM7XG4gIH1cblxuICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cbiAgdGhpcy5ocmVmID0gdGhpcy5mb3JtYXQoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBmb3JtYXQgYSBwYXJzZWQgb2JqZWN0IGludG8gYSB1cmwgc3RyaW5nXG5mdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG4gIC8vIGVuc3VyZSBpdCdzIGFuIG9iamVjdCwgYW5kIG5vdCBhIHN0cmluZyB1cmwuXG4gIC8vIElmIGl0J3MgYW4gb2JqLCB0aGlzIGlzIGEgbm8tb3AuXG4gIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3NcbiAgLy8gdG8gY2xlYW4gdXAgcG90ZW50aWFsbHkgd29ua3kgdXJscy5cbiAgaWYgKGlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIGlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCB8fCAocXVlcnkgJiYgKCc/JyArIHF1ZXJ5KSkgfHwgJyc7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuICAvLyB1bmxlc3MgdGhleSBoYWQgdGhlbSB0byBiZWdpbiB3aXRoLlxuICBpZiAodGhpcy5zbGFzaGVzIHx8XG4gICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJyk7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKTtcblxuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlKHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x2ZU9iamVjdCh1cmxQYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpKS5mb3JtYXQoKTtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmVPYmplY3Qoc291cmNlLCByZWxhdGl2ZSkge1xuICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZU9iamVjdChyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdCA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIGlmIChpc1N0cmluZyhyZWxhdGl2ZSkpIHtcbiAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuICAgIHJlbC5wYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpO1xuICAgIHJlbGF0aXZlID0gcmVsO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBVcmwoKTtcbiAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgcmVzdWx0W2tdID0gdGhpc1trXTtcbiAgfSwgdGhpcyk7XG5cbiAgLy8gaGFzaCBpcyBhbHdheXMgb3ZlcnJpZGRlbiwgbm8gbWF0dGVyIHdoYXQuXG4gIC8vIGV2ZW4gaHJlZj1cIlwiIHdpbGwgcmVtb3ZlIGl0LlxuICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cbiAgLy8gaWYgdGhlIHJlbGF0aXZlIHVybCBpcyBlbXB0eSwgdGhlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbyBoZXJlLlxuICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaHJlZnMgbGlrZSAvL2Zvby9iYXIgYWx3YXlzIGN1dCB0byB0aGUgcHJvdG9jb2wuXG4gIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgIC8vIHRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIHByb3RvY29sIGZyb20gcmVsYXRpdmVcbiAgICBPYmplY3Qua2V5cyhyZWxhdGl2ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICBpZiAoayAhPT0gJ3Byb3RvY29sJylcbiAgICAgICAgcmVzdWx0W2tdID0gcmVsYXRpdmVba107XG4gICAgfSk7XG5cbiAgICAvL3VybFBhcnNlIGFwcGVuZHMgdHJhaWxpbmcgLyB0byB1cmxzIGxpa2UgaHR0cDovL3d3dy5leGFtcGxlLmNvbVxuICAgIGlmIChzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXSAmJlxuICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5wcm90b2NvbCAmJiByZWxhdGl2ZS5wcm90b2NvbCAhPT0gcmVzdWx0LnByb3RvY29sKSB7XG4gICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuICAgIC8vIHRoZSBwcm90b2NvbCBkb2VzIHdlaXJkIHRoaW5nc1xuICAgIC8vIGZpcnN0LCBpZiBpdCdzIG5vdCBmaWxlOiwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBob3N0LFxuICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG4gICAgLy8gdG8gYmVnaW4gd2l0aCwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBwYXRoLlxuICAgIC8vIGlmIGl0IGlzIGZpbGU6LCB0aGVuIHRoZSBob3N0IGlzIGRyb3BwZWQsXG4gICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG4gICAgLy8gYW55dGhpbmcgZWxzZSBpcyBhc3N1bWVkIHRvIGJlIGFic29sdXRlLlxuICAgIGlmICghc2xhc2hlZFByb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgT2JqZWN0LmtleXMocmVsYXRpdmUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghaXNOdWxsT3JVbmRlZmluZWQocmVsYXRpdmUuc2VhcmNoKSkge1xuICAgIC8vIGp1c3QgcHVsbCBvdXQgdGhlIHNlYXJjaC5cbiAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuICAgIC8vIFB1dCB0aGlzIGFmdGVyIHRoZSBvdGhlciB0d28gY2FzZXMgYmVjYXVzZSBpdCBzaW1wbGlmaWVzIHRoZSBib29sZWFuc1xuICAgIGlmIChwc3ljaG90aWMpIHtcbiAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuICAgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIC8vIG5vIHBhdGggYXQgYWxsLiAgZWFzeS5cbiAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG4gICAgICByZXN1bHQucGF0aCA9ICcvJyArIHJlc3VsdC5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICAvLyBob3dldmVyLCBpZiBpdCBlbmRzIGluIGFueXRoaW5nIGVsc2Ugbm9uLXNsYXNoeSxcbiAgLy8gdGhlbiBpdCBtdXN0IE5PVCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSAoXG4gICAgICAocmVzdWx0Lmhvc3QgfHwgcmVsYXRpdmUuaG9zdCkgJiYgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fFxuICAgICAgbGFzdCA9PT0gJycpO1xuXG4gIC8vIHN0cmlwIHNpbmdsZSBkb3RzLCByZXNvbHZlIGRvdWJsZSBkb3RzIHRvIHBhcmVudCBkaXJcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHNyY1BhdGgubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuICAgIGlmIChsYXN0ID09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgfHwgKHJlc3VsdC5ob3N0ICYmIHNyY1BhdGgubGVuZ3RoKTtcblxuICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gc3JjUGF0aC5qb2luKCcvJyk7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgcmVxdWVzdC5odHRwXG4gIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gIH1cbiAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoIHx8IHJlc3VsdC5hdXRoO1xuICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB0aGlzLmhvc3RuYW1lID0gaG9zdDtcbn07XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gIGFyZyA9PSBudWxsO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXJsL3VybC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlIHYxLjMuMiBieSBAbWF0aGlhcyAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0LyoqIERldGVjdCBmcmVlIHZhcmlhYmxlcyAqL1xuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmXG5cdFx0IWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdCFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoXG5cdFx0ZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbFxuXHQpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYHB1bnljb2RlYCBvYmplY3QuXG5cdCAqIEBuYW1lIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0dmFyIHB1bnljb2RlLFxuXG5cdC8qKiBIaWdoZXN0IHBvc2l0aXZlIHNpZ25lZCAzMi1iaXQgZmxvYXQgdmFsdWUgKi9cblx0bWF4SW50ID0gMjE0NzQ4MzY0NywgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG5cdC8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cblx0YmFzZSA9IDM2LFxuXHR0TWluID0gMSxcblx0dE1heCA9IDI2LFxuXHRza2V3ID0gMzgsXG5cdGRhbXAgPSA3MDAsXG5cdGluaXRpYWxCaWFzID0gNzIsXG5cdGluaXRpYWxOID0gMTI4LCAvLyAweDgwXG5cdGRlbGltaXRlciA9ICctJywgLy8gJ1xceDJEJ1xuXG5cdC8qKiBSZWd1bGFyIGV4cHJlc3Npb25zICovXG5cdHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vLFxuXHRyZWdleE5vbkFTQ0lJID0gL1teXFx4MjAtXFx4N0VdLywgLy8gdW5wcmludGFibGUgQVNDSUkgY2hhcnMgKyBub24tQVNDSUkgY2hhcnNcblx0cmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZywgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG5cdC8qKiBFcnJvciBtZXNzYWdlcyAqL1xuXHRlcnJvcnMgPSB7XG5cdFx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0XHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHRcdCdpbnZhbGlkLWlucHV0JzogJ0ludmFsaWQgaW5wdXQnXG5cdH0sXG5cblx0LyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xuXHRiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW4sXG5cdGZsb29yID0gTWF0aC5mbG9vcixcblx0c3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSxcblxuXHQvKiogVGVtcG9yYXJ5IHZhcmlhYmxlICovXG5cdGtleTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdFx0dGhyb3cgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS4zLjInLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7IC8vIGluIE5vZGUuanMgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yIChrZXkgaW4gcHVueWNvZGUpIHtcblx0XHRcdFx0cHVueWNvZGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHB1bnljb2RlW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHsgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VybC9+L3B1bnljb2RlL3B1bnljb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9xdWVyeXN0cmluZy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3F1ZXJ5c3RyaW5nL2VuY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbi8qKiBAdHlwZSBWYWxpZGF0b3JSZXN1bHQgKi9cbnZhciBWYWxpZGF0b3JSZXN1bHQgPSBoZWxwZXJzLlZhbGlkYXRvclJlc3VsdDtcbi8qKiBAdHlwZSBTY2hlbWFFcnJvciAqL1xudmFyIFNjaGVtYUVycm9yID0gaGVscGVycy5TY2hlbWFFcnJvcjtcblxudmFyIGF0dHJpYnV0ZSA9IHt9O1xuXG5hdHRyaWJ1dGUuaWdub3JlUHJvcGVydGllcyA9IHtcbiAgLy8gaW5mb3JtYXRpdmUgcHJvcGVydGllc1xuICAnaWQnOiB0cnVlLFxuICAnZGVmYXVsdCc6IHRydWUsXG4gICdkZXNjcmlwdGlvbic6IHRydWUsXG4gICd0aXRsZSc6IHRydWUsXG4gIC8vIGFyZ3VtZW50cyB0byBvdGhlciBwcm9wZXJ0aWVzXG4gICdleGNsdXNpdmVNaW5pbXVtJzogdHJ1ZSxcbiAgJ2V4Y2x1c2l2ZU1heGltdW0nOiB0cnVlLFxuICAnYWRkaXRpb25hbEl0ZW1zJzogdHJ1ZSxcbiAgLy8gc3BlY2lhbC1oYW5kbGVkIHByb3BlcnRpZXNcbiAgJyRzY2hlbWEnOiB0cnVlLFxuICAnJHJlZic6IHRydWUsXG4gICdleHRlbmRzJzogdHJ1ZVxufTtcblxuLyoqXG4gKiBAbmFtZSB2YWxpZGF0b3JzXG4gKi9cbnZhciB2YWxpZGF0b3JzID0gYXR0cmlidXRlLnZhbGlkYXRvcnMgPSB7fTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgaWYgb2YgYSBjZXJ0YWluIHR5cGVcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjdHhcbiAqIEByZXR1cm4ge1ZhbGlkYXRvclJlc3VsdHxudWxsfVxuICovXG52YWxpZGF0b3JzLnR5cGUgPSBmdW5jdGlvbiB2YWxpZGF0ZVR5cGUgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICAvLyBJZ25vcmUgdW5kZWZpbmVkIGluc3RhbmNlc1xuICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIHZhciB0eXBlcyA9IChzY2hlbWEudHlwZSBpbnN0YW5jZW9mIEFycmF5KSA/IHNjaGVtYS50eXBlIDogW3NjaGVtYS50eXBlXTtcbiAgaWYgKCF0eXBlcy5zb21lKHRoaXMudGVzdFR5cGUuYmluZCh0aGlzLCBpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpKSkge1xuICAgIHZhciBsaXN0ID0gdHlwZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5pZCAmJiAoJzwnICsgdi5pZCArICc+JykgfHwgKHYrJycpO1xuICAgIH0pO1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAndHlwZScsXG4gICAgICBhcmd1bWVudDogbGlzdCxcbiAgICAgIG1lc3NhZ2U6IFwiaXMgbm90IG9mIGEgdHlwZShzKSBcIiArIGxpc3QsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTY2hlbWEoaW5zdGFuY2UsIG9wdGlvbnMsIGN0eCwgc2NoZW1hKXtcbiAgcmV0dXJuIHRoaXMudmFsaWRhdGVTY2hlbWEoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KS52YWxpZDtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgbWF0Y2hlcyBzb21lIG9mIHRoZSBnaXZlbiBzY2hlbWFzXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtWYWxpZGF0b3JSZXN1bHR8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5hbnlPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlQW55T2YgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICAvLyBJZ25vcmUgdW5kZWZpbmVkIGluc3RhbmNlc1xuICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghKHNjaGVtYS5hbnlPZiBpbnN0YW5jZW9mIEFycmF5KSl7XG4gICAgdGhyb3cgbmV3IFNjaGVtYUVycm9yKFwiYW55T2YgbXVzdCBiZSBhbiBhcnJheVwiKTtcbiAgfVxuICBpZiAoIXNjaGVtYS5hbnlPZi5zb21lKHRlc3RTY2hlbWEuYmluZCh0aGlzLCBpbnN0YW5jZSwgb3B0aW9ucywgY3R4KSkpIHtcbiAgICB2YXIgbGlzdCA9IHNjaGVtYS5hbnlPZi5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHJldHVybiAodi5pZCAmJiAoJzwnICsgdi5pZCArICc+JykpIHx8ICh2LnRpdGxlICYmIEpTT04uc3RyaW5naWZ5KHYudGl0bGUpKSB8fCAodlsnJHJlZiddICYmICgnPCcgKyB2WyckcmVmJ10gKyAnPicpKSB8fCAnW3N1YnNjaGVtYSAnK2krJ10nO1xuICAgIH0pO1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnYW55T2YnLFxuICAgICAgYXJndW1lbnQ6IGxpc3QsXG4gICAgICBtZXNzYWdlOiBcImlzIG5vdCBhbnkgb2YgXCIgKyBsaXN0LmpvaW4oJywnKSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgbWF0Y2hlcyBldmVyeSBnaXZlbiBzY2hlbWFcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjdHhcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLmFsbE9mID0gZnVuY3Rpb24gdmFsaWRhdGVBbGxPZiAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIC8vIElnbm9yZSB1bmRlZmluZWQgaW5zdGFuY2VzXG4gIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCEoc2NoZW1hLmFsbE9mIGluc3RhbmNlb2YgQXJyYXkpKXtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJhbGxPZiBtdXN0IGJlIGFuIGFycmF5XCIpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2NoZW1hLmFsbE9mLmZvckVhY2goZnVuY3Rpb24odiwgaSl7XG4gICAgdmFyIHZhbGlkID0gc2VsZi52YWxpZGF0ZVNjaGVtYShpbnN0YW5jZSwgdiwgb3B0aW9ucywgY3R4KTtcbiAgICBpZighdmFsaWQudmFsaWQpe1xuICAgICAgdmFyIG1zZyA9ICh2LmlkICYmICgnPCcgKyB2LmlkICsgJz4nKSkgfHwgKHYudGl0bGUgJiYgSlNPTi5zdHJpbmdpZnkodi50aXRsZSkpIHx8ICh2WyckcmVmJ10gJiYgKCc8JyArIHZbJyRyZWYnXSArICc+JykpIHx8ICdbc3Vic2NoZW1hICcraSsnXSc7XG4gICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICBuYW1lOiAnYWxsT2YnLFxuICAgICAgICBhcmd1bWVudDogeyBpZDogbXNnLCBsZW5ndGg6IHZhbGlkLmVycm9ycy5sZW5ndGgsIHZhbGlkOiB2YWxpZCB9LFxuICAgICAgICBtZXNzYWdlOiAnZG9lcyBub3QgbWF0Y2ggYWxsT2Ygc2NoZW1hICcgKyBtc2cgKyAnIHdpdGggJyArIHZhbGlkLmVycm9ycy5sZW5ndGggKyAnIGVycm9yW3NdOicsXG4gICAgICB9KTtcbiAgICAgIHJlc3VsdC5pbXBvcnRFcnJvcnModmFsaWQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBtYXRjaGVzIGV4YWN0bHkgb25lIG9mIHRoZSBnaXZlbiBzY2hlbWFzXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5vbmVPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlT25lT2YgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICAvLyBJZ25vcmUgdW5kZWZpbmVkIGluc3RhbmNlc1xuICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICghKHNjaGVtYS5vbmVPZiBpbnN0YW5jZW9mIEFycmF5KSl7XG4gICAgdGhyb3cgbmV3IFNjaGVtYUVycm9yKFwib25lT2YgbXVzdCBiZSBhbiBhcnJheVwiKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIgY291bnQgPSBzY2hlbWEub25lT2YuZmlsdGVyKHRlc3RTY2hlbWEuYmluZCh0aGlzLCBpbnN0YW5jZSwgb3B0aW9ucywgY3R4KSkubGVuZ3RoO1xuICB2YXIgbGlzdCA9IHNjaGVtYS5vbmVPZi5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICByZXR1cm4gKHYuaWQgJiYgKCc8JyArIHYuaWQgKyAnPicpKSB8fCAodi50aXRsZSAmJiBKU09OLnN0cmluZ2lmeSh2LnRpdGxlKSkgfHwgKHZbJyRyZWYnXSAmJiAoJzwnICsgdlsnJHJlZiddICsgJz4nKSkgfHwgJ1tzdWJzY2hlbWEgJytpKyddJztcbiAgfSk7XG4gIGlmIChjb3VudCE9PTEpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ29uZU9mJyxcbiAgICAgIGFyZ3VtZW50OiBsaXN0LFxuICAgICAgbWVzc2FnZTogXCJpcyBub3QgZXhhY3RseSBvbmUgZnJvbSBcIiArIGxpc3Quam9pbignLCcpLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbHxWYWxpZGF0b3JSZXN1bHR9XG4gKi9cbnZhbGlkYXRvcnMucHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmKGluc3RhbmNlID09PSB1bmRlZmluZWQgfHwgIShpbnN0YW5jZSBpbnN0YW5jZW9mIE9iamVjdCkpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIHByb3BlcnRpZXMgPSBzY2hlbWEucHJvcGVydGllcyB8fCB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgIHZhciBwcm9wID0gKGluc3RhbmNlIHx8IHVuZGVmaW5lZCkgJiYgaW5zdGFuY2VbcHJvcGVydHldO1xuICAgIHZhciByZXMgPSB0aGlzLnZhbGlkYXRlU2NoZW1hKHByb3AsIHByb3BlcnRpZXNbcHJvcGVydHldLCBvcHRpb25zLCBjdHgubWFrZUNoaWxkKHByb3BlcnRpZXNbcHJvcGVydHldLCBwcm9wZXJ0eSkpO1xuICAgIGlmKHJlcy5pbnN0YW5jZSAhPT0gcmVzdWx0Lmluc3RhbmNlW3Byb3BlcnR5XSkgcmVzdWx0Lmluc3RhbmNlW3Byb3BlcnR5XSA9IHJlcy5pbnN0YW5jZTtcbiAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHJlcyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVGVzdCBhIHNwZWNpZmljIHByb3BlcnR5IHdpdGhpbiBpbiBpbnN0YW5jZSBhZ2FpbnN0IHRoZSBhZGRpdGlvbmFsUHJvcGVydGllcyBzY2hlbWEgYXR0cmlidXRlXG4gKiBUaGlzIGlnbm9yZXMgcHJvcGVydGllcyB3aXRoIGRlZmluaXRpb25zIGluIHRoZSBwcm9wZXJ0aWVzIHNjaGVtYSBhdHRyaWJ1dGUsIGJ1dCBubyBvdGhlciBhdHRyaWJ1dGVzLlxuICogSWYgdG9vIG1hbnkgbW9yZSB0eXBlcyBvZiBwcm9wZXJ0eS1leGlzdGFuY2UgdGVzdHMgcG9wIHVwIHRoZXkgbWF5IG5lZWQgdGhlaXIgb3duIGNsYXNzIG9mIHRlc3RzIChsaWtlIGB0eXBlYCBoYXMpXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGVzdEFkZGl0aW9uYWxQcm9wZXJ0eSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4LCBwcm9wZXJ0eSwgcmVzdWx0KSB7XG4gIGlmIChzY2hlbWEucHJvcGVydGllcyAmJiBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnLFxuICAgICAgYXJndW1lbnQ6IHByb3BlcnR5LFxuICAgICAgbWVzc2FnZTogXCJhZGRpdGlvbmFsUHJvcGVydHkgXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wZXJ0eSkgKyBcIiBleGlzdHMgaW4gaW5zdGFuY2Ugd2hlbiBub3QgYWxsb3dlZFwiLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyB8fCB7fTtcbiAgICB2YXIgcmVzID0gdGhpcy52YWxpZGF0ZVNjaGVtYShpbnN0YW5jZVtwcm9wZXJ0eV0sIGFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBvcHRpb25zLCBjdHgubWFrZUNoaWxkKGFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpO1xuICAgIGlmKHJlcy5pbnN0YW5jZSAhPT0gcmVzdWx0Lmluc3RhbmNlW3Byb3BlcnR5XSkgcmVzdWx0Lmluc3RhbmNlW3Byb3BlcnR5XSA9IHJlcy5pbnN0YW5jZTtcbiAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHJlcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgcGF0dGVyblByb3BlcnRpZXNcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjdHhcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfFZhbGlkYXRvclJlc3VsdH1cbiAqL1xudmFsaWRhdG9ycy5wYXR0ZXJuUHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlUGF0dGVyblByb3BlcnRpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZihpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGlmKCF0aGlzLnR5cGVzLm9iamVjdChpbnN0YW5jZSkpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIHx8IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGluc3RhbmNlKSB7XG4gICAgdmFyIHRlc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIHBhdHRlcm4gaW4gcGF0dGVyblByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBleHByID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICAgIGlmICghZXhwci50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRlc3QgPSBmYWxzZTtcbiAgICAgIHZhciByZXMgPSB0aGlzLnZhbGlkYXRlU2NoZW1hKGluc3RhbmNlW3Byb3BlcnR5XSwgcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl0sIG9wdGlvbnMsIGN0eC5tYWtlQ2hpbGQocGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl0sIHByb3BlcnR5KSk7XG4gICAgICBpZihyZXMuaW5zdGFuY2UgIT09IHJlc3VsdC5pbnN0YW5jZVtwcm9wZXJ0eV0pIHJlc3VsdC5pbnN0YW5jZVtwcm9wZXJ0eV0gPSByZXMuaW5zdGFuY2U7XG4gICAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHJlcyk7XG4gICAgfVxuICAgIGlmICh0ZXN0KSB7XG4gICAgICB0ZXN0QWRkaXRpb25hbFByb3BlcnR5LmNhbGwodGhpcywgaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4LCBwcm9wZXJ0eSwgcmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjdHhcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfFZhbGlkYXRvclJlc3VsdH1cbiAqL1xudmFsaWRhdG9ycy5hZGRpdGlvbmFsUHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlQWRkaXRpb25hbFByb3BlcnRpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZihpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGlmKCF0aGlzLnR5cGVzLm9iamVjdChpbnN0YW5jZSkpIHJldHVybjtcbiAgLy8gaWYgcGF0dGVyblByb3BlcnRpZXMgaXMgZGVmaW5lZCB0aGVuIHdlJ2xsIHRlc3Qgd2hlbiB0aGF0IG9uZSBpcyBjYWxsZWQgaW5zdGVhZFxuICBpZiAoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gaW5zdGFuY2UpIHtcbiAgICB0ZXN0QWRkaXRpb25hbFByb3BlcnR5LmNhbGwodGhpcywgaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4LCBwcm9wZXJ0eSwgcmVzdWx0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYXQgbGVhc3Qgb2YgYSBjZXJ0YWluIGxlbmd0aCwgd2hlbiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1pblByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU1pblByb3BlcnRpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIWluc3RhbmNlIHx8IHR5cGVvZiBpbnN0YW5jZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlKTtcbiAgaWYgKCEoa2V5cy5sZW5ndGggPj0gc2NoZW1hLm1pblByb3BlcnRpZXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgIGFyZ3VtZW50OiBzY2hlbWEubWluUHJvcGVydGllcyxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWVldCBtaW5pbXVtIHByb3BlcnR5IGxlbmd0aCBvZiBcIiArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIHZhbHVlIGlzIGF0IG1vc3Qgb2YgYSBjZXJ0YWluIGxlbmd0aCwgd2hlbiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1heFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU1heFByb3BlcnRpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIWluc3RhbmNlIHx8IHR5cGVvZiBpbnN0YW5jZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlKTtcbiAgaWYgKCEoa2V5cy5sZW5ndGggPD0gc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtYXhQcm9wZXJ0aWVzJyxcbiAgICAgIGFyZ3VtZW50OiBzY2hlbWEubWF4UHJvcGVydGllcyxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWVldCBtYXhpbXVtIHByb3BlcnR5IGxlbmd0aCBvZiBcIiArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBpdGVtcyB3aGVuIGluc3RhbmNlIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbHxWYWxpZGF0b3JSZXN1bHR9XG4gKi9cbnZhbGlkYXRvcnMuaXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZUl0ZW1zIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkIHx8ICFzY2hlbWEuaXRlbXMpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGluc3RhbmNlLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIHZhciBpdGVtcyA9IChzY2hlbWEuaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkgPyAoc2NoZW1hLml0ZW1zW2ldIHx8IHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMpIDogc2NoZW1hLml0ZW1zO1xuICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zID09PSBmYWxzZSkge1xuICAgICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgICAgbmFtZTogJ2l0ZW1zJyxcbiAgICAgICAgbWVzc2FnZTogXCJhZGRpdGlvbmFsSXRlbXMgbm90IHBlcm1pdHRlZFwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciByZXMgPSBzZWxmLnZhbGlkYXRlU2NoZW1hKHZhbHVlLCBpdGVtcywgb3B0aW9ucywgY3R4Lm1ha2VDaGlsZChpdGVtcywgaSkpO1xuICAgIGlmKHJlcy5pbnN0YW5jZSAhPT0gcmVzdWx0Lmluc3RhbmNlW2ldKSByZXN1bHQuaW5zdGFuY2VbaV0gPSByZXMuaW5zdGFuY2U7XG4gICAgcmVzdWx0LmltcG9ydEVycm9ycyhyZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIG1pbmltdW0gYW5kIGV4Y2x1c2l2ZU1pbmltdW0gd2hlbiB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1pbmltdW0gPSBmdW5jdGlvbiB2YWxpZGF0ZU1pbmltdW0gKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIHZhciB2YWxpZCA9IHRydWU7XG4gIGlmIChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZSkge1xuICAgIHZhbGlkID0gaW5zdGFuY2UgPiBzY2hlbWEubWluaW11bTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IGluc3RhbmNlID49IHNjaGVtYS5taW5pbXVtO1xuICB9XG4gIGlmICghdmFsaWQpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ21pbmltdW0nLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5taW5pbXVtLFxuICAgICAgbWVzc2FnZTogXCJtdXN0IGhhdmUgYSBtaW5pbXVtIHZhbHVlIG9mIFwiICsgc2NoZW1hLm1pbmltdW0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIG1heGltdW0gYW5kIGV4Y2x1c2l2ZU1heGltdW0gd2hlbiB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1heGltdW0gPSBmdW5jdGlvbiB2YWxpZGF0ZU1heGltdW0gKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIHZhciB2YWxpZDtcbiAgaWYgKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtID09PSB0cnVlKSB7XG4gICAgdmFsaWQgPSBpbnN0YW5jZSA8IHNjaGVtYS5tYXhpbXVtO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gaW5zdGFuY2UgPD0gc2NoZW1hLm1heGltdW07XG4gIH1cbiAgaWYgKCF2YWxpZCkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnbWF4aW11bScsXG4gICAgICBhcmd1bWVudDogc2NoZW1hLm1heGltdW0sXG4gICAgICBtZXNzYWdlOiBcIm11c3QgaGF2ZSBhIG1heGltdW0gdmFsdWUgb2YgXCIgKyBzY2hlbWEubWF4aW11bSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgZGl2aXNpYmxlQnkgd2hlbiB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBPZiBjb3Vyc2UsIHRoaXMgaXMgc3VzY2VwdGlibGUgdG8gZmxvYXRpbmcgcG9pbnQgZXJyb3Igc2luY2UgaXQgY29tcGFyZXMgdGhlIGZsb2F0aW5nIHBvaW50c1xuICogYW5kIG5vdCB0aGUgSlNPTiBieXRlIHNlcXVlbmNlcyB0byBhcmJpdHJhcnkgcHJlY2lzaW9uLlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5kaXZpc2libGVCeSA9IGZ1bmN0aW9uIHZhbGlkYXRlRGl2aXNpYmxlQnkgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHNjaGVtYS5kaXZpc2libGVCeSA9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFNjaGVtYUVycm9yKFwiZGl2aXNpYmxlQnkgY2Fubm90IGJlIHplcm9cIik7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoaW5zdGFuY2UgLyBzY2hlbWEuZGl2aXNpYmxlQnkgJSAxKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdkaXZpc2libGVCeScsXG4gICAgICBhcmd1bWVudDogc2NoZW1hLmRpdmlzaWJsZUJ5LFxuICAgICAgbWVzc2FnZTogXCJpcyBub3QgZGl2aXNpYmxlIGJ5IChtdWx0aXBsZSBvZikgXCIgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZGl2aXNpYmxlQnkpLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBkaXZpc2libGVCeSB3aGVuIHRoZSB0eXBlIG9mIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIE9mIGNvdXJzZSwgdGhpcyBpcyBzdXNjZXB0aWJsZSB0byBmbG9hdGluZyBwb2ludCBlcnJvciBzaW5jZSBpdCBjb21wYXJlcyB0aGUgZmxvYXRpbmcgcG9pbnRzXG4gKiBhbmQgbm90IHRoZSBKU09OIGJ5dGUgc2VxdWVuY2VzIHRvIGFyYml0cmFyeSBwcmVjaXNpb24uXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm11bHRpcGxlT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZU11bHRpcGxlT2YgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHNjaGVtYS5tdWx0aXBsZU9mID09IDApIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJtdWx0aXBsZU9mIGNhbm5vdCBiZSB6ZXJvXCIpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKGluc3RhbmNlIC8gc2NoZW1hLm11bHRpcGxlT2YgJSAxKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtdWx0aXBsZU9mJyxcbiAgICAgIGFyZ3VtZW50OiAgc2NoZW1hLm11bHRpcGxlT2YsXG4gICAgICBtZXNzYWdlOiBcImlzIG5vdCBhIG11bHRpcGxlIG9mIChkaXZpc2libGUgYnkpIFwiICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm11bHRpcGxlT2YpLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBwcmVzZW50LlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5yZXF1aXJlZCA9IGZ1bmN0aW9uIHZhbGlkYXRlUmVxdWlyZWQgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCAmJiBzY2hlbWEucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ3JlcXVpcmVkJyxcbiAgICAgIG1lc3NhZ2U6IFwiaXMgcmVxdWlyZWRcIlxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGluc3RhbmNlICYmIHR5cGVvZiBpbnN0YW5jZT09PSdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSkge1xuICAgIHNjaGVtYS5yZXF1aXJlZC5mb3JFYWNoKGZ1bmN0aW9uKG4pe1xuICAgICAgaWYoaW5zdGFuY2Vbbl09PT11bmRlZmluZWQpe1xuICAgICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICAgIG5hbWU6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgYXJndW1lbnQ6IG4sXG4gICAgICAgICAgbWVzc2FnZTogXCJyZXF1aXJlcyBwcm9wZXJ0eSBcIiArIEpTT04uc3RyaW5naWZ5KG4pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgdmFsdWUgbWF0Y2hlcyB0aGUgcmVndWxhciBleHByZXNzaW9uLCB3aGVuIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMucGF0dGVybiA9IGZ1bmN0aW9uIHZhbGlkYXRlUGF0dGVybiAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICh0eXBlb2YgaW5zdGFuY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKCFpbnN0YW5jZS5tYXRjaChzY2hlbWEucGF0dGVybikpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ3BhdHRlcm4nLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5wYXR0ZXJuLFxuICAgICAgbWVzc2FnZTogXCJkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuIFwiICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLnBhdHRlcm4pLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBvZiBhIGNlcnRhaW4gZGVmaW5lZCBmb3JtYXQgb3IgYSBjdXN0b21cbiAqIGZvcm1hdC5cbiAqIFRoZSBmb2xsb3dpbmcgZm9ybWF0cyBhcmUgc3VwcG9ydGVkIGZvciBzdHJpbmcgdHlwZXM6XG4gKiAgIC0gZGF0ZS10aW1lXG4gKiAgIC0gZGF0ZVxuICogICAtIHRpbWVcbiAqICAgLSBpcC1hZGRyZXNzXG4gKiAgIC0gaXB2NlxuICogICAtIHVyaVxuICogICAtIGNvbG9yXG4gKiAgIC0gaG9zdC1uYW1lXG4gKiAgIC0gYWxwaGFcbiAqICAgLSBhbHBoYS1udW1lcmljXG4gKiAgIC0gdXRjLW1pbGxpc2VjXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBbb3B0aW9uc11cbiAqIEBwYXJhbSBbY3R4XVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMuZm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoIXJlc3VsdC5kaXNhYmxlRm9ybWF0ICYmICFoZWxwZXJzLmlzRm9ybWF0KGluc3RhbmNlLCBzY2hlbWEuZm9ybWF0LCB0aGlzKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnZm9ybWF0JyxcbiAgICAgIGFyZ3VtZW50OiBzY2hlbWEuZm9ybWF0LFxuICAgICAgbWVzc2FnZTogXCJkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSBcIiArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5mb3JtYXQpICsgXCIgZm9ybWF0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIHZhbHVlIGlzIGF0IGxlYXN0IG9mIGEgY2VydGFpbiBsZW5ndGgsIHdoZW4gdGhlIGluc3RhbmNlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5taW5MZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZU1pbkxlbmd0aCAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghKHR5cGVvZiBpbnN0YW5jZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKCEoaW5zdGFuY2UubGVuZ3RoID49IHNjaGVtYS5taW5MZW5ndGgpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtaW5MZW5ndGgnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5taW5MZW5ndGgsXG4gICAgICBtZXNzYWdlOiBcImRvZXMgbm90IG1lZXQgbWluaW11bSBsZW5ndGggb2YgXCIgKyBzY2hlbWEubWluTGVuZ3RoLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhdCBtb3N0IG9mIGEgY2VydGFpbiBsZW5ndGgsIHdoZW4gdGhlIGluc3RhbmNlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5tYXhMZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZU1heExlbmd0aCAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghKHR5cGVvZiBpbnN0YW5jZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKCEoaW5zdGFuY2UubGVuZ3RoIDw9IHNjaGVtYS5tYXhMZW5ndGgpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtYXhMZW5ndGgnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5tYXhMZW5ndGgsXG4gICAgICBtZXNzYWdlOiBcImRvZXMgbm90IG1lZXQgbWF4aW11bSBsZW5ndGggb2YgXCIgKyBzY2hlbWEubWF4TGVuZ3RoLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIGluc3RhbmNlIGNvbnRhaW5zIGF0IGxlYXN0IGEgbWluaW11bSBudW1iZXIgb2YgaXRlbXMsIHdoZW4gdGhlIGluc3RhbmNlIGlzIGFuIEFycmF5LlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5taW5JdGVtcyA9IGZ1bmN0aW9uIHZhbGlkYXRlTWluSXRlbXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghKGluc3RhbmNlLmxlbmd0aCA+PSBzY2hlbWEubWluSXRlbXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtaW5JdGVtcycsXG4gICAgICBhcmd1bWVudDogc2NoZW1hLm1pbkl0ZW1zLFxuICAgICAgbWVzc2FnZTogXCJkb2VzIG5vdCBtZWV0IG1pbmltdW0gbGVuZ3RoIG9mIFwiICsgc2NoZW1hLm1pbkl0ZW1zLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIGluc3RhbmNlIGNvbnRhaW5zIG5vIG1vcmUgdGhhbiBhIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zLCB3aGVuIHRoZSBpbnN0YW5jZSBpcyBhbiBBcnJheS5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMubWF4SXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU1heEl0ZW1zIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoIShpbnN0YW5jZS5sZW5ndGggPD0gc2NoZW1hLm1heEl0ZW1zKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnbWF4SXRlbXMnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5tYXhJdGVtcyxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWVldCBtYXhpbXVtIGxlbmd0aCBvZiBcIiArIHNjaGVtYS5tYXhJdGVtcyxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhhdCBldmVyeSBpdGVtIGluIGFuIGluc3RhbmNlIGFycmF5IGlzIHVuaXF1ZSwgd2hlbiBpbnN0YW5jZSBpcyBhbiBhcnJheVxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7U3RyaW5nfG51bGx8VmFsaWRhdG9yUmVzdWx0fVxuICovXG52YWxpZGF0b3JzLnVuaXF1ZUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVVbmlxdWVJdGVtcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiB0ZXN0QXJyYXlzICh2LCBpLCBhKSB7XG4gICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgYS5sZW5ndGg7IGorKykgaWYgKGhlbHBlcnMuZGVlcENvbXBhcmVTdHJpY3QodiwgYVtqXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFpbnN0YW5jZS5ldmVyeSh0ZXN0QXJyYXlzKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAndW5pcXVlSXRlbXMnLFxuICAgICAgbWVzc2FnZTogXCJjb250YWlucyBkdXBsaWNhdGUgaXRlbVwiLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIERlZXAgY29tcGFyZXMgYXJyYXlzIGZvciBkdXBsaWNhdGVzXG4gKiBAcGFyYW0gdlxuICogQHBhcmFtIGlcbiAqIEBwYXJhbSBhXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGVzdEFycmF5cyAodiwgaSwgYSkge1xuICB2YXIgaiwgbGVuID0gYS5sZW5ndGg7XG4gIGZvciAoaiA9IGkgKyAxLCBsZW47IGogPCBsZW47IGorKykge1xuICAgIGlmIChoZWxwZXJzLmRlZXBDb21wYXJlU3RyaWN0KHYsIGFbal0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZXJlIGFyZSBubyBkdXBsaWNhdGVzLCB3aGVuIHRoZSBpbnN0YW5jZSBpcyBhbiBBcnJheS5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMudW5pcXVlSXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZVVuaXF1ZUl0ZW1zIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoIWluc3RhbmNlLmV2ZXJ5KHRlc3RBcnJheXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICd1bmlxdWVJdGVtcycsXG4gICAgICBtZXNzYWdlOiBcImNvbnRhaW5zIGR1cGxpY2F0ZSBpdGVtXCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgZm9yIHRoZSBwcmVzZW5jZSBvZiBkZXBlbmRlbmN5IHByb3BlcnRpZXMsIGlmIHRoZSBpbnN0YW5jZSBpcyBhbiBvYmplY3QuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtudWxsfFZhbGlkYXRvclJlc3VsdH1cbiAqL1xudmFsaWRhdG9ycy5kZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZURlcGVuZGVuY2llcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghaW5zdGFuY2UgfHwgdHlwZW9mIGluc3RhbmNlICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gc2NoZW1hLmRlcGVuZGVuY2llcykge1xuICAgIGlmIChpbnN0YW5jZVtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBkZXAgPSBzY2hlbWEuZGVwZW5kZW5jaWVzW3Byb3BlcnR5XTtcbiAgICB2YXIgY2hpbGRDb250ZXh0ID0gY3R4Lm1ha2VDaGlsZChkZXAsIHByb3BlcnR5KTtcbiAgICBpZiAodHlwZW9mIGRlcCA9PSAnc3RyaW5nJykge1xuICAgICAgZGVwID0gW2RlcF07XG4gICAgfVxuICAgIGlmIChkZXAgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZGVwLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgaWYgKGluc3RhbmNlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICAgICAgLy8gRklYTUUgdGhlcmUncyB0d28gZGlmZmVyZW50IFwiZGVwZW5kZW5jaWVzXCIgZXJyb3JzIGhlcmUgd2l0aCBzbGlnaHRseSBkaWZmZXJlbnQgb3V0cHV0c1xuICAgICAgICAgICAgLy8gQ2FuIHdlIG1ha2UgdGhlc2UgdGhlIHNhbWU/IE9yIHNob3VsZCB3ZSBjcmVhdGUgZGlmZmVyZW50IGVycm9yIHR5cGVzP1xuICAgICAgICAgICAgbmFtZTogJ2RlcGVuZGVuY2llcycsXG4gICAgICAgICAgICBhcmd1bWVudDogY2hpbGRDb250ZXh0LnByb3BlcnR5UGF0aCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwicHJvcGVydHkgXCIgKyBwcm9wICsgXCIgbm90IGZvdW5kLCByZXF1aXJlZCBieSBcIiArIGNoaWxkQ29udGV4dC5wcm9wZXJ0eVBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzID0gdGhpcy52YWxpZGF0ZVNjaGVtYShpbnN0YW5jZSwgZGVwLCBvcHRpb25zLCBjaGlsZENvbnRleHQpO1xuICAgICAgaWYocmVzdWx0Lmluc3RhbmNlICE9PSByZXMuaW5zdGFuY2UpIHJlc3VsdC5pbnN0YW5jZSA9IHJlcy5pbnN0YW5jZTtcbiAgICAgIGlmIChyZXMgJiYgcmVzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgICAgICBuYW1lOiAnZGVwZW5kZW5jaWVzJyxcbiAgICAgICAgICBhcmd1bWVudDogY2hpbGRDb250ZXh0LnByb3BlcnR5UGF0aCxcbiAgICAgICAgICBtZXNzYWdlOiBcImRvZXMgbm90IG1lZXQgZGVwZW5kZW5jeSByZXF1aXJlZCBieSBcIiArIGNoaWxkQ29udGV4dC5wcm9wZXJ0eVBhdGgsXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHJlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7VmFsaWRhdG9yUmVzdWx0fG51bGx9XG4gKi9cbnZhbGlkYXRvcnNbJ2VudW0nXSA9IGZ1bmN0aW9uIHZhbGlkYXRlRW51bSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghKHNjaGVtYVsnZW51bSddIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgdGhyb3cgbmV3IFNjaGVtYUVycm9yKFwiZW51bSBleHBlY3RzIGFuIGFycmF5XCIsIHNjaGVtYSk7XG4gIH1cbiAgaWYgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoIXNjaGVtYVsnZW51bSddLnNvbWUoaGVscGVycy5kZWVwQ29tcGFyZVN0cmljdC5iaW5kKG51bGwsIGluc3RhbmNlKSkpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ2VudW0nLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYVsnZW51bSddLFxuICAgICAgbWVzc2FnZTogXCJpcyBub3Qgb25lIG9mIGVudW0gdmFsdWVzOiBcIiArIHNjaGVtYVsnZW51bSddLmpvaW4oJywnKSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgaWYgb2YgYSBwcm9oaWJpdGVkIHR5cGUuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtudWxsfFZhbGlkYXRvclJlc3VsdH1cbiAqL1xudmFsaWRhdG9ycy5ub3QgPSB2YWxpZGF0b3JzLmRpc2FsbG93ID0gZnVuY3Rpb24gdmFsaWRhdGVOb3QgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmKGluc3RhbmNlPT09dW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIG5vdFR5cGVzID0gc2NoZW1hLm5vdCB8fCBzY2hlbWEuZGlzYWxsb3c7XG4gIGlmKCFub3RUeXBlcykgcmV0dXJuIG51bGw7XG4gIGlmKCEobm90VHlwZXMgaW5zdGFuY2VvZiBBcnJheSkpIG5vdFR5cGVzPVtub3RUeXBlc107XG4gIG5vdFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAoc2VsZi50ZXN0VHlwZShpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgsIHR5cGUpKSB7XG4gICAgICB2YXIgc2NoZW1hSWQgPSB0eXBlICYmIHR5cGUuaWQgJiYgKCc8JyArIHR5cGUuaWQgKyAnPicpIHx8IHR5cGU7XG4gICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICBuYW1lOiAnbm90JyxcbiAgICAgICAgYXJndW1lbnQ6IHNjaGVtYUlkLFxuICAgICAgICBtZXNzYWdlOiBcImlzIG9mIHByb2hpYml0ZWQgdHlwZSBcIiArIHNjaGVtYUlkLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXR0cmlidXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanNvbnNjaGVtYS9saWIvYXR0cmlidXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVyaSA9IHJlcXVpcmUoJ3VybCcpO1xuXG52YXIgVmFsaWRhdGlvbkVycm9yID0gZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3IgKG1lc3NhZ2UsIGluc3RhbmNlLCBzY2hlbWEsIHByb3BlcnR5UGF0aCwgbmFtZSwgYXJndW1lbnQpIHtcbiAgaWYgKHByb3BlcnR5UGF0aCkge1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eVBhdGg7XG4gIH1cbiAgaWYgKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG4gIGlmIChzY2hlbWEpIHtcbiAgICBpZiAoc2NoZW1hLmlkKSB7XG4gICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgfVxuICB9XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gIHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCk7XG59O1xuXG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnR5ICsgJyAnICsgdGhpcy5tZXNzYWdlO1xufTtcblxudmFyIFZhbGlkYXRvclJlc3VsdCA9IGV4cG9ydHMuVmFsaWRhdG9yUmVzdWx0ID0gZnVuY3Rpb24gVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICB0aGlzLnByb3BlcnR5UGF0aCA9IGN0eC5wcm9wZXJ0eVBhdGg7XG4gIHRoaXMuZXJyb3JzID0gW107XG4gIHRoaXMudGhyb3dFcnJvciA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aHJvd0Vycm9yO1xuICB0aGlzLmRpc2FibGVGb3JtYXQgPSBvcHRpb25zICYmIG9wdGlvbnMuZGlzYWJsZUZvcm1hdCA9PT0gdHJ1ZTtcbn07XG5cblZhbGlkYXRvclJlc3VsdC5wcm90b3R5cGUuYWRkRXJyb3IgPSBmdW5jdGlvbiBhZGRFcnJvcihkZXRhaWwpIHtcbiAgdmFyIGVycjtcbiAgaWYgKHR5cGVvZiBkZXRhaWwgPT0gJ3N0cmluZycpIHtcbiAgICBlcnIgPSBuZXcgVmFsaWRhdGlvbkVycm9yKGRldGFpbCwgdGhpcy5pbnN0YW5jZSwgdGhpcy5zY2hlbWEsIHRoaXMucHJvcGVydHlQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRldGFpbCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVycm9yIGRldGFpbCcpO1xuICAgIGlmICghZGV0YWlsLm1lc3NhZ2UpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlcnJvciBtZXNzYWdlJyk7XG4gICAgaWYgKCFkZXRhaWwubmFtZSkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHZhbGlkYXRvciB0eXBlJyk7XG4gICAgZXJyID0gbmV3IFZhbGlkYXRpb25FcnJvcihkZXRhaWwubWVzc2FnZSwgdGhpcy5pbnN0YW5jZSwgdGhpcy5zY2hlbWEsIHRoaXMucHJvcGVydHlQYXRoLCBkZXRhaWwubmFtZSwgZGV0YWlsLmFyZ3VtZW50KTtcbiAgfVxuXG4gIGlmICh0aGlzLnRocm93RXJyb3IpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdGhpcy5lcnJvcnMucHVzaChlcnIpO1xuICByZXR1cm4gZXJyO1xufTtcblxuVmFsaWRhdG9yUmVzdWx0LnByb3RvdHlwZS5pbXBvcnRFcnJvcnMgPSBmdW5jdGlvbiBpbXBvcnRFcnJvcnMocmVzKSB7XG4gIGlmICh0eXBlb2YgcmVzID09ICdzdHJpbmcnIHx8IChyZXMgJiYgcmVzLnZhbGlkYXRvclR5cGUpKSB7XG4gICAgdGhpcy5hZGRFcnJvcihyZXMpO1xuICB9IGVsc2UgaWYgKHJlcyAmJiByZXMuZXJyb3JzKSB7XG4gICAgdmFyIGVycnMgPSB0aGlzLmVycm9ycztcbiAgICByZXMuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGVycnMucHVzaCh2KTtcbiAgICB9KTtcbiAgfVxufTtcblxuVmFsaWRhdG9yUmVzdWx0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKHJlcykge1xuICByZXR1cm4gdGhpcy5lcnJvcnMubWFwKGZ1bmN0aW9uKHYsaSl7IHJldHVybiBpKyc6ICcrdi50b1N0cmluZygpKydcXG4nOyB9KS5qb2luKCcnKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWYWxpZGF0b3JSZXN1bHQucHJvdG90eXBlLCBcInZhbGlkXCIsIHsgZ2V0OiBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLmVycm9ycy5sZW5ndGg7XG59IH0pO1xuXG4vKipcbiAqIERlc2NyaWJlcyBhIHByb2JsZW0gd2l0aCBhIFNjaGVtYSB3aGljaCBwcmV2ZW50cyB2YWxpZGF0aW9uIG9mIGFuIGluc3RhbmNlXG4gKiBAbmFtZSBTY2hlbWFFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBTY2hlbWFFcnJvciA9IGV4cG9ydHMuU2NoZW1hRXJyb3IgPSBmdW5jdGlvbiBTY2hlbWFFcnJvciAobXNnLCBzY2hlbWEpIHtcbiAgdGhpcy5tZXNzYWdlID0gbXNnO1xuICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgRXJyb3IuY2FsbCh0aGlzLCBtc2cpO1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBTY2hlbWFFcnJvcik7XG59O1xuU2NoZW1hRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUsXG4gIHsgY29uc3RydWN0b3I6IHt2YWx1ZTogU2NoZW1hRXJyb3IsIGVudW1lcmFibGU6IGZhbHNlfVxuICAsIG5hbWU6IHt2YWx1ZTogJ1NjaGVtYUVycm9yJywgZW51bWVyYWJsZTogZmFsc2V9XG4gIH0pO1xuXG52YXIgU2NoZW1hQ29udGV4dCA9IGV4cG9ydHMuU2NoZW1hQ29udGV4dCA9IGZ1bmN0aW9uIFNjaGVtYUNvbnRleHQgKHNjaGVtYSwgb3B0aW9ucywgcHJvcGVydHlQYXRoLCBiYXNlLCBzY2hlbWFzKSB7XG4gIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnByb3BlcnR5UGF0aCA9IHByb3BlcnR5UGF0aDtcbiAgdGhpcy5iYXNlID0gYmFzZTtcbiAgdGhpcy5zY2hlbWFzID0gc2NoZW1hcztcbn07XG5cblNjaGVtYUNvbnRleHQucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlICh0YXJnZXQpIHtcbiAgcmV0dXJuIHVyaS5yZXNvbHZlKHRoaXMuYmFzZSwgdGFyZ2V0KTtcbn07XG5cblNjaGVtYUNvbnRleHQucHJvdG90eXBlLm1ha2VDaGlsZCA9IGZ1bmN0aW9uIG1ha2VDaGlsZChzY2hlbWEsIHByb3BlcnR5TmFtZSl7XG4gIHZhciBwcm9wZXJ0eVBhdGggPSAocHJvcGVydHlOYW1lPT09dW5kZWZpbmVkKSA/IHRoaXMucHJvcGVydHlQYXRoIDogdGhpcy5wcm9wZXJ0eVBhdGgrbWFrZVN1ZmZpeChwcm9wZXJ0eU5hbWUpO1xuICB2YXIgYmFzZSA9IHVyaS5yZXNvbHZlKHRoaXMuYmFzZSwgc2NoZW1hLmlkfHwnJyk7XG4gIHZhciBjdHggPSBuZXcgU2NoZW1hQ29udGV4dChzY2hlbWEsIHRoaXMub3B0aW9ucywgcHJvcGVydHlQYXRoLCBiYXNlLCBPYmplY3QuY3JlYXRlKHRoaXMuc2NoZW1hcykpO1xuICBpZihzY2hlbWEuaWQgJiYgIWN0eC5zY2hlbWFzW2Jhc2VdKXtcbiAgICBjdHguc2NoZW1hc1tiYXNlXSA9IHNjaGVtYTtcbiAgfVxuICByZXR1cm4gY3R4O1xufVxuXG52YXIgRk9STUFUX1JFR0VYUFMgPSBleHBvcnRzLkZPUk1BVF9SRUdFWFBTID0ge1xuICAnZGF0ZS10aW1lJzogL15cXGR7NH0tKD86MFswLTldezF9fDFbMC0yXXsxfSktKDNbMDFdfDBbMS05XXxbMTJdWzAtOV0pW3RUIF0oMlswLTRdfFswMV1bMC05XSk6KFswLTVdWzAtOV0pOig2MHxbMC01XVswLTldKShcXC5cXGQrKT8oW3paXXxbKy1dKFswLTVdWzAtOV0pOig2MHxbMC01XVswLTldKSkkLyxcbiAgJ2RhdGUnOiAvXlxcZHs0fS0oPzowWzAtOV17MX18MVswLTJdezF9KS0oM1swMV18MFsxLTldfFsxMl1bMC05XSkkLyxcbiAgJ3RpbWUnOiAvXigyWzAtNF18WzAxXVswLTldKTooWzAtNV1bMC05XSk6KDYwfFswLTVdWzAtOV0pJC8sXG5cbiAgJ2VtYWlsJzogL14oPzpbXFx3XFwhXFwjXFwkXFwlXFwmXFwnXFwqXFwrXFwtXFwvXFw9XFw/XFxeXFxgXFx7XFx8XFx9XFx+XStcXC4pKltcXHdcXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC1cXC9cXD1cXD9cXF5cXGBcXHtcXHxcXH1cXH5dK0AoPzooPzooPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTlcXC1dKD8hXFwuKSl7MCw2MX1bYS16QS1aMC05XT9cXC4pK1thLXpBLVowLTldKD86W2EtekEtWjAtOVxcLV0oPyEkKSl7MCw2MX1bYS16QS1aMC05XT8pfCg/OlxcWyg/Oig/OlswMV0/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pXFwuKXszfSg/OlswMV0/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pXFxdKSkkLyxcbiAgJ2lwLWFkZHJlc3MnOiAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSQvLFxuICAnaXB2Nic6IC9eXFxzKigoKFswLTlBLUZhLWZdezEsNH06KXs3fShbMC05QS1GYS1mXXsxLDR9fDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs2fSg6WzAtOUEtRmEtZl17MSw0fXwoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezV9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsMn0pfDooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezR9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsM30pfCgoOlswLTlBLUZhLWZdezEsNH0pPzooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXszfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDR9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDJ9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezJ9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNX0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsM306KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7MX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw2fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw0fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoOigoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDd9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDV9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpKSglLispP1xccyokLyxcbiAgJ3VyaSc6IC9eW2EtekEtWl1bYS16QS1aMC05Ky0uXSo6W15cXHNdKiQvLFxuXG4gICdjb2xvcic6IC9eKCM/KFswLTlBLUZhLWZdezN9KXsxLDJ9XFxifGFxdWF8YmxhY2t8Ymx1ZXxmdWNoc2lhfGdyYXl8Z3JlZW58bGltZXxtYXJvb258bmF2eXxvbGl2ZXxvcmFuZ2V8cHVycGxlfHJlZHxzaWx2ZXJ8dGVhbHx3aGl0ZXx5ZWxsb3d8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpKSQvLFxuXG4gIC8vIGhvc3RuYW1lIHJlZ2V4IGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0MjAyMjUvNTYyOFxuICAnaG9zdG5hbWUnOiAvXig/PS57MSwyNTV9JClbMC05QS1aYS16XSg/Oig/OlswLTlBLVphLXpdfC0pezAsNjF9WzAtOUEtWmEtel0pPyg/OlxcLlswLTlBLVphLXpdKD86KD86WzAtOUEtWmEtel18LSl7MCw2MX1bMC05QS1aYS16XSk/KSpcXC4/JC8sXG4gICdob3N0LW5hbWUnOiAvXig/PS57MSwyNTV9JClbMC05QS1aYS16XSg/Oig/OlswLTlBLVphLXpdfC0pezAsNjF9WzAtOUEtWmEtel0pPyg/OlxcLlswLTlBLVphLXpdKD86KD86WzAtOUEtWmEtel18LSl7MCw2MX1bMC05QS1aYS16XSk/KSpcXC4/JC8sXG5cbiAgJ2FscGhhJzogL15bYS16QS1aXSskLyxcbiAgJ2FscGhhbnVtZXJpYyc6IC9eW2EtekEtWjAtOV0rJC8sXG4gICd1dGMtbWlsbGlzZWMnOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpICYmIHBhcnNlRmxvYXQoaW5wdXQpID09PSBwYXJzZUludChpbnB1dCwgMTApICYmICFpc05hTihpbnB1dCk7XG4gIH0sXG4gICdyZWdleCc6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBuZXcgUmVnRXhwKGlucHV0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgJ3N0eWxlJzogL1xccyooLis/KTpcXHMqKFteO10rKTs/L2csXG4gICdwaG9uZSc6IC9eXFwrKD86WzAtOV0gPyl7NiwxNH1bMC05XSQvXG59O1xuXG5GT1JNQVRfUkVHRVhQUy5yZWdleHAgPSBGT1JNQVRfUkVHRVhQUy5yZWdleDtcbkZPUk1BVF9SRUdFWFBTLnBhdHRlcm4gPSBGT1JNQVRfUkVHRVhQUy5yZWdleDtcbkZPUk1BVF9SRUdFWFBTLmlwdjQgPSBGT1JNQVRfUkVHRVhQU1snaXAtYWRkcmVzcyddO1xuXG5leHBvcnRzLmlzRm9ybWF0ID0gZnVuY3Rpb24gaXNGb3JtYXQgKGlucHV0LCBmb3JtYXQsIHZhbGlkYXRvcikge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyAmJiBGT1JNQVRfUkVHRVhQU1tmb3JtYXRdICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoRk9STUFUX1JFR0VYUFNbZm9ybWF0XSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIEZPUk1BVF9SRUdFWFBTW2Zvcm1hdF0udGVzdChpbnB1dCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgRk9STUFUX1JFR0VYUFNbZm9ybWF0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIEZPUk1BVF9SRUdFWFBTW2Zvcm1hdF0oaW5wdXQpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLmN1c3RvbUZvcm1hdHMgJiZcbiAgICAgIHR5cGVvZiB2YWxpZGF0b3IuY3VzdG9tRm9ybWF0c1tmb3JtYXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRvci5jdXN0b21Gb3JtYXRzW2Zvcm1hdF0oaW5wdXQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIG1ha2VTdWZmaXggPSBleHBvcnRzLm1ha2VTdWZmaXggPSBmdW5jdGlvbiBtYWtlU3VmZml4IChrZXkpIHtcbiAga2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gIC8vIFRoaXMgZnVuY3Rpb24gY291bGQgYmUgY2FwYWJsZSBvZiBvdXRwdXR0aW5nIHZhbGlkIGEgRUNNQVNjcmlwdCBzdHJpbmcsIGJ1dCB0aGVcbiAgLy8gcmVzdWx0aW5nIGNvZGUgZm9yIHRlc3Rpbmcgd2hpY2ggZm9ybSB0byB1c2Ugd291bGQgYmUgdGVucyBvZiB0aG91c2FuZHMgb2YgY2hhcmFjdGVycyBsb25nXG4gIC8vIFRoYXQgbWVhbnMgdGhpcyB3aWxsIHVzZSB0aGUgbmFtZSBmb3JtIGZvciBzb21lIGlsbGVnYWwgZm9ybXNcbiAgaWYgKCFrZXkubWF0Y2goL1suXFxzXFxbXFxdXS8pICYmICFrZXkubWF0Y2goL15bXFxkXS8pKSB7XG4gICAgcmV0dXJuICcuJyArIGtleTtcbiAgfVxuICBpZiAoa2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgIHJldHVybiAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgcmV0dXJuICdbJyArIEpTT04uc3RyaW5naWZ5KGtleSkgKyAnXSc7XG59O1xuXG5leHBvcnRzLmRlZXBDb21wYXJlU3RyaWN0ID0gZnVuY3Rpb24gZGVlcENvbXBhcmVTdHJpY3QgKGEsIGIpIHtcbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgaWYgKCEoYiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBhLmV2ZXJ5KGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICByZXR1cm4gZGVlcENvbXBhcmVTdHJpY3QoYVtpXSwgYltpXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgIGlmICghYSB8fCAhYikge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBkZWVwQ29tcGFyZVN0cmljdChhW3ZdLCBiW3ZdKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmRlZXBNZXJnZSA9IGZ1bmN0aW9uIGRlZXBNZXJnZSAodGFyZ2V0LCBzcmMpIHtcbiAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzcmMpO1xuICB2YXIgZHN0ID0gYXJyYXkgJiYgW10gfHwge307XG5cbiAgaWYgKGFycmF5KSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IFtdO1xuICAgIGRzdCA9IGRzdC5jb25jYXQodGFyZ2V0KTtcbiAgICBzcmMuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgaWYgKHR5cGVvZiBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBkc3RbaV0gPSBkZWVwTWVyZ2UodGFyZ2V0W2ldLCBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgIGRzdC5wdXNoKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkc3Rba2V5XSA9IHRhcmdldFtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIHNyY1trZXldICE9PSAnb2JqZWN0JyB8fCAhc3JjW2tleV0pIHtcbiAgICAgICAgZHN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgZHN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkc3Rba2V5XSA9IGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgc3JjW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBpbnN0YW5jZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWFcbiAqIEltcGxlbWVudHMgVVJJK0pTT04gUG9pbnRlciBlbmNvZGluZywgZS5nLiBcIiU3ZVwiPVwifjBcIj0+XCJ+XCIsIFwifjFcIj1cIiUyZlwiPT5cIi9cIlxuICogQHBhcmFtIG9cbiAqIEBwYXJhbSBzIFRoZSBwYXRoIHRvIHdhbGsgbyBhbG9uZ1xuICogQHJldHVybiBhbnlcbiAqL1xuZXhwb3J0cy5vYmplY3RHZXRQYXRoID0gZnVuY3Rpb24gb2JqZWN0R2V0UGF0aChvLCBzKSB7XG4gIHZhciBwYXJ0cyA9IHMuc3BsaXQoJy8nKS5zbGljZSgxKTtcbiAgdmFyIGs7XG4gIHdoaWxlICh0eXBlb2YgKGs9cGFydHMuc2hpZnQoKSkgPT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbiA9IGRlY29kZVVSSUNvbXBvbmVudChrLnJlcGxhY2UoL34wLywnficpLnJlcGxhY2UoL34xL2csJy8nKSk7XG4gICAgaWYgKCEobiBpbiBvKSkgcmV0dXJuO1xuICAgIG8gPSBvW25dO1xuICB9XG4gIHJldHVybiBvO1xufTtcblxuLyoqXG4gKiBBY2NlcHQgYW4gQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHJldHVybiBhIEpTT04gUG9pbnRlciBVUkkgZnJhZ21lbnRcbiAqIEBwYXJhbSBBcnJheSBhXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuZW5jb2RlUGF0aCA9IGZ1bmN0aW9uIGVuY29kZVBvaW50ZXIoYSl7XG5cdC8vIH4gbXVzdCBiZSBlbmNvZGVkIGV4cGxpY2l0bHkgYmVjYXVzZSBoYWNrc1xuXHQvLyB0aGUgc2xhc2ggaXMgZW5jb2RlZCBieSBlbmNvZGVVUklDb21wb25lbnRcblx0cmV0dXJuIGEubWFwKGZ1bmN0aW9uKHYpeyByZXR1cm4gJy8nK2VuY29kZVVSSUNvbXBvbmVudCh2KS5yZXBsYWNlKC9+L2csJyU3RScpOyB9KS5qb2luKCcnKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qc29uc2NoZW1hL2xpYi9oZWxwZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gcHJlc2VydmVDYW1lbENhc2Uoc3RyKSB7XG5cdHZhciBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjID0gc3RyLmNoYXJBdChpKTtcblxuXHRcdGlmIChpc0xhc3RDaGFyTG93ZXIgJiYgKC9bYS16QS1aXS8pLnRlc3QoYykgJiYgYy50b1VwcGVyQ2FzZSgpID09PSBjKSB7XG5cdFx0XHRzdHIgPSBzdHIuc3Vic3RyKDAsIGkpICsgJy0nICsgc3RyLnN1YnN0cihpKTtcblx0XHRcdGlzTGFzdENoYXJMb3dlciA9IGZhbHNlO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc0xhc3RDaGFyTG93ZXIgPSAoYy50b0xvd2VyQ2FzZSgpID09PSBjKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHN0ciA9IFtdLm1hcC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKHN0cikge1xuXHRcdHJldHVybiBzdHIudHJpbSgpO1xuXHR9KS5maWx0ZXIoZnVuY3Rpb24gKHN0cikge1xuXHRcdHJldHVybiBzdHIubGVuZ3RoO1xuXHR9KS5qb2luKCctJyk7XG5cblx0aWYgKCFzdHIubGVuZ3RoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYgKHN0ci5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cblx0aWYgKCEoL1tfLlxcLSBdKy8pLnRlc3Qoc3RyKSkge1xuXHRcdGlmIChzdHIgPT09IHN0ci50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN0clswXSAhPT0gc3RyWzBdLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBzdHJbMF0udG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cblx0c3RyID0gcHJlc2VydmVDYW1lbENhc2Uoc3RyKTtcblxuXHRyZXR1cm4gc3RyXG5cdC5yZXBsYWNlKC9eW18uXFwtIF0rLywgJycpXG5cdC50b0xvd2VyQ2FzZSgpXG5cdC5yZXBsYWNlKC9bXy5cXC0gXSsoXFx3fCQpL2csIGZ1bmN0aW9uIChtLCBwMSkge1xuXHRcdHJldHVybiBwMS50b1VwcGVyQ2FzZSgpO1xuXHR9KTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jYW1lbGNhc2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBzZXApIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHNlcCA9IHR5cGVvZiBzZXAgPT09ICd1bmRlZmluZWQnID8gJ18nIDogc2VwO1xuXG5cdHJldHVybiBzdHJcblx0XHQucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZywgJyQxJyArIHNlcCArICckMicpXG5cdFx0LnJlcGxhY2UoLyhbQS1aXSspKFtBLVpdW2EtelxcZF0rKS9nLCAnJDEnICsgc2VwICsgJyQyJylcblx0XHQudG9Mb3dlckNhc2UoKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWNhbWVsaXplL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7RmllbGRCYXNlfSBmcm9tICcuL2ZpZWxkYmFzZSc7XG5pbXBvcnQge3ZhbGlkYXRvcn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcbmltcG9ydCB7RW50aXR5fSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQge0hhc09uZX0gZnJvbSAnLi9oYXNvbmUnO1xuaW1wb3J0IHtIYXNNYW55fSBmcm9tICcuL2hhc21hbnknO1xuaW1wb3J0IHtCZWxvbmdzVG99IGZyb20gJy4vYmVsb25nc3RvJztcbmltcG9ydCB7QmVsb25nc1RvTWFueX0gZnJvbSAnLi9iZWxvbmdzdG9tYW55JztcbmltcG9ydCB7UmVmfSBmcm9tICcuL3JlZic7XG5cbmltcG9ydCB7XG4gIEZpZWxkU2NoZW1hLFxuICBIYXNPbmVTY2hlbWEsXG4gIEhhc01hbnlTY2hlbWEsXG4gIEJlbG9uZ3NUb1NjaGVtYSxcbiAgQmVsb25nc1RvTWFueVNjaGVtYSxcbn0gZnJvbSAnLi4vc2NoZW1hJztcblxuZnVuY3Rpb24gZGlzY292ZXJGaWVsZFR5cGUob2JqKSB7XG4gIGlmICh2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBIYXNPbmVTY2hlbWEpLnZhbGlkKSB7XG4gICAgcmV0dXJuICdIYXNPbmUnO1xuICB9IGVsc2UgaWYgKHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEhhc01hbnlTY2hlbWEpLnZhbGlkKSB7XG4gICAgcmV0dXJuICdIYXNNYW55JztcbiAgfSBlbHNlIGlmICh2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBCZWxvbmdzVG9TY2hlbWEpLnZhbGlkKSB7XG4gICAgcmV0dXJuICdCZWxvbmdzVG8nO1xuICB9IGVsc2UgaWYgKHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEJlbG9uZ3NUb01hbnlTY2hlbWEpLnZhbGlkKSB7XG4gICAgcmV0dXJuICdCZWxvbmdzVG9NYW55JztcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIEZpZWxkIGV4dGVuZHMgRmllbGRCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgICByZWxhdGlvbjogY2hpbGRyZW4gPyBjaGlsZHJlblswXSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoudHlwZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmlkZW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgc2V0IGlkZW50aXR5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLiRvYmouaWRLZXkgPSBuZXcgUmVmKHRoaXMuJG9iai5lbnRpdHksIHRoaXMuJG9iai5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kb2JqLmlkS2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLiRvYmouaWRlbnRpdHkgPSB0aGlzLiRvYmouaWRlbnRpdHlfID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5yZXF1aXJlZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpZEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy4kb2JqID8gdGhpcy4kb2JqLmlkS2V5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoucmVsYXRpb24gOiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVNjaGVtYShvYmopIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdG9yLnZhbGlkYXRlKG9iaiwgRmllbGRTY2hlbWEpO1xuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbGlkYXRpb24udG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBzdXBlci51cGRhdGVXaXRoKG9iaik7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICBsZXQgdHlwZV8gPSBvYmoudHlwZTtcbiAgICAgIGxldCB0eXBlID0gdHlwZV8gfHwgJ3N0cmluZyc7XG5cbiAgICAgIGxldCBpZGVudGl0eV8gPSBvYmouaWRlbnRpdHk7XG4gICAgICBsZXQgaWRlbnRpdHkgPSBpZGVudGl0eV8gfHwgZmFsc2U7XG5cbiAgICAgIGxldCByZXF1aXJlZF8gPSBvYmoucmVxdWlyZWQ7XG4gICAgICBsZXQgcmVxdWlyZWQgPSByZXF1aXJlZCB8fCBmYWxzZTtcblxuICAgICAgbGV0IGluZGV4ZWRfID0gb2JqLmluZGV4ZWQ7XG4gICAgICBsZXQgaW5kZXhlZCA9IGluZGV4ZWQgfHwgaWRlbnRpdHk7XG5cbiAgICAgIHJlc3VsdC50eXBlXyA9IHR5cGVfO1xuICAgICAgcmVzdWx0LnR5cGUgPSB0eXBlO1xuXG4gICAgICByZXN1bHQuaWRlbnRpdHlfID0gaWRlbnRpdHlfO1xuICAgICAgcmVzdWx0LmlkZW50aXR5ID0gaWRlbnRpdHk7XG5cbiAgICAgIHJlc3VsdC5pbmRleGVkXyA9IGluZGV4ZWRfO1xuICAgICAgcmVzdWx0LmluZGV4ZWQgPSBpbmRleGVkO1xuXG4gICAgICBpZiAocmVzdWx0LmlkZW50aXR5KSB7XG4gICAgICAgIC8vINGN0YLQviDRgtC+INC60LDQuiDQstGL0LPQu9GP0LTQuNGCINC60LvRjtGHINC00LvRjyDQstC90LXRiNC90LjRhSDRgdGB0YvQu9C+0LpcbiAgICAgICAgcmVzdWx0LmlkS2V5ID0gbmV3IFJlZihyZXN1bHQuZW50aXR5LCByZXN1bHQubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5yZXF1aXJlZF8gPSByZXF1aXJlZF87XG4gICAgICByZXN1bHQucmVxdWlyZWQgPSBpZGVudGl0eV8gfHwgcmVxdWlyZWRfIHx8IGZhbHNlO1xuXG4gICAgICBpZiAob2JqLnJlbGF0aW9uKSB7XG4gICAgICAgIGxldCByZWxhdGlvbl8gPSBvYmoucmVsYXRpb247XG4gICAgICAgIGxldCByZWxhdGlvbjtcblxuICAgICAgICBzd2l0Y2ggKGRpc2NvdmVyRmllbGRUeXBlKHJlbGF0aW9uXykpe1xuICAgICAgICAgIGNhc2UgJ0hhc09uZSc6XG4gICAgICAgICAgICByZWxhdGlvbiA9IG5ldyBIYXNPbmUoey4uLnJlbGF0aW9uXywgZW50aXR5OiBvYmouZW50aXR5fSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSGFzTWFueSc6XG4gICAgICAgICAgICByZWxhdGlvbiA9IG5ldyBIYXNNYW55KHsuLi5yZWxhdGlvbl8sIGVudGl0eTogb2JqLmVudGl0eSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdCZWxvbmdzVG8nOlxuICAgICAgICAgICAgcmVsYXRpb24gPSBuZXcgQmVsb25nc1RvKHsuLi5yZWxhdGlvbl8sIGVudGl0eTogb2JqLmVudGl0eX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0JlbG9uZ3NUb01hbnknOlxuICAgICAgICAgICAgcmVsYXRpb24gPSBuZXcgQmVsb25nc1RvTWFueSh7Li4ucmVsYXRpb25fLCBlbnRpdHk6IG9iai5lbnRpdHl9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5yZWxhdGlvbiA9IHJlbGF0aW9uO1xuICAgICAgICBkZWxldGUgcmVzdWx0LnR5cGVfO1xuICAgICAgICBkZWxldGUgcmVzdWx0LnR5cGU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUgfHwgcHJvcHMudHlwZV8sXG4gICAgICBpZGVudGl0eTogcHJvcHMuaWRlbnRpdHkgfHwgcHJvcHMuaWRlbnRpdHlfICxcbiAgICAgIHJlcXVpcmVkOiBwcm9wcy5yZXF1aXJlZCB8fCBwcm9wcy5yZXF1aXJlZF8sXG4gICAgICBpbmRleGVkOiBwcm9wcy5pbmRleGVkIHx8IHByb3BzLmluZGV4ZWRfLFxuICAgICAgaWRLZXk6IHByb3BzLmlkS2V5ID8gcHJvcHMuaWRLZXkudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJlbGF0aW9uOiBwcm9wcy5yZWxhdGlvbiA/IHByb3BzLnJlbGF0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXQgZ2V0IGNsZWFuIG9iamVjdCB3aXRoIG5vIGRlZmF1bHQgdmFsdWVzXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGVfLFxuICAgICAgaWRlbnRpdHk6IHByb3BzLmlkZW50aXR5XyxcbiAgICAgIHJlcXVpcmVkOiBwcm9wcy5yZXF1aXJlZF8sXG4gICAgICBpbmRleGVkOiBwcm9wcy5pbmRleGVkXyxcbiAgICAgIHJlbGF0aW9uOiBwcm9wcy5yZWxhdGlvbiA/IHByb3BzLnJlbGF0aW9uLnRvSlNPTigpIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvZmllbGQuanNcbiAqKi8iLCJpbXBvcnQge01vZGVsQmFzZX0gZnJvbSAnLi9tb2RlbGJhc2UnO1xuaW1wb3J0IHt2YWxpZGF0b3J9IGZyb20gJy4uL3ZhbGlkYXRvcic7XG5pbXBvcnQge0ZpZWxkU2NoZW1hfSBmcm9tICcuLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRCYXNlIGV4dGVuZHMgTW9kZWxCYXNlIHtcbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIHZhbGlkYXRlU2NoZW1hKG9iaikge1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBGaWVsZFNjaGVtYSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IodmFsaWRhdGlvbi50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouZW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBzdXBlci51cGRhdGVXaXRoKG9iaik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCBlbnRpdHlfID0gb2JqLmVudGl0eTtcbiAgICAgIGxldCBlbnRpdHkgPSBlbnRpdHlfO1xuXG4gICAgICByZXN1bHQuZW50aXR5ID0gZW50aXR5O1xuICAgICAgcmVzdWx0LmVudGl0eV8gPSBlbnRpdHlfO1xuXG4gICAgICB0aGlzLiRvYmogPSB7XG4gICAgICAgIC4uLnJlc3VsdFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBpdCBnZXQgZml4ZWQgb2JqZWN0XG4gIHRvT2JqZWN0KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9PYmplY3QoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBlbnRpdHk6IHByb3BzLmVudGl0eSB8fCBwcm9wcy5lbnRpdHlfICxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgLy8gZW50aXR5OiBwcm9wcy5lbnRpdHlfLFxuICAgIH0pKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvZmllbGRiYXNlLmpzXG4gKiovIiwiaW1wb3J0IHtSZWZCYXNlfSBmcm9tICcuL3JlZmJhc2UnO1xuaW1wb3J0IHtIYXNPbmVTY2hlbWF9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQge3ZhbGlkYXRvcn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcbmltcG9ydCB7UkVGX1BBVFRFUk59IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcbmltcG9ydCBjYW1lbGNhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuZXhwb3J0IGNsYXNzIEhhc09uZSBleHRlbmRzIFJlZkJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAuLi5wcm9wcyxcbiAgICB9O1xuICAgIGlmIChyZXN1bHQucmVmICYmICFyZXN1bHQuaGFzT25lKSB7XG4gICAgICByZXN1bHQuaGFzT25lID0gcmVzdWx0LnJlZjtcbiAgICAgIGRlbGV0ZSByZXN1bHQucmVmO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCBoYXNPbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5oYXNPbmUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgcmVmKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaGFzT25lIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGVTY2hlbWEob2JqKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEhhc09uZVNjaGVtYSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IodmFsaWRhdGlvbi50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGhhc09uZV8gPSBvYmouaGFzT25lO1xuXG4gICAgICBsZXQgaGFzT25lO1xuICAgICAgaWYgKGhhc09uZV8pIHtcbiAgICAgICAgaGFzT25lID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gaGFzT25lXy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIGhhc09uZS5lbnRpdHkgPSByZXNbMV0gfHwgb2JqLmVudGl0eTtcbiAgICAgICAgaGFzT25lLmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5oYXNPbmVfID0gaGFzT25lXztcbiAgICAgIHJlc3VsdC5oYXNPbmUgPSBoYXNPbmU7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGhhc09uZTogcHJvcHMuaGFzT25lID8gcHJvcHMuaGFzT25lLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXQgZ2V0IGNsZWFuIG9iamVjdCB3aXRoIG5vIGRlZmF1bHQgdmFsdWVzXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGhhc09uZTogcHJvcHMuaGFzT25lXyxcbiAgICB9KSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2hhc29uZS5qc1xuICoqLyIsImltcG9ydCB7UmVmQmFzZVNjaGVtYX0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7dmFsaWRhdG9yfSBmcm9tICcuLi92YWxpZGF0b3InO1xuaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgUmVmQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMudXBkYXRlV2l0aChvYmopO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoubmFtZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvT2JqZWN0KCkpO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lIHx8IHByb3BzLm5hbWVfLFxuICAgIH07XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXyxcbiAgICB9O1xuICB9XG5cbiAgdmFsaWRhdGVTY2hlbWEob2JqKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRvci52YWxpZGF0ZShvYmosIFJlZkJhc2VTY2hlbWEpO1xuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbGlkYXRpb24udG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIHRoaXMudmFsaWRhdGVTY2hlbWEob2JqKTtcblxuICAgICAgbGV0IG5hbWVfID0gb2JqLm5hbWU7XG5cbiAgICAgIGxldCBuYW1lID0gbmFtZSA/IGNhbWVsY2FzZShuYW1lXy50cmltKCkpIDogbmFtZTtcblxuICAgICAgcmVzdWx0Lm5hbWVfID0gbmFtZV87XG4gICAgICByZXN1bHQubmFtZSA9IG5hbWU7XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnRvSlNPTigpKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvcmVmYmFzZS5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBSRUZfUEFUVEVSTiA9IC9eKC4qPykoPzojKC4qPykpPyQvO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JRF9GSUVMRE5BTUUgPSAnaWQnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JRF9GSUVMRCA9IHtcbiAgbmFtZTogREVGQVVMVF9JRF9GSUVMRE5BTUUsXG4gIGlkZW50aXR5OiB0cnVlLFxuICByZXF1aXJlZDogdHJ1ZSxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9kZWZpbml0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7IERFRkFVTFRfSURfRklFTEROQU1FIH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBSZWYge1xuICBjb25zdHJ1Y3RvcihlbnRpdHksIGZpZWxkKSB7XG4gICAgaWYgKHR5cGVvZiBlbnRpdHkgPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIH0gZWxzZSBpZiAoZW50aXR5IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICB0aGlzLmVudGl0eSA9IGVudGl0eS5lbnRpdHk7XG4gICAgICB0aGlzLmZpZWxkID0gZW50aXR5LmZpZWxkO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmVudGl0eX0jJHt0aGlzLmZpZWxkIHx8IERFRkFVTFRfSURfRklFTEROQU1FfWA7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9yZWYuanNcbiAqKi8iLCJpbXBvcnQge1JlZkJhc2V9IGZyb20gJy4vcmVmYmFzZSc7XG5pbXBvcnQge0hhc01hbnlTY2hlbWF9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQge3ZhbGlkYXRvcn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcbmltcG9ydCB7UkVGX1BBVFRFUk59IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcbmltcG9ydCBjYW1lbGNhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuZXhwb3J0IGNsYXNzIEhhc01hbnkgZXh0ZW5kcyBSZWZCYXNlIHtcblxuICBzdGF0aWMgY29tcG9zZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucHJvcHMsXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnJlZiAmJiAhcmVzdWx0Lmhhc01hbnkpIHtcbiAgICAgIHJlc3VsdC5oYXNNYW55ID0gcmVzdWx0LnJlZjtcbiAgICAgIGRlbGV0ZSByZXN1bHQucmVmO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCBoYXNNYW55KCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouaGFzTWFueSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCByZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5oYXNNYW55IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGVTY2hlbWEob2JqKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEhhc01hbnlTY2hlbWEpO1xuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbGlkYXRpb24udG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlV2l0aChvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBzdXBlci51cGRhdGVXaXRoKG9iaik7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuJG9iaiA/IHsuLi50aGlzLiRvYmp9IDoge307XG5cbiAgICAgIGxldCBoYXNNYW55XyA9IG9iai5oYXNNYW55O1xuXG4gICAgICBsZXQgaGFzTWFueTtcbiAgICAgIGlmIChoYXNNYW55Xykge1xuICAgICAgICBoYXNNYW55ID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gaGFzTWFueV8ubWF0Y2goUkVGX1BBVFRFUk4pO1xuICAgICAgICBoYXNNYW55LmVudGl0eSA9IHJlc1sxXSB8fCBvYmouZW50aXR5O1xuICAgICAgICBoYXNNYW55LmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5oYXNNYW55XyA9IGhhc01hbnlfO1xuICAgICAgcmVzdWx0Lmhhc01hbnkgPSBoYXNNYW55O1xuXG4gICAgICB0aGlzLiRvYmogPSB7XG4gICAgICAgIC4uLnJlc3VsdFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgLy8gaXQgZ2V0IGZpeGVkIG9iamVjdFxuICB0b09iamVjdCgpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvT2JqZWN0KCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgaGFzTWFueTogcHJvcHMuaGFzTWFueSA/IHByb3BzLmhhc01hbnkudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBpdCBnZXQgY2xlYW4gb2JqZWN0IHdpdGggbm8gZGVmYXVsdCB2YWx1ZXNcbiAgdG9KU09OKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuJG9iajtcbiAgICBsZXQgcmVzID0gc3VwZXIudG9KU09OKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgaGFzTWFueTogcHJvcHMuaGFzTWFueV8sXG4gICAgfSkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9oYXNtYW55LmpzXG4gKiovIiwiaW1wb3J0IHtSZWZCYXNlfSBmcm9tICcuL3JlZmJhc2UnO1xuaW1wb3J0IHtCZWxvbmdzVG9TY2hlbWF9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQge3ZhbGlkYXRvcn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcbmltcG9ydCB7UkVGX1BBVFRFUk59IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vcmVmJztcbmltcG9ydCBjYW1lbGNhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuZXhwb3J0IGNsYXNzIEJlbG9uZ3NUbyBleHRlbmRzIFJlZkJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAuLi5wcm9wcyxcbiAgICB9O1xuICAgIGlmIChyZXN1bHQucmVmICYmICFyZXN1bHQuYmVsb25nc1RvKSB7XG4gICAgICByZXN1bHQuYmVsb25nc1RvID0gcmVzdWx0LnJlZjtcbiAgICAgIGRlbGV0ZSByZXN1bHQucmVmO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgc3VwZXIob2JqKTtcbiAgfVxuXG4gIGdldCBiZWxvbmdzVG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5iZWxvbmdzVG8gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgcmVmKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouYmVsb25nc1RvIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGVTY2hlbWEob2JqKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRvci52YWxpZGF0ZShvYmosIEJlbG9uZ3NUb1NjaGVtYSk7XG4gICAgaWYgKCF2YWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IodmFsaWRhdGlvbi50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXaXRoKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHN1cGVyLnVwZGF0ZVdpdGgob2JqKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4kb2JqID8gey4uLnRoaXMuJG9ian0gOiB7fTtcblxuICAgICAgbGV0IGJlbG9uZ3NUb18gPSBvYmouYmVsb25nc1RvO1xuXG4gICAgICBsZXQgYmVsb25nc1RvO1xuICAgICAgaWYgKGJlbG9uZ3NUb18pIHtcbiAgICAgICAgYmVsb25nc1RvID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gYmVsb25nc1RvXy5tYXRjaChSRUZfUEFUVEVSTik7XG4gICAgICAgIGJlbG9uZ3NUby5lbnRpdHkgPSByZXNbMV0gfHwgb2JqLmVudGl0eTtcbiAgICAgICAgYmVsb25nc1RvLmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5iZWxvbmdzVG9fID0gYmVsb25nc1RvXztcbiAgICAgIHJlc3VsdC5iZWxvbmdzVG8gPSBiZWxvbmdzVG87XG5cbiAgICAgIHRoaXMuJG9iaiA9IHtcbiAgICAgICAgLi4ucmVzdWx0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGJlbG9uZ3NUbzogcHJvcHMuYmVsb25nc1RvID8gcHJvcHMuYmVsb25nc1RvLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXQgZ2V0IGNsZWFuIG9iamVjdCB3aXRoIG5vIGRlZmF1bHQgdmFsdWVzXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgcHJvcHMgPSB0aGlzLiRvYmo7XG4gICAgbGV0IHJlcyA9IHN1cGVyLnRvSlNPTigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGJlbG9uZ3NUbzogcHJvcHMuYmVsb25nc1RvXyxcbiAgICB9KSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL2JlbG9uZ3N0by5qc1xuICoqLyIsImltcG9ydCB7UmVmQmFzZX0gZnJvbSAnLi9yZWZiYXNlJztcbmltcG9ydCB7QmVsb25nc1RvTWFueVNjaGVtYX0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7dmFsaWRhdG9yfSBmcm9tICcuLi92YWxpZGF0b3InO1xuaW1wb3J0IHtSRUZfUEFUVEVSTn0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5pbXBvcnQge1JlZn0gZnJvbSAnLi9yZWYnO1xuaW1wb3J0IGNhbWVsY2FzZSBmcm9tICdjYW1lbGNhc2UnO1xuXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvTWFueSBleHRlbmRzIFJlZkJhc2Uge1xuXG4gIHN0YXRpYyBjb21wb3NlKHByb3BzLCBjaGlsZHJlbikge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAuLi5wcm9wcyxcbiAgICB9O1xuICAgIGlmIChyZXN1bHQucmVmICYmICFyZXN1bHQuYmVsb25nc1RvTWFueSkge1xuICAgICAgcmVzdWx0LmJlbG9uZ3NUb01hbnkgPSByZXN1bHQucmVmO1xuICAgICAgZGVsZXRlIHJlc3VsdC5yZWY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICBzdXBlcihvYmopO1xuICB9XG5cbiAgZ2V0IGJlbG9uZ3NUb01hbnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuJG9iaiA/IHRoaXMuJG9iai5iZWxvbmdzVG9NYW55IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHVzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmoudXNpbmcgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgcmVmKCkge1xuICAgIHJldHVybiB0aGlzLiRvYmogPyB0aGlzLiRvYmouYmVsb25nc1RvTWFueSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhbGlkYXRlU2NoZW1hKG9iaikge1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0b3IudmFsaWRhdGUob2JqLCBCZWxvbmdzVG9NYW55U2NoZW1hKTtcbiAgICBpZiAoIXZhbGlkYXRpb24udmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih2YWxpZGF0aW9uLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVdpdGgob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgc3VwZXIudXBkYXRlV2l0aChvYmopO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiRvYmogPyB7Li4udGhpcy4kb2JqfSA6IHt9O1xuXG4gICAgICBsZXQgYmVsb25nc1RvTWFueV8gPSBvYmouYmVsb25nc1RvTWFueTtcblxuICAgICAgbGV0IHVzaW5nXyA9IG9iai51c2luZztcblxuICAgICAgbGV0IGJlbG9uZ3NUb01hbnk7XG4gICAgICBpZiAoYmVsb25nc1RvTWFueV8pIHtcbiAgICAgICAgYmVsb25nc1RvTWFueSA9IG5ldyBSZWYoKTtcbiAgICAgICAgbGV0IHJlcyA9IGJlbG9uZ3NUb01hbnlfLm1hdGNoKFJFRl9QQVRURVJOKTtcbiAgICAgICAgYmVsb25nc1RvTWFueS5lbnRpdHkgPSByZXNbMV0gfHwgb2JqLmVudGl0eTtcbiAgICAgICAgYmVsb25nc1RvTWFueS5maWVsZCA9IHJlc1syXSA/IGNhbWVsY2FzZShyZXNbMl0udHJpbSgpKSA6ICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXNpbmc7XG4gICAgICBpZiAodXNpbmdfKSB7XG4gICAgICAgIHVzaW5nID0gbmV3IFJlZigpO1xuICAgICAgICBsZXQgcmVzID0gdXNpbmdfLm1hdGNoKFJFRl9QQVRURVJOKTtcbiAgICAgICAgdXNpbmcuZW50aXR5ID0gcmVzWzFdIHx8IG9iai5uYW1lIHx8IG9iai5lbnRpdHk7XG4gICAgICAgIHVzaW5nLmZpZWxkID0gcmVzWzJdID8gY2FtZWxjYXNlKHJlc1syXS50cmltKCkpIDogb2JqLmVudGl0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXNpbmcgPSBuZXcgUmVmKGAke29iai5uYW1lIHx8IG9iai5lbnRpdHl9IyR7b2JqLmVudGl0eS50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5uYW1lXyAmJiB1c2luZykge1xuICAgICAgICByZXN1bHQubmFtZSA9IHVzaW5nLmVudGl0eTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LmJlbG9uZ3NUb01hbnlfID0gYmVsb25nc1RvTWFueV87XG4gICAgICByZXN1bHQuYmVsb25nc1RvTWFueSA9IGJlbG9uZ3NUb01hbnk7XG5cbiAgICAgIHJlc3VsdC51c2luZ18gPSB1c2luZ187XG4gICAgICByZXN1bHQudXNpbmcgPSB1c2luZztcblxuICAgICAgdGhpcy4kb2JqID0ge1xuICAgICAgICAuLi5yZXN1bHRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIC8vIGl0IGdldCBmaXhlZCBvYmplY3RcbiAgdG9PYmplY3QoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b09iamVjdCgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIGJlbG9uZ3NUb01hbnk6IHByb3BzLmJlbG9uZ3NUb01hbnkgPyBwcm9wcy5iZWxvbmdzVG9NYW55LnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgICB1c2luZzogcHJvcHMudXNpbmcgPyBwcm9wcy51c2luZy50b1N0cmluZygpIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIGl0IGdldCBjbGVhbiBvYmplY3Qgd2l0aCBubyBkZWZhdWx0IHZhbHVlc1xuICB0b0pTT04oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy4kb2JqO1xuICAgIGxldCByZXMgPSBzdXBlci50b0pTT04oKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBiZWxvbmdzVG9NYW55OiBwcm9wcy5iZWxvbmdzVG9NYW55XyxcbiAgICAgIHVzaW5nOiBwcm9wcy51c2luZ18sXG4gICAgfSkpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbC9iZWxvbmdzdG9tYW55LmpzXG4gKiovIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vbW9kZWwvZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIE1vZGVsUGFja2FnZSB7XG5cbiAgc3RhdGljIGNvbXBvc2UocHJvcHMsIGVudGl0eUxpc3QpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1vZGVsUGFja2FnZShwcm9wcyk7XG4gICAgZW50aXR5TGlzdC5mb3JFYWNoKChlbnRpdHkpPT4ge1xuICAgICAgcmVzdWx0LmFkZChlbnRpdHkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDRgdC/0LjRgdC+0Log0LLRgdC10YUgZW50aXR5XG4gICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAvLyDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LUg0LIg0L/QsNC60LXRgtC1IGlkZW50aXR5XG4gICAgdGhpcy5pZGVudGl0eUZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICAvLyByZWYg0LTQu9GPINC40YHQv9GA0LDQstC70LXQvdC40LlcbiAgICB0aGlzLnJlbGF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGFkZChlbnRpdHkpIHtcbiAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgRW50aXR5KSB7XG4gICAgICB0aGlzLmVudGl0aWVzLnNldChlbnRpdHkubmFtZSwgZW50aXR5KTtcbiAgICAgIGVudGl0eS5lbnN1cmVJZHModGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBlbnRpdHk7XG4gIH1cblxuICBnZXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmdldChuYW1lKTtcbiAgfVxuXG4gIGNyZWF0ZShqc29uKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG5ldyBFbnRpdHkoanNvbikpO1xuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcbiAgICBsZXQgZW50aXR5ID0gdGhpcy5lbnRpdGllcy5nZXQobmFtZSk7XG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUobmFtZSk7XG4gICAgICBlbnRpdHkucmVtb3ZlSWRzKHRoaXMpO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5zaXplO1xuICB9XG4gIGVuc3VyZUFsbCgpIHtcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGUpPT4ge1xuICAgICAgZS5lbnN1cmVGS3ModGhpcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVsL21vZGVscGFja2FnZS5qc1xuICoqLyIsImltcG9ydCB7RW50aXR5fSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7TW9kZWxQYWNrYWdlfSBmcm9tICcuL21vZGVscGFja2FnZSc7XG5pbXBvcnQge0hhc09uZX0gZnJvbSAnLi9oYXNvbmUnO1xuaW1wb3J0IHtIYXNNYW55fSBmcm9tICcuL2hhc21hbnknO1xuaW1wb3J0IHtCZWxvbmdzVG99IGZyb20gJy4vYmVsb25nc3RvJztcbmltcG9ydCB7QmVsb25nc1RvTWFueX0gZnJvbSAnLi9iZWxvbmdzdG9tYW55JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoVF8sIHByb3BzLCAuLi5hdHRyKSB7XG4gIGxldCBUO1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIFRfKSB7XG4gICAgc3dpdGNoIChUXy50b0xvd2VyQ2FzZSgpKXtcbiAgICAgIGNhc2UgJ2VudGl0eSc6XG4gICAgICAgIFQgPSBFbnRpdHk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpZWxkJzpcbiAgICAgICAgVCA9IEZpZWxkO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYXNvbmUnOlxuICAgICAgICBUID0gSGFzT25lO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYXNtYW55JzpcbiAgICAgICAgVCA9IEhhc01hbnk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JlbG9uZ3N0byc6XG4gICAgICAgIFQgPSBCZWxvbmdzVG87XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JlbG9uZ3N0b21hbnknOlxuICAgICAgICBUID0gQmVsb25nc1RvTWFueTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9kZWwnOlxuICAgICAgY2FzZSAnbW9kZWxQYWNrYWdlJzpcbiAgICAgICAgVCA9IE1vZGVsUGFja2FnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBUID0gVF87XG4gIH1cbiAgcmV0dXJuIFQuY29tcG9zZShwcm9wcywgYXR0cik7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWwvY29tcG9zZS5qc1xuICoqLyIsIi8qKiBAanN4IGNvbXBvc2UgKi9cbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5pbXBvcnQge2NvbXBvc2UsIEVudGl0eSwgRmllbGQsIEhhc01hbnksIEhhc09uZSwgQmVsb25nc1RvLCBCZWxvbmdzVG9NYW55LCBNb2RlbFBhY2thZ2UsIERFRkFVTFRfSURfRklFTER9IGZyb20gJy4uLy4uL3NyYy9tb2RlbCc7XG5cbmRlc2NyaWJlKCdyZWFjdC13YXknLCAoKT0+IHtcblxuICBkZXNjcmliZSgnRW50aXR5JywgKCkgPT4ge1xuXG4gICAgaXQoJ2NyZWF0ZSBlbXB0eSBtb2RlbCcsKCkgPT4ge1xuICAgICAgZXhwZWN0KCgpPT48RW50aXR5Lz4pLnRvLm5vdC50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ25vdCBjcmVhdGUgd3JvbmcgbW9kZWwnLCgpID0+IHtcbiAgICAgIGV4cGVjdCgoKT0+PEVudGl0eSBzb21lPXsxfS8+KS50by50aHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ25vdCB0aHJvd3Mgd2l0aCBlbXB0eSBkYXRhJywoKSA9PiB7XG4gICAgICBsZXQgZSA9IDxFbnRpdHkvPjtcbiAgICAgIGV4cGVjdCgoKT0+IGUudXBkYXRlV2l0aCgpKS50by5ub3QudGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCd0aHJvd3Mgd2l0aCBpbnZhbGlkIGRhdGEnLCgpID0+IHtcbiAgICAgIGxldCBlID0gPEVudGl0eS8+O1xuICAgICAgZXhwZWN0KCgpPT4gZS51cGRhdGVXaXRoKHtzb21lOiAxfSkpLnRvLnRocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnY2FuXFwndCBhY2Nlc3MgdG8gcHJpdmF0ZSBmaWVsZHMnLCgpID0+IHtcbiAgICAgIGxldCBlID0gPEVudGl0eS8+O1xuXG4gICAgICBleHBlY3QoKCk9PiBlLnRpdGxlID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLmRlc2NyaXB0aW9uID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLm5hbWUgPSAnc29tZVRoaW5nJykudG8udGhyb3coKTtcbiAgICAgIGV4cGVjdCgoKT0+IGUucmVsYXRpb25zID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLnJlcXVpcmVkID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLmlkZW50aXR5ID0gJ3NvbWVUaGluZycpLnRvLnRocm93KCk7XG4gICAgICBleHBlY3QoKCk9PiBlLmZpZWxkcyA9ICdzb21lVGhpbmcnKS50by50aHJvdygpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnZGVmYXVsdCBkYXRhIGlzIHVuZGVmaW5lZCcsKCkgPT4ge1xuICAgICAgbGV0IGUgPSA8RW50aXR5Lz47XG4gICAgICBleHBlY3QoZS50aXRsZSkudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUuZGVzY3JpcHRpb24pLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLm5hbWUpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLnJlbGF0aW9ucykudG8uYmUuYW4oJ3VuZGVmaW5lZCcpO1xuICAgICAgZXhwZWN0KGUucmVxdWlyZWQpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICAgIGV4cGVjdChlLmlkZW50aXR5KS50by5iZS5hbigndW5kZWZpbmVkJyk7XG4gICAgICBleHBlY3QoZS5maWVsZHMpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICB9KTtcblxuICAgIGl0KCdfaWQgYW5kIGlkIGlzIHRoZSBzYW1lJywgKCk9PiB7XG4gICAgICBleHBlY3QoKCk9PlxuICAgICAgICA8ZW50aXR5IG5hbWU9J0EnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdfaWQnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nX2lkJyBpZGVudGl0eS8+XG4gICAgICAgIDwvZW50aXR5PikudG8udGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdhY2NlcHQgdmFsaWQgZGF0YScsKCkgPT4ge1xuICAgICAgbGV0IGUgPSA8ZW50aXR5Lz47XG5cbiAgICAgIGV4cGVjdCgoKT0+XG4gICAgICBlLnVwZGF0ZVdpdGgoe1xuICAgICAgICAgIG5hbWU6ICcgdGVzdCBFbnRpdHkgJyxcbiAgICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIHRlc3QgRW50aXR5IGRlc2NyaWJlICcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUgZmllbGQyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGaWVsZCAzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDQnLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDQgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ1JyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBiZWxvbmdzVG86ICcjRmllbGQxJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgKS50by5ub3QudGhyb3coKTtcblxuICAgICAgZXhwZWN0KGUubmFtZSkudG8uYmUuZXF1YWwoJ1Rlc3RFbnRpdHknKTtcbiAgICAgIGV4cGVjdChlLmZpZWxkcy5zaXplKS50by5iZS5lcXVhbCg5KTtcbiAgICAgIGV4cGVjdChlLnJlbGF0aW9ucy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChlLmlkZW50aXR5LnNpemUpLnRvLmJlLmVxdWFsKDEpO1xuICAgICAgZXhwZWN0KGUucmVxdWlyZWQuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG5cbiAgICAgIGV4cGVjdChlLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgbmFtZTogJyB0ZXN0IEVudGl0eSAnLFxuICAgICAgICB0aXRsZTogJyB0ZXN0IEVudGl0eSB0aXRsZSAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJyB0ZXN0IEVudGl0eSBkZXNjcmliZSAnLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZpZWxkMScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmllbGQyJyxcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlIGZpZWxkMicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRmllbGQgMycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdmaWVsZDMgZGVzY3JpcHRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkNCcsXG4gICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmllbGQ0IGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDUnLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkNlJlZicsXG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGhhc09uZTogJ01vZGVsL1VzZXIjaWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmaWVsZDdSZWYnLFxuICAgICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAgICBoYXNPbmU6ICdBY3RvciNpZCcsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZpZWxkOFJlZicsXG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGJlbG9uZ3NUbzogJyNGaWVsZDEnLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgZXhwZWN0KGUudG9PYmplY3QoKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgIG5hbWU6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgdGl0bGU6ICdUZXN0IEVudGl0eSB0aXRsZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVzdCBFbnRpdHkgZGVzY3JpYmUnLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIGlkS2V5OiAnVGVzdEVudGl0eSNpZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQxJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDEnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWVsZDInLFxuICAgICAgICAgICAgZW50aXR5OiAnVGVzdEVudGl0eScsXG4gICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZpZWxkMicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkMycsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQzIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ0JyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDQgdGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWVsZDQgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkNScsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ1JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ1JyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ2UmVmJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDYgcmVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ2IHJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBoYXNPbmU6ICdNb2RlbC9Vc2VyI2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpZWxkN1JlZicsXG4gICAgICAgICAgICBlbnRpdHk6ICdUZXN0RW50aXR5JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRmllbGQ3IHJlZicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkNyByZWYnLFxuICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgaGFzT25lOiAnQWN0b3IjaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZmllbGQ4UmVmJyxcbiAgICAgICAgICAgIGVudGl0eTogJ1Rlc3RFbnRpdHknLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWVsZDggcmVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQ4IHJlZicsXG4gICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICBiZWxvbmdzVG86ICdUZXN0RW50aXR5I2ZpZWxkMScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmaXh1cCBpZGVudGl0eSBmaWVsZHMnLCgpPT4ge1xuICAgICAgaXQoJ25vIGZpZWxkcycsKCk9PiB7XG4gICAgICAgIGxldCBlMSA9IDxlbnRpdHkgbmFtZT0ndGVzdDEnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJy8+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICBleHBlY3QoZTEudG9KU09OKCkpLnRvLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2lkZW50aXR5JzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ25hbWUnOiAnaWQnLFxuICAgICAgICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ2lkIGZpZWxkJywoKT0+IHtcblxuICAgICAgICBsZXQgZTIgPSA8ZW50aXR5IG5hbWU9J3Rlc3QxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdJZCcvPlxuICAgICAgICA8L2VudGl0eT47XG5cbiAgICAgICAgZXhwZWN0KGUyLnRvSlNPTigpKS50by5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAndGVzdDEnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpZGVudGl0eSc6IHRydWUsXG4gICAgICAgICAgICAgICduYW1lJzogJ0lkJyxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdfaWQgZmllbGQnLCgpPT4ge1xuICAgICAgICBsZXQgZTMgPSA8ZW50aXR5IG5hbWU9J3Rlc3QxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdfSWQnLz5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGV4cGVjdChlMy50b0pTT04oKSkudG8uZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ3Rlc3QxJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaWRlbnRpdHknOiB0cnVlLFxuICAgICAgICAgICAgICAnbmFtZSc6ICdfSWQnLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ2ZpeHVwIGZpZWxkIGNvbnRhaW5zIGVudGl0eScsKCk9PiB7XG4gICAgICAgIGxldCBmMSA9IDxlbnRpdHkgbmFtZT0nZml4dXAxJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScgdHlwZT0nc3RyaW5nJy8+XG4gICAgICAgIDwvZW50aXR5PjtcbiAgICAgICAgZXhwZWN0KGYxLm5hbWUpLnRvLmJlLmVxdWFsKCdGaXh1cDEnKTtcbiAgICAgICAgZXhwZWN0KGYxLmZpZWxkcy5nZXQoJ2lkJykuZW50aXR5KS50by5iZS5lcXVhbCgnRml4dXAxJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdmayBhbmQgaWRzJywoKT0+IHtcbiAgICAgIGl0KCd2YWxpZGF0ZSBmayByZWZlcmVuY2UnLCAoKT0+IHtcbiAgICAgICAgbGV0IGUxID0gPGVudGl0eSBuYW1lPSdURXN0MSc+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5Lz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0naWQnIGlkZW50aXR5Lz5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBlMiA9IDxlbnRpdHkgbmFtZT0nVGVzdDInPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJyBpZGVudGl0eS8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJyBpZGVudGl0eS8+XG4gICAgICAgIDwvZW50aXR5PjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnTW9kZWxQYWNrYWdlJywoKT0+IHtcblxuICAgIGl0KCdjcmVhdGUgZW1wdHkgbW9kZWwnLCgpPT4ge1xuICAgICAgbGV0IG1vZGVsID0gPG1vZGVsLz47XG4gICAgICBleHBlY3QobW9kZWwpLnRvLmJlLmluc3RhbmNlb2YoTW9kZWxQYWNrYWdlKTtcbiAgICAgIGV4cGVjdChtb2RlbC5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnY3JlYXRlIG1vZGVsIHdpdGggZW50aXRpZXMnLCgpPT4ge1xuICAgICAgbGV0IG1vZGVsID0gPG1vZGVsPlxuICAgICAgICA8ZW50aXR5IG5hbWU9J1VzZXInPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSduYW1lJy8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2dyb3Vwcyc+XG4gICAgICAgICAgICA8YmVsb25nc1RvTWFueSByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PlxuICAgICAgICA8ZW50aXR5IG5hbWU9J0dyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nbmFtZScvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lPSdtb2RlcmF0b3InPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J3VzZXJzJz5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IHJlZj0nVXNlcicgbmFtZT0nVXNlckdyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+XG4gICAgICAgIDxlbnRpdHkgbmFtZT0nVXNlckdyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0ndXNlcic+XG4gICAgICAgICAgICA8YmVsb25nc1RvIHJlZj0nVXNlcicgbmFtZT0nVXNlckdyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nZ3JvdXAnPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXInIG5hbWU9J1VzZXJHcm91cCcvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PlxuICAgICAgPC9tb2RlbD47XG4gICAgICBleHBlY3QobW9kZWwpLnRvLmJlLmluc3RhbmNlb2YoTW9kZWxQYWNrYWdlKTtcbiAgICAgIGV4cGVjdChtb2RlbC5lbnRpdGllcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgIGV4cGVjdChtb2RlbC5yZWxhdGlvbnMuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnY3J1ZCBlbnRpdHknLCAoKT0+IHtcbiAgICAgIGxldCBtb2RlbCA9IDxtb2RlbC8+O1xuICAgICAgZXhwZWN0KG1vZGVsLnNpemUpLnRvLmJlLmVxdWFsKDApO1xuICAgICAgZXhwZWN0KCgpPT5tb2RlbC5hZGQoXG4gICAgICAgIDxlbnRpdHkgbmFtZSA9ICdUZXN0Mic+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5IC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJyBpZGVudGl0eSAvPlxuICAgICAgICA8L2VudGl0eT4pXG4gICAgICApLnRvLm5vdC50aHJvdygpO1xuXG4gICAgICBleHBlY3QobW9kZWwuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICBleHBlY3QobW9kZWwuZ2V0KCdUZXN0MicpLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICBuYW1lOiAnVGVzdDInLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIGV4cGVjdCgoKT0+bW9kZWwucmVtb3ZlKCdUZXN0MicpKS50by5ub3QudGhyb3coKTtcbiAgICAgIGV4cGVjdChtb2RlbC5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgwKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdFbnRpdHknLCgpPT4ge1xuICAgICAgaXQoJ2NoZWNrIHJlbGF0aW9ucycsKCk9PiB7XG4gICAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgZXhwZWN0KCgpPT5tb2RlbC5hZGQoXG4gICAgICAgICAgPGVudGl0eSBuYW1lPSdBJz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPSdpZCcgLz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPSdBX2lkJyBpZGVudGl0eS8+XG4gICAgICAgICAgPC9lbnRpdHk+XG4gICAgICAgICkpLnRvLm5vdC50aHJvdygpO1xuXG4gICAgICAgIGV4cGVjdCgoKT0+bW9kZWwuYWRkKFxuICAgICAgICAgIDxlbnRpdHkgbmFtZT0nQic+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT0naWQnIC8+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT0nQXJlZic+XG4gICAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdBJy8+XG4gICAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICAgIDwvZW50aXR5PlxuICAgICAgICApKS50by5ub3QudGhyb3coKTtcbiAgICAgICAgbGV0IGIgPSBtb2RlbC5nZXQoJ0InKTtcbiAgICAgICAgbGV0IG1pc3NpbmdSZWxhdGlvbnMgPSBiLmNoZWNrUmVsYXRpb25zKG1vZGVsKTtcbiAgICAgICAgZXhwZWN0KG1pc3NpbmdSZWxhdGlvbnMubGVuZ3RoKS50by5iZS5lcXVhbCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnbXVsdGlwbGUgbW9kZWxzIGZpbHRlcicsKCk9PiB7XG4gICAgICAgIGxldCB1ID0gPGVudGl0eSBuYW1lPSdVc2VyJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J2lkJyAvPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0nbmFtZScgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J2dyb3VwcycgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdHcm91cCNpZCcgdXNpbmc9J1VzZXJHcm91cCN1c2VyJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBnID0gPGVudGl0eSBuYW1lPSdHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J25hbWUnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSd1c2VycycgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdVc2VyI2lkJyB1c2luZz0nVXNlckdyb3VwI2dyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCB1ZyA9XG4gICAgICAgIDxlbnRpdHkgbmFtZT0nVXNlckdyb3VwJz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J3VzZXInID5cbiAgICAgICAgICAgIDxiZWxvbmdzVG8gcmVmPSdVc2VyI2lkJyAvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdncm91cCcgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J0dyb3VwI2lkJyAvPlxuICAgICAgICAgIDwvZmllbGQ+XG4gICAgICAgIDwvZW50aXR5PjtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodSx7ZGVwdGg6IDZ9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdChnLHtkZXB0aDogNn0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVnLHtkZXB0aDogNn0pKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWxQYWNrYWdlKCk7XG4gICAgICAgIG1vZGVsLmFkZCh1KTtcbiAgICAgICAgbW9kZWwuYWRkKGcpO1xuICAgICAgICBtb2RlbC5hZGQodWcpO1xuICAgICAgICBtb2RlbC5lbnN1cmVBbGwoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QobW9kZWwse2RlcHRoOiA1fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhnLnRvSlNPTihtb2RlbCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1LnRvSlNPTihtb2RlbCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1Zy50b0pTT04obW9kZWwpKTtcblxuICAgICAgICBleHBlY3QobW9kZWwuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMyk7XG4gICAgICAgIGV4cGVjdChtb2RlbC5pZGVudGl0eUZpZWxkcy5zaXplKS50by5iZS5lcXVhbCgzKTtcbiAgICAgICAgZXhwZWN0KG1vZGVsLmlkZW50aXR5RmllbGRzLmhhcygnVXNlciNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuaGFzKCdHcm91cCNpZCcpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QobW9kZWwuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyR3JvdXAjaWQnKSkudG8uYmUudHJ1ZTtcblxuICAgICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLmhhcygnVXNlcicpKS50by5iZS50cnVlO1xuXG4gICAgICAgIGxldCB1c2VyTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdVc2VyJyk7XG4gICAgICAgIGV4cGVjdCh1c2VyTW9kZWwuaGFzKCdncm91cHMnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbC5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLmJlbG9uZ3NUb01hbnkpLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ0dyb3VwJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLmhhcygnR3JvdXAnKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IGdyb3VwTW9kZWwgPSBtb2RlbC5yZWxhdGlvbnMuZ2V0KCdHcm91cCcpO1xuICAgICAgICBleHBlY3QoZ3JvdXBNb2RlbC5oYXMoJ3VzZXJzJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChncm91cE1vZGVsLmdldCgndXNlcnMnKS5yZWxhdGlvbi5iZWxvbmdzVG9NYW55KS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBleHBlY3QobW9kZWwucmVsYXRpb25zLmhhcygnVXNlckdyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyR3JvdXBNb2RlbCA9IG1vZGVsLnJlbGF0aW9ucy5nZXQoJ1VzZXJHcm91cCcpO1xuICAgICAgICBleHBlY3QodXNlckdyb3VwTW9kZWwuaGFzKCd1c2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5nZXQoJ3VzZXInKS5yZWxhdGlvbi5iZWxvbmdzVG8pLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ1VzZXInLCBmaWVsZDogJ2lkJ30pO1xuXG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5oYXMoJ2dyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbC5nZXQoJ2dyb3VwJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdHcm91cCcsIGZpZWxkOiAnaWQnfSk7XG5cbiAgICAgICAgbGV0IG1vZGVsMSA9IG5ldyBNb2RlbFBhY2thZ2UoKTtcbiAgICAgICAgbW9kZWwxLmFkZCh1KTtcbiAgICAgICAgbW9kZWwxLmFkZCh1Zyk7XG4gICAgICAgIG1vZGVsMS5lbnN1cmVBbGwoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsLHtkZXB0aDogNX0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsMSx7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGcudG9KU09OKG1vZGVsMSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1LnRvSlNPTihtb2RlbDEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsMSkpO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMik7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyI2lkJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChtb2RlbDEuaWRlbnRpdHlGaWVsZHMuaGFzKCdHcm91cCNpZCcpKS50by5iZS5mYWxzZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMS5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXJHcm91cCNpZCcpKS50by5iZS50cnVlO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEucmVsYXRpb25zLmhhcygnVXNlcicpKS50by5iZS50cnVlO1xuICAgICAgICBsZXQgdXNlck1vZGVsMSA9IG1vZGVsMS5yZWxhdGlvbnMuZ2V0KCdVc2VyJyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsMSx7ZGVwdGg6IDd9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV0aWwuaW5zcGVjdCh1c2VyTW9kZWwxLHtkZXB0aDogN30pKTtcblxuICAgICAgICBleHBlY3QodXNlck1vZGVsMS5oYXMoJ2dyb3VwcycpKS50by5iZS50cnVlO1xuICAgICAgICBleHBlY3QodXNlck1vZGVsMS5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLmhhc01hbnkpLnRvLmJlLmRlZXAuZXF1YWwoe2VudGl0eTogJ1VzZXJHcm91cCcsIGZpZWxkOiAndXNlcid9KTtcblxuICAgICAgICBleHBlY3QobW9kZWwxLnJlbGF0aW9ucy5oYXMoJ0dyb3VwJykpLnRvLmJlLmZhbHNlO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDEucmVsYXRpb25zLmhhcygnVXNlckdyb3VwJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGxldCB1c2VyR3JvdXBNb2RlbDEgPSBtb2RlbDEucmVsYXRpb25zLmdldCgnVXNlckdyb3VwJyk7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbDEuaGFzKCd1c2VyJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdCh1c2VyR3JvdXBNb2RlbDEuZ2V0KCd1c2VyJykucmVsYXRpb24uYmVsb25nc1RvKS50by5iZS5kZWVwLmVxdWFsKHtlbnRpdHk6ICdVc2VyJywgZmllbGQ6ICdpZCd9KTtcblxuICAgICAgICBsZXQgbW9kZWwyID0gbmV3IE1vZGVsUGFja2FnZSgpO1xuICAgICAgICBtb2RlbDIuYWRkKHUpO1xuICAgICAgICBtb2RlbDIuZW5zdXJlQWxsKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG1vZGVsMix7ZGVwdGg6IDV9KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGcudG9KU09OKG1vZGVsMikpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1LnRvSlNPTihtb2RlbDIpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codWcudG9KU09OKG1vZGVsMikpO1xuXG4gICAgICAgIGV4cGVjdChtb2RlbDIuZW50aXRpZXMuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuc2l6ZSkudG8uYmUuZXF1YWwoMSk7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdVc2VyI2lkJykpLnRvLmJlLnRydWU7XG4gICAgICAgIGV4cGVjdChtb2RlbDIuaWRlbnRpdHlGaWVsZHMuaGFzKCdHcm91cCNpZCcpKS50by5iZS5mYWxzZTtcbiAgICAgICAgZXhwZWN0KG1vZGVsMi5pZGVudGl0eUZpZWxkcy5oYXMoJ1VzZXJHcm91cCNpZCcpKS50by5iZS5mYWxzZTtcblxuICAgICAgICBleHBlY3QobW9kZWwyLnJlbGF0aW9ucy5oYXMoJ1VzZXInKSkudG8uYmUudHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJNb2RlbDIgPSBtb2RlbDIucmVsYXRpb25zLmdldCgnVXNlcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodXNlck1vZGVsMix7ZGVwdGg6IDV9KSk7XG5cbiAgICAgICAgZXhwZWN0KHVzZXJNb2RlbDIuc2l6ZSkudG8uYmUuZXF1YWwoMCk7XG5cbiAgICAgICAgZXhwZWN0KHUudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgIG5hbWU6ICdVc2VyJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXBzJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI3VzZXInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBleHBlY3QoZy50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ0dyb3VwJyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgICB1c2luZzogJ1VzZXJHcm91cCNncm91cCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdCh1Zy50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdVc2VyI2lkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcbiAgICAgICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgICAgICBiZWxvbmdzVG86ICdHcm91cCNpZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBERUZBVUxUX0lEX0ZJRUxELFxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG4gICAgICBkZXNjcmliZSgnZml4IE06TiByZWxhdGlvbnMnLCAoKT0+IHtcblxuICAgICAgICBsZXQgdSA9IDxlbnRpdHkgbmFtZT0nVXNlcic+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J2lkJy8+XG4gICAgICAgICAgPGZpZWxkIG5hbWU9J25hbWUnLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZT0nZ3JvdXBzJz5cbiAgICAgICAgICAgIDxiZWxvbmdzVG9NYW55IG5hbWU9J1VzZXJHcm91cCcgcmVmPSdHcm91cCNpZCcgdXNpbmc9JyN1c2VyJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBnID0gPGVudGl0eSBuYW1lPSdHcm91cCc+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J25hbWUnIC8+XG4gICAgICAgICAgPGZpZWxkIG5hbWUgPSd1c2VycycgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgcmVmPSdVc2VyI2lkJyB1c2luZz0nVXNlckdyb3VwI2dyb3VwJy8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGxldCBnMiA9IDxlbnRpdHkgbmFtZT0nR3JvdXAnPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWUgPSdpZCcgLz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lID0nbmFtZScgLz5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lID0ndXNlcnMnID5cbiAgICAgICAgICAgICAgPGJlbG9uZ3NUb01hbnkgbmFtZT0nVXNlckdyb3VwJyByZWY9J1VzZXIjaWQnIHVzaW5nPScjJy8+XG4gICAgICAgICAgICA8L2ZpZWxkPlxuICAgICAgICA8L2VudGl0eT47XG5cbiAgICAgICAgbGV0IHVnID1cbiAgICAgICAgPGVudGl0eSBuYW1lPSdVc2VyR3JvdXAnPlxuICAgICAgICAgIDxmaWVsZCBuYW1lID0ndXNlcicgPlxuICAgICAgICAgICAgPGJlbG9uZ3NUbyByZWY9J1VzZXIjaWQnIC8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgICA8ZmllbGQgbmFtZSA9J2dyb3VwJyA+XG4gICAgICAgICAgICA8YmVsb25nc1RvIHJlZj0nR3JvdXAjaWQnIC8+XG4gICAgICAgICAgPC9maWVsZD5cbiAgICAgICAgPC9lbnRpdHk+O1xuXG4gICAgICAgIGl0KCdtdXN0IEZpeCBlbnRpdHkgb2YgdGhlIHJlbGF0aW9uLnJlZiBpZicsICgpPT4ge1xuICAgICAgICAgIGV4cGVjdCh1LmZpZWxkcy5nZXQoJ2dyb3VwcycpLnJlbGF0aW9uLnRvT2JqZWN0KCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgICAgICAgbmFtZTogJ1VzZXJHcm91cCcsXG4gICAgICAgICAgICBiZWxvbmdzVG9NYW55OiAnR3JvdXAjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjdXNlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ211c3Qgc2V0IG5hbWUgb2YgcmVsYXRpb24gdG8gZW50aXR5IG5hbWUgcmVsYXRpb24ucmVmJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcuZmllbGRzLmdldCgndXNlcnMnKS5yZWxhdGlvbi50b09iamVjdCgpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgICAgICAgIG5hbWU6ICdVc2VyR3JvdXAnLFxuICAgICAgICAgICAgYmVsb25nc1RvTWFueTogJ1VzZXIjaWQnLFxuICAgICAgICAgICAgdXNpbmc6ICdVc2VyR3JvdXAjZ3JvdXAnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdtdXN0IHVzZSBFbnRpdHkgbmFtZSBhcyB1c2luZyBmaWVsZCBpbiBoYXNNYW55IHJlbGF0aW9uJywgKCk9PiB7XG4gICAgICAgICAgZXhwZWN0KGcyLmZpZWxkcy5nZXQoJ3VzZXJzJykucmVsYXRpb24udG9PYmplY3QoKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICAgICAgICBuYW1lOiAnVXNlckdyb3VwJyxcbiAgICAgICAgICAgIGJlbG9uZ3NUb01hbnk6ICdVc2VyI2lkJyxcbiAgICAgICAgICAgIHVzaW5nOiAnVXNlckdyb3VwI2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodS50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHUse2RlcHRoOiA3fSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QoZy50b09iamVjdCgpLHtkZXB0aDogN30pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KHVnLnRvT2JqZWN0KCkse2RlcHRoOiA3fSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdjcmVhdGUgRW50aXR5IHdpdGggVXBwZXJDYXNlTmFtZScsICgpPT4ge1xuICAgIGxldCByb2xlID0gY29tcG9zZShcbiAgICAgIEVudGl0eSxcbiAgICAgIHsgbmFtZTogJ1JvbGUnIH0sXG4gICAgICBjb21wb3NlKEZpZWxkLCB7IG5hbWU6ICduYW1lJyAsIGlkZW50aXR5OiB0cnVlfSlcbiAgICApO1xuXG4gICAgZXhwZWN0KHJvbGUpLnRvLmJlLmFuLmluc3RhbmNlb2YoRW50aXR5KTtcbiAgICBleHBlY3Qocm9sZS5uYW1lKS50by5iZS5lcXVhbCgnUm9sZScpO1xuICAgIGV4cGVjdChyb2xlLmZpZWxkcy5oYXMoJ25hbWUnKSkudG8uYmUudHJ1ZTtcblxuICAgIGV4cGVjdChyb2xlLnRvSlNPTigpKS50by5iZS5kZWVwLmVxdWFsKHtcbiAgICAgIG5hbWU6ICdSb2xlJyxcbiAgICAgIGZpZWxkczogW3tcbiAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICBpZGVudGl0eTogdHJ1ZSxcbiAgICAgIH1dXG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgaXQoJ2NyZWF0ZSBFbnRpdHkgd2l0aCBVcHBlckNhc2VOYW1lJywgKCk9PiB7XG4gICAgbGV0IHJvbGUgPSA8RW50aXR5IG5hbWU9J1JvbGUnPlxuICAgICAgPEZpZWxkIG5hbWU9J25hbWUnIGlkZW50aXR5Lz5cbiAgICA8L0VudGl0eT47XG5cbiAgICBleHBlY3Qocm9sZSkudG8uYmUuYW4uaW5zdGFuY2VvZihFbnRpdHkpO1xuICAgIGV4cGVjdChyb2xlLm5hbWUpLnRvLmJlLmVxdWFsKCdSb2xlJyk7XG4gICAgZXhwZWN0KHJvbGUuZmllbGRzLmhhcygnbmFtZScpKS50by5iZS50cnVlO1xuXG4gICAgZXhwZWN0KHJvbGUudG9KU09OKCkpLnRvLmJlLmRlZXAuZXF1YWwoe1xuICAgICAgbmFtZTogJ1JvbGUnLFxuICAgICAgZmllbGRzOiBbe1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIGlkZW50aXR5OiB0cnVlLFxuICAgICAgfV1cbiAgICB9KTtcblxuICB9KTtcblxuICBpdCgnY3JlYXRlIEVudGl0eSB3aXRoIFVwcGVyQ2FzZU5hbWUnLCAoKT0+IHtcbiAgICBsZXQgcm9sZSA9IDxlbnRpdHkgbmFtZT0nUm9sZSc+XG4gICAgICA8ZmllbGQgbmFtZT0nbmFtZScgaWRlbnRpdHkvPlxuICAgIDwvZW50aXR5PjtcblxuICAgIGV4cGVjdChyb2xlKS50by5iZS5hbi5pbnN0YW5jZW9mKEVudGl0eSk7XG4gICAgZXhwZWN0KHJvbGUubmFtZSkudG8uYmUuZXF1YWwoJ1JvbGUnKTtcbiAgICBleHBlY3Qocm9sZS5maWVsZHMuaGFzKCduYW1lJykpLnRvLmJlLnRydWU7XG5cbiAgICBleHBlY3Qocm9sZS50b0pTT04oKSkudG8uYmUuZGVlcC5lcXVhbCh7XG4gICAgICBuYW1lOiAnUm9sZScsXG4gICAgICBmaWVsZHM6IFt7XG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgaWRlbnRpdHk6IHRydWUsXG4gICAgICB9XVxuICAgIH0pO1xuXG4gIH0pO1xufSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC91bml0L3JlYWN0LXdheS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=