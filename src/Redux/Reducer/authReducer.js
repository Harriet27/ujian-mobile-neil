import {AUTH_START, AUTH_SUCCESS, AUTH_FAILED, LOGIN, LOGOUT} from '../Types';

const INITIAL_STATE = {
  username: '',
  error: '',
  loading: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        loading: false,
        username: action.payload,
      };
    case LOGOUT:
      return {
        INITIAL_STATE,
        loading: false,
      };
    default:
      return state;
  }
};
