import React from 'react';
import { Image, Animated, Easing, Platform } from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import { theme } from './helpers/theme';

import ExploreTab from './pages/explore';
import SavedTab from './pages/saved';
import TripsTab from './pages/trips';
import InboxTab from './pages/inbox';
import ProfileTab from './pages/profile';

import Onboarding from './pages/onboarding';
import SignIn from './pages/signIn';
import SignUpName from './pages/signUp/name';
import SignUpEmail from './pages/signUp/email';
import AuthLoading from './pages/authloading';

const CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1])
  });

  return {
    opacity,
    transform: [{ scaleY }]
  }
};

const SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange,
    outputRange: [width, 0, 0]
  });
  const slideFromRight = { transform: [{ translateX }] }

  return slideFromRight;
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width)
      }[transition]
    }
  }
};

const Routes = createBottomTabNavigator({
  Explore: {
    screen: ExploreTab,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <IconOcticons name="search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: SavedTab,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <IconIonicons name="ios-heart-empty" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: TripsTab,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/airbnb_logo.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: InboxTab,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/message.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/person.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: theme.colors.activeTintColor,
    inactiveTintColor: theme.colors.inactiveTintColor,
    style: {
      backgroundColor: theme.colors.defaultBackgroundColor,
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: '#000',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const AuthStack = createStackNavigator(
  {
    Onboarding: Onboarding,
    SignUpName: SignUpName,
    SignUpEmail: SignUpEmail,
    SignIn: SignIn
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.secondaryColor,
        elevation: 0,
        borderBottomColor: 'transparent'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    transitionConfig: TransitionConfiguration
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: Routes,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);