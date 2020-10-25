import {
    POKE_DETAIL_FETCH_ERROR,
    POKE_DETAIL_FETCH_START,
    POKE_DETAIL_FETCH_SUCCESS
} from "../actions/pokeDetail/pokeDetailTypes";

type InitialStateType = {
    pokemon: {}
    error: null | string
    loading: boolean
}
type Action = {
    type: string
    payload?: any
}

const initialState: InitialStateType = {
    pokemon: {},
    loading: false,
    error: null
};


const pokeDetailReducer = (state = initialState, {type, payload}: Action): InitialStateType => {

    switch (type) {
        case POKE_DETAIL_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case POKE_DETAIL_FETCH_SUCCESS:
            const {id, name, types, abilities, weight, height, base_experience: baseExperience} = payload;
            let pokemon = {
                id,
                name,
                types,
                abilities,
                weight,
                height,
                baseExperience
            };
            return {
                ...state,
                pokemon,
                error: null,
                loading: false
            };
        case POKE_DETAIL_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        default:
            return state
    }
};
export default pokeDetailReducer;