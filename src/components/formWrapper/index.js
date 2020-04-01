import React from 'react';
import { FlatList, View } from 'react-native';

import {
  ContainerFormWrapper,
  ItemSeparator
} from './styles';

function FormWrapper({
  style,
  children
}) {

  const _children = children.length ? children : [ children ];

  return (
    <ContainerFormWrapper style={ style }>
      <FlatList
        data={_children}
        keyExtractor={(item, key) => key.toString() }
        renderItem={({ item }) => item}
        ItemSeparatorComponent={ () => <ItemSeparator /> }
        scrollEnabled={false}
      />
    </ContainerFormWrapper>
  );
};

export default FormWrapper;
