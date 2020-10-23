[slant-api](../README.md) › [Slant](slant.md)

# Class: Slant

## Hierarchy

* **Slant**

## Index

### Constructors

* [constructor](slant.md#constructor)

### Properties

* [fetcher](slant.md#fetcher)
* [models](slant.md#models)

### Methods

* [tag](slant.md#tag)
* [tags](slant.md#tags)

## Constructors

###  constructor

\+ **new Slant**(`options`: [SlantOptions](../interfaces/slantoptions.md)): *[Slant](slant.md)*

Defined in src/lib/Slant.ts:31

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [SlantOptions](../interfaces/slantoptions.md) | {} |

**Returns:** *[Slant](slant.md)*

## Properties

###  fetcher

• **fetcher**: *[SlantFetcher](../interfaces/slantfetcher.md)*

Defined in src/lib/Slant.ts:30

___

###  models

• **models**: *[Models](../interfaces/models.md)*

Defined in src/lib/Slant.ts:31

## Methods

###  tag

▸ **tag**(`query`: Partial‹[Tag](tag.md)› | function): *Promise‹[Tag](tag.md) | undefined›*

Defined in src/lib/Slant.ts:58

 Get single tag matching the query.

**Parameters:**

Name | Type |
------ | ------ |
`query` | Partial‹[Tag](tag.md)› &#124; function |

**Returns:** *Promise‹[Tag](tag.md) | undefined›*

___

###  tags

▸ **tags**(`options`: [FetchOptions](../README.md#fetchoptions)): *Promise‹[Tag](tag.md)[]›*

Defined in src/lib/Slant.ts:46

 Get all tags.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [FetchOptions](../README.md#fetchoptions) | {} |

**Returns:** *Promise‹[Tag](tag.md)[]›*
