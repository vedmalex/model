import camelcase from 'camelcase';

export class RefBase {
  constructor(obj) {
    if (obj) {
      this.updateWith(obj);
    }
  }

  get name() {
    return this.$obj ? this.$obj.name : undefined;
  }

  toString() {
    return JSON.stringify(this.toObject());
  }

  toObject() {
    let props = this.$obj;
    return {
      name: props.name || props.name_,
    };
  }

  toJSON() {
    var props = this.$obj;
    return {
      name: props.name_,
    };
  }

  updateWith(obj) {
    if (obj) {

      const result = this.$obj ? {...this.$obj} : {};

      let name_ = obj.name;

      let name = name ? camelcase(name_.trim()) : name;

      result.name_ = name_;
      result.name = name;

      this.$obj = {
        ...result
      };
    }
  }

  clone() {
    return new this.constructor(this.toJSON());
  }
}
