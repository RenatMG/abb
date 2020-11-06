export function getPokeDetailState(state: any) {
    return state.pokeDetail;
}

export function getPokemon(state: any) {
    return getPokeDetailState(state).pokemon;
}

export function getPokeDetailLoading(state: any) {
    return getPokeDetailState(state).loading;
}