import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {
  TagWrapper,
  TagText
} from './styles';

class Tag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return (
      <TagWrapper>
        <TagText>{ name }</TagText>
      </TagWrapper>
    )
  }
}

export default Tag;