import React, { Component } from 'react';
import { 
  SafeAreaView,
  View,
  Platform,
  StatusBar
} from 'react-native';

import {
  SearchHeader,
  SearchHeaderGroup,
  SearchHeaderIcon,
  SearchHeaderInput
} from './styles';

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
              <SearchHeaderIcon name="ios-search" size={20} />
              <SearchHeaderInput underlineColorAndroid="transparent" placeholder="Try New Delhi" placeholderTextColor="grey" />
            </SearchHeaderGroup>
          </SearchHeader>
        </View>
      </SafeAreaView>
    );
  }
}

export default ExploreTab;
