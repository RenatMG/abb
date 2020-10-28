import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";

import {Header} from "../features";
import {Abilities, Ability, Home, Pokemon, Pokemons} from "../pages";

function App() {
    return (
        <div className="App">
            <Route path={'/'} exact component={Home}/>
            <Route path='/(.+)' render={() => (
                <>
                    <Header/>
                    <Switch>
                        <Route path={'/pokemons/:name'} component={Pokemon}/>
                        <Route path={'/pokemons'} exact component={Pokemons}/>
                        <Route path={'/abilities/:id'} component={Ability}/>
                        <Route path={'/abilities'} exact component={Abilities}/>
                        <Redirect to='/'/>
                    </Switch>
                </>
            )}/>
        </div>
    );
}

export default App;
