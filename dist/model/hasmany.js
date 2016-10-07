'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasMany = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _refbase = require('./refbase');

var _schema = require('../schema');

var _validator = require('../validator');

var _definitions = require('./definitions');

var _ref = require('./ref');

var _camelcase = require('camelcase');

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
//# sourceMappingURL=hasmany.js.map
