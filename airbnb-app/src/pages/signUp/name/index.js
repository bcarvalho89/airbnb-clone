import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import api from '../../../services/api';
import { StackActions, NavigationActions } from 'react-navigation';

import { theme, Container, ContainerWrapper, PageTitle } from '../../../helpers/theme';

import Input from '../../../components/generic/input';
import { ButtonContinue } from '../../../components/generic/button/index';

export default class SignUpName extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    surname: '',
    disableContinue: true
  };

  handleNameChange = (name) => {
    this.setState({ name });
    this.handleStateContinueButton();
  };

  handleSurnameChange = (surname) => {
    this.setState({ surname });
    this.handleStateContinueButton();
  };

  // handleSignUpPress = async () => {
  //   if (this.state.email.length === 0 || this.state.password.length === 0) {
  //     this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
  //   } else {
  //     try {
  //       await api.post('/users', {
  //         username: this.state.username,
  //         email: this.state.email,
  //         password: this.state.password,
  //       });

  //       this.setState({ success: 'Conta criada com sucesso! Redirecionando para o login', error: '' });

  //       setTimeout(this.goToLogin, 2500);
  //     } catch (_err) {
  //       this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
  //     }
  //   }
  // };

  // goToLogin = () => {
  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [
  //       NavigationActions.navigate({ routeName: 'SignIn' }),
  //     ],
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }

  isFormValid = () => {
    return this.state.name.length > 0 && this.state.surname.length > 0;
  }

  handleStateContinueButton = () => {
    this.setState({
      disableContinue: !this.isFormValid()
    });
  }

  continueSignUp = () => {
    if (this.isFormValid()) {
      this.props.navigation.push('SignUpEmail', this.state);
    }
  }

  render() {
    return (
      <Container backgroundColor={ theme.colors.secondaryColor }>
        <ContainerWrapper>
          <PageTitle>Qual o seu nome?</PageTitle>
          <Input 
            label="NOME"
            value={this.state.name}
            onChangeText={this.handleNameChange}
          />
          <Input 
            label="SOBRENOME"
            value={this.state.surname}
            onChangeText={this.handleSurnameChange}
          />
          <ButtonContinue onPress={this.continueSignUp} disableContinue={this.state.disableContinue}/>
        {/* 
        {this.state.success.length !== 0 &&
          <SuccessMessage>{this.state.success}</SuccessMessage>
        }

        <Input
          placeholder="Nome de usuário"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        {this.state.error.length !== 0 &&
          <ErrorMessage>{this.state.error}</ErrorMessage>
        }

        <Button onPress={this.handleSignUpPress}>
          <ButtonText>Criar conta</ButtonText>
        </Button>
        <SignInLink onPress={this.handleBackToLoginPress}>
          <SignInLinkText>Voltar ao login</SignInLinkText>
        </SignInLink> */}
        </ContainerWrapper>
      </Container>
    );
  }
}