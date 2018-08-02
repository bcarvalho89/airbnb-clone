import React, { Component } from 'react';
import { 
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Text
} from 'react-native';

import Category from '../../components/explore/Category';

import {
  SearchHeader,
  SearchHeaderGroup,
  SearchHeaderIcon,
  SearchHeaderInput,
  HelpFindWrapper,
  HelpFindTitle,
  HelpFindCategoryWrapper
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
      <SafeAreaView >
        <View >
          <SearchHeader height={this.startHeaderHeight}>
            <SearchHeaderGroup offetTop={Platform.OS == 'android' ? 20 : null}>
              <SearchHeaderIcon name="ios-search" size={24} />
              <SearchHeaderInput underlineColorAndroid="transparent" placeholder="Experimente &quot;Shanghai&quot;" placeholderTextColor="grey" />
            </SearchHeaderGroup>
          </SearchHeader>
          <ScrollView scrollEventThrottle={16}>
            <HelpFindWrapper>
              <HelpFindTitle>O que podemos ajudar você a encontrar?</HelpFindTitle>
              <HelpFindCategoryWrapper>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../../images/home.jpg')} name="Acomodações" />
                  <Category imageUri={require('../../images/experiences.jpg')} name="Experiências" />
                  <Category imageUri={require('../../images/restaurant.jpg')} name="Restaurantes" />
                </ScrollView>
              </HelpFindCategoryWrapper>
            </HelpFindWrapper>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default ExploreTab;
