import {
    ABILITY_LIST_FETCH_ERROR,
    ABILITY_LIST_FETCH_START,
    ABILITY_LIST_FETCH_SUCCESS, ABILITY_LIST_SET_PAGE,
} from '../actions/abilityList/abilityListTypes';

import {IAbility} from '../../interfaces/abilityInterfaces';

type InitialStateType = {
    list: Array<IAbility>
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

const abilityListReducer = (state = initialState, {type, payload}: Action): InitialStateType => {
    switch (type) {
        case ABILITY_LIST_FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case ABILITY_LIST_FETCH_SUCCESS:
            let list = payload.results.map((result: Result) => {
                const name = result.name;
                const url = result.url.match(/.*ability\/([\d]+)\//);
                const id = url ? url[1] : null;
                return {name, id, link: `/abilities/${id}`}
            }).filter((ability: IAbility) => !!ability.id);
            return {
                ...state,
                list,
                count: payload.count,
                error: null,
                loading: false
            };
        case ABILITY_LIST_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case ABILITY_LIST_SET_PAGE:
            return {
                ...state,
                page: payload.page,
            };
        default:
            return state;
    }
};
export default abilityListReducer;
