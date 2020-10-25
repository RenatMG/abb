import {
    ABILITY_DETAIL_FETCH_ERROR,
    ABILITY_DETAIL_FETCH_START,
    ABILITY_DETAIL_FETCH_SUCCESS
} from "../actions/abilityDetail/abilityDetailTypes";

type Action = {
    type: string
    payload?: any
}
type InitialStateType = {
    ability: {}
    error: null | string
    loading: boolean
}
const initialState = {
    ability: {},
    loading: false,
    error: null
};
const abilityDetailReducer = (state = initialState, {type, payload}: Action): InitialStateType => {
    switch (type) {
        case ABILITY_DETAIL_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case ABILITY_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ability: payload
            };
        case ABILITY_DETAIL_FETCH_ERROR:
            return {
                ...state,
                error: payload.error
            }
        default:
            return state
    }
};
export default abilityDetailReducer;