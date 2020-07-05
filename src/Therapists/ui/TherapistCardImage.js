import React from 'react';

export const TherapistCardImage = ({
  image,
  name,
  baseUrl = 'https://github.com/techmsi/mental-health-app/blob/master/public/'
}) =>
  image ? (
    <img
      src={`${baseUrl}/images/headshots/${image}?raw=true`}
      alt={`headshot for ${name}`}
    />
  ) : null;
