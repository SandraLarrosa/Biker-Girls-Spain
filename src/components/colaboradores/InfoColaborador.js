import React from 'react';


const InfoColaborador = ({image, name, info, web, link, right}) => {
    return (
        <li className={`cardColaboradores ${right}`}>
            <div className='contentImageColaboradores'>
                <img className='contentImageColaboradores__image' src={image} alt={`logo de ${name}`} />
            </div>
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