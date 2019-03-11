import React from 'react';
import { Image } from 'react-native';
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
import SignUp from './pages/signUp';
import AuthLoading from './pages/authloading';

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
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.secondaryColor,
        elevation: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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