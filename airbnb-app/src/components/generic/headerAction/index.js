import React, { Component } from 'react';

import {
  HeaderActionButton,
  HeaderActionButtonText
} from './style';

export default class HeaderAction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderActionButton onPress={this.props.onPress} underlayColor={this.props.underlayColor}>
        <HeaderActionButtonText>{this.props.label}</HeaderActionButtonText>  
      </HeaderActionButton>
    )
  }
}