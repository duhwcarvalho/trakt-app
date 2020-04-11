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
import TextInput from '../../components/textInput';

function Register({
  navigation
}) {
  return (
    <Container>
      <ScrollView>
        <HitArea bottom={60} left onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" />
        </HitArea>
        <FormWrapperLogin>
          <TextInput label="Name" value="Eduardo Carvalho" />
          <TextInput label="Email" value="duhw.carvalho@gmail.com" />
          <TextInput label="Senha" value="*******" />
        </FormWrapperLogin>
        <ButtonLogin label="CADASTRAR" />
        <HitArea onPress={() => navigation.navigate('Login')}>
          <TextLink>ou entrar</TextLink>
        </HitArea>
      </ScrollView>
    </Container>
  );
};

export default Register;
