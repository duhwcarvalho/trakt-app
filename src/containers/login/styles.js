import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

import LogoTallSvg from '../../../assets/logo-tall.svg';

import FormWrapper from '../../components/formWrapper';
import Button from '../../components/button';

export const ScrollView = styled.ScrollView.attrs({
  bounces: false,
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})`
  padding: 0px ${responsiveWidth(47)}px;
`;

export const LogoTall = styled(LogoTallSvg).attrs({
  width: responsiveWidth(232),
  height: responsiveHeight(222),
})`
  margin-bottom: ${responsiveHeight(60)}px;
`;

export const FormWrapperLogin = styled(FormWrapper)`
  margin-bottom: ${responsiveHeight(30)}px;
`;

export const HitArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: {
    top: responsiveHeight(15),
    right: responsiveWidth(20),
    bottom: responsiveHeight(20),
    left: responsiveWidth(20),
  },
})`
  ${props => props.bottom && `margin-bottom: ${responsiveHeight(props.bottom)}px`};
  ${props => props.left && `align-self: flex-start`};
  ${props => props.right && `align-self: flex-end`};
`;

export const TextLink = styled.Text`
  font-size: ${responsiveWidth(14)}px;
  line-height: ${responsiveHeight(18)}px;
  color: #fff;
`;

export const ButtonLogin = styled(Button)`
  margin-bottom: ${responsiveHeight(40)}px;
`;
