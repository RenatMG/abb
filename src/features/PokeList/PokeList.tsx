import React from 'react';
import {useSelector} from "react-redux";

import {getPokeList} from "../../store/actions/pokeList/pokeListSelectors";
import PokeCard from "./components/PokeCard";

import {IPokemon} from "../../interfaces/pokeInterfaces";


const PokeList: React.FC = () => {

    const list = useSelector(getPokeList);
    return (
        <div className="container mt-3">
            <div className='row'>
                {
                    list.map((pokemon: IPokemon) => {
                        return (
                            <PokeCard pokemon={pokemon} key={pokemon.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PokeList;