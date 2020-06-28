
const initialState = {
  locationid: {
    backenddata: [],
    value: '',
    suggestion: [],
  },
  battlenameid: {
    backenddata: [],
    value: '',
    suggestion: [],
  },
  regionid: {
    backenddata: [],
    value: '',
    suggestion: [],
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ON_CHANGE':
      state[action.id].value = action.payload;
      return { ...state, [action.id]: { ...state[action.id] } };
    case 'SET_BACKEND_BATTLE_DATA':
      state[action.id].backenddata = action.payload;
      return { ...state, [action.id]: { ...state[action.id] } };
    case 'SET_AUTOCOMPLETE_SUGGESTIONS':
      state[action.id].suggestion = action.payload;
      return { ...state, [action.id]: { ...state[action.id] } };
    default:
      return { ...state };
  }
}
