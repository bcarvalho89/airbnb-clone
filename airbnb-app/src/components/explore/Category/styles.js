import styled from 'styled-components';

const CategoryWrapper = styled.View`
  height: 130;
  width: 130;
  margin-left: 20;
  margin-bottom: 50;
  elevation: 1;
  border-radius: 5;
  background-color: #fff;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  margin-right: ${props => props.offsetRight ? 20 : 0 };
`;

const CategoryImageWrapper = styled.View`
  flex: 2;
  overflow: hidden;
  borderTopLeftRadius: 5;
  borderTopRightRadius: 5;
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