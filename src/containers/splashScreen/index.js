import React from 'react';

import { LogoTall, Text } from './styles';

import Container from '../../components/container';

function SplashScreen() {
  return (
    <Container alignCenter>
      <LogoTall />
      <Text>Carregando...</Text>
    </Container>
  );
};

export default SplashScreen;
