import React from 'react';

import {
  ScrollView,
  LogoTall,
  FormWrapperLogin,
  HitArea,
  TextLink,
  ButtonLogin
} from './styles';

import Container from '../../components/container';
import Input from '../../components/input';

function Login({
  navigation
}) {
  return (
    <Container>
      <ScrollView>
        <LogoTall />
        <FormWrapperLogin>
          <Input label="Email" value="duhw.carvalho@gmail.com" />
          <Input label="Senha" value="*******" />
        </FormWrapperLogin>
        <HitArea bottom={40} right onPress={() => navigation.navigate('RecoverPassword')}>
          <TextLink>esqueci minha senha</TextLink>
        </HitArea>
        <ButtonLogin label="ENTRAR" />
        <HitArea onPress={() => navigation.navigate('Register')}>
          <TextLink>ou cadastre-se</TextLink>
        </HitArea>
      </ScrollView>
    </Container>
  );
};

export default Login;
