import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NumberParam, useQueryParams} from 'use-query-params';
import {List, PokeLoader, PokePagination} from '../../components';
import {Page} from '../../layouts';
import {
    TITLE_ABILITIES,
} from '../../meta/titles';
import {
    fetchAbilityList, setAbilityListPage,
} from '../../store/actions/abilityList/abilityListActions';
import {
    getAbilityList,
    getAbilityListLoading,
    getAbilityListPage,
    getAbilityListTotal,
} from '../../store/actions/abilityList/abilityListSelectors';

const Abilities: React.FC = () => {
    const dispatch = useDispatch();

    const page = useSelector(getAbilityListPage);
    const total = useSelector(getAbilityListTotal);
    const loading = useSelector(getAbilityListLoading);
    const list = useSelector(getAbilityList);

    const [query, setQuery] = useQueryParams({page: NumberParam});

    useEffect(() => {
        if (page) {
            setQuery({page: page > 1 ? page : undefined});
            dispatch(fetchAbilityList(page));
        } else if (query.page) {
            dispatch(setAbilityListPage(query.page));
        } else {
            dispatch(setAbilityListPage(1));
        }
    }, [dispatch, page, query, setQuery]);

    const pagOnChangeHandler = (pageCurrent: number, pageSize: number | undefined) => {
        dispatch(setAbilityListPage(pageCurrent));
    };

    if (loading) {
        return <PokeLoader/>;
    }

    return (
        <Page title={TITLE_ABILITIES}>
            <div className="container">
                <List title="Способности" list={list}/>
                <PokePagination total={total} page={page} onChange={pagOnChangeHandler}/>
            </div>
        </Page>
    );
};

export default Abilities;
