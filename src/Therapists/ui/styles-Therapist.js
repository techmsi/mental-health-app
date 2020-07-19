import styled from 'styled-components';
import { media } from 'styles/Responsive';
import { offwhite, midgray, light } from 'styles/theme';
export const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

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
justify-content: flex-start;
`;

export const CardList = styled.ul`
  counter-reset: section;
  ${media.desktop`
    ${rowWrap}
    justify-content: flex-start;
    > * {
      flex: 1 1 33%;
      max-width: 35rem;
    }
  `}
  .therapist-item {
    .name:before {
      display: inline-block;
      counter-increment: section;
      content: counter(section);
      font-size: 0.75rem;
      height: 2rem;
      left: -1.5rem;
      position: absolute;
      width: 1rem;
    }
  }
`;

export const CardShell = styled.li`
  font-size: 1.2rem;
  line-height: 2rem;
  min-height: 18rem;
  padding: 1rem;

  > * {
    min-height: 2rem;
  }

  .cityState {
    text-transform: uppercase;
    padding-top: 0.5rem;
    padding-left: 2rem;
    font-size: 0.85rem;
  }
  .name {
    position: relative;
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
    max-width: 15rem;
  }
  .specialty:before {
    content: 'Specialty: ';
    height: 2rem;
    width: 6rem;
    display: inline-block;
  }
  img {
    border: 1px solid ${midgray};
    border-radius: 0.25rem;
    min-height: 10rem;
    background-image: url(${placeHolder});
  }
`;

const squareImage = `
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    background-position:center;
    border-radius: 0.4rem;
    margin-left: 1rem;
    min-height: 10rem;
`;

const squareImageMobile = `
    object-fit: contain;
    min-height: 20rem;
`;

export const CardImage = styled.picture`
  ${media.phone`${squareImageMobile}`}
  ${media.tablet`${squareImage}`}
  ${media.desktop`${squareImage}`}
`;

const gridAreas = `
  picture {
    grid-area: headshot;
  }
  .cityState {
     grid-area: cityState;
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
    'menu  .  cityState'
    'headshot headshot  fullName'
    'headshot headshot  specialty'
    'headshot headshot  email';
`;

export const DetailGrid = styled(CardShell)`
  .cityState {
    padding-left: 0;
  }
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
  flex:1;
  .therapist__menu {
    min-height: 4rem;
  }
  ${media.desktop`
  display: grid;
  min-width:28rem;
  min-height: 15rem;
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
  place-content: flex-start;
  ${gridAreas}

  ${media.phone` 
  .therapist__menu {
    display: flex;
    justify-content: center;
    > * {
      flex: 1;
      margin-bottom: 1rem;
    }
  }
  `}

  img {
    ${media.phone`${squareImageMobile}`}
    ${media.tablet`${squareImage}`}
    ${media.desktop`${squareImage}`}
  }

  grid-column-gap: 10px;
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
