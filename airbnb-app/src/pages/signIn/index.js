import React, { Component } from 'react';

import { AsyncStorage, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { theme, Container } from '../../helpers/theme';

import api from '../../services/api';

import Snackbar from 'react-native-snackbar';


const goToApp = NavigationActions.navigate({
  routeName: 'Explore'
});

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: '',
    password: '',
    error: '',
    isLoading: false
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
      Snackbar.show({
        title: 'Preencha o usuário e senha para continuar!',
        duration: Snackbar.LENGTH_LONG
      });
    } else {
      this.setState({ isLoading: true });
      
      try {  
        const response = await api.post('/sessions', {
          email: this.state.email,
          password: this.state.password
        });

        await AsyncStorage.setItem('@AirbnbApp:token', response.data.token);

        this.setState({ isLoading: false });
        this.props.navigation.dispatch(goToApp);
      } catch (err) {
        console.log('Error on login: ', err);
        Snackbar.show({
          title: 'Houve um problema ao efetuar o login. Verifique os dados inseridos e tente novamente.',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            title: 'OK',
            color: '#fff'
          }
        });

        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <Container>
        <TextInput placeholder="Endereço de e-mail" value={this.state.email} onChangeText={this.handleEmailChange} autoCapitalize="none" autoCorrect={false} />
        <TextInput placeholder="Senha" value={this.state.password} onChangeText={this.handlePasswordChange} autoCapitalize="none" autoCorrect={false} secureTextEntry />

        <TouchableOpacity onPress={this.handleSignInPress}>
          <Text>Entrar</Text>
        </TouchableOpacity>

        { this.state.isLoading &&
          <ActivityIndicator size="large" color="#FC6663"/>
        }
        
        </Container>
    )
  }
}