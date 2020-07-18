export const getImageBlob = async ({ name, src }) => {
  const response = await fetch(src);
  const fileBlob = await response.blob();
  fileBlob.name = name;

  return fileBlob;
};

export const loadImages = imageElement => {
  return createImage(imageElement);
};

export const createImage = ({ src, id, blob }) => {
  const imageBlobUrl = URL.createObjectURL(blob);
  cacheResource({ src });

  return { src, id, imageBlobUrl };
};

export const cacheResource = async ({ src }) => {
  const cache = await caches.open('MentalHealthApp');
  cache.add(src);
};

export const getCachedImage = async src => {
  const cache = await caches.open('MentalHealthApp');
  const cachedImageFound = await cache.match(src);

  return cachedImageFound && cachedImageFound.url ? cachedImageFound.url : src;
};
