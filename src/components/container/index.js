import styled, { css } from 'styled-components/native';

export default Container = styled.View`
  flex: 1;
  background-color: #545454;
  ${props => props.alignCenter && css`
    align-items: center;
    justify-content: center;
  `}
`;
