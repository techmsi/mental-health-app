import { TherapistCardGrid } from 'Therapists/ui/styles-Therapist';

import {
  TherapistMenu,
  TherapistCardImage,
  TherapistCardSummary,
} from 'Therapists/ui/dynamicRoutes';
import { ITherapist } from './Therapist.interfaces';

export const TherapistListCard = (therapist: ITherapist, cardIndex: number) => (
  <TherapistCardGrid key={therapist.id} className="therapist-item">
    <TherapistMenu therapistId={therapist.id} />
    <TherapistCardImage
      lazy={cardIndex > 0}
      image={therapist.image}
      name={therapist.name}
    />
    <TherapistCardSummary {...therapist} />
  </TherapistCardGrid>
);
