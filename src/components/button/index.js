import React from 'react';

import {
  ContainerButton,
  Label
} from './styles';

function Button({
  style,
  label
}) {
  return (
    <ContainerButton style={ style }>
      <Label>{ label }</Label>
    </ContainerButton>
  );
};

export default Button;
