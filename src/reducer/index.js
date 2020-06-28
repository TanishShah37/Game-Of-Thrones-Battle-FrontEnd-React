import { combineReducers } from 'redux';
import searchbar from './searchreducer';
import battlecards from './battledatareducer';

export default combineReducers({
  searchbar,
  battlecards,
});
