import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from '../../helpers/theme';

class SavedTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Text> SavedTab </Text>
      </Container>
    );
  }
}

export default SavedTab;
