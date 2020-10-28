import React from 'react';
import './Home.scss';

import {useHistory} from 'react-router-dom'

import {Page} from "../../layouts";
import {PokeBallIcon, PokeButton} from "../../components";

import {TITLE_HOME} from "../../meta/titles";
import {HOME_BUTTON} from "../../meta/buttons";

const Home: React.FC = () => {
    const history = useHistory();
    return (
        <Page title={TITLE_HOME}>
            <div className='home'>
                <PokeBallIcon className='home__logo'/>
                <PokeButton onClick={() => history.push('/pokemons')} title={HOME_BUTTON}/>
            </div>
        </Page>
    );
};

export default Home;