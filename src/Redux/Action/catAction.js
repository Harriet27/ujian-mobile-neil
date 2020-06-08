import Axios from 'axios';
import {API_URL, API_KEY} from '../../Support/API_URL';
import {
  CAT_START,
  CAT_SUCCESS,
  CAT_FAILED,
  GET_CAT,
  // GET_CAT_BY_ID,
} from '../Types';

export const getCat = () => {
  return async dispatch => {
    dispatch({
      type: CAT_START,
    });
    try {
      let res = await Axios.get(`${API_URL}`, {headers: {'user-key': API_KEY}});
      console.log(res.data.url);
      dispatch({
        type: GET_CAT,
        payload: res.data,
      });
      dispatch({
        type: CAT_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: CAT_FAILED,
      });
    }
  };
};
