import {combineReducers} from "redux";
import pokeReducer from "./pokeReducer";

const rootReducer = combineReducers({
    poke: pokeReducer
});

export default rootReducer;