import styled from 'styled-components/native';

import { responsiveWidth, responsiveHeight } from '../../helpers/responsive';

export const ContainerFormWrapper = styled.View`
  width: ${responsiveWidth(320)}px;
`;

export const ItemSeparator = styled.View`
  height: ${responsiveHeight(20)}px;
`;
