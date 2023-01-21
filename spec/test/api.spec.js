import { fetchAlbumWithId } from "../../api/fetch.js";

describe('fetchAlbumWithId', () => {
  beforeAll(() => {
    spyOn(global, 'fetch').and.returnValue(Promise.resolve());
  })

  it('expects fetch to be called with correct API url and passed in id', async () => {
    await fetchAlbumWithId(2);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos?albumId=2')
  });
});
