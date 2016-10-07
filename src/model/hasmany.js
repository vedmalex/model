import {RefBase} from './refbase';
import {HasManySchema} from '../schema';
import {validator} from '../validator';
import {REF_PATTERN} from './definitions';
import {Ref} from './ref';
import camelcase from 'camelcase';

export class HasMany extends RefBase {

  static compose(props, children) {
    let result = {
      ...props,
    };
    if (result.ref && !result.hasMany) {
      result.hasMany = result.ref;
      delete result.ref;
    }
    return result;
  }

  constructor(obj) {
    super(obj);
  }

  get hasMany() {
    return this.$obj ? this.$obj.hasMany : undefined;
  }

  get ref() {
    return this.$obj ? this.$obj.hasMany : undefined;
  }

  validateSchema(obj) {
    const validation = validator.validate(obj, HasManySchema);
    if (!validation.valid) {
      throw new Error(validation.toString());
    }
  }

  updateWith(obj) {
    if (obj) {
      super.updateWith(obj);

      const result = this.$obj ? {...this.$obj} : {};

      let hasMany_ = obj.hasMany;

      let hasMany;
      if (hasMany_) {
        hasMany = new Ref();
        let res = hasMany_.match(REF_PATTERN);
        hasMany.entity = res[1] || obj.entity;
        hasMany.field = res[2] ? camelcase(res[2].trim()) : '';
      }

      result.hasMany_ = hasMany_;
      result.hasMany = hasMany;

      this.$obj = {
        ...result
      };
    }
  }
  // it get fixed object
  toObject() {
    let props = this.$obj;
    let res = super.toObject();
    return JSON.parse(JSON.stringify({
      ...res,
      hasMany: props.hasMany ? props.hasMany.toString() : undefined,
    }));
  }

  // it get clean object with no default values
  toJSON() {
    var props = this.$obj;
    let res = super.toJSON();
    return JSON.parse(JSON.stringify({
      ...res,
      hasMany: props.hasMany_,
    }));
  }
}
