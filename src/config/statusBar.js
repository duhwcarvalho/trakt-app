import { StatusBar, Platform } from 'react-native';

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

StatusBar.setBarStyle('light-content');
