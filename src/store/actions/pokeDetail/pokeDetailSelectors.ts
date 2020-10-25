export function getPokeDetailState(state: any) {
    return state.pokeDetail
}

export function getPokemon(state: any) {
    return getPokeDetailState(state).pokemon
}