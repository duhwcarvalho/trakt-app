import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { userLogin } from '../../store/actions/user';

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

function Login({
  navigation
}) {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(userLogin(data));

    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <ScrollView>
        <LogoTall />
        <FormWrapperLogin ref={formRef} onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            name="email"
            autoCapitalize="none"
          />
          <TextInput
            label="Senha"
            name="password"
            autoCapitalize="none"
            secureTextEntry
          />
        </FormWrapperLogin>
        <HitArea bottom={38} right onPress={() => navigation.navigate('RecoverPassword')}>
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
