import React, { Component } from "react";
import {
  Dimensions
} from "react-native";

import StarRating from 'react-native-star-rating';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../../../helpers/theme';

import {
  PropertyWrapper,
  PropertyImageWrapper,
  PropertyImage,
  PropertyFavorite,
  PropertyInfoWrapper,
  PropertyInfoType,
  PropertyInfoTitle,
  PropertyInfoPrice
} from './style';

const { width } = Dimensions.get('window');

class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorited: this.props.isFavorited
    }
  }

  renderFavoriteHeart() {
    if (this.state.isFavorited) {
      return <IconIonicons name="ios-heart" color={theme.colors.activeTintColor} size={24} />
    }

    return <IconIonicons name="ios-heart-empty" color={'white'} size={24} />
  }

  render() {
    return (
      <PropertyWrapper deviceWidth={width}>
        <PropertyImageWrapper>
          <PropertyImage source={require('../../../images/home.jpg')} />
          <PropertyFavorite onPress={() => this.setState({ isFavorited: !this.state.isFavorited })}>
            { this.renderFavoriteHeart() }
          </PropertyFavorite>
        </PropertyImageWrapper>
        <PropertyInfoWrapper>
          <PropertyInfoType numberOfLines={1}>{ 'Casa de Hóspedes Inteira - Casssddasdasd'.toUpperCase() }</PropertyInfoType>
          <PropertyInfoTitle numberOfLines={2}>Kealakekua Bay Bali Cottage -steps from heaven</PropertyInfoTitle>
          <PropertyInfoPrice>R$167 por noite</PropertyInfoPrice>
          <StarRating disable={true} maxStars={5} rating={4} starSize={11} fullStarColor={theme.colors.fullStarColor} containerStyle={{width: 60}} />
        </PropertyInfoWrapper>
      </PropertyWrapper>
    );
  }
}
export default Property;