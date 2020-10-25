import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemon} from "../../../store/actions/pokeDetail/pokeDetailSelectors";
import {fetchPokeDetail} from "../../../store/actions/pokeDetail/pokeDetailActions";
import {getAbility} from "../../../store/actions/abilityDetail/abilityDetailSelectors";
import {fetchAbilityDetail} from "../../../store/actions/abilityDetail/abilityDetailActions";

type Params = {
    match: {
        params: {
            name: string
            id: number
        }
    }
    history: any
}

const Ability = ({match:{params:{id, name}}, history}: Params) => {

    const [idOrName] = useState(name || id);
    const ability = useSelector(getAbility);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAbilityDetail(idOrName));
    }, [dispatch, idOrName]);
    console.log(ability)
    return (
        <div>
            6
        </div>
    );
};

export default Ability;