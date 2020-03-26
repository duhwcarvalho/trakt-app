import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from '../containers/splashScreen';
import Home from '../containers/home';
import Details from '../containers/details';
import Menu from '../components/menu';

import { responsiveWidth } from '../helpers/responsive';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Tendência"
      drawerPosition="right"
      drawerStyle={{ width: responsiveWidth(300) }}
      drawerContent={props => <Menu {...props} />}
    >
      <Drawer.Screen name="Tendência" component={ Home } />
      <Drawer.Screen name="Popular" component={ Home } />
      <Drawer.Screen name="Antecipado" component={ Home } />
      <Drawer.Screen name="Bilheteria" component={ Home } />
    </Drawer.Navigator>
  );
};

function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="DrawerNavigator">
      <Stack.Screen name="SplashScreen" component={ SplashScreen } />
      <Stack.Screen name="DrawerNavigator" component={ DrawerNavigator } />
      <Stack.Screen name="Details" component={ Details } />
    </Stack.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
};
