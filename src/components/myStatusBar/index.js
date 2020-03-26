import { StatusBar } from 'react-native';

import { responsiveHeight } from '../../helpers/responsive';
import { isIphoneX } from '../../helpers/isIphoneX';

import styled from 'styled-components/native';

const heightBar = isIphoneX() ? responsiveHeight(30) : responsiveHeight(20);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? heightBar : StatusBar.currentHeight;

const MyStatusBar = styled.View`
  width: 100%;
  height: ${ STATUSBAR_HEIGHT }px;
  background-color: #000
`;

export default MyStatusBar;
