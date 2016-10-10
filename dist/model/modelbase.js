'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelBase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camelcase = require('camelcase');

var _camelcase2 = _interopRequireDefault(_camelcase);

var _decamelize = require('decamelize');

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
//# sourceMappingURL=modelbase.js.map
