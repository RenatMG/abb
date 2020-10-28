import pokeApi from "../../../api/pokeApi";
import {
    ABILITY_LIST_FETCH_ERROR,
    ABILITY_LIST_FETCH_START,
    ABILITY_LIST_FETCH_SUCCESS,
    ABILITY_LIST_SET_PAGE
} from "./abilityListTypes";

export function fetchAbilityList(page = 1) {
    return async (dispatch: any) => {
        try {
            dispatch({type: ABILITY_LIST_FETCH_START});
            const response = await pokeApi.get('/ability/', {
                params: {
                    limit: 20,
                    offset: page === 1 ? 0 : (page - 1) * 20
                }
            });

            dispatch({type: ABILITY_LIST_FETCH_SUCCESS, payload: {...response.data}})
        } catch (e) {
            console.warn(e.message);
            dispatch({type: ABILITY_LIST_FETCH_ERROR, payload: {error: e.message}})
        }
    }
}


export function setAbilityListPage(page: number) {
    return {
        type: ABILITY_LIST_SET_PAGE,
        payload: {
            page
        }
    }
}
