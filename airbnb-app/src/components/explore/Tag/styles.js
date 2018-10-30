import styled from 'styled-components';

const TagWrapper = styled.View`
  padding-horizontal: 5;
  padding-vertical: 5;
  minHeight: 20;
  minWidth: 20;
  backgroundColor: #ffffff;
  borderColor: #dddddd;
  borderWidth: 0.2;
  borderRadius: 2;
  borderWidth: 1;
  marginRight: 5;
`;

const TagText = styled.Text`
  fontWeight: 700;
  fontSize: 10;
`;

export {
  TagWrapper,
  TagText
}