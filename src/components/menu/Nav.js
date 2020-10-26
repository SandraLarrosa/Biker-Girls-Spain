import React, { useState } from 'react';
import './nav.scss';
import iconMenu from './images/icons8_menu_48px_1.png';


const Nav = () => {
  const [showMenu, setShowMenu] = useState('hidden');

    const showMenuNav = () => {
        setShowMenu('')
    }

    return (
        <>
        <div className='contentIconMenu'>
                <img src={iconMenu} alt="Menú Navegación" className='iconMenu' onClick={showMenuNav}/>
        </div>
        <nav className={`navDesktop ${showMenu}`}>
                <li className='listMenu'>
                    ¿Quiénes somos?
                </li>
                <li className='listMenu'>
                    Rutas & Eventos
                </li>
                <li className='listMenu'>
                    Colaboradores
                </li>
                <li className='listMenu'>
                    Blog
                </li>
                <li className='listMenu'>
                    Store
                </li>
                <li className='listMenu'>
                    Login
                </li>
            </nav>
        </>
    );
};

export default Nav;