import React from 'react';

import {
  ContainerInput,
  Label,
  Input
} from './styles';

function TextInput({
  label,
  ...rest
}) {
  return (
    <ContainerInput>
      <Label>{ label }</Label>
      <Input {...rest} />
    </ContainerInput>
  );
};

export default TextInput;
