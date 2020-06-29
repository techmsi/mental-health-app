import React from 'react';
import themeColors from 'styles/theme.json';
import { Swatches } from './Layout';

const swatches = Object.entries(themeColors).map(([name, background]) => ({
  name,
  background
}));
const Swatch = ({ name, background }) => (
  <div key={name}>
    <span style={{ background }} />
    <em>
      {name} - {background}
    </em>
  </div>
);
const StyleGuide = () => <Swatches>{swatches.map(Swatch)}</Swatches>;

export default StyleGuide;
