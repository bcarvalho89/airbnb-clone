import styled from 'styled-components';

import { theme } from '../../helpers/theme';

const SignInTitle = styled.Text`
  color: #fff;
  font-size: 30;
  font-weight: bold;
  margin-bottom: 40;
`;

const InputGroup = styled.View`
  margin-bottom: ${ theme.spacings.defaultSpacing * 1.5 };
`;

const InputLabel = styled.Text`
  color: #fff;
  font-size: 16;
  font-weight: 400;
  margin-bottom: 10;
`;

const InputField = styled.TextInput`
  color: #fff;
  borderBottomColor: rgba(255, 255, 255, .5);
  borderBottomWidth: 2;
  paddingVertical: 3;
  font-size: 24;
  font-weight: 400;
`;

const InputGroupAction = styled.TouchableWithoutFeedback`
  position: relative;
`;

const InputGroupActionText = styled.Text`
  position: absolute;
  right: 0;
  color: #fff;
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
  box-shadow: 10px 5px 5px #000;
  border-radius: 28;
`;

export {
  SignInTitle,
  InputGroup,
  InputLabel,
  InputField,
  InputGroupAction,
  InputGroupActionText,
  ButtonContinue
}