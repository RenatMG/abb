import {
    POKE_DETAIL_FETCH_ERROR,
    POKE_DETAIL_FETCH_START,
    POKE_DETAIL_FETCH_SUCCESS,
} from '../actions/pokeDetail/pokeDetailTypes';
import {IPokemonDetail} from '../../interfaces/pokeInterfaces';

type InitialStateType = {
    pokemon: IPokemonDetail
    error: null | string
    loading: boolean
}
type Action = {
    type: string
    payload?: any
}

const initialState: InitialStateType = {
    pokemon: {
        id: null,
        name: '',
        types: [],
        abilities: [],
        characteristic: [],
        img: null,
    },
    loading: false,
    error: null,
};

const pokeDetailReducer = (state = initialState, {type, payload}: Action): InitialStateType => {
    switch (type) {
        case POKE_DETAIL_FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case POKE_DETAIL_FETCH_SUCCESS:
            const {id, name, types, abilities, weight, height, base_experience} = payload;
            let typesList = types.map((item: any) => {
                return {id: item.slot, name: item.type.name}
            });
            let abilitiesList = abilities.map((item: any) => {
                const id = item.ability.url.match(/.*ability\/([\d]+)\//)[1];
                return {id, name: item.ability.name, link: `/abilities/${id}`}
            });
            let characteristicList = [
                {
                    id: 1,
                    name: `Вес ${weight}`,
                },
                {
                    id: 2,
                    name: `Высота ${height}`,
                },
                {
                    id: 3,
                    name: `Опыт ${base_experience}`,
                }
            ];
            let pokemon = {
                id,
                name,
                types: typesList,
                abilities: abilitiesList,
                characteristic: characteristicList,
                img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            };
            return {
                ...state,
                pokemon,
                error: null,
                loading: false,
            };
        case POKE_DETAIL_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        default:
            return state;
    }
};
export default pokeDetailReducer;
