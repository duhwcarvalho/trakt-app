import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

export const ContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 100%;
  height: ${responsiveHeight(53)}px;
  border-radius: ${responsiveHeight(26.5)}px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: ${responsiveWidth(18)}px;
  letter-spacing: ${responsiveWidth(2)}px;
  color: #545454;
`;
