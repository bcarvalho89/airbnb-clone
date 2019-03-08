import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../../helpers/theme';

const SearchHeader = styled.View`
  background-color: #fff;
  margin-top: 15;
`;

const SearchHeaderGroup = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-horizontal: 20;
  padding-vertical: 5;
  background-color: #fff;
  margin-horizontal: 20;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  elevation: 2;
  border-radius: ${theme.borders.defaultBorderRadius};
  margin-top: ${props => props.offetTop ? props.offetTop : 0};
`;

const SearchHeaderIcon = styled(Icon)`
  margin-right: 15
`;

const SearchHeaderInput = styled.TextInput`
  flex: 1;
  font-weight: 500;
  font-size: 16;
  background-color: #fff;
  height: 40;
`;

const TagWrapper = styled.View`
  flexDirection: row;
  position: relative;
  marginHorizontal: 20;
`;

const HelpFindWrapper = styled.View`
  flex: 1;
  margin-top: 20;
`;

const HelpFindTitle = styled.Text`
  font-size: 24;
  font-weight: 700;
  padding-horizontal: 20;
  margin-bottom: 10;
`;

const HelpFindCategoryWrapper = styled.View`
  height: 135;
  marginTop: 20;
`;

const AirbnbPlus = styled.View`
  margin-top: 40;
  padding-horizontal: 20
`;

const AirbnbPlusTitle = styled.Text`
  font-size: 26;
  font-weight: 700;
`;

const AirbnbPlusParagraph = styled.Text`
  font-size: 18;
  margin-top: 10;
  font-weight: 100
`;

const AirbnbPlusImageWrapper = styled.View`
  width: ${props => props.deviceWidth - 40};
  height:200;
  margin-top: 20
`;

const AirbnbPlusImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
  border-radius: ${theme.borders.defaultBorderRadius / 2};
`;

const PropertyListWrapper = styled.View`
  margin-top:40
`;

const PropertyListTitle = styled.Text`
  color: ${theme.colors.textColor};
  font-size: 24;
  font-weight: 700;
  padding-horizontal: 20;
`;

const PropertyList = styled.View`
  padding-horizontal: 20;
  margin-top: 20;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between
`;

export {
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
};