import React from 'react';
import './PokePagination.scss';
import {Pagination} from 'antd';

// And Design without css

interface IParams {
    onChange: (page: number, pageSize: number | undefined) => void
    page: number
    total: number
}

const PokePagination: React.FC<IParams> = ({onChange, page, total}) => {
    return (
        <Pagination
            className="poke-pagination"
            onChange={onChange}
            current={page}
            showSizeChanger={false}
            showTotal={(totalPokes: number, range: Array<number>) => `${range[0]}-${range[1]} of ${totalPokes} pokemons`}
            defaultPageSize={20}
            total={total}
        />
    );
};

export default PokePagination;
