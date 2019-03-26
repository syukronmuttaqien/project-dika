/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import rootReducer from '~/Reducers';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(
  rootReducer,
  devToolsEnhancer()
);

export default store;
