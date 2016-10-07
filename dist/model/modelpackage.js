'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelPackage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entity = require('../model/entity');

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
//# sourceMappingURL=modelpackage.js.map
