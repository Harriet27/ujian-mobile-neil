import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/Navigation/MainNavigation';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './src/Redux/Reducer';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
