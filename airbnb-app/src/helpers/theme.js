import styled from 'styled-components';

const theme = {
  colors: {
    activeTintColor: '#ff5a60',
    inactiveTintColor: 'grey',
    textColor: 'green',
    defaultBackgroundColor: '#fff'
  }
};

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #F5F5F5;
`;

export { theme, Container };