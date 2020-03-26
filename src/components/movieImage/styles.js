import styled, { css } from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

import IconEntypo from 'react-native-vector-icons/Entypo';

export const ImageBackground = styled.ImageBackground`
  ${props => props.wide ? css`
    width: 100%;
    height: ${responsiveHeight(288)}px;
  ` : css`
    width: ${responsiveWidth(180)}px;
    height: ${responsiveHeight(270)}px;
  `}
  justify-content: flex-end;
`;

export const StatsBar = styled.View`
  width: 100%;
  height: ${props => props.wide ? `${responsiveHeight(70)}px` : `${responsiveHeight(44)}px`};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0px ${props => props.wide ? `${responsiveWidth(20)}px` : `${responsiveWidth(5)}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatsItem = styled.View`
  max-width: 33%;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(IconEntypo)`
  font-size: ${props => props.wide ? `${responsiveWidth(37)}px` : `${responsiveWidth(20)}px`};
  line-height: ${props => props.wide ? `${responsiveHeight(70)}px` : `${responsiveHeight(44)}px`};
  color: ${props => props.color ? props.color : '#fff'};
`;

export const StatsDescriptions = styled.View`
  ${props => !props.wide && 'flex-direction: row'};
  margin-left: ${props => props.wide ? `${responsiveWidth(9)}px` : `${responsiveWidth(4)}px`};
`;

export const Label = styled.Text.attrs(props => ({
  textSize: props.wide ? responsiveWidth(14) : responsiveWidth(10)
}))`
  font-size: ${props => props.small ? `${responsiveWidth(8)}px` : `${props.textSize}px`};
  color: #fff;
`;
