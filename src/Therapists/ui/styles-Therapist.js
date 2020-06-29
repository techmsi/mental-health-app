import styled from 'styled-components';
import { media } from 'styles/Responsive';
import { offwhite, midgray, light } from 'styles/theme';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled(FlexCol)`
  background-color: ${offwhite};
  padding: 1rem;
`;

const rowWrap = `
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const CardList = styled.ul`
  counter-reset: section;
  ${media.desktop`
    ${rowWrap}
    > * {
      flex-basis: 50%;
    }
  `}
  .therapist-item {
    padding: 1rem;

    .name:before {
      position: relative;
      counter-increment: section;
      content: counter(section);
      left: -15px;
      font-size: 0.75rem;
      top: -5px;
    }
  }
`;

export const CardShell = styled.li`
  font-size: 1.2rem;
  line-height: 2rem;

  .name {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .email {
    cursor: pointer;
    font-size: 1rem;
  }
  .specialty {
    font-style: italic;
    color: ${midgray};
  }
  .specialty:before {
    content: 'Specialty: ';
    padding-right: 0.5rem;
  }
  img {
    border: 1px solid ${midgray};
    border-radius: 0.25rem;
  }
`;

const squareImage = `
    object-fit: cover;
    width: 11rem;
    height: 11rem;
    background-position:center;
    border-radius: 0.4rem;
`;

const gridAreas = `
  img {
    grid-area: headshot;
  }
  .therapist__menu {
    grid-area: menu;
  }
  .header {
      grid-area: header;
  }
  .name {
    grid-area: fullName;
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
    'menu  menu  menu'
    'headshot headshot  fullName'
    'headshot headshot  specialty'
    'headshot headshot  email';
`;

export const DetailGrid = styled(CardShell)`
         .header,
         .email {
           border-bottom: 5px solid ${light};
           padding-bottom: 0.75rem;
           margin-bottom: 0.75rem;
         }
         .email {
           ${media.phone`border-width:0`}
         }
         .bio {
           padding: 1rem 1.5rem;
           > * {
             margin-bottom: 1rem;
           }
         }
         img {
           ${media.desktop`float:right; max-width: 20rem; margin: 1rem;`}
           ${media.tablet`float:right; max-width: 20rem; margin: 1rem;`}
           
           border: 10px solid ${light};
         }
       `;

export const CardGrid = styled(CardShell)`
  ${media.desktop`
         display: grid;
         .therapist__menu {
           > * {
             min-width: 6rem;
           }
         }
         `}

  ${media.tablet`
         display: grid;
         .therapist__menu {
           > * {
             min-width: 6rem;
           }
         }
         
         `}
         grid: auto-flow / 1rem 10rem 1fr;
  grid-row-gap: 0.5rem;
  grid-column-gap: 2rem;
  ${gridAreas}

  ${media.phone` 
         .therapist__menu {
           margin-bottom: 1rem;
           > * {
             width: 100%;
           }
         }
         `}

         img {
    justify-self: center;
    ${media.desktop`${squareImage}`}
    ${media.tablet`${squareImage}`}
  }
  .name {
    align-self: end;
  }

  .specialty {
    align-self: end;
  }

  ${listingGridAreas}
`;

export const ThankYouShell = styled.p`
  position: relative;
  border: 1px solid #555;
  box-shadow: 1px 1px 5px #333;
  border-radius: 0.25rem;
  padding: 1rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;

  img {
    margin-top: 1rem;
    border: 3px solid #333;
  }

  .name {
    font-size: 1.4rem;
    font-weight: bold;
    @extend .underline-button;
  }
`;
