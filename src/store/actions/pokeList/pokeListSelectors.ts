export function getPokeListState(state: any) {
    return state.pokeList
}

export function getPokeList(state: any) {
    return getPokeListState(state).list
}

export function getPokeListPage(state: any) {
    return getPokeListState(state).page
}

export function getPokeListLimit(state: any) {
    return getPokeListState(state).limit
}

export function getPokeListTotal(state: any) {
    return getPokeListState(state).count
}


export function getPokeListLoading(state: any) {
    return getPokeListState(state).loading
}