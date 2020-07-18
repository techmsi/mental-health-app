import styled from 'styled-components';
import { media } from 'styles/Responsive';
import { DarkButtonLink, Page } from 'styles/Layout';

export const WelcomeText = styled.p`
  ${media.phone`order: 2;`}
  min-height: 10rem;
  padding: 1.5rem;
`;

export const WelcomeButton = styled(DarkButtonLink)`
  align-self: center;
  border-radius: 0.25rem;
  margin-top: 1.5rem;
  max-width: 25rem;
  max-height: 5rem;
  padding: 1rem;

  ${media.phone`order: 1;`}
`;

export const WelcomeShell = styled(Page)`
  line-height: 2rem;
  text-align: center;
`;
