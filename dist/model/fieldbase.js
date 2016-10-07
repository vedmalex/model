'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldBase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _modelbase = require('./modelbase');

var _validator = require('../validator');

var _schema = require('../schema');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldBase = exports.FieldBase = function (_ModelBase) {
  _inherits(FieldBase, _ModelBase);

  function FieldBase(obj) {
    _classCallCheck(this, FieldBase);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldBase).call(this, obj));
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
        _get(Object.getPrototypeOf(FieldBase.prototype), 'updateWith', this).call(this, obj);

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
      var res = _get(Object.getPrototypeOf(FieldBase.prototype), 'toObject', this).call(this);
      return JSON.parse(JSON.stringify(_extends({}, res, {
        entity: props.entity || props.entity_
      })));
    }

    // it get clean object with no default values

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var props = this.$obj;
      var res = _get(Object.getPrototypeOf(FieldBase.prototype), 'toJSON', this).call(this);
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
//# sourceMappingURL=fieldbase.js.map
