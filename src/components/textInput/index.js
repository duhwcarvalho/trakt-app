import React, { useState } from 'react';

import {
  ContainerInput,
  ContentInput,
  Label,
  Input,
  Error
} from './styles';

function TextInput({
  label,
  ...rest
}) {

  const [ textError, setTextError ] = useState('');

  return (
    <ContainerInput>
      <ContentInput>
        <Label>{ label }</Label>
        <Input setError={(err) => setTextError(err)} {...rest} />
      </ContentInput>
      { !!textError && <Error>{ textError }</Error> }
    </ContainerInput>
  );
};

export default TextInput;
