import React, { Component } from 'react';

import { AsyncStorage, Text, TouchableOpacity, ActivityIndicator, TextInput, TouchableWithoutFeedback } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Snackbar from 'react-native-snackbar';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme, Container, ContainerWrapper } from '../../helpers/theme';
import { isValidMailFormat } from '../../helpers/validators';

import  {
  SignInTitle,
  InputGroup,
  InputLabel,
  InputField,
  InputGroupAction,
  InputGroupActionText,
  ButtonContinue
} from './styles';

import {
 SignInButton,
 SignInButtonText
} from '../onboarding/styles'

import api from '../../services/api';

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
    hidePassword: true,
    hidePasswordText: 'Mostrar',
    isLoading: false,
    disableContinue: true
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <SignInButton onPress={() => {}} underlayColor={ theme.colors.secondaryColor }>
          <SignInButtonText>Esqueceu a senha?</SignInButtonText>  
        </SignInButton>
      )
    }
  };

  handleEmailChange = (email) => {
    this.setState({ email });
    this.handleStateContinueButton();
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
    this.handleStateContinueButton();
  }

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  }

  togglePassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
      hidePasswordText: this.state.hidePassword ? 'Ocultar' : 'Mostrar'
    });
  }

  isFormValid = () => {
    return isValidMailFormat(this.state.email) && this.state.password.length > 0;
  }

  handleStateContinueButton = () => {
    this.setState({
      disableContinue: !this.isFormValid()
    });
  }

  handleSignInPress = async () => {
    if (!this.isFormValid()) return;
    
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

  render() {
    return ( 
      <Container backgroundColor={ theme.colors.secondaryColor }>
        <ContainerWrapper>
          <SignInTitle>Entrar</SignInTitle>
          <InputGroup>
            <InputLabel>ENDEREÇO DE EMAIL</InputLabel>
            <InputField value={this.state.email} onChangeText={this.handleEmailChange} autoCapitalize="none" autoCorrect={false} />
          </InputGroup>
          <InputGroup>
            <InputLabel>SENHA</InputLabel>
            <InputGroupAction onPress={ this.togglePassword }>
              <InputGroupActionText>{ this.state.hidePasswordText }</InputGroupActionText>
            </InputGroupAction>
            <InputField value={this.state.password} onChangeText={this.handlePasswordChange} autoCapitalize="none" autoCorrect={false} secureTextEntry={ this.state.hidePassword } />
          </InputGroup>
          <ButtonContinue onPress={this.handleSignInPress} disabled={ this.state.disableContinue }>
            <IconMaterialIcons name="chevron-right" size={34} color={ theme.colors.secondaryColor } />
          </ButtonContinue>

          { this.state.isLoading &&
            <ActivityIndicator size="large" color="#FC6663"/>
          }
        </ContainerWrapper>
      </Container>
    )
  }
}