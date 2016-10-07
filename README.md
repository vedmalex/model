#Спецификация доменной модели

## требования
- минимум абстракций, они не понятны рядовому пользователю.
- простота, поскольку все схемы храниться в простых JSON файлах, с простой схемой, простота: хранения, создания, изменения, удаления; реализуется из коробки.

## Связи

`ref` ссылка имеет следующую структуру: 

```javascript
  /^(.*?)#{1}(.*?)(?:\:(.*?)#(.*?))?$/;
```

четыре группы
1 - entity
2 - field
: - раздел для указания таблицы связки
3 - Entity
4 - field

первая группа показывает entity типом которого будет представлена ссылка,
вторая группа указывает на таблицу связки.

варианты 
1:1
  Два вида связи:
первый вариант, когда связывание идет первичными ключами и по сути это два одинаковых объекта...
    A <--1:1--> B --- A <--"is a" --> B 
    Такая связь может быть использована для эмуляции наследования

```javascript
    let A = {
      name:"A",
      fields:[{
        name: 'id',
        ref:'B#id',
        // isA:'B',
      }]
    };

    let B = {
      name:'B',
      fields:[{
        name:'id',
        ref:'A#id'
        // isA:'A',
      }]
    }
```

посмотреть, а подходить такая штука или нет?

```javascript
    let A = {
      name:"A",
      fields:[{
        // field b contain ref to the B-instance field:id, key for connection wil be taken from .id field
        name: 'b',
        ref: 'B#id',
        store: '#id',
      }]
    };

    let B = {
      name:'B',
      fields:[{
        // field a contain ref to the A-instance field:id, key for connection wil be taken from .id field
        name: 'a',
        ref: 'A#id',
        store: '#id',
      }]
    }
```
кажется эта штука лишняя

второй вариант, когда связывание идет 
    A --1:1--> B --- A --"has one" --> B 
    это по сути ссылка на объект B, которая храниться в объекте A 
    в терминах релационных баз данных A имеет ограничение типа foreign key ссылаясь на уникальное поле или первичный ключ объекта B.

A <--  hasOne / BelongsTo --> B
поле по которому выполняется связка в А является уникальным - `identity: true`.

```javascript

// A --hasOne--> B
    let A = {
      name:"A",
      fields:[{
        name: 'b',
        // hasOne:'B#a',
        ref:'B#a',
        identity: true, // this required b/c one-to-one
      }]
    };

// B --belongTo--> A
    let B = {
      name:'B',
      fields:[{
        name:'a',
        ref:'A#id'
      }]
    };

```

это не то же самое что и 
A --has One --> B
B --has One --> A

```javascript

// A --hasOne--> B
    let A = {
      name:"A",
      fields:[{
        name: 'b',
        ref:'B#id',
      }]
    };

// B --hasOne--> A
    let B = {
      name:'B',
      fields:[{
        name:'a',
        ref:'A#id'
      }]
    };
```

1:N
'b' не является уникальным

```javascript

// A --hasMany--> B
    let A = {
      name:"A",
      fields:[{
        name: 'b',
        ref:'B#a',
      }]
    };

// B --hasOne--> A
    let B = {
      name:'B',
      fields:[{
        name:'a',
        ref:'A#id'
      }]
    };

```

N:M -- эта фича должна работать только с таблицей связки.

```javascript

// A --belongsToMany--> B
    let A = {
      name:"A",
      fields:[{
        name: 'b',
        ref:'B#id',
        store: 'AB:a',
      }]
    };

// B --belongsToMany--> A
    let B = {
      name:'B',
      fields:[{
        name:'a',
        ref: 'A#id',
        store: 'AB:b',
      }]
    };

```

Entity по связки должна быть создана виртуальная или существовать.
такая entity может иметь и свои атрибуты..., и ее описание можно выгрузить в директорию

Если один объект имеет много связей с другим объектом, то нужно указывать таблицу связи.
несколько типов связей могут быть множественными. их можно и нужно различать по таблице связки.

A --hasOne--> B
A --hasOne--> B

```javascript
// A --hasOne--> B
    let A = {
      name:"A",
      fields:[{
        name: 'b1',
        ref:'B#id',
      },
      {
        name: 'b2',
        ref:'B#id',
      }]
    };

// B --belongsTo--> A
    let B = {
      name:'B',
      fields:[{
        name:'ab1',
        ref:'A#b1',
        store:'A#b1',
      },
      {
        name:'ab2',
        ref:'A#b2:',
        store:'A#b2',
      }]
    };
```

параметр после `:` указывает на то, что данная ссылка не будет иметь хранилища в entity 
по умолчанию, если не указана таблица связки, считается что храниться в текущей сущности...
!!! посмотреть что это действительно так !!!

1. можно угадывать все ассоциации...
2. нужно сделать хранилище для fk Тоже....


### Правила формирования внешних ключей, по умолчанию.

по-умолчанию pk это поле id или первый попавшийся identityKey

предусматриваются варианты когда части ref являются не обязательными, это в основном для упрощения ввода вручную. в этом случае система должна угадать название полей, на которые будет ссылаться.
по умолчанию, если в entity нет ни одного pk то он создается автоматически.
в entity Должен(!) быть только один pk иначе в качестве первичного будет взят первый, а второй переведен в identity 

`[RefEntityType]#[RefField][:[StoreEntityType]#[StoreField]]`

варианты

- `# ` означает что RefEntityType = текущий тип, RefField = pk текущего типа.
- `Entity#` означает, что в качестве RefField будет использован стандартный ключ pk.
- `#field` Означает что RefEntityType это текущий тип, и указано поле.

эти же правила касаются и описания хранилища.

Q: это больше похоже на настройку слоя базы данных!!!

A: ничего страшного, если выделять отдельно настройку связей, то она получиться более громоздкой...
 А так мы можем придумать как и чего хранить.

можно `#` заменить на `.` а `:` на `->`, но получиться более громоздко.


Типы связей:

1. 1 : 1
  пара
    A hasOne B    `fieldB: { ref: 'B#identity' through:'B#fieldA' }`

    B belongsTo A `fieldA: { ref: 'A#identity' through:'B#fieldA' }`
  пара
    A hasOne B `fieldB: { ref: 'B#identity' through: 'B#fieldA' }`

    B hasOne A `fieldA: { ref: 'A#identity' through: 'A#fieldB' }`
  пара
    A belongsTo B `fieldB: { ref: 'B#identity' through: 'A#fieldB' }`

    B belongsTo A `fieldA: { ref: 'A#identity' through: 'B#fieldA' }`

2. 1 : N
  пара
    A hasMany B   `fieldB: { ref: 'B#identity' through: 'B#fieldA' }`

    B delongsTo A `fieldA: { ref: 'A#identity' through: 'B#fieldA' }`
3. M : N
  пара
    A hasMany B `fieldB: { ref: 'B#identity' through: 'A#fieldB' }`

    B hasMany A `fieldA: { ref: 'A#identity' through: 'B#fieldA' }`
  пара
    A belongsToMany B `fieldB: { ref: 'B#identity' through: 'A#fieldB' }`

    B belongsToMany A `fieldA: { ref: 'A#identity' through: 'B#fieldA' }`


{
  name:'A',
  fields:[{
      name:'id',
      indentity: true
    },
    {
      name:'fieldB',
      hasOne:'B#fieldA',
    },
  ],
}

{
  name:'B',
  fields:[{
      name:'id',
      indentity: true
    },
    {
      name:'fieldA',
      belongsTo:'A#id',
    },
  ],
}


{
  name:'A',
  fields:[{
      name:'id',
      indentity: true
    },
    {
      name:'fieldB',
      hasOne:'B#fieldA',
    },
  ],
}

{
  name:'B',
  fields:[{
      name:'id',
      indentity: true
    },
    {
      name:'fieldA',
      hasOne:'A#id',
    },
  ],
}





