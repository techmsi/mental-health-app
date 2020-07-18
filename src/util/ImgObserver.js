import ImageLoaderWorker from 'worker/imageLoad/host';
import { getCachedImage } from 'worker/imageLoad/loadImages';

const observerOptions = {
  threshold: 0.01,
  rootMargin: '5%',
  trackVisibility: true,
  delay: 100
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
          getCachedImage(src).then(image => {
            cachedImage = image;
          });
        });

        setImageSrc(cachedImage || src);
      }
    });
  }, observerOptions);

  return { imageObserver, cachedImage };
};
