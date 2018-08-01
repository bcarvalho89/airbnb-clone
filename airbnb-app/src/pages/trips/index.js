import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from '../../helpers/theme';

class TripsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Text> TripsTab </Text>
      </Container>
    );
  }
}

export default TripsTab;
