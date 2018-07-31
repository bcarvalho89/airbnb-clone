import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import styles from './styles';

class Main extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const {params} = navigation.state;
    
    return {
      title: 'Por perto',
      headerRight: (
        <MaterialIcons.Button onPress={() => params.handleOpen && params.handleOpen()} title="Shazam" name="more-vert" size={30} color="#fff" padding={0} margin={0} backgroundColor="transparent" />
      ),
    };
  }

  componentDidMount () {
    this.props.navigation.setParams({handleOpen: () => this.openMoreOptions()});
  }

  openMoreOptions = () => {
    alert('Open more options');
  }

  render() {
    return(
      <View />
    )
  }
}

export default Main;