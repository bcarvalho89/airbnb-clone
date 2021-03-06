import styled from 'styled-components';

import { theme } from '../../helpers/theme';

const SignInTitle = styled.Text`
  color: #fff;
  font-size: 30;
  font-weight: bold;
  margin-bottom: 40;
`;

const ButtonContinue = styled.TouchableOpacity`
  position: absolute;
  bottom: ${theme.spacings.defaultSpacing};
  right: ${theme.spacings.defaultSpacing};
  width: 56;
  height: 56;
  background-color: ${ props => props.disabled ? 'rgba(255, 255, 255, .2)' : '#fff' };
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  border-radius: 28;
`;

export {
  SignInTitle,
  ButtonContinue
}