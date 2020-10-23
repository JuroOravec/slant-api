import find from 'lodash/find';

import { CachedFetcher, FetchOptions } from './CachedFetcher';
import * as dataModels from '../models';
import { Tag, TagDataRaw } from '../models/Tag';
import { debug } from './debug';

interface SlantFetcher {
  fetch: typeof fetch;
  fetchJson: (...args: Parameters<typeof fetch>) => Promise<any>;
}

interface Models {
  Tag: typeof Tag;
}

interface SlantOptions {
  fetcher?: SlantFetcher;
  models?: Models;
}

const BASE_URL = 'https://www.slant.co';

const makeDefaultFetcher = () =>
  new CachedFetcher({
    baseUrl: BASE_URL,
    // Include following params in all requests
    params: { format: 'json' },
  });

class Slant {
  fetcher: SlantFetcher;
  models: Models;

  constructor(options: SlantOptions = {}) {
    const { models = dataModels, fetcher = makeDefaultFetcher() } = options;

    this.models = models;
    this.fetcher = fetcher;
  }

  /**
   *  Get all tags.
   */
  async tags(options: FetchOptions = {}): Promise<Tag[]> {
    debug('Fetching tags');
    const tagList: { children: TagDataRaw[] } = await this.fetcher.fetchJson(
      '/tags',
      options,
    );
    const tags = tagList.children.map(
      (tagData) => new this.models.Tag(tagData),
    );
    return tags;
  }

  /**
   *  Get single tag matching the query.
   */
  async tag(
    query: Partial<Tag> | ((tag: Tag) => boolean),
    options: FetchOptions = {},
  ): Promise<Tag | undefined> {
    const tags = await this.tags(options);
    return find(tags, query);
  }
}

export { Slant };
