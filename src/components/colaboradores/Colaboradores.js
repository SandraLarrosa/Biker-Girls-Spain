import React from 'react';
import InfoColaborador from './InfoColaborador';
import logoBaintex from './images/logo-black.png';
import logoExclusive from './images/exclusive rider.webp';
import logoMotorrevive from './images/descarga.webp';
import logoXlMoto from './images/xlmoto.jpg';

import './colaboradores.scss';




const Colaboradores = () => {
    return (
        <section className='sectionColaboradores'>
            <div className='sectionColaboradores__contentTitle'>
                <h1 className='titleColaboradores'>COLABORADORES</h1>
                <p className='textColaboradores'>I love cuddles sit and stare for ask to be pet then attack owners hand flee in terror at cucumber discovered on floor. Lay on arms while you're using the keyboard sit in box warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats so proudly present butt to human run around the house at 4 in the morning, or catty ipsum so stand in doorway, unwilling to chose whether to stay in or go out. Jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back catto munch salmono. </p>
            </div>
            <ul className='contentInfoColaboradores'>
                <InfoColaborador image={logoBaintex} name='Baintex' info='I am the best flex claws on the humans belly and purr like a lawnmower or lick left leg for ninety minutes, still dirty meow for food, then when human fills food dish, take a few bites of food and continue meowing. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food.' web='www.baintex.com' link='https://www.baintex.com/es/' />
                <InfoColaborador image={logoExclusive} name='Exclusive Rider' info='I am the best flex claws on the humans belly and purr like a lawnmower or lick left leg for ninety minutes, still dirty meow for food, then when human fills food dish, take a few bites of food and continue meowing. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food.' web='www.exclusiverider.es' link='https://www.exclusiverider.es/' right='right' />
                <InfoColaborador image={logoMotorrevive} name='Motorrevive' info='I am the best flex claws on the humans belly and purr like a lawnmower or lick left leg for ninety minutes, still dirty meow for food, then when human fills food dish, take a few bites of food and continue meowing. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food.' web='www.motorrevive.com' link='https://motorrevive.com/' />
                <InfoColaborador image={logoXlMoto} name='XL Moto' info='I am the best flex claws on the humans belly and purr like a lawnmower or lick left leg for ninety minutes, still dirty meow for food, then when human fills food dish, take a few bites of food and continue meowing. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food.' web='www.xlmoto.es' link='https://www.xlmoto.es/' right='right'/>
            </ul>
        </section>
    );
};



export default Colaboradores;