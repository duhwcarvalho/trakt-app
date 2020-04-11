import React, { useState } from 'react';

import {
  ContainerInput,
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
    <>
      <ContainerInput>
        <Label>{ label }</Label>
        <Input setError={(err) => setTextError(err)} {...rest} />
      </ContainerInput>
      { !!textError && <Error>{ textError }</Error> }
    </>
  );
};

export default TextInput;
