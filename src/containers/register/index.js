import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

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

import { userRegister } from '../../store/actions/user';

function Register({
  navigation
}) {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(userRegister(data));

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
        <HitArea bottom={60} left onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" />
        </HitArea>
        <FormWrapperLogin ref={formRef} onSubmit={handleSubmit}>
          <TextInput label="Name" name="name" />
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
        <ButtonLogin label="CADASTRAR" onPress={() => formRef.current.submitForm()} />
        <HitArea onPress={() => navigation.navigate('Login')}>
          <TextLink>ou entrar</TextLink>
        </HitArea>
      </ScrollView>
    </Container>
  );
};

export default Register;
