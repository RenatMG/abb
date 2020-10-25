import React, {useEffect} from 'react';
import {Page} from "../../layouts";
import {TITLE_HOME} from "../../meta/titles";
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";
import ph from '../../assets/img/ph.png';
import {getPokeList} from "../../store/actions/pokeList/pokeListSelectors";
import {fetchPokeList} from "../../store/actions/pokeList/pokeListActions";

type Pokemon = {
    id: number
    name: string
    url: string
    img: string
}

const Pokemons = () => {
    const dispatch = useDispatch();
    const list = useSelector(getPokeList);
    useEffect(() => {
        dispatch(fetchPokeList())
    }, [dispatch]);

    const onErrorImg = (e: any) => {
        e.target.src = ph;
    };

    return (
        <Page title={TITLE_HOME}>
            <h1>Справочник покемонов</h1>
            <ul>
                {
                    list.map((pokemon: Pokemon) => {
                        const {id, name, img} = pokemon
                        return (
                            <li key={id} className='d-flex'>
                                <div>{name}</div>
                                <Link to={'/pokemons/' + (name || id)}>Подробнее</Link>
                                <img onError={onErrorImg} src={img} alt={name} width={100}
                                     height={100}/>
                            </li>
                        )
                    })
                }
            </ul>
        </Page>
    );
};

export default Pokemons;