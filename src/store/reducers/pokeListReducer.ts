import {
    POKE_LIST_FETCH_ERROR,
    POKE_LIST_FETCH_START,
    POKE_LIST_FETCH_SUCCESS,
    POKE_LIST_SET_PAGE,
} from '../actions/pokeList/pokeListTypes';
import {IPokemon} from '../../interfaces/pokeInterfaces';

type InitialStateType = {
    list: Array<IPokemon>
    count: null | number
    page: number
    limit: number
    error: null | string
    loading: boolean
}
type Action = {
    type: string
    payload?: any
}
type Result = {
    name: string,
    url: string
}

const initialState: InitialStateType = {
    list: [],
    count: null,
    page: 0,
    limit: 20,
    loading: false,
    error: null,
};

const pokeListReducer = (state = initialState, {type, payload}: Action): InitialStateType => {
    switch (type) {
        case POKE_LIST_FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case POKE_LIST_FETCH_SUCCESS:
            let list = payload.results.map((result: Result) => {
                const name = result.name;
                const url = result.url.match(/.*pokemon\/([\d]+)\//);
                const id = url ? url[1] : null;
                return {name, id, img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`};
            }).filter((pokemon: IPokemon) => !!pokemon.id);
            return {
                ...state,
                list,
                count: payload.count,
                error: null,
                loading: false,
            };
        case POKE_LIST_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case POKE_LIST_SET_PAGE:
            return {
                ...state,
                page: payload.page,
            };
        default:
            return state;
    }
};
export default pokeListReducer;
