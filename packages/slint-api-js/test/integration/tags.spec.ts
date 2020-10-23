jest.unmock('cross-fetch');

import { Slant } from '../../src';
import tagsData from '../fixtures/tags.json';
import { compareBySchema } from '../lib/compareBySchema';

describe('/tags endpoint', () => {
  test('data matches schema from fixture', async () => {
    const slant = new Slant();
    const fetchJsonSpy = jest.spyOn(slant.fetcher, 'fetchJson');

    await slant.tags();

    const { type, value: endpointResponseJson } = fetchJsonSpy.mock.results[0];
    expect(type).toBe('return');

    const { errors } = await compareBySchema(
      tagsData,
      await endpointResponseJson,
    );
    expect(errors).toEqual([]);
  });
});
