import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

import LogoTallSvg from '../../../assets/logo-tall.svg';

export const LogoTall = styled(LogoTallSvg)`
  width: ${responsiveWidth(232)}px;
  height: ${responsiveHeight(222)}px;
`;

export const Text = styled.Text`
  font-size: ${responsiveWidth(20)}px;
  color: #fff;
  margin-top: ${responsiveHeight(40)}px;
`;
