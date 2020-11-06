import React from 'react';
import {Link} from 'react-router-dom';
import classes from './List.module.scss';

interface IList {
    list: Array<{ id: number, name: string, link?: string }>
    title: string
}

const List: React.FC<IList> = ({list, title}) => {
    return (
        <div className={classes.list}>
            {/* <span className={classes.title}>{title}</span> */}
            <strong>{title}</strong>
            <ul>
                {
                    list.map(({id, name, link}) => (
                        <li key={id}>
                            {
                                link
                                    ? <Link to={link}>{name}</Link>
                                    : <span>{name}</span>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default List;
