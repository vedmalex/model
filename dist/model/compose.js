'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = compose;

var _entity = require('./entity');

var _field = require('./field');

var _modelpackage = require('./modelpackage');

var _hasone = require('./hasone');

var _hasmany = require('./hasmany');

var _belongsto = require('./belongsto');

var _belongstomany = require('./belongstomany');

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
//# sourceMappingURL=compose.js.map
