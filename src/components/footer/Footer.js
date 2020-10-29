import React from 'react';
import './footer.scss';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contentIcons'>
                <img className='iconRRSS'src={instagram} alt='logo instagram' />
                <img className='iconRRSS' src={facebook} alt='logo facebook' />
                <img className='iconRRSS' src={twitter} alt='logo twitter' />
                <img className='iconRRSS' src={youtube} alt='logo youtube' />
            </div>
            <p className='copyFooter'>&copy; 2020 BIKER GIRLS SPAIN</p>
        </footer>
    );
};


export default Footer;