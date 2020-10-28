export interface IPokemon {
    id: number
    name: string
    img: string
}

export interface IPokemonDetail {
    id: number | null
    name: string
    types: Array<any>
    abilities: Array<any>
    characteristic: Array<any>
    img: string | null
}