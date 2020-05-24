import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LogoWideSvg from '../../../assets/logo-wide.svg';

export const ContainerMenu = styled.View`
  flex: 1;
  background-color: #161616;
`;

export const HitArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  align-self: flex-end;
  padding-top: ${responsiveHeight(30)}px;
  padding-right: ${responsiveWidth(15)}px;
  padding-bottom: ${responsiveHeight(15)}px;
  padding-left: ${responsiveWidth(30)}px;
`;

export const Icon = styled(IconAntDesign)`
  font-size: ${responsiveWidth(20)}px;
  line-height: ${responsiveHeight(26)}px;
  color: #fff;
`;

export const LogoWide = styled(LogoWideSvg)`
  width: ${responsiveWidth(221)}px;
  height: ${responsiveHeight(75)}px;
  margin-left: ${responsiveWidth(29)}px;
`;

export const ListRoutes = styled.View`
  margin-top: ${responsiveHeight(60)}px;
`;

export const ItemList = styled.TouchableHighlight`
  width: 100%;
  padding-top: ${responsiveHeight(22)}px;
  padding-bottom: ${responsiveHeight(26)}px;
  padding-left: ${responsiveWidth(30)}px;
  justify-content: center;
  ${props => props.active && 'background-color: #545454'}
`;

export const RouteName = styled.Text`
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveHeight(22)}px;
  letter-spacing: ${responsiveWidth(2)}px;
  color: #fff;
`;
