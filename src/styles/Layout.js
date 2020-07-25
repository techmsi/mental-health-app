import styled, { css } from 'styled-components';
import { media } from 'styles/Responsive';
import theme from 'styles/theme.json';
import { NavLink, Link } from 'react-router-dom';

const centered = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;

// const headerMinHeight = `min-height: 3.5rem;`;
export const Page = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  > * {
    margin: 0.25rem 0;
  }
`;
export const NavShell = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 3rem;
  text-align: center;
  place-items: center;
  ${media.tablet`grid-column-gap: 1rem; height: 2.5rem;`}
  ${media.desktop`grid-column-gap: 1rem`}
`;
export const MainNavShell = styled.nav`
  border-bottom: 1px solid ${theme.medium};
`;

export const Header = styled.header`
  min-width: 13rem;
  nav {
    display: flex;
    justify-content: space-between;
  }
`;
export const Heading = styled.h2`
  height: 3.5rem;
`;
export const SubTitle = styled.p`
  font-size: 1.4rem;
  padding: 1rem;
  text-align: center;
`;

const buttonMinWidth = `min-width: 9rem;`;
const buttonMinHeightWidth = `min-height: 2.75rem; ${buttonMinWidth}`;
const buttonMinHeightWidthMobile = `min-height: 3.5rem; ${buttonMinWidth}`;

const BasicButton = styled.button`
  flex: 1;
  transition: color 0.25s ease-in-out;
  ${buttonMinHeightWidthMobile}
  
  ${media.tablet`${buttonMinHeightWidth}  border-radius: 0.25rem;`}
  ${media.desktop`${buttonMinHeightWidth}  border-radius: 0.25rem;`}
  a {
    ${centered}
    color: ${theme.black};
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${theme.light};
      border: 1px solid ${theme.medium};
    `};
  
  &:not(:last-child) {
    ${media.tablet`margin-right: 0.5rem;`}
    ${media.desktop`margin-right: 0.5rem;`}
  }
`;
export const OutlineButton = styled(BasicButton)`
  border: 1px solid ${theme.medium};
`;
export const LightButton = styled(OutlineButton)`
  background-color: ${theme.lighter};
`;

export const LightButtonLink = styled(Link)`
 ${buttonMinHeightWidthMobile}
  
  ${media.tablet`${buttonMinHeightWidth}  border-radius: 0.25rem;`}
  ${media.desktop`${buttonMinHeightWidth}  border-radius: 0.25rem;`}
  transition: color 0.25s ease-in-out;
  ${media.tablet`border-radius: 0.25rem;`}
  ${media.desktop`border-radius: 0.25rem;`}

  background-color: ${theme.lighter};
  border: 1px solid ${theme.medium};
  color: ${theme.black};
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
`;

export const DarkButtonLink = styled(NavLink)`
  ${buttonMinHeightWidthMobile}
  background-color: ${theme.charcoal};
  color: ${theme.bright};
  font-size: 1.5rem;
  flex: 1;
  transition: color 0.25s ease-in-out;
  ${centered}
  &.active  {
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
