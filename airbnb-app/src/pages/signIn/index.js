import React, { Component } from 'react';

import {
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import Snackbar from 'react-native-snackbar';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme, Container, ContainerWrapper, PageTitle } from '../../helpers/theme';
import { isValidMailFormat } from '../../helpers/validators';

import HeaderAction from '../../components/generic/headerAction';
import Input from '../../components/generic/input';

import api from '../../services/api';

import  {
  ButtonContinue
} from './styles';

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
        <HeaderAction label="Esqueceu a senha?" onPress={() => { alert('Click'); }} underlayColor={ theme.colors.secondaryColor } />
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
    this.props.navigation.navigate('SignUpName');
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
        title: 'Erro ao efetuar o login. Verifique os dados inseridos.',
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
          <PageTitle>Entrar</PageTitle>
          <Input 
            label="ENDEREÇO DE EMAIL"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />

          <Input 
            label="Senha"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            sideAction={true}
            sideActionFn={ this.togglePassword }
            sideActionLabel={ this.state.hidePasswordText }
            secureTextEntry={ this.state.hidePassword }
          />

          <ButtonContinue onPress={this.handleSignInPress} disabled={ this.state.disableContinue }>
            <IconMaterialIcons name="chevron-right" size={34} color={ theme.colors.secondaryColor } />
          </ButtonContinue>

          { this.state.isLoading &&
            <ActivityIndicator size="large" color={ theme.colors.activityIndicatorLight }/>
          }
        </ContainerWrapper>
      </Container>
    )
  }
}