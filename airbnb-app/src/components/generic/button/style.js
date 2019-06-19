import styled from 'styled-components';

import { theme } from '../../../helpers/theme';

const BtnContinue = styled.TouchableOpacity`
  position: absolute;
  bottom: ${theme.spacings.defaultSpacing};
  right: ${theme.spacings.defaultSpacing};
  width: 56;
  height: 56;
  background-color: ${ props => props.disabled ? 'rgba(255, 255, 255, .2)' : '#fff' };
  justify-content: center;
  align-items: center;
  box-shadow: 10px 5px 5px #000;
  border-radius: 28;
`;

export {
  BtnContinue
}