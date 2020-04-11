import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';
import { Form } from '@unform/mobile';

import {
  ContainerFormWrapper,
  ItemSeparator
} from './styles';

const FormWrapper = forwardRef(({
  style,
  children,
  ...rest
}, ref) => {

  const _children = children.length ? children : [ children ];

  return (
    <ContainerFormWrapper style={ style }>
      <Form ref={ref} {...rest}>
        <FlatList
          data={_children}
          keyExtractor={(item, key) => key.toString() }
          renderItem={({ item }) => item}
          ItemSeparatorComponent={ () => <ItemSeparator /> }
          scrollEnabled={false}
        />
      </Form>
    </ContainerFormWrapper>
  );
});

export default FormWrapper;
