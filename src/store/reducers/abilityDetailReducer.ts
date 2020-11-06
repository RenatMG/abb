import {
    ABILITY_DETAIL_FETCH_ERROR,
    ABILITY_DETAIL_FETCH_START,
    ABILITY_DETAIL_FETCH_SUCCESS,
} from '../actions/abilityDetail/abilityDetailTypes';
import {IAbilityDetail} from '../../interfaces/abilityInterfaces';

type Action = {
    type: string
    payload?: any
}
type InitialStateType = {
    ability: IAbilityDetail
    error: null | string
    loading: boolean
}
const initialState = {
    ability: {
        id: null,
        name: '',
        pokemon: [],
        generation: '',
        effectEntries: {
            effect: '',
            shortEffect: '',
        },
    },
    loading: false,
    error: null,
};
const abilityDetailReducer = (state = initialState, {type, payload}: Action): InitialStateType => {
    switch (type) {
        case ABILITY_DETAIL_FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case ABILITY_DETAIL_FETCH_SUCCESS:
            const {id, name, effect_entries, generation, pokemon} = payload;
            let effectEntries = effect_entries.find((effect: any) => effect.language.name === 'en');
            let pokemonList = pokemon.map((item: any, idx: number) => {
                let id = idx + 1;
                let name = item.pokemon.name;
                return {id, name, link: `/pokemons/${name}`};
            })
            return {
                ...state,
                loading: false,
                error: null,
                ability: {
                    id,
                    name,
                    pokemon: pokemonList,
                    generation: generation.name,
                    effectEntries: {
                        effect: effectEntries.effect,
                        shortEffect: effectEntries.short_effect,
                    },
                },
            };
        case ABILITY_DETAIL_FETCH_ERROR:
            return {
                ...state,
                error: payload.error,
            }
        default:
            return state;
    }
};
export default abilityDetailReducer;
