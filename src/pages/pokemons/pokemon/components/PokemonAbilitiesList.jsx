import React from 'react';
import {Link} from "react-router-dom";

const PokemonAbilitiesList = ({abilities}) => {

    return (
        <ul>
            {
                abilities.map(({ability}) => {
                    const id = ability.url.match(/.*ability\/([\d]+)\//, '')[1];
                    if (id) {
                        return (<li key={id}>
                            <Link to={'/abilities/' + id}> {ability.name}</Link>
                        </li>)
                    }
                    return null;
                })
            }
        </ul>
    );
};

export default PokemonAbilitiesList;