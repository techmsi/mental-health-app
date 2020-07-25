import React from 'react';
import { API_ENDPOINT } from 'Api/api-config';
import { LazyImage } from 'Therapists/ui/dynamicRoutes';

export const TherapistCardImage = ({
  image,
  name,
  lazy,
  baseUrl = API_ENDPOINT.imageBaseUrl
}) => {
  const src = `${baseUrl}/images/headshots/${image}`;
  const alt = `headshot for ${name}`;

  return image ? <LazyImage src={src} alt={alt} lazy={lazy} /> : null;
};
