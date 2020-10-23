import fetch from 'cross-fetch';

import { debug } from 'debug';

interface FetcherCtorOptions {
  baseUrl: string;
  params?: { [key: string]: string | number };
}

interface FetcherOptions {
  baseUrl: string;
  params: URLSearchParams;
}

type FetchParams = Parameters<typeof fetch>;
type FetchReturn = ReturnType<typeof fetch>;
type FetchOptions = NonNullable<FetchParams[1]>;

class Fetcher {
  options: FetcherOptions;

  constructor(options: FetcherCtorOptions) {
    const { baseUrl, params = {} } = options;
    const searchParams = new URLSearchParams(params as Record<string, string>);

    this.options = {
      baseUrl,
      params: searchParams,
    };
  }

  fetch(...args: FetchParams): FetchReturn {
    const [input, ...otherArgs] = args;

    // Intercept input to prepend it with baseUrl
    const newInput: RequestInfo =
      typeof input === 'string'
        ? this.urlFromPath(input)
        : {
            ...input,
            url: this.urlFromPath(input.url),
          };

    debug(`Fetching endpoint ${newInput}`);
    return fetch(newInput, ...otherArgs);
  }

  async fetchJson(...args: FetchParams): Promise<any> {
    const response = await this.fetch(...args);
    return response.json();
  }

  urlFromPath(path: string) {
    const url = new URL(this.options.baseUrl);
    url.pathname = path;

    this.options.params.forEach((value, key) =>
      url.searchParams.set(key, value),
    );

    return url.toString();
  }
}

export { Fetcher, FetchParams, FetchReturn, FetchOptions };
