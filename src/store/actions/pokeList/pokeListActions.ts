import pokeApi from "../../../api/pokeApi";
import {POKE_LIST_FETCH_ERROR, POKE_LIST_FETCH_START, POKE_LIST_FETCH_SUCCESS} from "./pokeListTypes";


export function fetchPokeList() {
    return async (dispatch: any) => {
        try {
            dispatch({type: POKE_LIST_FETCH_START});
            const response = await pokeApi.get('/pokemon/');
            dispatch({type: POKE_LIST_FETCH_SUCCESS, payload: {...response.data}})
        } catch (e) {
            console.warn(e.message);
            dispatch({type: POKE_LIST_FETCH_ERROR, payload: {error: e.message}})
        }
    }
}

