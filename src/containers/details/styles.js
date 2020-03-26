import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

import IconEntypo from 'react-native-vector-icons/Entypo';

export const InfoContainer = styled.ScrollView`
  flex-grow: 1;
  padding: ${responsiveHeight(30)}px ${responsiveWidth(20)}px ${responsiveHeight(40)}px ${responsiveWidth(20)}px;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: ${responsiveWidth(26)}px;
  line-height: ${responsiveHeight(30)}px;
  color: #fff;
  margin-bottom: ${responsiveHeight(20)}px;
`;

export const InfoRow = styled.View`
  width: 100%;
  margin-top: ${responsiveHeight(10)}px;
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text.attrs({
  numberOfLines: 1
})`
  max-width: 77%;
  font-size: ${props => props.white ? `${responsiveWidth(12)}` : `${responsiveWidth(16)}`}px;
  line-height: ${responsiveHeight(18)}px;
  color: ${props => props.white ? '#fff' : '#B0B0B0'};
  ${props => props.white && `margin-left: ${responsiveWidth(8)}px`}
`;

export const Overview = styled.Text`
  font-size: ${responsiveWidth(20)}px;
  line-height: ${responsiveHeight(26)}px;
  color: #fff;
  margin-top: ${responsiveHeight(40)}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 100%;
  height: ${responsiveHeight(50)}px;
  border-radius: ${responsiveHeight(25)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #C4302B;
  margin: ${responsiveHeight(50)}px 0px ${responsiveHeight(80)}px 0px;
`;

export const ButtonIcon = styled(IconEntypo)`
  font-size: ${responsiveWidth(37)}px;
  line-height: ${responsiveHeight(50)}px;
  color: #fff;
`;

export const ButtonLabel = styled.Text`
  font-size: ${responsiveWidth(18)}px;
  letter-spacing: ${responsiveWidth(1)}px;
  color: #fff;
`;
