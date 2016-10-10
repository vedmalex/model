'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefBase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camelcase = require('camelcase');

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
//# sourceMappingURL=refbase.js.map
