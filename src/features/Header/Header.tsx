import React from 'react';
import './Header.scss';
import {PokeBallIcon} from "../../components";
import {Link} from "react-router-dom";
import {APP_TITLE} from "../../meta/titles";

const Header: React.FC = () => {
    return (
        <header className='header'>
            <Link to={'/'}>
                <div className='header__logo'>
                    <PokeBallIcon className='header__icon'/>
                    <div className='header__title'>{APP_TITLE}</div>
                </div>
            </Link>
        </header>
    );
};

export default Header;