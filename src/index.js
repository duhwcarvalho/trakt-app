import 'react-native-gesture-handler';
import React from 'react';

import MyStatusBar from './components/myStatusBar';
import Routes from './routes';

import './config/statusBar';

export default function App() {
  return (
    <>
      <MyStatusBar />
      <Routes />
    </>
  )
}
