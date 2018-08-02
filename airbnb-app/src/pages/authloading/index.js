import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Text,
  View,
} from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@AirbnbApp:token');

    console.log('AuthLoading', userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <StatusBar hidden />
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading;