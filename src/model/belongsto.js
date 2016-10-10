import {RefBase} from './refbase';
import {REF_PATTERN} from './definitions';
import {Ref} from './ref';
import camelcase from 'camelcase';

export class BelongsTo extends RefBase {

  static compose(props, children) {
    let result = {
      ...props,
    };
    if (result.ref && !result.belongsTo) {
      result.belongsTo = result.ref;
      delete result.ref;
    }
    return result;
  }

  constructor(obj) {
    super(obj);
  }

  get belongsTo() {
    return this.$obj ? this.$obj.belongsTo : undefined;
  }

  get ref() {
    return this.$obj ? this.$obj.belongsTo : undefined;
  }

  updateWith(obj) {
    if (obj) {
      super.updateWith(obj);

      const result = this.$obj ? {...this.$obj} : {};

      let belongsTo_ = obj.belongsTo;

      let belongsTo;
      if (belongsTo_) {
        belongsTo = new Ref();
        let res = belongsTo_.match(REF_PATTERN);
        belongsTo.entity = res[1] || obj.entity;
        belongsTo.field = res[2] ? camelcase(res[2].trim()) : '';
      }

      result.belongsTo_ = belongsTo_;
      result.belongsTo = belongsTo;

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
      belongsTo: props.belongsTo ? props.belongsTo.toString() : undefined,
    }));
  }

  // it get clean object with no default values
  toJSON() {
    let props = this.$obj;
    let res = super.toJSON();
    return JSON.parse(JSON.stringify({
      ...res,
      belongsTo: props.belongsTo_,
    }));
  }
}
