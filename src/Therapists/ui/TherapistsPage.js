// Component: TherapistsPage
import { Header, Heading } from 'styles/Layout';
import { CardList } from 'Therapists/ui/styles-Therapist';

import { TherapistListCard } from 'Therapists/ui/TherapistListCard';
import { TherapistSortControls } from 'Therapists/ui/dynamicRoutes';

const TherapistsPage = ({ list, onSort }) => {
  return (
    <section className="therapists">
      <Header>
        <Heading as="h1">Certified Therapists</Heading>
        <TherapistSortControls onSort={onSort} />
        <Heading>Book Your Appointment</Heading>
      </Header>
      <CardList className="therapists-list">
        {list && list.map(TherapistListCard)}
      </CardList>
    </section>
  );
};

export default TherapistsPage;
