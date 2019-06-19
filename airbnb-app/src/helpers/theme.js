import styled from 'styled-components';

const theme = {
  colors: {
    primaryColor: '#FF5A5F',
    secondaryColor: '#008489', 
    activeTintColor: '#FF5A5F',
    inactiveTintColor: '#484848',
    textColor: '#484848',
    fullStarColor: '#008489',
    defaultBackgroundColor: '#fff',
    activityIndicatorLight: '#fff'
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
  padding-top: ${theme.spacings.defaultSpacing / 2};
  paddingHorizontal: ${theme.spacings.defaultSpacing};
  position: relative;
  flex: 1;
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

const PageTitle = styled.Text`
  color: #fff;
  font-size: 30;
  font-weight: bold;
  margin-bottom: 40;
`;

export { theme, Container, ContainerCentered, ContainerWrapper, Main, PageTitle };