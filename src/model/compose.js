import {Entity} from './entity';
import {Field} from './field';
import {ModelPackage} from './modelpackage';
import {HasOne} from './hasone';
import {HasMany} from './hasmany';
import {BelongsTo} from './belongsto';
import {BelongsToMany} from './belongstomany';

export function compose(T_, props, ...attr) {
  let T;
  if ('string' == typeof T_) {
    switch (T_.toLowerCase()){
      case 'entity':
        T = Entity;
      break;
      case 'field':
        T = Field;
      break;
      case 'hasone':
        T = HasOne;
      break;
      case 'hasmany':
        T = HasMany;
      break;
      case 'belongsto':
        T = BelongsTo;
      break;
      case 'belongstomany':
        T = BelongsToMany;
      break;
      case 'model':
      case 'modelPackage':
        T = ModelPackage;
      break;
    }
  } else {
    T = T_;
  }
  return T.compose(props, attr);
};
