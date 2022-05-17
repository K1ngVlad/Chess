import { combineReducers } from 'redux';
import MapReducer from './MapReducer';

const RootReducer = combineReducers({
  map: MapReducer,
});

export default RootReducer;
