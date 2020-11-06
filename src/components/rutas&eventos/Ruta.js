import React from 'react';

const Ruta = ({ comunity, title, date, image, text, type }) => {

    const changeBackgroundColorCard = (type) => {
        if (type === 'Ruta') {
            return 'background--Pink';
        } else if (type === 'Evento') {
            return 'background--Blue';
        }

        return "";
    }
    
    let backgroundColor = changeBackgroundColorCard(type);

    return (
        <article className={`cardRoute ${backgroundColor}`}>
            <h3 className='cardRoute__comunity'>{comunity}</h3>
            <h4 className='cardRoute__title'>{title}</h4>
            <p className='cardRoute__date'>{date}</p>
            <img className='cardRoute__image' src={image} alt='Foto de ruta' />
            <p className='cardRoute__text'>{text}</p>
        </article>
    );
};

export default Ruta;