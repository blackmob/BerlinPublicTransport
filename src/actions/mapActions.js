import {
    ZOOM_CHANGE
} from '../constants/actionTypes';

import { createAction } from 'redux-actions';

export const zoomChange = createAction(
    ZOOM_CHANGE, (scale, boundingRect) => ({zoomScale : scale, boundingRect : boundingRect }));

