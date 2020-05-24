import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogout } from '../../store/actions/user';

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
  const dispatch = useDispatch();
  const { routeNames, index } = state;

  function handleLogout() {
    dispatch(userLogout());
  }

  return (
    <ContainerMenu>
      <HitArea onPress={() => navigation.closeDrawer()}>
        <Icon name="close" />
      </HitArea>
      <LogoWide />
      {/* <ListRoutes
        data={ routeNames }
        keyExtractor={ route => route }
        renderItem={({ item, index: _index }) => (
          <ItemList onPress={() => navigation.navigate(item)} active={ index === _index }>
            <RouteName>{ item }</RouteName>
          </ItemList>
        )}
      /> */}
      <ListRoutes>
        {
          routeNames.map((item, _index) => (
            <ItemList
              key={item}
              onPress={() => navigation.navigate(item)}
              active={ index === _index }
            >
              <RouteName>{ item }</RouteName>
            </ItemList>
          ))
        }
        <ItemList onPress={handleLogout}>
          <RouteName>Sair</RouteName>
        </ItemList>
      </ListRoutes>
    </ContainerMenu>
  );
};

export default Menu;
