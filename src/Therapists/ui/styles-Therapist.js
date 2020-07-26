import styled from 'styled-components';
import { media } from 'styles/Responsive';
import { midgray, light } from 'styles/theme';
export const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

const simpleGrid = (minItemSize = 18, gap = 1) => `
  display: grid;
  column-gap: ${gap}rem;
  row-gap: ${gap}rem;
  grid-template-columns: repeat(auto-fill, minmax(${minItemSize}rem, 1fr));
  `;

export const CardList = styled.ul`
  counter-reset: section;
  ${simpleGrid(18, 1)}
  ${media.tablet`${simpleGrid(32, 4)}`}
  ${media.desktop`${simpleGrid(28, 3)}`}
  .therapist-item {
    .name:before {
      display: inline-block;
      counter-increment: section;
      content: counter(section);
      font-size: 0.95rem;
      height: 1.5rem;
      left: -1.5rem;
      line-height: 2.5rem;
      position: absolute;
      width: 1rem;
    }
  }
`;
export const CardShell = styled.li`
  padding: 1rem;
  ${media.tablet`height: 22rem;`}
  ${media.desktop`height: 22rem;`}
`;

const squareImage = `
    object-fit: cover;
    width: 15rem;
    height: 14rem;
    background-position:center;
    border-radius: 0.4rem;
    border: 1px solid ${midgray};
    min-width: 10rem;
    min-height: 10rem;
`;

const squareImageMobile = `
  object-fit: cover;
  height: 27rem;
  max-width: 35rem;
  width: 100%;
`;

export const CardImage = styled.picture`
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
 img {
    ${media.phone`${squareImageMobile}`}
    ${media.tablet`${squareImage}`}
    ${media.desktop`${squareImage}`}
    
    &.loaded {
      animation: loaded 300ms ease-in-out;
    }
   }
`;

const gridAreas = `
  .headshot {
    grid-area: headshot;
    place-self: center;
  }
  .cityState {
     grid-area: cityState;
  }
  .therapist__menu {
    grid-area: menu;
    place-items:center;
  }
  .header {
      grid-area: header;
  }
  .name {
    grid-area: fullName;
    position: relative;
  }
  .bio {
    grid-area: bio;
  }
  .email {
    grid-area: email;
  }
  .specialty {
    grid-area: specialty;
  }
  `;

const listingGridAreas = `
 grid-template-areas:
    'menu  cityState'
    'headshot fullName'
    'headshot specialty'
    'headshot email';
`;
export const CardGrid = styled(CardShell)`
  display: grid;
  overflow: hidden;
  ${media.tablet`${gridAreas} ${listingGridAreas}column-gap:3rem;grid-template-columns: 0.25fr 1fr;  grid-template-rows: repeat(auto-fill, .5fr);`}
  ${media.desktop`${gridAreas} ${listingGridAreas} column-gap:1rem; grid-template-columns: repeat(2, 1fr);`}
`;

export const TherapistCardGrid = styled(CardGrid)`
  .cityState,
  .name {
    align-self: end;
  }
  .cityState {
    text-transform: uppercase;
  }
  .email {
    cursor: pointer;
  }
  .specialty:before {
    content: 'Specialty: ';
    height: 2rem;
    width: 6rem;
    display: inline-block;
  }
  .name {
    font-weight: 700;
  }
`;

const imageFloatRight = `
float:right; height: 40rem; width: 30rem;  margin: 3rem;
`;
export const DetailGrid = styled.section`
  padding: 1rem;

  .header,
  .email {
    border-bottom: 5px solid ${light};
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .email {
    ${media.phone`border-width:0`}
  }
  .bio > * {
      padding-bottom: 1rem;
    }

  img {
    ${media.desktop`${imageFloatRight}`}
    ${media.tablet`${imageFloatRight}`}
    
    border: 10px solid ${light};
  }
`;

export const ThankYouShell = styled(DetailGrid)`
  display: grid;
  place-items: center;
  p {
    padding-bottom: 1rem;
  }
  img {
    border-color: #333;
    box-shadow: 1px 1px 5px #333;
  }
`;
