import React from 'react';
import { API_ENDPOINT } from 'Api/api-config';
import { LazyImage } from 'Therapists/ui/dynamicRoutes';

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
