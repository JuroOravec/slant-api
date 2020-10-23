import {
  Fetcher,
  FetchParams as BaseFetchParams,
  FetchReturn,
  FetchOptions as BaseFetchOptions,
} from './Fetcher';

interface FetchOptions extends BaseFetchOptions {
  /**
   * Whether the cache should be bypassed.
   */
  ignoreCache?: boolean;
  /**
   * Key under which the request response should be stored.
   *
   * Defaults to the request URL.
   */
  cacheKey?: string;
}

type FetchParams = [
  input: BaseFetchParams[0],
  init?: BaseFetchParams[1] & FetchOptions,
];

/**
 * Fetcher that caches request responses.
 */
class CachedFetcher extends Fetcher {
  cache: Map<string, any> = new Map();

  async fetch(...args: FetchParams): FetchReturn {
    const [input, options] = args;

    const {
      ignoreCache,
      cacheKey = (input as Request)?.url ?? (input as string),
    } = options ?? {};

    const shouldFetch = !this.cache.has(cacheKey) || ignoreCache;

    if (!shouldFetch) {
      const retrievedResponse = this.cache.get(cacheKey);
      return retrievedResponse?.clone?.() ?? retrievedResponse;
    }

    const response = await super.fetch(...args);

    this.cache.set(cacheKey, response);

    return response;
  }
}

export { CachedFetcher, FetchParams, FetchReturn, FetchOptions };
