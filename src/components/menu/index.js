import React from 'react';

import {
  ContainerMenu,
  HitArea,
  Icon,
  LogoWide,
  ListRoutes,
  ItemList,
  RouteName
} from './styles';

function Menu({ navigation, state }) {
  const { routeNames, index } = state;

  return (
    <ContainerMenu>
      <HitArea onPress={() => navigation.closeDrawer()}>
        <Icon name="close" />
      </HitArea>
      <LogoWide />
      <ListRoutes
        data={ routeNames }
        keyExtractor={ route => route }
        renderItem={({ item, index: _index }) => (
          <ItemList onPress={() => navigation.navigate(item)} active={ index === _index }>
            <RouteName>{ item }</RouteName>
          </ItemList>
        )}
      />
    </ContainerMenu>
  );
};

export default Menu;
