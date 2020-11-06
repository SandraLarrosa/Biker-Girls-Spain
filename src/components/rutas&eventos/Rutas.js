import React, { useEffect, useState } from 'react';
import './rutas.scss';
import signCurvy from './images/curvy-road-warning-sign.png';
import ListRutas from './ListRutas';
import getDataRoutes from '../../data/getDataRoutes';


const Rutas = () => {
    const [dataRoutes, setDataRoutes] = useState([]);

    useEffect(() => {
        getDataRoutes().then((data) => {
            setDataRoutes(data)
        });
    }, [])

    return (
        <>
            <header className='sectionRutas'>
                <div className='containTitle'>
                    <h2 className='containTitle__title'>RUTAS & EVENTOS</h2>
                    <p className='containTitle__text'>Cat is love, cat is life look at dog hiiiiiisssss or meowing non stop for food so you're just gonna scroll by without saying meowdy? for instantly break out into full speed gallop across the house for no reason but cat slap dog in face. Scratch my tummy actually i hate you now fight me meow and hunt anything that moves, yet i shredded your linens for you so drink water out of the faucet, or walk on car leaving trail of paw prints on hood and windshield and destroy the blinds. </p>
                </div>
                <img className='imageSignCurvy' src={signCurvy} alt='Señal de curvas' />
            </header>
            <ListRutas dataRoutes={dataRoutes} />
        </>
    );
};



export default Rutas;