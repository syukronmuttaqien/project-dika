/* eslint-disable react/prop-types */

import React from 'react';
import Icon from '#/Icon';

import { createBottomTabNavigator } from 'react-navigation';

// Local Component
import Home from './Home';

// Style

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Hospital: Home,
    Queueing: Home,
    Chat: Home

  },
  {
    defaultNavigationOptions: ({ navigation, navigationOptions }) => ({
      ...navigationOptions,
      tabBarIcon: ({ /* focused, horizontal, */ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge
        } else if (routeName === 'Hospital') {
          iconName = 'hospital';
        } else if (routeName === 'Queueing') {
          iconName = 'list-alt';
        } else if (routeName === 'Chat') {
          iconName = 'comment-dots';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#009aa8',
      inactiveTintColor: '#bebfbf',
    },
  });

TabNavigator.navigationOptions = {
  header: null,
};

export default TabNavigator;
