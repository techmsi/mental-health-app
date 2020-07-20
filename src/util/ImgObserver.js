import { getCachedResource } from 'worker/imageLoad/cacheResource';

const observerOptions = {
  threshold: 0.5,
  rootMargin: '5%'
  // trackVisibility: true,
  // delay: 100
};

export const ImgObserver = (
  didCancel,
  src,
  setImageSrc,
  setImageSrcFallback
) => {
  let cachedImage = null;
  let cacheImageFallback = null;
  let imageObserver = null;
  if (IntersectionObserver) {
    imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { intersectionRatio, isIntersecting } = entry;
        const inViewport = intersectionRatio > 0 || isIntersecting;
        // when image is visible in the viewport + rootMargin
        if (!didCancel && inViewport) {
          getCachedResource(`${src}.webp`).then((image = null) => {
            cachedImage = image;
          });

          getCachedResource(`${src}.jpg`).then((image = null) => {
            cacheImageFallback = image;
          });

          setImageSrc(cachedImage || `${src}.webp`);
          setImageSrcFallback(cacheImageFallback || `${src}.jpg`);
        }
      });
    }, observerOptions);
  } else {
    // Old browsers fallback
    setImageSrc(cachedImage || `${src}.webp`);
    setImageSrcFallback(cacheImageFallback || `${src}.jpg`);
  }
  return { imageObserver, cachedImage, cacheImageFallback };
};
