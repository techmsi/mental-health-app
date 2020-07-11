import React, { useState, useEffect } from 'react';
import { CardImage } from 'Therapists/ui/styles-Therapist';
import { API_ENDPOINT } from 'Api/api-config';

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

const observerOptions = {
  threshold: 0.01,
  rootMargin: '5%'
};

export const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeHolder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const { intersectionRatio, isIntersecting } = entry;
            const inViewport = intersectionRatio > 0 || isIntersecting;
            // when image is visible in the viewport + rootMargin
            if (!didCancel && inViewport) {
              setImageSrc(src);
            }
          });
        }, observerOptions);
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
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
      <source srcSet={imageSrc.replace('.jpg', '.webp')} type='image/webp' />
      <img src={imageSrc} alt={alt} />
    </CardImage>
  );
};

export const TherapistCardImage = ({
  image,
  name,
  baseUrl = API_ENDPOINT.imageBaseUrl
}) => {
  return image ? (
    <LazyImage
      src={`${baseUrl}/images/headshots/${image}`}
      alt={`headshot for ${name}`}
      loading='lazy'
    />
  ) : null;
};
