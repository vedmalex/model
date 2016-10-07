import {RefBase} from './refbase';
import {HasOneSchema} from '../schema';
import {validator} from '../validator';
import {REF_PATTERN} from './definitions';
import {Ref} from './ref';
import camelcase from 'camelcase';

export class HasOne extends RefBase {

  static compose(props, children) {
    let result = {
      ...props,
    };
    if (result.ref && !result.hasOne) {
      result.hasOne = result.ref;
      delete result.ref;
    }
    return result;
  }

  constructor(obj) {
    super(obj);
  }

  get hasOne() {
    return this.$obj ? this.$obj.hasOne : undefined;
  }

  get ref() {
    return this.$obj ? this.$obj.hasOne : undefined;
  }

  validateSchema(obj) {
    const validation = validator.validate(obj, HasOneSchema);
    if (!validation.valid) {
      throw new Error(validation.toString());
    }
  }

  updateWith(obj) {
    if (obj) {
      super.updateWith(obj);

      const result = this.$obj ? {...this.$obj} : {};

      let hasOne_ = obj.hasOne;

      let hasOne;
      if (hasOne_) {
        hasOne = new Ref();
        let res = hasOne_.match(REF_PATTERN);
        hasOne.entity = res[1] || obj.entity;
        hasOne.field = res[2] ? camelcase(res[2].trim()) : '';
      }

      result.hasOne_ = hasOne_;
      result.hasOne = hasOne;

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
      hasOne: props.hasOne ? props.hasOne.toString() : undefined,
    }));
  }

  // it get clean object with no default values
  toJSON() {
    let props = this.$obj;
    let res = super.toJSON();
    return JSON.parse(JSON.stringify({
      ...res,
      hasOne: props.hasOne_,
    }));
  }
}
