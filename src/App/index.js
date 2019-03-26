import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainMenu from '%/MainMenu';

const $primary = '#009aa8';

const AppNavigator = createStackNavigator(
  { // Screen here
    MainMenu,
  },
  { // Config here
    initialRouteName: 'MainMenu',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: $primary,
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


// const primary = EStyleSheet.value('$primary');

export default createAppContainer(AppNavigator);
