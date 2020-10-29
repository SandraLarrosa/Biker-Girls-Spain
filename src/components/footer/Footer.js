import React from 'react';
import envelope from './images/envelope.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';


const Footer = () => {
    return (
        <footer>
            <div>
                <img src={instagram} alt='logo instagram' />
                <img src={facebook} alt='logo facebook' />
                <img src={twitter} alt='logo twitter' />
                <img src={youtube} alt='logo youtube' />
                <img src={envelope} alt='logo envelope' />
            </div>
            <p>&copy; 2020 BIKER GIRLS SPAIN</p>
        </footer>
    );
};


export default Footer;