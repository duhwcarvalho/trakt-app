import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  ContainerHeader,
  HitArea,
  Icon,
  LogoWideName
} from './styles';

function Header({ back, menu }) {
  const navigation = useNavigation();

  return (
    <ContainerHeader>
      <HitArea onPress={() => back && navigation.goBack()}>
        <Icon name="arrowleft" disable={ !back } />
      </HitArea>
      <LogoWideName />
      <HitArea onPress={() => menu && navigation.openDrawer()}>
        <Icon name="menufold" disable={ !menu } />
      </HitArea>
    </ContainerHeader>
  );
};

export default Header;
