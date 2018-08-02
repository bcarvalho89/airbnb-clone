import styled from 'styled-components';

const theme = {
  colors: {
    activeTintColor: '#FF5A5F',
    inactiveTintColor: '#484848',
    textColor: '#484848',
    fullStarColor: '#008489',
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