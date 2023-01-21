import { expect, describe, it } from '@jest/globals';
import { logIdWithTitle } from '../util/helpers.js';

describe('logIdWithTitle', () => {
  it('returns with expected `[id] title` syntax', () => {
    const mockObj = {
      id: '1',
      title: 'Spongebob Anime'
    }

    const expected = '[1] Spongebob Anime';

    const value = logIdWithTitle(mockObj.id, mockObj.title);
    expect(value).toBe(expected)
  });
});
