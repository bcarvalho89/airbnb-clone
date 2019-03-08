import React, { Component } from 'react';
import { 
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions,
  Animated
} from 'react-native';

import { Main } from '../../helpers/theme';

import Category from '../../components/explore/Category';
import Property from '../../components/explore/Property';
import Tag from '../../components/explore/Tag';

import {
  SearchHeader,
  SearchHeaderGroup,
  SearchHeaderIcon,
  SearchHeaderInput,
  TagWrapper,
  HelpFindWrapper,
  HelpFindTitle,
  HelpFindCategoryWrapper,
  AirbnbPlus,
  AirbnbPlusTitle,
  AirbnbPlusParagraph,
  AirbnbPlusImageWrapper,
  AirbnbPlusImage,
  PropertyListWrapper,
  PropertyListTitle,
  PropertyList
} from './styles';

const { width } = Dimensions.get('window');

class ExploreTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;

    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-5, 15],
      extrapolate: 'clamp'
    });
  }

  render() {
    const StyledAnimatedSearchHeader = Animated.createAnimatedComponent(SearchHeader);
    const StyledAnimatedTagWrapper = Animated.createAnimatedComponent(TagWrapper);

    return (
      <Main style={{ flex: 1}}>
        <View style={{ flex: 1}}>
          <StyledAnimatedSearchHeader style={{height: this.animatedHeaderHeight}}>
            <SearchHeaderGroup>
              <SearchHeaderIcon name="ios-search" size={22} />
              <SearchHeaderInput underlineColorAndroid="transparent" placeholder="Experimente &quot;Shanghai&quot;" placeholderTextColor="grey" />
            </SearchHeaderGroup>
            <StyledAnimatedTagWrapper style={{top: this.animatedTagTop, opacity: this.animatedOpacity}} >
              <Tag name="Guests" />
              <Tag name="Dates" />
            </StyledAnimatedTagWrapper>
          </StyledAnimatedSearchHeader>
          <ScrollView scrollEventThrottle={16} onScroll={Animated.event(
            [
              {nativeEvent: {contentOffset: {y: this.scrollY}}}
            ]
          )}>
            <HelpFindWrapper>
              <HelpFindTitle>Explore o Airbnb</HelpFindTitle>
              <HelpFindCategoryWrapper>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../../images/home.jpg')} name="Acomodações" />
                  <Category imageUri={require('../../images/experiences.jpg')} name="Experiências" />
                  <Category imageUri={require('../../images/restaurant.jpg')} name="Restaurantes" offsetRight={true} />
                </ScrollView>
              </HelpFindCategoryWrapper>
            </HelpFindWrapper>

            <AirbnbPlus>
              <AirbnbPlusTitle>Apresentando Airbnb Plus</AirbnbPlusTitle>
              <AirbnbPlusParagraph>Uma nova seleção de acomodações com conforto e qualidade verificados.</AirbnbPlusParagraph>
              <AirbnbPlusImageWrapper deviceWidth={width}>
                <AirbnbPlusImage source={require('../../images/home.jpg')} />
              </AirbnbPlusImageWrapper>
            </AirbnbPlus>

            <PropertyListWrapper>
              <PropertyListTitle>Acomodações no mundo inteiro</PropertyListTitle>
              <PropertyList>
                <Property width={width} isFavorited={true} />
                <Property width={width} isFavorited={false} />
                <Property width={width} isFavorited={false} />
                <Property width={width} isFavorited={true} />
              </PropertyList>
            </PropertyListWrapper>
          </ScrollView>
        </View>
      </Main>
    );
  }
}

export default ExploreTab;
