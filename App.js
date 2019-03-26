/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '~/Store';
import AppContainer from '~/App';
import EStyleSheet from 'react-native-extended-stylesheet';

class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $primary: '#009aa8',
  $primaryLight: '#57cbda',
  $primaryDark: '#006b79',
  $secondary: '#f1f2f2',
  $secondaryLight: '#ffffff',
  $secondaryDark: '#bebfbf',
  $textColorPrimary: '#ffffff',
  $textColorSecondary: '#000000',
});

export default App;
