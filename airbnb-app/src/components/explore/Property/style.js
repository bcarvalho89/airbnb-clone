import styled from 'styled-components';

import { theme } from '../../../helpers/theme';

const PropertyWrapper = styled.View`
  width: ${props => ( props.deviceWidth / 2 - 25 )};
  margin-bottom: 30;
`;

const PropertyImageWrapper = styled.View`
  flex: 1
`;

const PropertyImage = styled.Image`
  width:null;
  height: 110;
  resize-mode: cover;
  flex: 1;
  border-radius: ${theme.borders.defaultBorderRadius}
`;

const PropertyFavorite = styled.TouchableOpacity`
  position: absolute;
  right: 10;
  top: 10;
  z-index: 5;
`;

const PropertyInfoWrapper = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const PropertyInfoType = styled.Text`
  font-size: 9;
  margin-top: 10;
  font-weight: 500;
`;

const PropertyInfoTitle = styled.Text`
  font-size: 16;
  font-weight: 700;
  color: ${theme.colors.textColor}
`;

const PropertyInfoPrice = styled.Text`
  font-size: 15;
  margin-bottom: 5;
`;

export {
  PropertyWrapper,
  PropertyImageWrapper,
  PropertyImage,
  PropertyFavorite,
  PropertyInfoWrapper,
  PropertyInfoType,
  PropertyInfoTitle,
  PropertyInfoPrice
}