import React from 'react';
import logoMoto from '../images/logomotosolo.png';
import '../stylesheets/UnderConstruction.scss';
import facebook from '../images/icons8_facebook_200px_2.png';
import instagram from '../images/icons8_instagram_200px_2.png';
import twitter from '../images/icons8_twitter_200px_1.png';

const UnderConstruction = () => {
  return (
    <main className='landingContain'>
      <h1 className='construction'>EN CONSTRUCCIÓN</h1>
      <div className='containBGS'>
        <h2 className='title'>BIKER GIRLS SPAIN</h2>
        <img className='logo' src={logoMoto} alt='Logo Biker Girls Spain' />
        <h2 className='quote'>Adictas a la Libertad</h2>
      </div>
      <div className='containRRSS'>
        <h4 className='rrssTitle'>Síguenos en RRSS</h4>
        <ul className='listRRSS'>
          <li>
            <a
              href='https://www.facebook.com/pages/category/Community/Biker-Girls-Spain-351410018921678/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={facebook} alt='logo facebook'></img>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/bikergirls_spain/?hl=es'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={instagram} alt='logo instagram'></img>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/Bikergirlspain'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={twitter} alt='logo twitter'></img>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default UnderConstruction;
