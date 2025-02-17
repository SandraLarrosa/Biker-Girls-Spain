import React from 'react';
import QuienesSomos from '../quienesSomos/QuienesSomos';
import Instagram from '../widgetInstagram/Instagram';
import './landing.scss';
import logoMoto from './images/logomotosolo.png';
import signRoad from './images/curvy-road-warning-sign black.png';


const Landing = () => {
    return (
        <>
            <div className='landingHome'>
                <div className='contentLandingTitle'>
                    <h1 className='landingTitle'>Biker Girls Spain</h1>
                    <img className='landingLogo'src={logoMoto} alt='Logo Biker Girls' />
                    <h2 className='landingAdictas'>Adictas a la Libertad</h2>
                </div>
                <img className='contentLogoSign' src={signRoad} alt='Icon Señal de Carretera con Curvas' />
            </div>
            <QuienesSomos />
            <Instagram account='bikergirls_spain' numberOfMediaElements={8} />
        </>
    );
};


export default Landing;