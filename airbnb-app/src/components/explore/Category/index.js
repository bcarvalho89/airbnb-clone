import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from "react-native";

import {
  CategoryWrapper,
  CategoryImageWrapper,
  CategoryImage,
  CategoryTextWrapper,
  CategoryText
} from './styles';

class Category extends Component {

  render() {
    return (
      <CategoryWrapper>
        <CategoryImageWrapper>
          <CategoryImage source={this.props.imageUri} />
        </CategoryImageWrapper>
        <CategoryTextWrapper>
          <CategoryText>{this.props.name}</CategoryText>
        </CategoryTextWrapper>
      </CategoryWrapper>
    );
  }
}
export default Category;