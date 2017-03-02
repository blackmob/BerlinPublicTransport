import { handleActions } from 'redux-actions';
import {
    GET_RADAR_DATA,
    GET_RADAR_DATA_ERROR,
    GET_RADAR_DATA_RECEIVED
} from '../constants/actionTypes';


const initialState = {
    radar :[]
};

export default handleActions({
    [GET_RADAR_DATA]: (state, action) => {
        return initialState;
    },
    [GET_RADAR_DATA_ERROR]: (state, action) => {
        return initialState;
    },
    [GET_RADAR_DATA_RECEIVED]: (state, action) => {
        return {...state, radar: action.payload.radar};
    }
}, initialState);