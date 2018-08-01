import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from '../../helpers/theme';

class InboxTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Text> InboxTab </Text>
      </Container>
    );
  }
}

export default InboxTab;
