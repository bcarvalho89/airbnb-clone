import React from 'react';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../../../helpers/theme';

import { BtnContinue } from './style';

const ButtonContinue = (props) => {
  return (
    <BtnContinue onPress={props.onPress} disabled={ props.disableContinue }>
      <IconMaterialIcons name="chevron-right" size={34} color={ theme.colors.secondaryColor } />
    </BtnContinue>
  )
}

export {
  ButtonContinue
}