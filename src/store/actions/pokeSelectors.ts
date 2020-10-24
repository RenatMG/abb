export function getPokeState(state: any) {
    return state.poke
}

export function getPokeList(state: any) {
    return getPokeState(state).list
}