import { API_ENDPOINT } from 'Api/api-config';
import { LazyImage } from 'Therapists/ui/dynamicRoutes';
import { ITherapistImage } from './Therapist.interfaces';

export const TherapistCardImage = ({
  image,
  name,
  lazy,
  baseUrl = API_ENDPOINT.imageBaseUrl,
}: ITherapistImage) => {
  const src = `${baseUrl}/images/headshots/${image}`;
  const alt = `headshot for ${name}`;

  return image ? <LazyImage src={src} alt={alt} lazy={lazy} /> : null;
};
