import styled from 'styled-components';

import { theme } from '../../../helpers/theme';

const TagWrapper = styled.View`
  padding-horizontal: 10;
  padding-vertical: 7;
  minHeight: 20;
  minWidth: 20;
  backgroundColor: #ffffff;
  borderColor: #dddddd;
  borderWidth: 0.2;
  borderRadius: ${theme.borders.defaultBorderRadius};
  borderWidth: 1;
  marginRight: 5;
`;

const TagText = styled.Text`
  fontWeight: 400;
  fontSize: 14;
`;

export {
  TagWrapper,
  TagText
}