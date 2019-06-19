import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { theme, Container, ContainerWrapper, PageTitle } from '../../../helpers/theme';
import { isValidMailFormat } from '../../../helpers/validators';

import Input from '../../../components/generic/input';
import { ButtonContinue } from '../../../components/generic/button/index';

export default class SignUpEmail extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    disableContinue: true
  };

  componentDidMount() {
    
  }

  handleEmailChange = (email) => {
    this.setState({ email });
    this.handleStateContinueButton();
  }

  isFormValid = () => {
    return isValidMailFormat(this.state.email);
  }

  handleStateContinueButton = () => {
    this.setState({
      disableContinue: !this.isFormValid()
    });
  }

  continueSignUp = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Container backgroundColor={ theme.colors.secondaryColor }>
        <ContainerWrapper>
          <PageTitle>E o seu email?</PageTitle>
          <Input 
            label="ENDEREÇO DE EMAIL"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          <ButtonContinue onPress={this.continueSignUp} disableContinue={this.state.disableContinue}/>
        </ContainerWrapper>
      </Container>
    );
  }
}