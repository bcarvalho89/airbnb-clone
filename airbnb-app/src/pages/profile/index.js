import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';

import { Container, Main } from '../../helpers/theme';

class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Main>
        <Container>
          <Button title="Sair" onPress={this.logout} />
        </Container>
      </Main>
    );
  }
}

export default ProfileTab;
