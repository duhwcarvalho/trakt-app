import React, { useRef } from 'react';

import {
  ContainerSearch,
  Icon,
  Input,
  HitArea
} from './styles';

function Search({
  placeholder,
  onChangeText,
  value
}) {

  const refInput = useRef();

  return (
    <ContainerSearch>
      <HitArea onPress={() => refInput.current.focus()}>
        <Icon name="search" />
      </HitArea>
      <Input
        ref={ refInput }
        placeholder={ placeholder }
        value={ value }
        onChangeText={ onChangeText }
      />
      <HitArea onPress={() => !!value && onChangeText('')}>
        <Icon name="x" disable={ !value } />
      </HitArea>
    </ContainerSearch>
  );
};

export default Search;
