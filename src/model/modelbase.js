import camelcase from 'camelcase';
import decamelize from 'decamelize';

export class ModelBase {
  constructor(obj) {
    if (obj) {
      this.updateWith(obj);
    }
  }

  get name() {
    return this.$obj ? this.$obj.name : undefined;
  }

  get title() {
    let props = this.$obj;
    return this.$obj ? (props.title || props.title_) : undefined;
  }

  get description() {
    let props = this.$obj;
    return this.$obj ? (props.description || props.description_) : undefined;
  }

  toString() {
    return JSON.stringify(this.toObject());
  }

  toObject() {
    let props = this.$obj;
    return {
      name: props.name || props.name_,
      title: props.title || props.title_,
      description: props.description || props.description_,
    };
  }

  toJSON() {
    var props = this.$obj;
    return {
      name: props.name_,
      title: props.title_,
      description: props.description_,
    };
  }

  updateWith(obj) {
    if (obj) {

      const result = this.$obj ? {...this.$obj} : {};

      let name_ = obj.name;
      let title_ = obj.title;
      let description_ = obj.description;

      let name = camelcase(name_.trim());

      let title = title_ ? title_.trim() : '';

      let description = description_ ? description_.trim() : '';

      if (!title) {
        title = decamelize(name, ' ');
      }
      title = (title.slice(0,1)).toUpperCase() + title.slice(1);

      if (!description) {
        description = title || title_;
      }
      description = (description.slice(0,1)).toUpperCase() + description.slice(1);

      result.name_ = name_;
      result.name = name;

      result.title_ = title_;
      result.title = title;

      result.description_ = description_;
      result.description = description;

      this.$obj = {
        ...result
      };
    }
  }

  clone() {
    return new this.constructor(this.toJSON());
  }
}
