import styled from 'styled-components';

const SearchHeader = styled.View`
  height: ${props => props.height};
  background-color: #fff;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  elevation: 2;
`;

const SearchHeaderGroup = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-horizontal: 20;
  padding-vertical: 10;
  background-color: #fff;
  margin-horizontal: 30;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  elevation: 3;
  borderRadius: 5;
  margin-top: ${props => props.offetTop};
`;

export {
  SearchHeader,
  SearchHeaderGroup
};