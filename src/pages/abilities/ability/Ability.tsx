import React, {useEffect} from 'react';
import './Ability.scss';

import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {getAbility, getAbilityDetailLoading} from '../../../store/actions/abilityDetail/abilityDetailSelectors';
import {fetchAbilityDetail} from '../../../store/actions/abilityDetail/abilityDetailActions';
import {GoBack, List, PokeLoader} from '../../../components';
import {Page} from '../../../layouts';
import {APP_TITLE} from '../../../meta/titles';

const Ability: React.FC = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const loading = useSelector(getAbilityDetailLoading);
    const {
        id, name, pokemon, generation, effectEntries: {effect, shortEffect},
    } = useSelector(getAbility);

    useEffect(() => {
        if ('id' in params) {
            dispatch(fetchAbilityDetail(params['id']));
        }
    }, [dispatch, params]);

    if (loading) {
        return <PokeLoader/>;
    }

    return (
        <Page title={`${name.toLocaleUpperCase()} - ABILITY | ${APP_TITLE}`}>
            <div className="container">
                <div className="d-flex justify-content-center my-3">
                    <GoBack/>
                </div>
                {
                    id && (
                        <div className="p-3">
                            <h5>
                                {`ID: ${id}`}
                            </h5>
                            <div className="text-left">
                                <strong>Эффект: </strong>
                                {effect}
                                <br/>
                                <strong>Короткий эффект: </strong>
                                {shortEffect}
                                <br/>
                                <strong>Поколение: </strong>
                                {generation}
                            </div>
                            <List list={pokemon} title="Покемоны:"/>
                        </div>
                    )
                }
            </div>
        </Page>
    );
};

export default Ability;
