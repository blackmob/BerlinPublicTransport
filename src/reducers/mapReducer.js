import {
    ZOOM_CHANGE,
} from '../constants/actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    boundingRect : {b:{b:0,f:0}, f:{b:0,f:0}},
    zoomScale : 13,
    center: [52.531677, 13.381777]
};

export default handleActions({
    [ZOOM_CHANGE]: (state, action) => {
        return {...state, ...action.payload};
    }    
}, initialState);