import React from 'react';

import {
  ScrollView,
  Icon,
  FormWrapperLogin,
  HitArea,
  TextLink,
  ButtonLogin
} from './styles';

import Container from '../../components/container';
import Input from '../../components/input';

function RecoverPassword({
  navigation
}) {
  return (
    <Container>
      <ScrollView>
        <HitArea bottom={60} left onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" />
        </HitArea>
        <FormWrapperLogin>
          <Input label="Email" value="duhw.carvalho@gmail.com" />
        </FormWrapperLogin>
        <ButtonLogin label="ENVIAR" />
        <HitArea onPress={() => navigation.navigate('Register')}>
          <TextLink>ou cadastre-se</TextLink>
        </HitArea>
      </ScrollView>
    </Container>
  );
};

export default RecoverPassword;
