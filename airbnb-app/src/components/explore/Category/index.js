import React, { Component } from "react";

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
      <CategoryWrapper offsetRight={ this.props.offsetRight }>
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