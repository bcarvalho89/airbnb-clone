import React, { Component } from 'react';

import {
  InputLabel,
  InputField,
  InputGroup,
  InputGroupAction,
  InputGroupActionText
} from './style';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: this.props.value
  };

  handleChange = (value) => {
    this.setState({ value });
    this.props.onChangeText(value);
  }

  render() {
    const { label, sideAction, sideActionFn, sideActionLabel, secureTextEntry = false } = this.props;

    return (
      <InputGroup>
        <InputLabel>{ label }</InputLabel>
        { sideAction && 
          <InputGroupAction onPress={ sideActionFn }>
            <InputGroupActionText>{ sideActionLabel }</InputGroupActionText>
          </InputGroupAction>
        }
        <InputField value={this.state.value} onChangeText={this.handleChange} autoCapitalize="none" autoCorrect={false} secureTextEntry={secureTextEntry}/>
      </InputGroup>
    )
  }

}