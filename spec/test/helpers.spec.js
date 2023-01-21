import { getIdWithTitle } from '../../util/helpers.js';

describe('getIdWithTitle', () => {
  it('returns with expected `[id] title` syntax', () => {
    const mockObj = {
      id: '1',
      title: 'Spongebob Anime'
    };

    const expected = '[1] Spongebob Anime';

    const value = getIdWithTitle(mockObj.id, mockObj.title);
    expect(value).toBe(expected);
  });
});
