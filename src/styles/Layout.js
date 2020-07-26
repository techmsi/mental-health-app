import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import { media } from 'styles/Responsive';
import theme from 'styles/theme.json';

const buttonMinWidth = `min-width: 8rem;`;
const buttonMinHeightWidth = `min-height: 2rem; ${buttonMinWidth}`;
const buttonMinHeightWidthMobile = `min-height: 3.5rem; ${buttonMinWidth}`;

export const Page = styled.section``;
export const NavShell = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  ${media.tablet`grid-column-gap: 1rem;`}
  ${media.desktop`grid-column-gap: 1rem`}
  height: 3rem;
`;
export const MainNavShell = styled(NavShell)`
  ${media.tablet`grid-column-gap: 0;`}
  ${media.desktop`grid-column-gap: 0`}
`;

export const Header = styled.header`
  h1,
  h2 {
    padding-left: 1rem;
  }
`;
export const Heading = styled.h2`
  height: 3.5rem;
`;
export const SubTitle = styled.p``;

const BasicButton = styled.button`
  ${buttonMinHeightWidthMobile}
  ${media.tablet`${buttonMinHeightWidth}  border-radius: 0.25rem;`}
  ${media.desktop`${buttonMinHeightWidth}  border-radius: 0.25rem;`}

  transition: color 0.25s ease-in-out;
  a {
    color: ${theme.black};
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${theme.light};
      border: 1px solid ${theme.medium};
    `};
`;
export const OutlineButton = styled(BasicButton)`
  border: 1px solid ${theme.medium};
`;

export const LightButtonLink = styled(Link)`
  padding: 1rem;
  ${buttonMinHeightWidthMobile}
  ${media.tablet`${buttonMinHeightWidth}  border-radius: 0.25rem;`}
  ${media.desktop`${buttonMinHeightWidth}  border-radius: 0.25rem;`}

  transition: color 0.25s ease-in-out;
  ${media.tablet`border-radius: 0.25rem;`}
  ${media.desktop`border-radius: 0.25rem;`}

  background-color: ${theme.lighter};
  border: 1px solid ${theme.medium};
  color: ${theme.black};
  white-space: nowrap;
`;

export const DarkButtonLink = styled(NavLink)`
  ${buttonMinHeightWidthMobile}
  padding: 0.5rem;

  background-color: ${theme.charcoal};
  color: ${theme.bright};
  font-size: 1.5rem;
  transition: color 0.25s ease-in-out;
  &.active {
    font-weight: bold;
    background-color: ${theme.darker};
    color: ${theme.charcoal};
  }
`;

export const UnderlineButton = styled.div`
  border-bottom: 1px solid ${theme.bright};
  font-size: 1.2rem;
  margin: 0.5rem 1rem;
  white-space: nowrap;
  min-width: 1.5rem;
  text-align: center;
  a {
    color: ${theme.black};
  }
`;

export const ErrorMessage = styled.p`
  background: ${theme.red};
  border-radius: 2px;
  font-size: 0.85rem;
  padding: 0.25rem 1rem;
`;
