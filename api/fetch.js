export const fetchAlbumWithId = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  return response;
}
