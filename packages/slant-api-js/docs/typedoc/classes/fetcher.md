[slant-api](../README.md) › [Fetcher](fetcher.md)

# Class: Fetcher

## Hierarchy

* **Fetcher**

  ↳ [CachedFetcher](cachedfetcher.md)

## Index

### Constructors

* [constructor](fetcher.md#constructor)

### Properties

* [options](fetcher.md#options)

### Methods

* [fetch](fetcher.md#fetch)
* [fetchJson](fetcher.md#fetchjson)
* [urlFromPath](fetcher.md#urlfrompath)

## Constructors

###  constructor

\+ **new Fetcher**(`options`: [FetcherCtorOptions](../interfaces/fetcherctoroptions.md)): *[Fetcher](fetcher.md)*

Defined in src/lib/Fetcher.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FetcherCtorOptions](../interfaces/fetcherctoroptions.md) |

**Returns:** *[Fetcher](fetcher.md)*

## Properties

###  options

• **options**: *[FetcherOptions](../interfaces/fetcheroptions.md)*

Defined in src/lib/Fetcher.ts:18

## Methods

###  fetch

▸ **fetch**(...`args`: [FetchParams](../README.md#fetchparams)): *[FetchReturn](../README.md#fetchreturn)*

Defined in src/lib/Fetcher.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [FetchParams](../README.md#fetchparams) |

**Returns:** *[FetchReturn](../README.md#fetchreturn)*

___

###  fetchJson

▸ **fetchJson**(...`args`: [FetchParams](../README.md#fetchparams)): *Promise‹any›*

Defined in src/lib/Fetcher.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [FetchParams](../README.md#fetchparams) |

**Returns:** *Promise‹any›*

___

###  urlFromPath

▸ **urlFromPath**(`path`: string): *string*

Defined in src/lib/Fetcher.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*
