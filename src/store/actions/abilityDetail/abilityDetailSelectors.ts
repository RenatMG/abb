export function getAbilityDetailState(state: any) {
    return state.abilityDetail
}
export function getAbility(state: any) {
    return getAbilityDetailState(state).ability
}