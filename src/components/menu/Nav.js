import React, { useState } from 'react';
import {BrowserRouter, Link } from 'react-router-dom';
import './nav.scss';
import iconMenu from './images/icons8_menu_48px_1.png';


const Nav = () => {
  const [showMenu, setShowMenu] = useState('hidden');

    const showMenuNav = () => {
        if (showMenu === 'hidden') {
            setShowMenu('')
        } else if (showMenu === '') {
            setShowMenu('hidden')
        }
        
    }

    return (
        <div className='contentMenu'>
        <div className='contentIconMenu'>
                <img src={iconMenu} alt="Menú Navegación" className='iconMenu' onClick={showMenuNav}/>
        </div>
            <nav className={`navDesktop ${showMenu}`}>
            <BrowserRouter>
                <Link to='/'>
                    <li className='listMenu'>
                            ¿Quiénes somos?
                    </li>
                </Link>
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
                    Contacto
                </li>
                <li className='listMenu'>
                        Login
                </li>
            </BrowserRouter>
            </nav>
        </div>
    );
};

export default Nav;