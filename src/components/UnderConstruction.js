import React from 'react';
import logoMoto from '../images/logomotosolo.png';
import '../stylesheets/UnderConstruction.scss';

const UnderConstruction = () => {
  return (
    <main className='landingContain'>
      <h1 className='construction'>EN CONSTRUCCIÓN</h1>
      <div className='containBGS'>
        <h2 className='title'>BIKER GIRLS SPAIN</h2>
        <img className='logo' src={logoMoto} alt='Logo Biker Girls Spain' />
        <h2 className='quote'>Adictas a la Libertad</h2>
      </div>
    </main>
  );
};

export default UnderConstruction;
