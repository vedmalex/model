'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fieldbase = require('./fieldbase');

var _entity = require('./entity');

var _hasone = require('./hasone');

var _hasmany = require('./hasmany');

var _belongsto = require('./belongsto');

var _belongstomany = require('./belongstomany');

var _ref = require('./ref');

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
//# sourceMappingURL=field.js.map
