'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BelongsTo = undefined;

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
//# sourceMappingURL=belongsto.js.map
