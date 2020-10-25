export function getPokeListState(state: any) {
    return state.pokeList
}

export function getPokeList(state: any) {
    return getPokeListState(state).list
}