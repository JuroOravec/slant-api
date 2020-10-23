import tagsData from '../../test/fixtures/tags.json';
import { Tag } from '../models';
import { Slant } from './Slant';

describe('Slant', () => {
  describe('tags', () => {
    test('returns all tags', async () => {
      const slant = new Slant();

      const tags = await slant.tags();
      expect(tags).toBeDefined();
      expect(tags.length).toBe(tagsData.children.length);
      expect(tags.every((tag) => tag instanceof Tag)).toBeTruthy();
    });
  });

  describe('tag', () => {
    test('return specific tag by object match', async () => {
      const slant = new Slant();

      const tag = await slant.tag({ id: 'software' });
      expect(tag?.id).toBe('software');
      expect(tag instanceof Tag).toBeTruthy();
    });

    test('return specific tag by match function', async () => {
      const slant = new Slant();

      const tag = await slant.tag((tag) => tag.id === 'software');
      expect(tag?.id).toBe('software');
      expect(tag instanceof Tag).toBeTruthy();
    });
  });
});
