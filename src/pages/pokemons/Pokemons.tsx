import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    useQueryParams,
    NumberParam,
} from 'use-query-params';
import {Page} from '../../layouts';

import {
    getPokeListLoading,
    getPokeListPage,
    getPokeListTotal,
} from '../../store/actions/pokeList/pokeListSelectors';
import {fetchPokeList, setPokeListPage} from '../../store/actions/pokeList/pokeListActions';
import {PokeLoader, PokePagination} from '../../components';
import {PokeList} from '../../features';
import {APP_TITLE, TITLE_POKEMONS} from '../../meta/titles';

const Pokemons: React.FC = () => {
    const dispatch = useDispatch();

    const page = useSelector(getPokeListPage);
    const total = useSelector(getPokeListTotal);
    const loading = useSelector(getPokeListLoading);

    const [query, setQuery] = useQueryParams({page: NumberParam});

    useEffect(() => {
        if (page) {
            setQuery({page: page > 1 ? page : undefined});
            dispatch(fetchPokeList(page));
        } else if (query.page) {
            dispatch(setPokeListPage(query.page));
        } else {
            dispatch(setPokeListPage(1));
        }

    }, [dispatch, page, query, setQuery]);

    const pagOnChangeHandler = (page: number, pageSize: number | undefined) => {
        dispatch(setPokeListPage(page));
    }
    if (loading) {
        return <PokeLoader/>;
    }
    return (
        <Page title={`${TITLE_POKEMONS} | ${APP_TITLE}`}>
            <PokeList/>
            <PokePagination total={total} page={page} onChange={pagOnChangeHandler}/>
        </Page>
    );
};

export default Pokemons;