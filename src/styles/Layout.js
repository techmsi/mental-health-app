import styled, { css } from 'styled-components';
import { media } from 'styles/Responsive';
import theme from 'styles/theme.json';

export const Page = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    button {
      ${media.phone`flex: 1;`}
    }
  }
  h1 {
    text-align: center;
    font-size: 1.8rem;
    background-color: ${theme.offwhite};
    padding: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    padding: 1rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  padding: 1rem;
  text-align: center;
`;

export const OutlineButton = styled.button`
  border: 1px solid ${theme.lighter};
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
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

export const LightButton = styled(OutlineButton)`
  background-color: ${theme.lighter};
`;

export const DarkButton = styled.button`
  display: block;
  font-size: 1.5rem;
  margin: 0.5rem;
  text-align: center;
  transition: color 0.25s ease-in-out;
  ${media.phone`margin: 0;`}
  a {
    background-color: ${theme.charcoal};
    border-radius: 0.15rem;
    color: ${theme.bright};
    display: block;
    padding: 0.5rem 1rem;
    width: 100%;
    ${media.phone`border-radius: 0;`}
    &.active {
      font-weight: bold;
      ${media.phone`
      background-color: ${theme.darker};
      color: #333;
      `}
    }
  }
`;

export const UnderlineButton = styled.div`
  border-bottom: 1px solid ${theme.bright};
  font-size: 1.2rem;
  margin: 0.5rem 1rem;
  white-space: nowrap;
  a {
    color: ${theme.black};
  }
`;

export const LightBlockButton = styled(LightButton)`
  background-color: ${theme.offwhite};
  display: block;
  font-size: 1.4rem;
  padding: 0.5rem;
`;

export const ErrorMessage = styled.p`
  background: ${theme.red};
  border-radius: 2px;
  font-size: 0.85rem;
  padding: 0.25rem 1rem;
`;

export const Swatches = styled.div`
  ${media.desktop`
         display: flex; 
         flex-wrap: wrap;
         padding: 1rem;
         `}
  span {
    display: block;
    font-size: 1rem;
    height: 8rem;
    ${media.desktop`
      flex:1; 
      min-width: 8rem;
      margin: 1rem;
    `}
  }
  em {
    ${media.phone`margin: 1rem;`}
  }
`;
