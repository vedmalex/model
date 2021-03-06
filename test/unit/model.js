import util from 'util';

import {Entity, Field, ModelPackage, DEFAULT_ID_FIELD} from '../../src/model';

describe('Schema', ()=> {

  describe('Entity', () => {

    it('create empty model',() => {
      expect(()=>new Entity()).to.not.throw();
    });

    it('not create wrong model',() => {
      expect(()=>new Entity({some: 1})).to.throw();
    });

    it('not throws with empty data',() => {
      let e = new Entity();
      expect(()=> e.updateWith()).to.not.throw();
    });

    it('throws with invalid data',() => {
      let e = new Entity();
      expect(()=> e.updateWith({some: 1})).to.throw();
    });

    it('can\'t access to private fields',() => {
      let e = new Entity();

      expect(()=> e.title = 'someThing').to.throw();
      expect(()=> e.description = 'someThing').to.throw();
      expect(()=> e.name = 'someThing').to.throw();
      expect(()=> e.relations = 'someThing').to.throw();
      expect(()=> e.required = 'someThing').to.throw();
      expect(()=> e.identity = 'someThing').to.throw();
      expect(()=> e.fields = 'someThing').to.throw();

    });

    it('default data is undefined',() => {
      let e = new Entity();
      expect(e.title).to.be.an('undefined');
      expect(e.description).to.be.an('undefined');
      expect(e.name).to.be.an('undefined');
      expect(e.relations).to.be.an('undefined');
      expect(e.required).to.be.an('undefined');
      expect(e.identity).to.be.an('undefined');
      expect(e.fields).to.be.an('undefined');
    });

    it('_id and id is the same', ()=> {
      expect(()=> new Entity({
          name: 'A',
          fields: [{
            name: 'id',
            type: 'string',
          },{
            name: '_id',
            type: 'string',
            identity: true,
          }]
        })).to.throw();
    });

    it('accept valid data',() => {
      let e = new Entity();

      expect(()=>
      e.updateWith({
          name: ' test Entity ',
          title: ' test Entity title ',
          description: ' test Entity describe ',
          fields: [
          {
            name: 'id',
            identity: true,
            required: false,
          },
          {
            name: 'Field1',
          },
          {
            name: 'field2',
            title: 'title field2',
          },
          {
            name: 'Field 3',
            description: 'field3 description',
          },
          {
            name: 'field4',
            title: 'Field4 title',
            description: 'field4 description',
            required: true,
          },
          {
            name: 'field5',
            type: 'number',
          },
          {
            name: 'field6Ref',
            relation: {
              hasOne: 'Model/User#id',
            }
          },
          {
            name: 'field7Ref',
            relation: {
              hasOne: 'Actor#id',
            }
          },
          {
            name: 'field8Ref',
            relation: {
              belongsTo: '#Field1',
            }
          }
          ]
        })
      ).to.not.throw();

      expect(e.name).to.be.equal('TestEntity');
      expect(e.fields.size).to.be.equal(9);
      expect(e.relations.size).to.be.equal(3);
      expect(e.identity.size).to.be.equal(1);
      expect(e.required.size).to.be.equal(2);

      expect(e.toJSON()).to.deep.equal({
        name: ' test Entity ',
        title: ' test Entity title ',
        description: ' test Entity describe ',
        fields: [
        {
          name: 'id',
          identity: true,
          required: false,
        },
        {
          name: 'Field1',
        },
        {
          name: 'field2',
          title: 'title field2',
        },
        {
          name: 'Field 3',
          description: 'field3 description',
        },
        {
          name: 'field4',
          title: 'Field4 title',
          description: 'field4 description',
          required: true,
        },
        {
          name: 'field5',
          type: 'number',
        },
        {
          name: 'field6Ref',
          relation: {
            hasOne: 'Model/User#id',
          }
        },
        {
          name: 'field7Ref',
          relation: {
            hasOne: 'Actor#id',
          }
        },
        {
          name: 'field8Ref',
          relation: {
            belongsTo: '#Field1',
          }
        }
        ]
      });

      expect(e.toObject()).to.deep.equal({
        name: 'TestEntity',
        title: 'Test Entity title',
        description: 'Test Entity describe',
        fields: [
          {
            name: 'id',
            title: 'Id',
            entity: 'TestEntity',
            idKey: 'TestEntity#id',
            description: 'Id',
            type: 'string',
            identity: true,
            required: true,
            indexed: true,
          },
          {
            name: 'field1',
            entity: 'TestEntity',
            title: 'Field1',
            description: 'Field1',
            type: 'string'
          },
          {
            name: 'field2',
            entity: 'TestEntity',
            title: 'Title field2',
            description: 'Title field2',
            type: 'string'
          },
          {
            name: 'field3',
            entity: 'TestEntity',
            title: 'Field3',
            description: 'Field3 description',
            type: 'string'
          },
          {
            name: 'field4',
            entity: 'TestEntity',
            title: 'Field4 title',
            description: 'Field4 description',
            type: 'string',
            required: true
          },
          {
            name: 'field5',
            entity: 'TestEntity',
            title: 'Field5',
            description: 'Field5',
            type: 'number'
          },
          {
            name: 'field6Ref',
            entity: 'TestEntity',
            title: 'Field6 ref',
            description: 'Field6 ref',
            relation: {
              hasOne: 'Model/User#id'
            }
          },
          {
            name: 'field7Ref',
            entity: 'TestEntity',
            title: 'Field7 ref',
            description: 'Field7 ref',
            relation: {
              hasOne: 'Actor#id'
            }
          },
          {
            name: 'field8Ref',
            entity: 'TestEntity',
            title: 'Field8 ref',
            description: 'Field8 ref',
            relation: {
              belongsTo: 'TestEntity#field1',
            }
          }
        ]
      });
    });

    describe('fixup identity fields',()=> {
      it('no fields',()=> {
        let e1 = new Entity({
          name: 'test1',
          fields: [{
            name: 'name'
          }]
        });
        expect(e1.toJSON()).to.deep.equal({
          name: 'test1',
          fields: [
            {
              name: 'name'
            },
            {
              'identity': true,
              'name': 'id',
              'required': true,
            }]
        });
      });

      it('id field',()=> {
        let e2 = new Entity({
          name: 'test1',
          fields: [{
            name: 'name'
          },{
            name: 'Id',
          }]
        });
        expect(e2.toJSON()).to.deep.equal({
          name: 'test1',
          fields: [
            {
              name: 'name'
            },
            {
              'identity': true,
              'name': 'Id',
            }]
        });
      });

      it('_id field',()=> {
        let e3 = new Entity({
          name: 'test1',
          fields: [{
            name: 'name',
          },
          {
            name: '_Id',
          }]
        });
        expect(e3.toJSON()).to.deep.equal({
          name: 'test1',
          fields: [
            {
              name: 'name'
            },
            {
              'identity': true,
              'name': '_Id',
            }]
        });
      });

      it('fixup field contains entity',()=> {
        let f1 = new Entity({
          name: 'fixup1',
          fields: [{
            name: 'name',
            type: 'string'
          }]
        });
        expect(f1.name).to.be.equal('Fixup1');
        expect(f1.fields.get('id').entity).to.be.equal('Fixup1');
      });
    });

    describe('fk and ids',()=> {
      // ссылки по внешнему ключу могут быть не только на PK
      //, но на любые ключи
      it('validate fk reference', ()=> {
        let e1 = new Entity({
          name: 'TEst1',
          fields: [
            {
              name: 'name',
              identity: true,
            },
            {
              name: 'id',
              identity: true,
            }
          ]
        });

        let e2 = new Entity({
          name: 'Test2',
          fields: [
            {
              name: 'name',
              identity: true,
            },
            {
              name: 'id',
              identity: true,
            }
          ]
        });
      });
    });

  });

  describe('ModelPackage',()=> {
    it('crud entity', ()=> {
      let model = new ModelPackage();
      expect(model.size).to.be.equal(0);
      expect(()=>model.create({
          name: 'Test2',
          fields: [
            {
              name: 'name',
              identity: true,
            },
            {
              name: 'id',
              identity: true,
            }
          ]
        })).to.not.throw();

      expect(model.size).to.be.equal(1);
      expect(model.identityFields.size).to.be.equal(2);
      expect(model.get('Test2').toJSON()).to.be.deep.equal({
          name: 'Test2',
          fields: [
            {
              name: 'name',
              identity: true,
            },
            {
              name: 'id',
              identity: true,
            }
          ]
        });
      expect(()=>model.remove('Test2')).to.not.throw();
      expect(model.size).to.be.equal(0);
      expect(model.identityFields.size).to.be.equal(0);
    });

    describe('Entity',()=> {
      it('check relations',()=> {
        let model = new ModelPackage();
        /*expect(()=>*/model.create({
          name: 'A',
          fields: [{
            name: 'id',
            type: 'string',
          },{
            name: 'A_id',
            type: 'string',
            identity: true,
          }]
        })/*).to.not.throw()*/;

        expect(()=>model.create({
          name: 'B',
          fields: [{
            name: 'id',
            type: 'string',
          },
          {
            name: 'Aref',
            relation: {
              belongsTo: 'A'
            }
          }]
        })).to.not.throw();
        let b = model.get('B');
        let missingRelations = b.checkRelations(model);
        expect(missingRelations.length).to.be.equal(0);
      });

      it('multiple models filter',()=> {
        let u = new Entity({
          name: 'User',
          fields: [
            {
              name: 'id',
            },
            {
              name: 'name',
            },
            {
              name: 'groups',
              relation: {
                belongsToMany: 'Group#id',
                using: 'UserGroup#user',
              }
            }
          ]
        });

        let g = new Entity({
          name: 'Group',
          fields: [
            {
              name: 'id',
            },
            {
              name: 'name',
            },
            {
              name: 'users',
              relation: {
                belongsToMany: 'User#id',
                using: 'UserGroup#group'
              }
            }
          ]
        });

        let ug = new Entity({
          name: 'UserGroup',
          fields: [
            {
              name: 'user',
              relation: {
                belongsTo: 'User#id',
              }
            },
            {
              name: 'group',
              relation: {
                belongsTo: 'Group#id',
              }
            }
          ]
        });

        // console.log(util.inspect(u,{depth: 6}));
        // console.log(util.inspect(g,{depth: 6}));
        // console.log(util.inspect(ug,{depth: 6}));

        let model = new ModelPackage();
        model.add(u);
        model.add(g);
        model.add(ug);
        model.ensureAll();

        // console.log(util.inspect(model,{depth: 5}));
        // console.log(g.toJSON(model));
        // console.log(u.toJSON(model));
        // console.log(ug.toJSON(model));

        expect(model.entities.size).to.be.equal(3);
        expect(model.identityFields.size).to.be.equal(3);
        expect(model.identityFields.has('User#id')).to.be.true;
        expect(model.identityFields.has('Group#id')).to.be.true;
        expect(model.identityFields.has('UserGroup#id')).to.be.true;

        expect(model.relations.has('User')).to.be.true;

        let userModel = model.relations.get('User');
        expect(userModel.has('groups')).to.be.true;
        expect(userModel.get('groups').relation.belongsToMany).to.be.deep.equal({entity: 'Group', field: 'id'});

        expect(model.relations.has('Group')).to.be.true;
        let groupModel = model.relations.get('Group');
        expect(groupModel.has('users')).to.be.true;
        expect(groupModel.get('users').relation.belongsToMany).to.be.deep.equal({entity: 'User', field: 'id'});

        expect(model.relations.has('UserGroup')).to.be.true;
        let userGroupModel = model.relations.get('UserGroup');
        expect(userGroupModel.has('user')).to.be.true;
        expect(userGroupModel.get('user').relation.belongsTo).to.be.deep.equal({entity: 'User', field: 'id'});

        expect(userGroupModel.has('group')).to.be.true;
        expect(userGroupModel.get('group').relation.belongsTo).to.be.deep.equal({entity: 'Group', field: 'id'});

        let model1 = new ModelPackage();
        model1.add(u);
        model1.add(ug);
        model1.ensureAll();

        // console.log(util.inspect(userModel,{depth: 5}));
        // console.log(util.inspect(model1,{depth: 5}));
        // console.log(g.toJSON(model1));
        // console.log(u.toJSON(model1));
        // console.log(ug.toJSON(model1));

        expect(model1.entities.size).to.be.equal(2);
        expect(model1.identityFields.size).to.be.equal(2);
        expect(model1.identityFields.has('User#id')).to.be.true;
        expect(model1.identityFields.has('Group#id')).to.be.false;
        expect(model1.identityFields.has('UserGroup#id')).to.be.true;

        expect(model1.relations.has('User')).to.be.true;
        let userModel1 = model1.relations.get('User');

        // console.log(util.inspect(model1,{depth: 7}));
        // console.log(util.inspect(userModel1,{depth: 7}));

        expect(userModel1.has('groups')).to.be.true;
        expect(userModel1.get('groups').relation.hasMany).to.be.deep.equal({entity: 'UserGroup', field: 'user'});

        expect(model1.relations.has('Group')).to.be.false;

        expect(model1.relations.has('UserGroup')).to.be.true;
        let userGroupModel1 = model1.relations.get('UserGroup');
        expect(userGroupModel1.has('user')).to.be.true;
        expect(userGroupModel1.get('user').relation.belongsTo).to.be.deep.equal({entity: 'User', field: 'id'});

        let model2 = new ModelPackage();
        model2.add(u);
        model2.ensureAll();

        // console.log(util.inspect(model2,{depth: 5}));
        // console.log(g.toJSON(model2));
        // console.log(u.toJSON(model2));
        // console.log(ug.toJSON(model2));

        expect(model2.entities.size).to.be.equal(1);
        expect(model2.identityFields.size).to.be.equal(1);
        expect(model2.identityFields.has('User#id')).to.be.true;
        expect(model2.identityFields.has('Group#id')).to.be.false;
        expect(model2.identityFields.has('UserGroup#id')).to.be.false;

        expect(model2.relations.has('User')).to.be.true;
        let userModel2 = model2.relations.get('User');
        // console.log(util.inspect(userModel2,{depth: 5}));

        expect(userModel2.size).to.be.equal(0);

        expect(u.toJSON()).to.be.deep.equal({
          name: 'User',
          fields: [
            {
              name: 'id',
              identity: true,
            },
            {
              name: 'name',
            },
            {
              name: 'groups',
              relation: {
                belongsToMany: 'Group#id',
                using: 'UserGroup#user',
              }
            }
          ]
        });

        expect(g.toJSON()).to.be.deep.equal({
          name: 'Group',
          fields: [
            {
              name: 'id',
              identity: true,
            },
            {
              name: 'name',
            },
            {
              name: 'users',
              relation: {
                belongsToMany: 'User#id',
                using: 'UserGroup#group'
              }
            }
          ]
        });
        expect(ug.toJSON()).to.be.deep.equal({
          name: 'UserGroup',
          fields: [
            {
              name: 'user',
              relation: {
                belongsTo: 'User#id',
              }
            },
            {
              name: 'group',
              relation: {
                belongsTo: 'Group#id',
              }
            },
            DEFAULT_ID_FIELD,
          ]
        });

      });

      describe('fix M:N relations', ()=> {

        let u = new Entity({
          name: 'User',
          fields: [
            {
              name: 'id',
            },
            {
              name: 'name',
            },
            {
              name: 'groups',
              relation: {
                name: 'UserGroup',
                belongsToMany: 'Group#id',
                using: '#user',
              }
            }
          ]
        });

        let g = new Entity({
          name: 'Group',
          fields: [
            {
              name: 'id',
            },
            {
              name: 'name',
            },
            {
              name: 'users',
              relation: {
                belongsToMany: 'User#id',
                using: 'UserGroup#group',
              }
            }
          ]
        });

        let g2 = new Entity({
          name: 'Group',
          fields: [
            {
              name: 'id',
            },
            {
              name: 'name',
            },
            {
              name: 'users',
              relation: {
                name: 'UserGroup',
                belongsToMany: 'User#id',
                using: '#',
              }
            }
          ]
        });

        let ug = new Entity({
          name: 'UserGroup',
          fields: [
            {
              name: 'user',
              relation: {
                belongsTo: 'User#id',
              }
            },
            {
              name: 'group',
              relation: {
                belongsTo: 'Group#',
              }
            }
          ]
        });

        it('must Fix entity of the relation.ref if', ()=> {
          expect(u.fields.get('groups').relation.toObject()).to.be.deep.equal({
            name: 'UserGroup',
            belongsToMany: 'Group#id',
            using: 'UserGroup#user'
          });
        });

        it('must set name of relation to entity name relation.ref', ()=> {
          expect(g.fields.get('users').relation.toObject()).to.be.deep.equal({
            name: 'UserGroup',
            belongsToMany: 'User#id',
            using: 'UserGroup#group'
          });
        });

        it('must use Entity name as using field in hasMany relation', ()=> {
          expect(g2.fields.get('users').relation.toObject()).to.be.deep.equal({
            name: 'UserGroup',
            belongsToMany: 'User#id',
            using: 'UserGroup#group'
          });
        });

        // console.log(util.inspect(u.toObject(),{depth: 7}));
        // console.log(util.inspect(u,{depth: 7}));
        // console.log(util.inspect(g.toObject(),{depth: 7}));
        // console.log(util.inspect(ug.toObject(),{depth: 7}));
      });
    });
  });
});

