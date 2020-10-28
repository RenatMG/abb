import {combineReducers} from "redux";
import pokeListReducer from "./pokeListReducer";
import pokeDetailReducer from "./pokeDetailReducer";
import abilityListReducer from "./abilityListReducer";
import abilityDetailReducer from "./abilityDetailReducer";

const rootReducer = combineReducers({
    pokeList: pokeListReducer,
    pokeDetail: pokeDetailReducer,
    abilityList: abilityListReducer,
    abilityDetail: abilityDetailReducer
});

export default rootReducer;