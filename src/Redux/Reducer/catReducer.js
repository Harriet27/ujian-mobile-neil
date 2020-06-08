import {
  CAT_START,
  CAT_SUCCESS,
  CAT_FAILED,
  GET_CAT,
  GET_CAT_BY_ID,
} from '../Types';

const INITIAL_STATE = {
  catList: [],
  catById: [],
  loading: false,
};

export const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAT_START:
      return {
        ...state,
        loading: true,
      };
    case CAT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case CAT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CAT:
      return {
        ...state,
        loading: false,
        catList: action.payload,
      };
    case GET_CAT_BY_ID:
      return {
        ...state,
        loading: false,
        catById: action.payload,
      };
    default:
      return state;
  }
};
