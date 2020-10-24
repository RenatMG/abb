import {POKE_FETCH_LIST_ERROR, POKE_FETCH_LIST_START, POKE_FETCH_LIST_SUCCESS} from "../actions/actionTypes";

type InitialStateType = {
    list: Array<object>
    nav: {
        next: null | string
        previous: null | string
    }
    count: null | number
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
    nav: {
        next: null,
        previous: null
    },
    count: null,
    loading: false,
    error: null
};


const pokeReducer = (state = initialState, {type, payload}: Action): InitialStateType => {

    switch (type) {
        case POKE_FETCH_LIST_START:
            return {
                ...state,
                loading: true
            };
        case POKE_FETCH_LIST_SUCCESS:
            let list = payload.results.map((result: Result) => {
                // if (result) {
                    let id = +result.url
                        .replace('https://pokeapi.co/api/v2/pokemon/', '')
                        .replace('/', '');
                    return {...result, id, img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                // }
                // return undefined;
            });
            let nav = {
                next: payload.next,
                previous: payload.previous
            };
            return {
                ...state,
                list,
                nav,
                count: payload.count,
                loading: false
            };
        case POKE_FETCH_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        default:
            return state
    }
};
export default pokeReducer;