import React from 'react';


const InfoColaborador = ({image, name, info, web, link}) => {
    return (
        <li className='cardColaboradores'>
            <img className='cardColaboradores__image' src={image} alt={`logo de ${name}`}/>
            <div className='cardColaboradores__contentInfo'>
                <h3 className='nameColaboradores'>{name}</h3>
                <p className='infoColaboradores'>{info}</p>
                <a href={link} target='_blank' rel="noopener noreferrer">
                    <p className='linkWebColaboradores'>{web}</p>
                </a>
            </div>
        </li>
    );
};



export default InfoColaborador;