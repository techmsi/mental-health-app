import styled from 'styled-components';
import { media } from 'styles/Responsive';
import theme from 'styles/theme.json';

export const Swatches = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  > * {
    margin: 1rem;
  }
  span {
    border: 1px solid ${theme.charcoal};
    display: block;
    min-height: 8rem;
    min-width: 8rem;
    ${media.desktop`flex:1;`}
  }
`;
