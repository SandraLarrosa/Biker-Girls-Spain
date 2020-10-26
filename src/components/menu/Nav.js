import React from 'react';
import './nav.scss';
import iconMenu from './images/icons8_menu_48px_1.png';


const Nav = () => {
    return (
        <>
        <nav className='contentIconMenu'>
                <img src={iconMenu} alt="Menú Navegación" className='iconMenu' />
                <div className='navDesktop'>
                    <li>
                        ¿Quiénes somos?
                    </li>
                    <li>
                        Rutas & Eventos
                    </li>
                    <li>
                        Colaboradores
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Store
                    </li>
                    <li>
                        Login
                    </li>
                </div>
            </nav>
        </>
    );
};

export default Nav;