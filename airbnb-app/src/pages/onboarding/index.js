import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StatusBar,
  AsyncStorage,
  BackHandler,
  TouchableOpacity,
  Platform,
} from 'react-native';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContainerWrapper,
  theme
} from '../../helpers/theme';

import HeaderAction from '../../components/generic/headerAction';

import {
  CloseButton,
  Logo,
  Greetings,
  CreateAccountOptions,
  CreateAccountOptionsText,
  MoreOptions,
  Disclaimer
} from './styles';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@AirbnbApp:token');

    console.log('Onboarding', userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        Platform.OS === 'android' &&
        <CloseButton onPress={() => BackHandler.exitApp()} underlayColor={ theme.colors.secondaryColor }>
          <IconMaterialIcons name="close" color='#fff' size={28} />
        </CloseButton>
      ),
      headerRight: (
        <HeaderAction label="Entrar" onPress={() => navigation.navigate('SignIn')} underlayColor={ theme.colors.secondaryColor } />
      ),
    }
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func
    }).isRequired
  };

  render() {    
    return (
      <Container backgroundColor={ theme.colors.secondaryColor }>
        <StatusBar backgroundColor={ theme.colors.secondaryColor } barStyle="dark-content" />
        <ContainerWrapper>
          <Logo source={require('../../images/airbnb_logo.png')} />
          <Greetings>Bem-vindo(a) ao Airbnb.</Greetings>
          <CreateAccountOptions>
            <TouchableOpacity>
              <CreateAccountOptionsText color="light">Continuar com Facebook</CreateAccountOptionsText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.push('SignUpName')}>
              <CreateAccountOptionsText>Criar uma conta</CreateAccountOptionsText>
            </TouchableOpacity>
          </CreateAccountOptions>
          <MoreOptions>Mais opções</MoreOptions>
          <Disclaimer>Ao clicar em Continuar, Criar conta ou Mais opções, eu aceito os Termos de Serviço, os Termos de Serviço de Pagamentos, a Política de Privacidade e a Política de Não Discriminação do Airbnb</Disclaimer>
        </ContainerWrapper>
      </Container>
    )
  }

}