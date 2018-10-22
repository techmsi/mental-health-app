import styled from 'styled-components';
import { media } from 'styles/Responsive';

export const WelcomeShell = styled.section`
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  .begin {
    ${media.phone`
     align-self: center;
     order: 1;
     max-width: 20rem;
     margin-top: 1.5rem;
    a{border-radius: 0.25rem;}
    `}
  }

  .text {
    padding: 1.5rem;
    ${media.phone`
     order: 2;
    `}
  }
`;
