import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

import {getPokeDetailLoading, getPokemon} from "../../../store/actions/pokeDetail/pokeDetailSelectors";
import {fetchPokeDetail} from "../../../store/actions/pokeDetail/pokeDetailActions";
import {GoBack, List, PokeImage, PokeLoader} from '../../../components';
import {Page} from "../../../layouts";
import {APP_TITLE} from "../../../meta/titles";

const Pokemon: React.FC = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const loading = useSelector(getPokeDetailLoading);
    const {id, name, characteristic, img, abilities, types} = useSelector(getPokemon);

    useEffect(() => {
        if ('name' in params) {
            dispatch(fetchPokeDetail(params['name']));
        }
    }, [dispatch, params]);

    if (loading) {
        return <PokeLoader/>
    }

    return (
        <Page title={`${name.toUpperCase()} - POKEMON | ${APP_TITLE}`}>
            <div className='container'>
                <div className='d-flex justify-content-center my-3'>
                    <GoBack/>
                </div>
                {
                    id &&
                    <div>
                        <h5>ID: {id}</h5>
                        <div className='d-flex justify-content-center'>
                            <PokeImage src={img} size='xxl'/>
                        </div>
                        <div className='text-uppercase border-bottom py-3'>
                            <h5>{name}</h5>
                        </div>
                        <div className='row border-bottom justify-content-center'>
                            {
                                !!types.length &&
                                <div className='col-12 col-sm-auto p-3'>
                                    {
                                        <List list={types} title={'Тип'}/>
                                    }
                                </div>
                            }
                            {
                                !!characteristic.length &&
                                <div className='col-12 col-sm-auto p-3'>
                                    {
                                        <List list={characteristic} title={'Характеристики'}/>
                                    }
                                </div>
                            }
                            {
                                !!abilities.length &&
                                <div className='col-12 col-sm-auto p-3'>
                                    {
                                        <List list={abilities} title={'Особенности'}/>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </Page>
    );
};

export default Pokemon;