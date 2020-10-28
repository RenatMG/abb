import React from 'react';
import './GoBack.scss';
import {useHistory} from 'react-router-dom';

const GoBack: React.FC = () => {
    const history = useHistory();
    return (
        <div className='go-back' onClick={history.goBack}>
            Назад
        </div>
    );
};

export default GoBack;