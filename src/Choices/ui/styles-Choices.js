import styled from 'styled-components';
import { media } from 'styles/Responsive';

export const RadioGroupShell = styled.div`
  input[type='radio'] {
    display: none;
  }

  label input[type='radio'] ~ span {
    position: relative;
    display: block;
    padding: 0 0 0 3rem;
    ${media.phone`padding: 0 0 0 1rem;`}
  }

  label input[type='radio']:disabled:not(:checked) ~ span {
    color: #ccc;
    font-style: italic;
  }

  label input[type='radio']:checked ~ span {
    font-weight: bold;
    background-color: #f7f4e5;
  }

  /* Creates the circle w/ a border */
  label input[type='radio'] ~ span:before {
    content: '';
    position: relative;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background: #fff;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 50%;
    left: 0;
    top: 2px;
    box-sizing: border-box;
    transition: all 300ms ease-in-out;
  }

  /* Border changes when checked */
  label input[type='radio']:checked ~ span:before {
    border: 5px solid #ffc800;
  }

  /* Conditional text input */
  fieldset > .rb {
    position: relative;
    top: -1.4rem;
    left: 5rem;
    border-radius: 0 4.25rem 4.25rem 0;
    width: 70%;
    padding: 0 0;
    border-left: none;
    text-align: center;
  }
`;
