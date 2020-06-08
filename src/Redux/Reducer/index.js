import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './authReducer';
import {catReducer} from './catReducer';

export default combineReducers({
  auth: authReducer,
  cat: catReducer,
});
