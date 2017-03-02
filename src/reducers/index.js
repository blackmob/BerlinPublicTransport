import radarReducer from './radarReducer';
import mapReducer from './mapReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({radar : radarReducer, map : mapReducer});
export default rootReducer;

