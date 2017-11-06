import React from 'react';

export const ColorPallete = ({darkest,darker,normal,lighter,lightest}) => 
    <style>
        {`:root {
  --darkest-color: ${darkest};
  --darker-color: ${darker};
  --normal-color: ${normal};
  --lighter-color: ${lighter};
  --lightest-color: ${lightest};
}`}
    </style>


export default ColorPallete;