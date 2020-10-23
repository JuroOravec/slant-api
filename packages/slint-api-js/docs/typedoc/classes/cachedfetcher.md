[slant-api](../README.md) › [CachedFetcher](cachedfetcher.md)

# Class: CachedFetcher

Fetcher that caches request responses.

## Hierarchy

* [Fetcher](fetcher.md)

  ↳ **CachedFetcher**

## Index

### Constructors

* [constructor](cachedfetcher.md#constructor)

### Properties

* [cache](cachedfetcher.md#cache)
* [options](cachedfetcher.md#options)

### Methods

* [fetch](cachedfetcher.md#fetch)
* [fetchJson](cachedfetcher.md#fetchjson)
* [urlFromPath](cachedfetcher.md#urlfrompath)

## Constructors

###  constructor

\+ **new CachedFetcher**(`options`: [FetcherCtorOptions](../interfaces/fetcherctoroptions.md)): *[CachedFetcher](cachedfetcher.md)*

*Inherited from [Fetcher](fetcher.md).[constructor](fetcher.md#constructor)*

Defined in src/lib/Fetcher.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FetcherCtorOptions](../interfaces/fetcherctoroptions.md) |

**Returns:** *[CachedFetcher](cachedfetcher.md)*

## Properties

###  cache

• **cache**: *Map‹string, any›* = new Map()

Defined in src/lib/CachedFetcher.ts:30

___

###  options

• **options**: *[FetcherOptions](../interfaces/fetcheroptions.md)*

*Inherited from [Fetcher](fetcher.md).[options](fetcher.md#options)*

Defined in src/lib/Fetcher.ts:18

## Methods

###  fetch

▸ **fetch**(...`args`: [FetchParams](../README.md#fetchparams)): *[FetchReturn](../README.md#fetchreturn)*

*Overrides [Fetcher](fetcher.md).[fetch](fetcher.md#fetch)*

Defined in src/lib/CachedFetcher.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [FetchParams](../README.md#fetchparams) |

**Returns:** *[FetchReturn](../README.md#fetchreturn)*

___

###  fetchJson

▸ **fetchJson**(...`args`: [FetchParams](../README.md#fetchparams)): *Promise‹any›*

*Inherited from [Fetcher](fetcher.md).[fetchJson](fetcher.md#fetchjson)*

Defined in src/lib/Fetcher.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [FetchParams](../README.md#fetchparams) |

**Returns:** *Promise‹any›*

___

###  urlFromPath

▸ **urlFromPath**(`path`: string): *string*

*Inherited from [Fetcher](fetcher.md).[urlFromPath](fetcher.md#urlfrompath)*

Defined in src/lib/Fetcher.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*
