export const cacheResource = async ({ src }) => {
  const cache = await caches.open('MentalHealthApp');
  cache.add(src);
};

export const getCachedResource = async src => {
  const cache = await caches.open('MentalHealthApp');
  const cachedImageFound = await cache.match(src);

  return cachedImageFound ? cachedImageFound.url : null;
};
