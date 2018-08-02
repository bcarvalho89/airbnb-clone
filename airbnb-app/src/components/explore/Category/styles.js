import styled from 'styled-components';

const CategoryWrapper = styled.View`
  height: 130;
  width: 130;
  margin-left: 20;
  margin-bottom: 20;
  elevation: 2;
  border-radius: 5;
`;

const CategoryImageWrapper = styled.View`
  flex: 2
`;

const CategoryImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
  border-top-left-radius: 5;
  border-top-right-radius: 5;
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