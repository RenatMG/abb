import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemon} from "../../../store/actions/pokeDetail/pokeDetailSelectors";
import {fetchPokeDetail} from "../../../store/actions/pokeDetail/pokeDetailActions";
import PokemonAbilitiesList from "./components/PokemonAbilitiesList";


type Params = {
    match: {
        params: {
            name: string
            id: number
        }
    }
    history: any
}

const Pokemon = ({match: {params: {name, id}}, history}: Params) => {
    const [idOrName] = useState(name || id);
    const pokemon = useSelector(getPokemon);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokeDetail(idOrName));
    }, [dispatch, idOrName]);

    return (
        <div>

            <div onClick={history.goBack}>назад</div>
            {
                pokemon.id &&
                <>
                    <div>{pokemon.name}</div>
                    Характеристики:
                    <div>Вес:{pokemon.weight}</div>
                    <div>Рост:{pokemon.height}</div>
                    <div>Опыт:{pokemon.baseExperience}</div>
                    <PokemonAbilitiesList abilities={pokemon.abilities}/>
                </>
            }

        </div>
    );
};

export default Pokemon;