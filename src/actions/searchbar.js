
import axios from 'axios';

export function onChange(value, id) {
  return async function(dispatch) {
    dispatch({
      type: 'ON_CHANGE',
      id,
      payload: value,
    });
  };
}

export function setAutoCompleteSuggestions(value, id) {
  return async function(dispatch) {
    dispatch({
      type: 'SET_AUTOCOMPLETE_SUGGESTIONS',
      id,
      payload: value,
    });
  };
}
export function setBackendBattleData(id) {
  return async function(dispatch) {
    try {
      const backenddataurl = {
        locationid: '/location',
        battlenameid: '/name',
        regionid: '/region',
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/list${backenddataurl[id]}`,
      );
      dispatch({
        type: 'SET_BACKEND_BATTLE_DATA',
        id,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
