import {POKE_DETAIL_FETCH_ERROR, POKE_DETAIL_FETCH_START, POKE_DETAIL_FETCH_SUCCESS} from "./pokeDetailTypes";
import pokeApi from "../../../api/pokeApi";

export function fetchPokeDetail(pokemon: string | number) {
    return async (dispatch: any) => {
        try {
            dispatch({type: POKE_DETAIL_FETCH_START});
            const response = await pokeApi.get('/pokemon/' + pokemon);
            dispatch({type: POKE_DETAIL_FETCH_SUCCESS, payload: {...response.data}})
        } catch (e) {
            console.warn(e.message);
            dispatch({type: POKE_DETAIL_FETCH_ERROR, payload: {error: e.message}})
        }
    }
}