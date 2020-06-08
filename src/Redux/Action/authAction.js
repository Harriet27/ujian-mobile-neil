import AsyncStorage from '@react-native-community/async-storage';
import {AUTH_START, AUTH_SUCCESS, AUTH_FAILED, LOGIN, LOGOUT} from '../Types';

export const loginAction = username => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      dispatch({
        type: LOGIN,
        payload: username,
      });
      await AsyncStorage.setItem('token', username);
      dispatch({
        type: AUTH_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.response.data.message,
      });
    }
  };
};

export const logoutAction = () => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      dispatch({
        type: LOGOUT,
      });
      await AsyncStorage.clear();
      dispatch({
        type: AUTH_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.response.data.message,
      });
    }
  };
};

export const keepLogin = token => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      dispatch({
        type: LOGIN,
        payload: token,
      });
      dispatch({
        type: AUTH_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.response.data.message,
      });
    }
  };
};
