import { handleActions } from 'redux-actions';
import {
    ZOOM_CHANGE
} from '../constants/actionTypes';


const initialState = {
    boundingRect : {north: 0, west: 0, south: 0, est : 0},
    zoomScale : 13,
    center: [52.531677, 13.381777]
};

export default handleActions({
    [ZOOM_CHANGE]: (state, action) => {
        return {...state, ...action.payload};
    }    
}, initialState);