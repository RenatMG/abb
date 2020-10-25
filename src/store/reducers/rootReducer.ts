import {combineReducers} from "redux";
import pokeListReducer from "./pokeListReducer";
import pokeDetailReducer from "./pokeDetailReducer";
import abilityDetailReducer from "./abilityDetailReducer";

const rootReducer = combineReducers({
    pokeList: pokeListReducer,
    pokeDetail: pokeDetailReducer,
    abilityDetail: abilityDetailReducer
});

export default rootReducer;