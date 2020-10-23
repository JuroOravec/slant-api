import { Response } from 'cross-fetch';

import tagsData from '../../../test/fixtures/tags.json';
import loremData from '../../../test/fixtures/lorem.json';

const resolveResponse = (url: URL): object => {
  if (url.pathname === '/tags') {
    return tagsData;
  }
  return loremData;
};

const mockFetch = (urlString: string, ...args: any[]) => {
  const url = new URL(urlString);

  const data = resolveResponse(url);

  return Promise.resolve(new Response(JSON.stringify(data)));
};

mockFetch.__esModule = true;

export default mockFetch;
