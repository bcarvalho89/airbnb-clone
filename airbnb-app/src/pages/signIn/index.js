import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage }  from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Container } from '../../helpers/theme';

import {
  Button,
  ButtonText,
  ErrorMessage,
  Input,
  Logo,
  SignUpLink,
  SignUpLinkText
} from './styles';

import api from '../../services/api';

const goToApp = NavigationActions.navigate({
  routeName: 'Explore'
});

export default class SignIn extends Component {

  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func
    }).isRequired
  };

  state = {
    email: '',
    password: '',
    error: ''
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  }

  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({
        error: 'Preencha o usuário e senha para continuar!'
      }, () => false);
    } else {
      try {
        const response = await api.post('/sessions', {
          email: this.state.email,
          password: this.state.password
        });

        await AsyncStorage.setItem('@AirbnbApp:token', response.data.token);

        this.props.navigation.dispatch(goToApp);
      } catch (err) {
        this.setState({
          error: 'Houve um problema ao efetuar o login. Verifique os dados inseridos e tente novamente.'
        });
      }
    }
  }

  render() {    
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../images/airbnb_logo-color.png')} resizeMode="contain" />
        <Input placeholder="Endereço de e-mail" value={this.state.email} onChangeText={this.handleEmailChange} autoCapitalize="none" autoCorrect={false} />
        <Input placeholder="Senha" value={this.state.password} onChangeText={this.handlePasswordChange} autoCapitalize="none" autoCorrect={false} secureTextEntry />

        {this.state.error.length !== 0 &&
          <ErrorMessage>{this.state.error}</ErrorMessage>
        }

        <Button onPress={this.handleSignInPress}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    )
  }

}