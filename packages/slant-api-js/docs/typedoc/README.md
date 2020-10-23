[slant-api](README.md)

# slant-api

## Index

### Classes

* [CachedFetcher](classes/cachedfetcher.md)
* [Fetcher](classes/fetcher.md)
* [Model](classes/model.md)
* [Slant](classes/slant.md)
* [Tag](classes/tag.md)

### Interfaces

* [FetcherCtorOptions](interfaces/fetcherctoroptions.md)
* [FetcherOptions](interfaces/fetcheroptions.md)
* [Models](interfaces/models.md)
* [SlantFetcher](interfaces/slantfetcher.md)
* [SlantOptions](interfaces/slantoptions.md)
* [TagData](interfaces/tagdata.md)
* [TagDataRaw](interfaces/tagdataraw.md)

### Type aliases

* [FetchOptions](README.md#fetchoptions)
* [FetchParams](README.md#fetchparams)
* [FetchReturn](README.md#fetchreturn)

### Variables

* [BASE_URL](README.md#const-base_url)
* [debug](README.md#const-debug)

### Functions

* [getDebugLogger](README.md#getdebuglogger)
* [makeDefaultFetcher](README.md#const-makedefaultfetcher)
* [mockFetch](README.md#const-mockfetch)
* [resolveResponse](README.md#const-resolveresponse)

## Type aliases

###  FetchOptions

Ƭ **FetchOptions**: *NonNullable‹FetchParams[1]›*

Defined in src/lib/Fetcher.ts:15

Defined in src/lib/CachedFetcher.ts:8

### `Optional` body

• **body**? : *BodyInit | null*

*Inherited from [FetchOptions](README.md#fetchoptions).[body](README.md#optional-body)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1562

A BodyInit object or null to set request's body.

### `Optional` cache

• **cache**? : *RequestCache*

*Inherited from [FetchOptions](README.md#fetchoptions).[cache](README.md#optional-cache)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1566

A string indicating how the request will interact with the browser's cache to set request's cache.

### `Optional` cacheKey

• **cacheKey**? : *undefined | string*

Defined in src/lib/CachedFetcher.ts:18

Key under which the request response should be stored.

Defaults to the request URL.

### `Optional` credentials

• **credentials**? : *RequestCredentials*

*Inherited from [FetchOptions](README.md#fetchoptions).[credentials](README.md#optional-credentials)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1570

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

### `Optional` headers

• **headers**? : *HeadersInit*

*Inherited from [FetchOptions](README.md#fetchoptions).[headers](README.md#optional-headers)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1574

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

### `Optional` ignoreCache

• **ignoreCache**? : *undefined | false | true*

Defined in src/lib/CachedFetcher.ts:12

Whether the cache should be bypassed.

### `Optional` integrity

• **integrity**? : *undefined | string*

*Inherited from [FetchOptions](README.md#fetchoptions).[integrity](README.md#optional-integrity)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1578

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

### `Optional` keepalive

• **keepalive**? : *undefined | false | true*

*Inherited from [FetchOptions](README.md#fetchoptions).[keepalive](README.md#optional-keepalive)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1582

A boolean to set request's keepalive.

### `Optional` method

• **method**? : *undefined | string*

*Inherited from [FetchOptions](README.md#fetchoptions).[method](README.md#optional-method)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1586

A string to set request's method.

### `Optional` mode

• **mode**? : *RequestMode*

*Inherited from [FetchOptions](README.md#fetchoptions).[mode](README.md#optional-mode)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1590

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

### `Optional` redirect

• **redirect**? : *RequestRedirect*

*Inherited from [FetchOptions](README.md#fetchoptions).[redirect](README.md#optional-redirect)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1594

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

### `Optional` referrer

• **referrer**? : *undefined | string*

*Inherited from [FetchOptions](README.md#fetchoptions).[referrer](README.md#optional-referrer)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1598

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

### `Optional` referrerPolicy

• **referrerPolicy**? : *ReferrerPolicy*

*Inherited from [FetchOptions](README.md#fetchoptions).[referrerPolicy](README.md#optional-referrerpolicy)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1602

A referrer policy to set request's referrerPolicy.

### `Optional` signal

• **signal**? : *AbortSignal | null*

*Inherited from [FetchOptions](README.md#fetchoptions).[signal](README.md#optional-signal)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1606

An AbortSignal to set request's signal.

### `Optional` window

• **window**? : *any*

*Inherited from [FetchOptions](README.md#fetchoptions).[window](README.md#optional-window)*

Defined in node_modules/typescript/lib/lib.dom.d.ts:1610

Can only be null. Used to disassociate request from any Window.

___

###  FetchParams

Ƭ **FetchParams**: *[]*

Defined in src/lib/Fetcher.ts:13

Defined in src/lib/CachedFetcher.ts:21

___

###  FetchReturn

Ƭ **FetchReturn**: *ReturnType‹typeof fetch›*

Defined in src/lib/Fetcher.ts:14

## Variables

### `Const` BASE_URL

• **BASE_URL**: *"https://www.slant.co"* = "https://www.slant.co"

Defined in src/lib/Slant.ts:21

___

### `Const` debug

• **debug**: *log* = getDebugLogger()

Defined in src/lib/debug.ts:16

## Functions

###  getDebugLogger

▸ **getDebugLogger**(): *log*

Defined in src/lib/debug.ts:4

**Returns:** *log*

___

### `Const` makeDefaultFetcher

▸ **makeDefaultFetcher**(): *[CachedFetcher](classes/cachedfetcher.md)‹›*

Defined in src/lib/Slant.ts:23

**Returns:** *[CachedFetcher](classes/cachedfetcher.md)‹›*

___

### `Const` mockFetch

▸ **mockFetch**(`urlString`: string, ...`args`: any[]): *Promise‹Response›*

Defined in src/lib/__mocks__/cross-fetch.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`urlString` | string |
`...args` | any[] |

**Returns:** *Promise‹Response›*

___

### `Const` resolveResponse

▸ **resolveResponse**(`url`: URL): *object*

Defined in src/lib/__mocks__/cross-fetch.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`url` | URL |

**Returns:** *object*
