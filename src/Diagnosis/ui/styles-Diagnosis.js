import styled from 'styled-components';
import { media } from 'styles/Responsive';

const Flex = styled.aside`
  display: flex;
  justify-content: space-between;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ddd;
  border-radius: 0.25rem;
  flex: 1;
  padding: 2rem;
`;

export const Details = styled(FlexCol)`
  & span:nth-of-type(3) {
    border-top: 1px solid #111;
  }

  .total > em:first-child {
    color: #d40c0c;
  }

  > * {
    padding: 0.5rem 1rem;
  }
`;
export const Ranges = styled.span`
  color: #555;
  > * {
    padding: 0.5rem 1rem;
    ${media.phone`padding: 0;`}
  }

  &::before {
    content: 'Ranging between';
    font-size: 1.2rem;
    padding-right: 1rem;
  }

  em:first-child::after {
    content: '-';
    padding: 0 0.5rem;
  }
`;

export const ScoreShell = styled(Flex)`
  font-size: 1.4rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  margin: 1rem 0.5rem;
  padding: 0.15rem;

  em {
    color: #111;
    font-size: 1.8rem;
    font-style: normal;
  }
`;

const _SEVERITY = {
  none: '#555',
  mild: '#c7a20e',
  moderate: '#d40c0c',
  'moderately severe': '#da2020',
  severe: '#f00'
};

export const SeverityText = styled.p`
  background-color: #f7f4e5;
  border-radius: 0.25rem;
  margin: 1rem;
  padding: 1rem;

  color: ${({ severity = _SEVERITY['none'] }) => _SEVERITY[severity]};
`;

export const PullQuote = styled.blockquote`
  flex: 0 1;
  background: #eee;
  border-radius: 0.25rem;
  margin: 1rem;
  padding: 1rem;
  cite {
    float: right;
  }
  ${media.phone`display:none;`}
`;
