import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

export const ContainerList = styled.View`
  flex: 1;
  padding: 0px ${responsiveWidth(20)}px;
`;

export const Label = styled.Text`
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveHeight(22)}px;
  color: #fff;
  margin-top: ${responsiveHeight(20)}px;
`;

export const ListItems = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false
})`
  margin-top: ${responsiveHeight(24)}px;
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  ${props => props.index % 2 === 0 ?
    `margin-right: ${responsiveWidth(14)}px`
    :
    `margin-bottom: ${responsiveHeight(20)}px`
  }
`;
