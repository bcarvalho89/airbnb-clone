import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage, BackHandler, ActivityIndicator, Image, Dimensions, Button, TouchableOpacity, TouchableHighlight, Text, StyleSheet, Platform }  from 'react-native';
import { NavigationActions } from 'react-navigation';

import Snackbar from 'react-native-snackbar';

import { Container, theme } from '../../helpers/theme';


import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import {
  CloseButton,
  SignInButton,
  SignInButtonText
} from './styles';

import api from '../../services/api';

const goToApp = NavigationActions.navigate({
  routeName: 'Explore'
});

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@AirbnbApp:token');

    console.log('SignIn', userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        Platform.OS === 'android' &&
        <CloseButton onPress={() => BackHandler.exitApp()}>
          <IconMaterialIcons name="close" color='#fff' size={28} />
        </CloseButton>
      ),
      headerRight: (
        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <SignInButtonText>Entrar</SignInButtonText>  
        </SignInButton>
      ),
    }
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
      <Container backgroundColor={ theme.colors.secondaryColor }>
        <StatusBar backgroundColor={ theme.colors.secondaryColor } barStyle="dark-content" />
        {/* <StatusBar hidden />
        <Image source={require('../../images/airbnb_logo.png')} style={{ height: width / 2, width: width / 2, tintColor: theme.colors.activeTintColor }} />
        <Input placeholder="Endereço de e-mail" value={this.state.email} onChangeText={this.handleEmailChange} autoCapitalize="none" autoCorrect={false} />
        <Input placeholder="Senha" value={this.state.password} onChangeText={this.handlePasswordChange} autoCapitalize="none" autoCorrect={false} secureTextEntry />

        <Button onPress={this.handleSignInPress}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        { this.state.isLoading &&
          <ActivityIndicator size="large" color="#FC6663"/>
        }

        <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink> */}
      </Container>
    )
  }

}