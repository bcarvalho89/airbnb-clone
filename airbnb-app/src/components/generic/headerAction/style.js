import styled from 'styled-components';

import { theme } from '../../../helpers/theme';

const HeaderActionButton = styled.TouchableHighlight`
  margin-right: ${ theme.spacings.defaultSpacing };
`;

const HeaderActionButtonText = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: 400;
`;

export {
  HeaderActionButton,
  HeaderActionButtonText
}