export const getImageBlob = async ({ name, src }) => {
  const response = await fetch(src);
  const fileBlob = await response.blob();
  fileBlob.name = name;

  return fileBlob;
};

export const cacheResource = async ({ src }) => {
  const cache = await caches.open('MentalHealthApp');
  cache.add(src);
};

export const getCachedResource = async src => {
  const cache = await caches.open('MentalHealthApp');
  const cachedImageFound = await cache.match(src);

  return cachedImageFound && cachedImageFound.url ? cachedImageFound.url : src;
};
