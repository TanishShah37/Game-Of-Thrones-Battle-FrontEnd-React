import axios from 'axios';

export function retrieveAndsetBattleData(query) {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search/?${query}`,
      );
      dispatch({
        type: 'RETRIEVE_AND_SET_BATTLE_DATA',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
