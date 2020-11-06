export function getAbilityListState(state: any) {
    return state.abilityList;
}

export function getAbilityList(state: any) {
    return getAbilityListState(state).list;
}

export function getAbilityListPage(state: any) {
    return getAbilityListState(state).page;
}

export function getAbilityListLimit(state: any) {
    return getAbilityListState(state).limit;
}

export function getAbilityListTotal(state: any) {
    return getAbilityListState(state).count;
}

export function getAbilityListLoading(state: any) {
    return getAbilityListState(state).loading;
}
