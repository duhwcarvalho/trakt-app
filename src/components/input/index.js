import React from 'react';

import {
  ContainerInput,
  Label,
  TextInput
} from './styles';

function Input({
  label,
  ...props
}) {
  return (
    <ContainerInput>
      <Label>{ label }</Label>
      <TextInput {...props} />
    </ContainerInput>
  );
};

export default Input;
