import {FieldBase} from './fieldbase';
import {validator} from '../validator';
import {Entity} from './entity';
import {HasOne} from './hasone';
import {HasMany} from './hasmany';
import {BelongsTo} from './belongsto';
import {BelongsToMany} from './belongstomany';
import {Ref} from './ref';

import {
  FieldSchema,
  HasOneSchema,
  HasManySchema,
  BelongsToSchema,
  BelongsToManySchema,
} from '../schema';

function discoverFieldType(obj) {
  if (validator.validate(obj, HasOneSchema).valid) {
    return 'HasOne';
  } else if (validator.validate(obj, HasManySchema).valid) {
    return 'HasMany';
  } else if (validator.validate(obj, BelongsToSchema).valid) {
    return 'BelongsTo';
  } else if (validator.validate(obj, BelongsToManySchema).valid) {
    return 'BelongsToMany';
  }
};

export class Field extends FieldBase {

  static compose(props, children) {
    return {
      ...props,
      relation: children ? children[0] : undefined,
    };
  }

  constructor(obj) {
    super(obj);
  }

  get type() {
    return this.$obj ? this.$obj.type : undefined;
  }

  get identity() {
    return this.$obj ? this.$obj.identity : undefined;
  }

  set identity(value) {
    if (value) {
      this.$obj.idKey = new Ref(this.$obj.entity, this.$obj.name);
    } else {
      this.$obj.idKey = undefined;
    }
    this.$obj.identity = this.$obj.identity_ = value;
  }

  get required() {
    return this.$obj ? this.$obj.required : undefined;
  }

  get idKey() {
    return this.$obj ? this.$obj.idKey : undefined;
  }

  get relation() {
    return this.$obj ? this.$obj.relation : undefined;
  }

  validateSchema(obj) {
    const validation = validator.validate(obj, FieldSchema);
    if (!validation.valid) {
      throw new Error(validation.toString());
    }
  }

  updateWith(obj) {
    if (obj) {
      super.updateWith(obj);
      const result = this.$obj ? {...this.$obj} : {};

      let type_ = obj.type;
      let type = type_ || 'string';

      let identity_ = obj.identity;
      let identity = identity_ || false;

      let required_ = obj.required;
      let required = required || false;

      let indexed_ = obj.indexed;
      let indexed = indexed || identity;

      result.type_ = type_;
      result.type = type;

      result.identity_ = identity_;
      result.identity = identity;

      result.indexed_ = indexed_;
      result.indexed = indexed;

      if (result.identity) {
        // это то как выглядит ключ для внешних ссылок
        result.idKey = new Ref(result.entity, result.name);
      }

      result.required_ = required_;
      result.required = identity_ || required_ || false;

      if (obj.relation) {
        let relation_ = obj.relation;
        let relation;

        switch (discoverFieldType(relation_)){
          case 'HasOne':
            relation = new HasOne({...relation_, entity: obj.entity});
          break;
          case 'HasMany':
            relation = new HasMany({...relation_, entity: obj.entity });
          break;
          case 'BelongsTo':
            relation = new BelongsTo({...relation_, entity: obj.entity});
          break;
          case 'BelongsToMany':
            relation = new BelongsToMany({...relation_, entity: obj.entity});
          break;
        }

        result.relation = relation;
        delete result.type_;
        delete result.type;
      }

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
      type: props.type || props.type_,
      identity: props.identity || props.identity_ ,
      required: props.required || props.required_,
      indexed: props.indexed || props.indexed_,
      idKey: props.idKey ? props.idKey.toString() : undefined,
      relation: props.relation ? props.relation.toObject() : undefined,
    }));
  }

  // it get clean object with no default values
  toJSON() {
    let props = this.$obj;
    let res = super.toJSON();
    return JSON.parse(JSON.stringify({
      ...res,
      type: props.type_,
      identity: props.identity_,
      required: props.required_,
      indexed: props.indexed_,
      relation: props.relation ? props.relation.toJSON() : undefined,
    }));
  }
}
