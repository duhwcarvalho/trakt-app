import React, { useRef } from 'react';
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
import TextInput from '../../components/textInput';

import { userLogin } from '../../store/actions/user';

function Login({
  navigation
}) {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.log(data)
    dispatch(userLogin({
      email: 'edu1@gmail.com',
      password: '123456'
    }));
  };

  return (
    <Container>
      <ScrollView>
        <LogoTall />
        <FormWrapperLogin ref={formRef} onSubmit={handleSubmit}>
          <TextInput label="Email" name="email" />
          <TextInput label="Senha" name="password" />
        </FormWrapperLogin>
        <HitArea bottom={40} right onPress={() => navigation.navigate('RecoverPassword')}>
          <TextLink>esqueci minha senha</TextLink>
        </HitArea>
        <ButtonLogin label="ENTRAR" onPress={ () => formRef.current.submitForm() } />
        <HitArea onPress={() => navigation.navigate('Register')}>
          <TextLink>ou cadastre-se</TextLink>
        </HitArea>
      </ScrollView>
    </Container>
  );
};

export default Login;
