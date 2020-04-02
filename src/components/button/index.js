import React from 'react';

import {
  ContainerButton,
  Label
} from './styles';

function Button({
  style,
  label,
  onPress
}) {
  return (
    <ContainerButton style={ style } onPress={ onPress }>
      <Label>{ label }</Label>
    </ContainerButton>
  );
};

export default Button;
