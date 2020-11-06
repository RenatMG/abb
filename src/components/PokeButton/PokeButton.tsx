import React from 'react';
import './PokeButton.scss';

interface IButtonProps {
    onClick: () => void
    title?: string
}

const PokeButton: React.FC<IButtonProps> = ({onClick, title = 'Ok'}) => {
    return (
        <div className="poke-button" onClick={onClick}>
            {title}
        </div>
    );
};

export default PokeButton;