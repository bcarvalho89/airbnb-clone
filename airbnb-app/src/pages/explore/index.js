import React, { Component } from 'react';
import { 
  SafeAreaView,
  View,
  TextInput,
  Platform,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  SearchHeader,
  SearchHeaderGroup
} from './styles';

import { Container } from '../../helpers/theme';

class ExploreTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.startHeaderHeight = 80;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ flex: 1 }}>
                    <SearchHeader height={this.startHeaderHeight}>
                        <SearchHeaderGroup offetTop={Platform.OS == 'android' ? 20 : null}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white', height: 40 }}
                            />
                        </SearchHeaderGroup>
                    </SearchHeader>
                </View>
            </SafeAreaView>
    );
  }
}

export default ExploreTab;
