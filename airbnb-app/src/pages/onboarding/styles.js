import styled from 'styled-components';

import { theme } from '../../helpers/theme';

const CloseButton = styled.TouchableHighlight`
  margin-left: ${ theme.spacings.defaultSpacing };
`;

const Logo = styled.Image`
  width: 50;
  height: 50;
  tintColor: #fff;
`;

const Greetings = styled.Text`
  color: #fff;
  margin-top: 15;
  font-size: 32;
  max-width: 320
`;

const CreateAccountOptions = styled.View`
  flex-direction: column;
  margin-top: 40;
`;

const CreateAccountOptionsText = styled.Text`
  font-size: 20;
  font-weight: 400
  text-align: center;
  border: 2px solid ${ props => props.color === 'light' ? theme.colors.secondaryColor :  '#fff' };
  border-radius: 25;
  paddingVertical: 10;
  color: ${ props => props.color === 'light' ? theme.colors.secondaryColor :  '#fff' };
  margin-bottom: 10;
  background-color: ${ props => props.color === 'light' ? '#fff' : theme.colors.secondaryColor };
  overflow: hidden;
`;

const MoreOptions = styled.Text`
  color: #fff;
  font-size: 18;
  margin-bottom: 40;
  margin-top: 30;
`;

const Disclaimer = styled.Text`
  color: #fff;
  font-size: 16;
`;

export { 
  CloseButton,
  Logo,
  Greetings,
  CreateAccountOptions,
  CreateAccountOptionsText,
  MoreOptions,
  Disclaimer
};