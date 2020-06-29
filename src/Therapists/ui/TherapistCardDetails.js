import React from 'react';
import asyncComponent from 'App/ui/withLazy';
import { CardShell, DetailGrid } from 'Therapists/ui/styles-Therapist';
import { TherapistCardSummary } from './TherapistCardSummary';

export const TherapistCardImage = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardImage" */ 'Therapists/ui/TherapistCardImage'
    ),
  'TherapistCardImage'
);

export const TherapistCardDetails = therapist => (
  <CardShell
    as={DetailGrid}
    id={`therapist-details-${therapist.id}`}
    className="therapist"
  >
    <h2 className="header">Therapists Details</h2>
    <TherapistCardSummary {...therapist} />
    <TherapistCardImage image={therapist.image} name={therapist.name} />
    <section className="bio">
      <p>More details coming soon...</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam
        nihil quod? Pariatur vitae provident vero voluptates molestiae laborum
        repellat, voluptatum rerum dolores eveniet laudantium sunt minus maiores
        itaque quaerat. Officiis vitae dignissimos, delectus magni nam eum,
        sequi cumque iste quis temporibus quaerat, quia eos nostrum fugit
        recusandae quibusdam! Impedit tenetur pariatur minima veritatis,
        perspiciatis modi qui eum mollitia natus.
      </p>
      <p>
        Exercitationem voluptatem numquam architecto pariatur, voluptates
        expedita quia. Dolor repudiandae magnam velit. Quod molestias veniam
        nemo maxime accusantium repellendus ad consequatur sit numquam harum.
        Omnis accusantium voluptas veritatis veniam ipsa? Neque deserunt
        assumenda harum? Suscipit alias maxime quos in necessitatibus
        reprehenderit soluta, iusto commodi fugit eveniet, vel est totam neque
        nisi ducimus.
      </p>
      <p>
        Et excepturi doloribus commodi consectetur ipsum sequi magni? Magnam
        laboriosam repellat fuga ipsam, eos distinctio expedita exercitationem
        ullam temporibus veniam neque quos minima dignissimos error atque sint
        numquam voluptatum asperiores autem voluptate ex ab enim fugit?
        Recusandae, omnis? Blanditiis consequatur nostrum soluta? Tempora iusto
        repellat, earum repellendus voluptates accusantium delectus ipsum fuga
        et ratione, dolore praesentium deserunt quasi! Aliquam soluta hic neque
        eum perferendis quisquam incidunt molestias error. Qui, consequatur!
      </p>
      <p>
        Expedita quod suscipit fuga itaque reprehenderit dolore libero quidem
        nisi veritatis aperiam dicta officia ea ullam vel ad ut inventore
        repudiandae magni, voluptatibus tempora deleniti placeat nam alias!
        Maiores incidunt dicta sit accusantium, debitis ullam distinctio dolorum
        sunt iste dolores doloremque officiis a aperiam. Odit nobis quos vitae
        deleniti. Repellat veniam obcaecati reprehenderit deleniti.
      </p>
      <p>
        Ducimus sunt rem inventore? Vel doloremque est tenetur, obcaecati maxime
        optio quos enim doloribus exercitationem! Qui animi provident at eaque,
        voluptates cupiditate ducimus? Impedit incidunt numquam adipisci ipsam
        voluptatum quam asperiores dolorum excepturi soluta. Facilis amet quis
        rem cum ea fugiat, iusto ipsam quibusdam sequi. Sequi iure voluptatibus
        labore eveniet! Aliquid, earum. Enim fugit in repellat deleniti minus
        atque consectetur sunt suscipit, corrupti harum.
      </p>
    </section>
  </CardShell>
);
