import React from 'react';
import { ReactComponent as Right } from './right-chevron.svg';
import { ReactComponent as Left } from './left-chevron.svg';

const LeftButton = () => (
  <Left style={{ filter: 'drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.30))' }} />
);

const RightButton = () => (
  <Right style={{ filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.30))' }} />
);

export { LeftButton, RightButton };
