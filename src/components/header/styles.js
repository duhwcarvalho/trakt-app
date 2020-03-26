import styled from 'styled-components/native';

import { responsiveHeight, responsiveWidth } from '../../helpers/responsive';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LogoWideNameSvg from '../../../assets/logo-wide-name.svg';

export const ContainerHeader = styled.View`
  width: 100%;
  height: ${responsiveHeight(44)}px;
  background-color: #161616;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HitArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  height: 100%;
  padding: 0px ${responsiveWidth(20)}px;
`;

export const Icon = styled(IconAntDesign)`
  font-size: ${responsiveWidth(24)}px;
  line-height: ${responsiveHeight(44)}px;
  color: #fff;
  ${props => props.disable && 'opacity: 0;'}
`;

export const LogoWideName = styled(LogoWideNameSvg)`
  width: ${responsiveWidth(113)}px;
  height: ${responsiveHeight(20)}px;
`;
