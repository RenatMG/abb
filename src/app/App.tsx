import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import Pokemons from "../pages/pokemons/Pokemons";
import Pokemon from "../pages/pokemons/pokemon/Pokemon";
import Ability from "../pages/abilities/ability/Ability";
import Abilities from "../pages/abilities/Abilities";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/pokemons/:name'} component={Pokemon}/>
                <Route path={'/pokemons'} exact component={Pokemons}/>
                <Route path={'/abilities/:id'} component={Ability}/>
                <Route path={'/abilities'} exact component={Abilities}/>
                <Redirect to='/pokemons'/>
            </Switch>
        </div>
    );
}

export default App;
