import {POKE_FETCH_LIST_ERROR, POKE_FETCH_LIST_START, POKE_FETCH_LIST_SUCCESS} from "./actionTypes";
import pokeApi from "../../api/pokeApi";


export function fetchPokeList() {
    return async (dispatch: any) => {
        try {
            dispatch({type: POKE_FETCH_LIST_START});
            const response = await pokeApi.get('/pokemon/');
            dispatch({type: POKE_FETCH_LIST_SUCCESS, payload: {...response.data}})
        } catch (e) {
            console.warn(e.message);
            dispatch({type: POKE_FETCH_LIST_ERROR, payload: {error: e.message}})
        }
    }
}