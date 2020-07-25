import React, { useState, useEffect } from 'react';
import { CardImage, placeHolder } from 'Therapists/ui/styles-Therapist';
import { ImgObserver } from 'util/ImgObserver';

const onLoad = event => {
  event.target.classList.add('loaded');
};

const onError = event => {
  event.target.classList.add('error');
};

export const LazyImage = ({ src, alt, lazy }) => {
  const [imageSrc, setImageSrc] = useState(lazy ? placeHolder : `${src}.webp`);
  const [imageSrcFallback, setImageSrcFallback] = useState(
    lazy ? placeHolder : `${src}.jpg`
  );
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeHolder) {
      const { imageObserver } = ImgObserver(
        didCancel,
        src,
        setImageSrc,
        setImageSrcFallback
      );
      observer = imageObserver;
      observer.observe(imageRef);
    }
    return () => {
      didCancel = true;
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, imageSrcFallback, lazy, src]);

  return (
    <CardImage className='headshot'>
      <source srcSet={imageSrc} type='image/webp' />
      <img
        ref={setImageRef}
        src={imageSrcFallback}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
    </CardImage>
  );
};
