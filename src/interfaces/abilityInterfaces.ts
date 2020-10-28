export interface IAbility {
    id: number
    name: string
    link?: string
}

export interface IAbilityDetail {
    id: number | null
    name: string | null
    pokemon: Array<any>
    generation: string
    effectEntries: {
        effect: string
        shortEffect: string
    }
}