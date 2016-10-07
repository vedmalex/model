import { Entity } from '../model/entity';

export class ModelPackage {

  static compose(props, entityList) {
    let result = new ModelPackage(props);
    entityList.forEach((entity)=> {
      result.add(entity);
    });
    return result;
  }

  constructor() {
    // список всех entity
    this.entities = new Map();
    // существующие в пакете identity
    this.identityFields = new Map();
    // ref для исправлений
    this.relations = new Map();
  }

  add(entity) {
    if (entity instanceof Entity) {
      this.entities.set(entity.name, entity);
      entity.ensureIds(this);
    }
    return entity;
  }

  get(name) {
    return this.entities.get(name);
  }

  create(json) {
    return this.add(new Entity(json));
  }

  remove(name) {
    let entity = this.entities.get(name);
    if (entity) {
      this.entities.delete(name);
      entity.removeIds(this);
    }
  }
  get size() {
    return this.entities.size;
  }
  ensureAll() {
    this.entities.forEach((e)=> {
      e.ensureFKs(this);
    });
  }
}
