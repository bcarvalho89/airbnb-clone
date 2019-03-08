import styled from 'styled-components';

import { theme } from '../../../helpers/theme';

const CategoryWrapper = styled.View`
  height: 130;
  width: 130;
  margin-left: 20;
  margin-bottom: 50;
  elevation: 2;
  border-radius: ${theme.borders.defaultBorderRadius};
  background-color: #fff;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  margin-right: ${props => props.offsetRight ? 20 : 0 };
`;

const CategoryImageWrapper = styled.View`
  flex: 2;
  overflow: hidden;
  borderTopLeftRadius: ${theme.borders.defaultBorderRadius};
  borderTopRightRadius: ${theme.borders.defaultBorderRadius};
`;

const CategoryImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
`;

const CategoryTextWrapper = styled.View`
  flex: 1;
  padding-left: 10;
  padding-top: 10;
`;

const CategoryText = styled.Text`
  font-weight: 700;
`;

export {
  CategoryWrapper,
  CategoryImageWrapper,
  CategoryImage,
  CategoryTextWrapper,
  CategoryText
}