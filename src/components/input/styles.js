import styled from 'styled-components/native';
import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

export const ContainerInput = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  width: 100%;
  height: ${responsiveHeight(58)}px;
  border-bottom-width: ${responsiveWidth(1)}px;
  border-bottom-color: #fff;
`;

export const Label = styled.Text.attrs({
  numberOfLines: 1
})`
  width: 100%;
  font-size: ${responsiveWidth(14)}px;
  line-height: ${responsiveHeight(18)}px;
  color: #fff;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: ${responsiveHeight(12)}px ${responsiveWidth(10)}px ${responsiveHeight(8)}px ${responsiveWidth(10)}px;
  font-size: ${responsiveWidth(14)}px;
  color: #fff;
`;
