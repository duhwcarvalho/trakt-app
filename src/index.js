import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import MyStatusBar from './components/myStatusBar';
import ModalMessage from './components/ModalMessage';

import Routes from './routes';

import './config/statusBar';

export default function App() {
  return (
    <Provider store={ store }>
      <ModalMessage />
      <MyStatusBar />
      <Routes />
    </Provider>
  )
};
