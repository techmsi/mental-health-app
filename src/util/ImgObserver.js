import ImageLoaderWorker from 'worker/imageLoad/host';
import { getCachedResource } from 'worker/imageLoad/cacheResource';

const observerOptions = {
  threshold: 0.01,
  rootMargin: '5%'
  // trackVisibility: true,
  // delay: 100
};

export const ImgObserver = (didCancel, src, setImageSrc) => {
  let cachedImage = null;

  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const { intersectionRatio, isIntersecting } = entry;
      const inViewport = intersectionRatio > 0 || isIntersecting;
      // when image is visible in the viewport + rootMargin
      if (!didCancel && inViewport) {
        ImageLoaderWorker.addEventListener('message', () => {
          getCachedResource(src).then(image => {
            cachedImage = image;
          });
        });

        setImageSrc(cachedImage || src);
      }
    });
  }, observerOptions);

  return { imageObserver, cachedImage };
};
