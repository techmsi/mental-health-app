import { findById } from 'util/helpers';
import { Heading } from 'styles/Layout';
import { ThankYouShell } from 'Therapists/ui/styles-Therapist';

import { TherapistCardImage } from 'Therapists/ui/dynamicRoutes';

export const TherapistChosen = ({
  match: {
    params: { therapistId },
  },
  therapists: { list },
  showImage,
}) => {
  console.debug('Therapist Chosen', list);

  const therapistDetail = findById(list, therapistId);
  const { image, name } = therapistDetail;

  return (
    <ThankYouShell className="therapists__thanks">
      <Heading as="h1">Chosen Therapist</Heading>
      <p>Thank you for choosing a therapist.</p>
      <TherapistCardImage lazy={false} image={image} name={name} />
      <Heading>{name}</Heading> will be contacted on your behalf.
    </ThankYouShell>
  );
};
