import React, { useState, useEffect } from 'react';
import { CardImage, placeHolder } from 'Therapists/ui/styles-Therapist';
import { ImgObserver } from 'util/ImgObserver';

export const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let fromCacheImage;
    let didCancel = false;

    if (imageRef && imageSrc === placeHolder) {
      if (IntersectionObserver) {
        const { imageObserver, cachedImage } = ImgObserver(
          didCancel,
          src,
          setImageSrc
        );
        observer = imageObserver;
        fromCacheImage = cachedImage;
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(fromCacheImage || src);
      }
    }
    return () => {
      didCancel = true;
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, src]);

  return (
    <CardImage ref={setImageRef}>
      <source srcSet={`${imageSrc}.webp`} type='image/webp' />
      <img src={`${imageSrc}.jpg`} alt={alt} />
    </CardImage>
  );
};
