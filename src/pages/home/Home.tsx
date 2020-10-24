import React, {useEffect} from 'react';
import {Page} from "../../layouts";
import {TITLE_HOME} from "../../meta/titles";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokeList} from "../../store/actions/pokeActions";
import {getPokeList} from "../../store/actions/pokeSelectors";
import {Link} from "react-router-dom";

type Pokemon = {
    id: number
    name: string
    url: string
    img: string
}

const Home = () => {
    const dispatch = useDispatch();
    const list = useSelector(getPokeList);
    useEffect(() => {
        dispatch(fetchPokeList())
    }, [dispatch]);

    return (
        <Page title={TITLE_HOME}>
            <h1>Справочник покемонов</h1>
            <ul>
                {
                    list.map((pokemon: Pokemon) => {
                        return (
                            <li key={pokemon.id} className='d-flex'>
                                <div>{pokemon.name}</div>
                                <Link to={pokemon.url} >Подробнее</Link>
                                <img src={pokemon.img} alt={pokemon.name} width={100} height={100}/>
                            </li>
                        )
                    })
                }
            </ul>
        </Page>
    );
};

export default Home;