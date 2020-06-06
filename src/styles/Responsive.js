import { css } from 'styled-components';

const devices = [
  { label: 'desktop', min: 1025 },
  { label: 'tablet', min: 601, max: 1024 },
  { label: 'phone', min: 0, max: 600 }
];

// Iterate through the SIZES and create a media template
export const media = devices.reduce((acc, { label, min, max = null }) => {
  const maxWidth = max ? `and (max-width: ${max}px)` : '';

  acc[label] = (...args) => css`
    @media (min-width: ${min}px) ${maxWidth} {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

console.log('media ', media);
