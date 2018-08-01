import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';

import { Container } from '../../helpers/theme';

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
      <Container>
        <Button title="Sair" onPress={this.logout} />
      </Container>
    );
  }
}

export default ProfileTab;
