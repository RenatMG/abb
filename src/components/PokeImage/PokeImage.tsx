import React from 'react';
import './PokeImage.scss'
import ph from "../../assets/img/ph.png";

interface IPokeImage {
    src: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    name?: string
}

const PokeImage: React.FC<IPokeImage> = ({src, name, size = 'md'}) => {

    const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = ph;
    };

    return (
        <div className='poke-image'>
            <img
                onError={onErrorImg}
                src={src}
                alt={name}
                placeholder={ph}
                className={size}
            />
        </div>
    );
};

export default PokeImage;