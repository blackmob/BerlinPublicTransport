import {
    GET_RADAR_DATA,
    GET_RADAR_DATA_ERROR,
    GET_RADAR_DATA_RECEIVED
} from '../constants/actionTypes';

import { createAction } from 'redux-actions';

export const getRadarData = createAction(
    GET_RADAR_DATA, () => ({radar : null}));

export const getRadarDataError = createAction(
    GET_RADAR_DATA_ERROR, () => ({radar : null}));

export const getRadarDataReceived = createAction(
    GET_RADAR_DATA_RECEIVED, (radar) => ({        
        radar: radar.map(i => i)
    }));

export const fetchRadarData = () => {
    return (dispatch, getState) => {
        dispatch(getRadarData());
        const state = getState();
        const rect = state.map.boundingRect;
        return fetch(`https://transport.rest/radar?north=${rect.north}&west=${rect.west}}&south=${rect.south}&east=${rect.east}`).then((results)=>{   
            return results.json().then((r)=>{
                return dispatch(getRadarDataReceived(r));
            });
        }).catch((e) => {
            dispatch(getRadarDataError());
        });
    };
};