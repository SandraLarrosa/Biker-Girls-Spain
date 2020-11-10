import React from 'react';


const InfoColaborador = ({image, name, info, web, link}) => {
    return (
        <li>
            <img src={image} alt={`logo de ${name}`}/>
            <div>
                <h3>{name}</h3>
                <p>{info}</p>
                <a href={link} target='_blank' rel="noopener noreferrer">
                    <p>{web}</p>
                </a>
            </div>
        </li>
    );
};



export default InfoColaborador;