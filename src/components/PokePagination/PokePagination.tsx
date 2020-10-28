import React from 'react';
import './PokePagination.scss'
// And Design without css
import {Pagination} from 'antd';

interface IParams {
    onChange: (page: number, pageSize: number | undefined) => void
    page: number
    total: number
}

const PokePagination: React.FC<IParams> = ({onChange, page, total}) => {
    return (
        <Pagination
            className='poke-pagination'
            onChange={onChange}
            current={page}
            showSizeChanger={false}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} pokemons`}
            defaultPageSize={20}
            total={total}/>
    );
};

export default PokePagination;