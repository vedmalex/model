'use strict';

/** @jsx create */

var Role = create(
  'entity',
  { name: 'Role' },
  create('field', null)
);

var User = create(
  'entity',
  { name: 'User', title: 'Пользователь' },
  create('field', { name: 'name' }),
  create('field', { name: 'password' }),
  create('field', { name: 'birthDate', type: 'datetime' }),
  create(
    'field',
    { name: 'manager' },
    create('belongsTo', { name: 'userManager', ref: 'User' })
  ),
  create(
    'field',
    { name: 'subordinate' },
    create('hasMany', { name: 'userManager', ref: 'User' })
  ),
  create(
    'field',
    { name: 'roles' },
    create('hasMany', { name: 'userRole', ref: 'Role' })
  ),
  create(
    'field',
    { name: 'groups' },
    create('hasMany', { name: 'UserGroup', ref: 'Group#id', using: 'UserGroup#group' })
  )
);

var Group = create(
  'entity',
  { name: 'Group' },
  create('field', { name: 'name', identity: true }),
  create('field', { name: 'title' }),
  create(
    'field',
    { name: 'users' },
    create('belongsTo', { name: 'UserGroup', ref: 'User#id', using: 'UserGroup#user' })
  )
);

var UserGroup = create(
  'entity',
  { name: 'UserGroup' },
  create('field', { name: 'date', type: 'datetime' }),
  create(
    'field',
    { name: 'user' },
    create('belongsTo', { ref: 'User#id' })
  ),
  create(
    'field',
    { name: 'group' },
    create('belongsTo', { ref: 'Group#name' })
  )
);

var model = create(
  'model',
  null,
  create('entity', { name: 'User' }),
  create('entity', { name: 'UserGroup' }),
  create('entity', { name: 'Group' })
);

var u = new Entity({
  name: 'User',
  fields: [{ name: 'id' }, { name: 'name' }, { name: 'groups', relation: { hasMany: { name: 'UserGroup', ref: 'Group#id' } } }]
});

var g = new Entity({
  name: 'Group',
  fields: [{ name: 'id' }, { name: 'name' }, { name: 'users',
    relation: {
      name: 'UserGroup',
      hasMany: 'User#id',
      using: 'UserGroup#user'
    }
  }]
});

var ug = new Entity({
  name: 'UserGroup',
  fields: [{
    name: 'user',
    relation: {
      name: 'UserGroup',
      belongsTo: 'User#id'
    }
  }, {
    name: 'group',
    relation: {
      name: 'UserGroup',
      belongsTo: 'Group#id'
    }
  }]
});

var store = create(
  'model',
  null,
  create(
    'entity',
    { name: 'Dictionary/Currency' },
    create('field', { name: 'name', identity: true }),
    create('field', { name: 'signature', required: true })
  ),
  ';',
  create(
    'entity',
    { name: 'Inventory/Warehouse' },
    create('field', { name: 'name', identity: true }),
    create('field', { name: 'regularityMin', type: 'number', 'default': '1' }),
    create('field', { name: 'regularityMax', type: 'number', 'default': '1' })
  ),
  create(
    'entity',
    { name: 'Inventory/WarehouseItem' },
    create('field', { name: 'name', required: true }),
    create(
      'field',
      { name: 'sku', required: true },
      create('belongsTo', { ref: 'Catalog/ToolPart#sku' })
    ),
    create('field', { name: 'manufacturer', required: true }),
    create('field', { name: 'price', type: 'number' }),
    create(
      'field',
      { name: 'currency', required: true },
      create('belongsTo', { ref: 'Dictionary/Currency#name' })
    ),
    create('field', { name: 'lastUpdate', type: 'datetime' }),
    create(
      'field',
      { name: 'warehouse', required: true },
      create('belongsTo', { ref: 'Inventory/Warehouse#name' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/ImagePath' },
    create('field', { name: 'path', required: true }),
    create(
      'field',
      { name: 'viewItem' },
      create('belongsTo', { ref: 'Catalog/ToolDetailViewItem' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/ToolPart' },
    create('field', { name: 'name', required: true }),
    create('field', { name: 'sku', identity: true }),
    create(
      'field',
      { name: 'inventoryItems' },
      create('hasMany', { ref: 'Catalog/ToolDetailViewItem#sku' })
    ),
    create(
      'field',
      { name: 'manufacturer', required: true },
      create('belongsTo', { ref: 'Manufacturer#name' })
    ),
    create(
      'field',
      { name: 'warehouseItems' },
      create('hasMany', { ref: 'Catalog/WarehouseItem#sku' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/Category' },
    create('field', { name: 'name', identity: true }),
    create(
      'field',
      { name: 'parent' },
      create('belongsTo', { ref: 'Catalog/Category#name' })
    ),
    create(
      'field',
      { name: 'children' },
      create('hasMany', { ref: 'Catalog/Category#name' })
    ),
    create(
      'field',
      { name: 'manufacturer', required: true },
      create('hasMany', { name: 'ManufacturerCategory', ref: 'Catalog/Manufacturer#name' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/Manufacturer' },
    create('field', { name: 'name', identity: true }),
    create(
      'field',
      { name: 'activeCategory' },
      create('hasMany', { name: 'ManufacturerCategory', ref: 'Category#name' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/Tool' },
    create('field', { name: 'sku', identity: true }),
    create('field', { name: 'name', identity: true }),
    create('field', { name: 'description', identity: true }),
    create(
      'field',
      { name: 'manufacturer' },
      create('belongsTo', { ref: 'Catalog/Manufacturer#name' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/ToolDetail' },
    create('field', { name: 'name' }),
    create(
      'field',
      { name: 'tool' },
      create('belongsTo', { ref: 'Catalog/Tool#sku' })
    ),
    create(
      'field',
      { name: 'picture' },
      create('belongsTo', { ref: 'Catalog/ImagePath#path' })
    ),
    create(
      'field',
      { name: 'items' },
      create('belongsTo', { ref: 'Catalog/ToolDetailViewItem' })
    )
  ),
  create(
    'entity',
    { name: 'Catalog/ToolDetailViewItem' },
    create(
      'field',
      { name: 'sku' },
      create('belongsTo', { ref: 'Catalog/ToolPart#sku' })
    ),
    create('field', { name: 'key' }),
    create('field', { name: 'lv' }),
    create('field', { name: 'description' }),
    create('field', { name: 'qty' }),
    create('field', { name: 'standart' }),
    create('field', { name: 'note1' }),
    create('field', { name: 'note2' }),
    create('field', { name: 'note3' }),
    create(
      'field',
      { name: 'imagePaths' },
      create('hasMany', { ref: 'ImagePath' })
    ),
    create(
      'field',
      { name: 'view' },
      create('hasMany', { ref: 'Catalog/ToolDetail' })
    )
  )
);
//# sourceMappingURL=modelbuilder.js.map
