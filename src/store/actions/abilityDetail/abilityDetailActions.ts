import pokeApi from '../../../api/pokeApi';
import {
    ABILITY_DETAIL_FETCH_ERROR,
    ABILITY_DETAIL_FETCH_START,
    ABILITY_DETAIL_FETCH_SUCCESS,
} from './abilityDetailTypes';

export function fetchAbilityDetail(ability: string | number) {
    return async (dispatch: any) => {
        try {
            dispatch({type: ABILITY_DETAIL_FETCH_START});
            const response = await pokeApi.get(`/ability/${ability}`);
            dispatch({type: ABILITY_DETAIL_FETCH_SUCCESS, payload: {...response.data}});
        } catch (e) {
            console.warn(e.message);
            dispatch({type: ABILITY_DETAIL_FETCH_ERROR, payload: {error: e.message}});
        }
    };
}