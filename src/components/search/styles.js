import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

import IconFeather from 'react-native-vector-icons/Feather';

export const ContainerSearch = styled.View`
  width: ${responsiveWidth(374)}px;
  height: ${responsiveHeight(35)}px;
  background-color: #fff;
  border-radius: ${responsiveHeight(17)}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: ${responsiveHeight(20)}px;
`;

export const HitArea = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  height: 100%;
  padding: 0px ${responsiveWidth(18)}px;
`;

export const Icon = styled(IconFeather)`
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveHeight(35)}px;
  color: #161616;
  ${props => props.disable && 'opacity: 0;'}
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#908A99",
  underlineColorAndroid: "transparent"
})`
  flex: 1;
  font-size: ${responsiveWidth(14)}px;
  padding: 0px;
  color: #000;
`;
