import React from 'react';
import './PokeCard.scss'
import {Link} from "react-router-dom";

import {PokeImage} from "../../../components";
import {IPokemon} from "../../../interfaces/pokeInterfaces";

interface IPokeCard {
    pokemon: IPokemon
}

const PokeCard: React.FC<IPokeCard> = ({pokemon}) => {
    const {id, name, img: src} = pokemon;
    return (
        <div className='poke-card d-flex flex-wrap col-6 col-md-4 col-lg-3 my-1'>
            <Link to={'/pokemons/' + (name || id)} className='poke-card__container'>
                    <PokeImage src={src} name={name}/>
                    <div className='poke-card__title'>{name}</div>
            </Link>
        </div>
    );
};

export default PokeCard;