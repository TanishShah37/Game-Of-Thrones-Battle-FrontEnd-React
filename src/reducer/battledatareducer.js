
const initialState = {
  battles: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVE_AND_SET_BATTLE_DATA':
      state.battles = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}
