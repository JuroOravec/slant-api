import loremData from '../../test/fixtures/lorem.json';
import * as mockCrossFetch from './__mocks__/cross-fetch';
import { CachedFetcher } from './CachedFetcher';

describe(CachedFetcher.name, () => {
  describe('fetch', () => {
    test('returns fetched data', async () => {
      const fetcher = new CachedFetcher({ baseUrl: 'http://a.bc' });
      const response = await fetcher.fetch('/def');
      const data = await response.json();

      expect(data).toEqual(loremData);
    });

    test("returns fetched data from the cache if they've been fetched already", async () => {
      const baseUrl = 'http://a.bc';
      const urlPath = '/def';

      const fetchSpy = jest.spyOn(mockCrossFetch, 'default');
      const fetcher = new CachedFetcher({ baseUrl });

      await fetcher.fetch(urlPath);

      const firstCallFirstArg = fetchSpy.mock.calls[0][0];
      expect(firstCallFirstArg).toBe(`${baseUrl}${urlPath}`);

      await fetcher.fetch(urlPath);

      const secondCall = fetchSpy.mock.calls[1];
      expect(secondCall).toBeUndefined();
    });

    test('ignores cache if "ignoreCache" is true', async () => {
      const baseUrl = 'http://a.bc';
      const urlPath = '/def';

      const fetchSpy = jest.spyOn(mockCrossFetch, 'default');
      const fetcher = new CachedFetcher({ baseUrl });

      await fetcher.fetch(urlPath);

      const firstCallFirstArg = fetchSpy.mock.calls[0][0];
      expect(firstCallFirstArg).toBe(`${baseUrl}${urlPath}`);

      await fetcher.fetch(urlPath, { ignoreCache: true });

      const secondCallFirstArg = fetchSpy.mock.calls[1][0];
      expect(secondCallFirstArg).toBe(`${baseUrl}${urlPath}`);
    });
  });
});
