import loremData from '../../test/fixtures/lorem.json';
import * as mockCrossFetch from './__mocks__/cross-fetch';
import { Fetcher } from './Fetcher';

describe(Fetcher.name, () => {
  describe('fetch', () => {
    test('returns fetched data', async () => {
      const fetcher = new Fetcher({ baseUrl: 'http://ab.c' });
      const response = await fetcher.fetch('/def');
      const data = await response.json();

      expect(data).toEqual(loremData);
    });

    test('sets request host using baseUrl option', async () => {
      const baseUrl = 'http://ab.c';
      const urlPath = '/def';

      const fetchSpy = jest.spyOn(mockCrossFetch, 'default');
      const fetcher = new Fetcher({ baseUrl });

      await fetcher.fetch(urlPath);

      const firstCallFirstArg = fetchSpy.mock.calls[0][0];
      expect(firstCallFirstArg).toBe(`${baseUrl}${urlPath}`);

      fetchSpy.mockRestore();
    });

    test('sets request params using params option', async () => {
      const baseUrl = 'http://ab.c';
      const urlPath = '/def';
      const params = { ghi: 'jkl' };

      const fetchSpy = jest.spyOn(mockCrossFetch, 'default');
      const fetcher = new Fetcher({ baseUrl, params });

      await fetcher.fetch(urlPath);

      const firstCallFirstArg = fetchSpy.mock.calls[0][0];
      expect(firstCallFirstArg).toBe(`${baseUrl}${urlPath}?ghi=${params.ghi}`);

      fetchSpy.mockRestore();
    });
  });

  describe('fetchJson', () => {
    test('calls fetch and unwraps the response as json', async () => {
      const fetcher = new Fetcher({ baseUrl: 'http://ab.c' });
      const data = await fetcher.fetchJson('/def');

      expect(data).toEqual(loremData);
    });
  });
});
