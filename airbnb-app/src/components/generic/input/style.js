import styled from 'styled-components';

import { theme } from '../../../helpers/theme';

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

export {
  InputGroup,
  InputLabel,
  InputField,
  InputGroupAction,
  InputGroupActionText
}