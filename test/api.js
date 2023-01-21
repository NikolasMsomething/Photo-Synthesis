import assert from 'node:assert';
import { describe, it } from 'node:test';
import { fetchAlbumWithId } from '../api/fetch.js';

describe('fetchAlbumWithId', () => {
  it('expects fetch to be called with correct API url and passed in id', async () => {
    // fetch = 
    const expected = '[1] Spongebob Anime';

    const value = logIdWithTitle(mockObj.id, mockObj.title);
    assert.strictEqual(expected, value);
  });
});
