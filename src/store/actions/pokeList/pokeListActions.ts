import pokeApi from '../../../api/pokeApi';
import {
    POKE_LIST_FETCH_ERROR,
    POKE_LIST_FETCH_START,
    POKE_LIST_FETCH_SUCCESS,
    POKE_LIST_SET_PAGE,
} from './pokeListTypes';

export function fetchPokeList(page = 1) {
    return async (dispatch: any) => {
        try {
            dispatch({type: POKE_LIST_FETCH_START});
            const response = await pokeApi.get('/pokemon/', {
                params: {
                    limit: 20,
                    offset: page === 1 ? 0 : (page - 1) * 20,
                },
            });
            dispatch({type: POKE_LIST_FETCH_SUCCESS, payload: {...response.data}});
        } catch (e) {
            console.warn(e.message);
            dispatch({type: POKE_LIST_FETCH_ERROR, payload: {error: e.message}});
        }
    };
}

export function setPokeListPage(page: number) {
    return {
        type: POKE_LIST_SET_PAGE,
        payload: {
            page,
        },
    };
}
