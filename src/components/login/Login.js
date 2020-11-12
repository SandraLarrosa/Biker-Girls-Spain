import React from 'react';
import './login.scss';
import logoBGS from './images/LogoBikerGirls 720.png';
import mail from './images/icons8_secured_letter_128px.png';
import password from './images/icons8_secure_240px.png';

const Login = () => {
    return (
        <section className='sectionLogin'>
            <img className='sectionLogin__logo'src={logoBGS} alt='Logo Biker Girls' />
            <div className='formLogin'>
                <form className='formLogin__form' action='' method=''>
                    <div>
                        <label for="mail">
                            <img src={mail} alt='logo email' />
                        </label>
                        <input id="mail" type="email" name="mail" placeholder='bikergirlspain@gmail.com'/>
                        <label for="password">
                            <img src={password} alt='logo password' />
                        </label>
                        <input id="password" type="password" name="password" />
                    </div>
                    <div></div>
                </form>
            </div>

        </section>
    );
};

export default Login;