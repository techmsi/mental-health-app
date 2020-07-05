import React, { useState, useEffect } from 'react';
import { CardImage } from 'Therapists/ui/styles-Therapist';

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeHolder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '5%'
          }
        );
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

  return <CardImage ref={setImageRef} src={imageSrc} alt={alt} />;
};

export const TherapistCardImage = ({
  image,
  name,
  baseUrl = 'https://github.com/techmsi/mental-health-app/blob/master/public/'
}) => {
  return image ? (
    <LazyImage
      src={`${baseUrl}/images/headshots/${image}?raw=true`}
      alt={`headshot for ${name}`}
      loading='lazy'
    />
  ) : null;
};
