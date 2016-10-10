import {ModelBase} from './modelbase';

export class FieldBase extends ModelBase {
  constructor(obj) {
    super(obj);
  }

  get entity() {
    return this.$obj ? this.$obj.entity : undefined;
  }

  updateWith(obj) {
    if (obj) {
      super.updateWith(obj);

      const result = this.$obj ? {...this.$obj} : {};

      let entity_ = obj.entity;
      let entity = entity_;

      result.entity = entity;
      result.entity_ = entity_;

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
      entity: props.entity || props.entity_ ,
    }));
  }

  // it get clean object with no default values
  toJSON() {
    let props = this.$obj;
    let res = super.toJSON();
    return JSON.parse(JSON.stringify({
      ...res,
      // entity: props.entity_,
    }));
  }
}
