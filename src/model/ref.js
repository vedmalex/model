import { DEFAULT_ID_FIELDNAME } from './definitions';

export class Ref {
  constructor(entity, field) {
    if (typeof entity == 'string') {
      this.entity = entity;
      this.field = field;
    } else if (entity instanceof Object) {
      this.entity = entity.entity;
      this.field = entity.field;
    }
  }

  toString() {
    return `${this.entity}#${this.field || DEFAULT_ID_FIELDNAME}`;
  }
};
