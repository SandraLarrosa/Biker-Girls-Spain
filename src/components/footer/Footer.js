import React from 'react';
import './footer.scss';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';


const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='contentIcons'>
                <li>
                    <a
                        href='https://www.instagram.com/bikergirls_spain/?hl=es'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='iconRRSS' src={instagram} alt='logo instagram' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.facebook.com/pages/category/Community/Biker-Girls-Spain-351410018921678/'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        <img className='iconRRSS' src={facebook} alt='logo facebook' />
                    </a>
                </li>
                <li>
                <a
                    href='https://twitter.com/Bikergirlspain'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                        <img className='iconRRSS' src={twitter} alt='logo twitter' />
                    </a>
                </li>
                <li>
                <a
                    href='https://www.youtube.com/channel/UCtp25WXC947AzrU2vg4aFSA/featured'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                        <img className='iconRRSS' src={youtube} alt='logo youtube' />
                    </a>
                </li>
            </ul>
            <p className='copyFooter'>&copy; 2020 BIKER GIRLS SPAIN</p>
        </footer>
    );
};


export default Footer;