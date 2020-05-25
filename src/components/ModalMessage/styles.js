import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

export const ContainerModalMessage = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContentModalMessage = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
  onPress: () => {}
})`
  width: ${responsiveWidth(334)}px;
  min-height: ${responsiveHeight(115)}px;
  padding: ${responsiveHeight(15)}px ${responsiveWidth(40)}px;
  border-radius: ${responsiveHeight(14)}px;
  background-color: ${props => !props.success ? '#FF746F' : '#71FF9A'};
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-size: ${responsiveWidth(16)}px;
  text-align: center;
  color: #000;
`;
