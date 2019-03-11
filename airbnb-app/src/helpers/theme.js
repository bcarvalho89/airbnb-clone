import styled from 'styled-components';

const theme = {
  colors: {
    primaryColor: '#FF5A5F',
    secondaryColor: '#008489', 
    activeTintColor: '#FF5A5F',
    inactiveTintColor: '#484848',
    textColor: '#484848',
    fullStarColor: '#008489',
    defaultBackgroundColor: '#fff'
  },
  borders: {
    defaultBorderRadius: 5
  },
  spacings: {
    defaultSpacing: 20,
  }
};

const Container = styled.View`
  flex: 1;
  backgroundColor: ${props => props.backgroundColor || theme.colors.defaultBackgroundColor};
`;

const ContainerWrapper = styled.View`
  paddingHorizontal: ${theme.spacings.defaultSpacing};
`;

const ContainerCentered = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.backgroundColor || theme.colors.defaultBackgroundColor};
`;

const Main = styled.SafeAreaView`
  backgroundColor: ${theme.colors.defaultBackgroundColor};
`;

export { theme, Container, ContainerCentered, ContainerWrapper, Main };