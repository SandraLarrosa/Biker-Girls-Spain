import React from 'react';
import './quienesSomos.scss';


/* FOTOS */
import foto from './images/madrid.png';
import foto1 from './images/downmadrid.JPG';
import foto2 from './images/BGS-comunidadValenciana.jpeg';
import foto3 from './images/bgs-bcn.jpg';
import foto4 from './images/IMG_2042.jpg';
import foto5 from './images/IMG_2052.jpg';


const QuienesSomos = () => {
    return (
        <section className='quienesSomos'>
            <h2 className='titleQuienesSomos'>¿QUIÉNES SOMOS?</h2>
            <div className='contentQuienesSomos'>
                <img className='imageQuienesSomos contentLeft'src={foto} alt='fotos' />
                <p className='textQuienesSomos contentRight'>Lorem fistrum benemeritaar tiene musho peligro hasta luego Lucas la caidita. Condemor torpedo la caidita papaar papaar amatomaa mamaar te va a hasé pupitaa torpedo. Ese hombree pecador ese pedazo de te va a hasé pupitaa fistro la caidita. Está la cosa muy malar amatomaa se calle ustée va usté muy cargadoo apetecan diodeno. Tiene musho peligro caballo blanco caballo negroorl condemor me cago en tus muelas sexuarl por la gloria de mi madre papaar papaar hasta luego Lucas por la gloria de mi madre jarl llevame al sircoo. Va usté muy cargadoo sexuarl de la pradera qué dise usteer ese pedazo de ese pedazo de sexuarl a peich. La caidita me cago en tus muelas la caidita diodenoo va usté muy cargadoo tiene musho peligro condemor mamaar caballo blanco caballo negroorl apetecan llevame al sircoo.</p>
            </div>
           <div className='contentQuienesSomos contentReverse'>
                <img className='imageQuienesSomos contentRight'src={foto} alt='fotos' />
                <p className='textQuienesSomos contentLeft'>Lorem fistrum benemeritaar tiene musho peligro hasta luego Lucas la caidita. Condemor torpedo la caidita papaar papaar amatomaa mamaar te va a hasé pupitaa torpedo. Ese hombree pecador ese pedazo de te va a hasé pupitaa fistro la caidita. Está la cosa muy malar amatomaa se calle ustée va usté muy cargadoo apetecan diodeno. Tiene musho peligro caballo blanco caballo negroorl condemor me cago en tus muelas sexuarl por la gloria de mi madre papaar papaar hasta luego Lucas por la gloria de mi madre jarl llevame al sircoo. Va usté muy cargadoo sexuarl de la pradera qué dise usteer ese pedazo de ese pedazo de sexuarl a peich. La caidita me cago en tus muelas la caidita diodenoo va usté muy cargadoo tiene musho peligro condemor mamaar caballo blanco caballo negroorl apetecan llevame al sircoo.</p>
            </div>
        </section>
    );
};



export default QuienesSomos;