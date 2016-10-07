/** @jsx create */

let Role =
<entity name='Role'>
  <field />
</entity>;

let User =
<entity name = 'User' title='Пользователь'>
  <field name ='name'/>
  <field name ='password'/>
  <field name ='birthDate' type='datetime'/>
  <field name= 'manager'>
    <belongsTo name = 'userManager' ref='User'/>
  </field>
  <field name= 'subordinate'>
    <hasMany name = 'userManager' ref='User'/>
  </field>
  <field name='roles'>
    <hasMany name ='userRole' ref='Role'/>
  </field>
  <field name='groups'>
    <hasMany name='UserGroup' ref='Group#id' using='UserGroup#group'/>
  </field>
</entity>;

let Group = <entity name='Group'>
  <field name='name' identity/>
  <field name='title'/>
  <field name='users'>
    <belongsTo name='UserGroup' ref ='User#id' using='UserGroup#user'/>
  </field>
</entity>;

let UserGroup =
<entity name='UserGroup'>
  <field name='date' type='datetime'/>
  <field name='user'>
    <belongsTo ref='User#id'/>
  </field>
  <field name='group'>
    <belongsTo ref='Group#name'/>
  </field>
</entity>;

let model = <model>
  <entity name='User'/>
  <entity name='UserGroup'/>
  <entity name='Group'/>
</model>;

let u = new Entity({
    name: 'User',
    fields: [
      { name: 'id', },
      { name: 'name', },
      { name: 'groups', relation: { hasMany: { name: 'UserGroup', ref: 'Group#id' }}}
    ]
  });

let g = new Entity({
          name: 'Group',
          fields: [
            { name: 'id', },
            { name: 'name', },
            { name: 'users',
              relation: {
                name: 'UserGroup',
                hasMany: 'User#id',
                using: 'UserGroup#user'
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
                name: 'UserGroup',
                belongsTo: 'User#id',
              },
            },
            {
              name: 'group',
              relation: {
                name: 'UserGroup',
                belongsTo: 'Group#id',
              },
            }
          ]
        });

let store = <model>
  <entity name='Dictionary/Currency'>
    <field name='name' identity/>
    <field name='signature' required/>
  </entity>;

  <entity name='Inventory/Warehouse'>
    <field name='name' identity />
    <field name='regularityMin' type='number' default='1'/>
    <field name='regularityMax' type='number' default='1'/>
  </entity>

  <entity name='Inventory/WarehouseItem'>
    <field name='name' required/>
    <field name='sku' required>
      <belongsTo ref='Catalog/ToolPart#sku'/>
    </field>
    <field name='manufacturer' required/>
    <field name='price' type='number'/>
    <field name='currency' required>
      <belongsTo ref='Dictionary/Currency#name'/>
    </field>
    <field name='lastUpdate' type='datetime'/>
    <field name='warehouse' required>
      <belongsTo ref='Inventory/Warehouse#name'/>
    </field>
  </entity>

  <entity name='Catalog/ImagePath'>
    <field name='path' required/>
    <field name='viewItem'>
      <belongsTo ref='Catalog/ToolDetailViewItem'/>
    </field>
  </entity>

  <entity name='Catalog/ToolPart'>
    <field name='name' required/>
    <field name='sku' identity/>
    <field name='inventoryItems'>
      <hasMany ref='Catalog/ToolDetailViewItem#sku'/>
    </field>
    <field name='manufacturer' required>
      <belongsTo ref='Manufacturer#name'/>
    </field>
    <field name='warehouseItems'>
      <hasMany ref='Catalog/WarehouseItem#sku'/>
    </field>
  </entity>

  <entity name='Catalog/Category'>
    <field name='name' identity/>
    <field name='parent'>
      <belongsTo ref='Catalog/Category#name'/>
    </field>
    <field name='children'>
      <hasMany ref='Catalog/Category#name'/>
    </field>
    <field name='manufacturer' required>
      <hasMany name='ManufacturerCategory' ref='Catalog/Manufacturer#name'/>
    </field>
  </entity>

  <entity name='Catalog/Manufacturer'>
    <field name='name' identity/>
    <field name='activeCategory'>
      <hasMany name='ManufacturerCategory' ref='Category#name'/>
    </field>
  </entity>

  <entity name='Catalog/Tool'>
    <field name='sku' identity/>
    <field name='name' identity/>
    <field name='description' identity/>
    <field name='manufacturer'>
      <belongsTo ref='Catalog/Manufacturer#name'/>
    </field>
  </entity>

  <entity name='Catalog/ToolDetail'>
    <field name='name'/>
    <field name='tool'>
      <belongsTo ref='Catalog/Tool#sku'/>
    </field>
    <field name='picture'>
      <belongsTo ref='Catalog/ImagePath#path'/>
    </field>
    <field name='items'>
      <belongsTo ref='Catalog/ToolDetailViewItem'/>
    </field>
  </entity>

  <entity name='Catalog/ToolDetailViewItem'>
    <field name='sku'>
      <belongsTo ref='Catalog/ToolPart#sku'/>
    </field>
    <field name='key'/>
    <field name='lv'/>
    <field name='description'/>
    <field name='qty'/>
    <field name='standart'/>
    <field name='note1'/>
    <field name='note2'/>
    <field name='note3'/>
    <field name='imagePaths'>
      <hasMany ref='ImagePath'/>
    </field>
    <field name='view'>
      <hasMany ref='Catalog/ToolDetail'/>
    </field>
  </entity>
</model>;
