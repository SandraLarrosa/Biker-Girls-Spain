import React from 'react';

const Ruta = ({ comunity, title, date, image, text}) => {
    return (
        <article>
            <h3>{comunity}</h3>
            <h4>{title}</h4>
            <p>{date}</p>
            <img src={image} />
            <p>{text}</p>
        </article>
    );
};

export default Ruta;