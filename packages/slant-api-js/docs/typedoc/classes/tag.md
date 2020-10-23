[slant-api](../README.md) › [Tag](tag.md)

# Class: Tag

## Hierarchy

* [Model](model.md)

  ↳ **Tag**

## Implements

* [TagData](../interfaces/tagdata.md)

## Index

### Constructors

* [constructor](tag.md#constructor)

### Properties

* [class](tag.md#class)
* [count](tag.md#count)
* [id](tag.md#id)
* [isCommunity](tag.md#iscommunity)
* [localId](tag.md#localid)
* [name](tag.md#name)
* [type](tag.md#type)
* [uuid](tag.md#uuid)

### Methods

* [deserialize](tag.md#deserialize)
* [serialize](tag.md#serialize)

## Constructors

###  constructor

\+ **new Tag**(`data`: [Tag](tag.md) | [TagDataRaw](../interfaces/tagdataraw.md)): *[Tag](tag.md)*

Defined in src/models/Tag.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Tag](tag.md) &#124; [TagDataRaw](../interfaces/tagdataraw.md) |

**Returns:** *[Tag](tag.md)*

## Properties

###  class

• **class**: *TagData["class"]*

Defined in src/models/Tag.ts:20

___

###  count

• **count**: *TagData["count"]*

*Implementation of [TagData](../interfaces/tagdata.md).[count](../interfaces/tagdata.md#count)*

Defined in src/models/Tag.ts:25

___

###  id

• **id**: *TagData["id"]*

Defined in src/models/Tag.ts:22

___

###  isCommunity

• **isCommunity**: *TagData["isCommunity"]*

Defined in src/models/Tag.ts:24

___

###  localId

• **localId**: *TagData["localId"]*

Defined in src/models/Tag.ts:26

___

###  name

• **name**: *TagData["name"]*

Defined in src/models/Tag.ts:23

___

###  type

• **type**: *TagData["type"]*

Defined in src/models/Tag.ts:19

___

###  uuid

• **uuid**: *TagData["uuid"]*

Defined in src/models/Tag.ts:21

## Methods

###  deserialize

▸ **deserialize**(`data`: [TagDataRaw](../interfaces/tagdataraw.md)): *[TagData](../interfaces/tagdata.md)*

*Overrides [Model](model.md).[deserialize](model.md#abstract-deserialize)*

Defined in src/models/Tag.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`data` | [TagDataRaw](../interfaces/tagdataraw.md) |

**Returns:** *[TagData](../interfaces/tagdata.md)*

___

###  serialize

▸ **serialize**(): *[TagDataRaw](../interfaces/tagdataraw.md)*

*Overrides [Model](model.md).[serialize](model.md#abstract-serialize)*

Defined in src/models/Tag.ts:44

**Returns:** *[TagDataRaw](../interfaces/tagdataraw.md)*
