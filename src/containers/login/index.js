import React from 'react';
import { useDispatch } from 'react-redux';

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

import { userLogin } from '../../store/actions/user';

function Login({
  navigation
}) {

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(userLogin({
      email: 'edu1@gmail.com',
      password: '123456'
    }));
  };

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
        <ButtonLogin label="ENTRAR" onPress={ handleSubmit } />
        <HitArea onPress={() => navigation.navigate('Register')}>
          <TextLink>ou cadastre-se</TextLink>
        </HitArea>
      </ScrollView>
    </Container>
  );
};

export default Login;
