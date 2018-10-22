import styled from 'styled-components';
import { media } from 'styles/Responsive';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled(FlexCol)`
  background-color: #f7f4e5;
  padding: 1rem;
`;

export const CardList = styled.ul`
  counter-reset: section;
  ${media.desktop`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
      font-size: .75rem;
      top: -5px;
    }
  }
`;

export const CardShell = styled(FlexCol)`
  font-size: 1.2rem;
  line-height: 2rem;

  img {
    margin-top: 2rem;
    width: 10rem;
  }
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
    color: #555;
  }
  .specialty:before {
    content: 'Specialty: ';
    padding-right: 0.5rem;
  }
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
    width: 10rem;
    border: 3px solid #333;
  }

  .name {
    font-size: 1.4rem;
    font-weight: bold;
    @extend .underline-button;
  }
`;
