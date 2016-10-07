'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelbase = require('./modelbase');

var _field = require('./field');

var _hasone = require('./hasone');

var _hasmany = require('./hasmany');

var _belongsto = require('./belongsto');

var _belongstomany = require('./belongstomany');

var _validator = require('../validator');

var _definitions = require('./definitions');

var _schema = require('../schema');

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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Entity).call(this, obj));
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
          var modelRelations = undefined;
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
                var refe = modelPackage.entities.get(r.ref.entity);
                if (refe.fields.has(r.ref.field)) {
                  missingRef = false;
                }
              }
              break;
            case 'BelongsToMany':
              // must be in ref store
              if (modelPackage.entities.has(r.ref.entity)) {
                var refe = modelPackage.entities.get(r.ref.entity);
                if (refe.fields.has(r.ref.field)) {
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
          _get(Object.getPrototypeOf(Entity.prototype), 'updateWith', _this5).call(_this5, obj);

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
            var f = undefined;
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
        var res = _get(Object.getPrototypeOf(Entity.prototype), 'toObject', this).call(this);
        return JSON.parse(JSON.stringify(_extends({}, res, {
          fields: [].concat(_toConsumableArray(props.fields.values())).map(function (f) {
            return f.toObject();
          })
        })));
      } else {
        var _ret3 = function () {
          var modelRelations = modelPackage.relations.get(_this6.name);
          if (modelRelations) {
            var props = _this6.$obj;
            var res = _get(Object.getPrototypeOf(Entity.prototype), 'toObject', _this6).call(_this6);
            return {
              v: JSON.parse(JSON.stringify(_extends({}, res, {
                fields: [].concat(_toConsumableArray(props.fields.values())).map(function (f) {
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
        var res = _get(Object.getPrototypeOf(Entity.prototype), 'toJSON', this).call(this);
        return JSON.parse(JSON.stringify(_extends({}, res, {
          fields: [].concat(_toConsumableArray(props.fields.values())).map(function (f) {
            return f.toJSON();
          })
        })));
      } else {
        var _ret4 = function () {
          var modelRelations = modelPackage.relations.get(_this7.name);
          if (modelRelations) {
            var props = _this7.$obj;
            var res = _get(Object.getPrototypeOf(Entity.prototype), 'toJSON', _this7).call(_this7);
            return {
              v: JSON.parse(JSON.stringify(_extends({}, res, {
                fields: [].concat(_toConsumableArray(props.fields.values())).map(function (f) {
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
//# sourceMappingURL=entity.js.map
