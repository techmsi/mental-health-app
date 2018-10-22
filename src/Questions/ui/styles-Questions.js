import styled from 'styled-components';
import { media } from 'styles/Responsive';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const QuestionShell = styled(FlexCol)`
  margin: 0.25rem;
  .label {
    font-size: 1.6rem;
    padding: 0.5rem;
    line-height: 2rem;
  }
  .choices > * {
    line-height: 2.2rem;
    ${media.phone`line-height: 2.5rem;`}
  }
  span {
    padding-right: 1rem;
  }

  footer {
    background-color: #333;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 0.95rem;
    font-weight: normal;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }

  footer span {
    display: inline-block;
    position: relative;
  }

  footer .number {
    float: right;
    &::before {
      content: '#';
    }
  }

  footer .indicator {
    &.answered::before {
      content: 'answered ';
      font-style: italic;
    }
  }
`;

export const UnansweredListShell = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.phone`
  justify-content: space-around; 
  padding: 0 1rem;
    > * {
      margin: 0.5rem;
    }
  `}

  .link {
    cursor: pointer;
  }

  .header {
    color: #111;
    font-weight: bolder;
    font-size: 1rem;
    margin: 0.5rem 0;
    ${media.phone`display: none;`}
  }
`;
