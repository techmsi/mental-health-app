import styled from 'styled-components';
import { media } from 'styles/Responsive';
import { DarkButton } from 'styles/Layout';

export const WelcomeText = styled.p`
  padding: 1.5rem;
  ${media.phone`
     order: 2;
  `}
`;

export const WelcomeButton = styled(DarkButton)`
  ${media.phone`
     align-self: center;
     order: 1;
     max-width: 20rem;
     margin-top: 1.5rem;
    a{border-radius: 0.25rem;}
  `}
`;

export const WelcomeShell = styled.section`
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
