import React from 'react';
import './login.scss';
import logoBGS from './images/LogoBikerGirls 720.png';
import mail from './images/icons8_secured_letter_128px.png';
import password from './images/icons8_secure_240px.png';

const Login = () => {
    return (
        <section className='sectionLogin'>
            <img className='sectionLogin__logo'src={logoBGS} alt='Logo Biker Girls' />
            <form className='formLogin' action='' method=''>
                <div className='formLogin__contentUser'>
                    <div className='formAccess'>
                        <label className='formAccess__logo' for="mail">
                            <img className='formLogo'src={mail} alt='logo email' />
                        </label>
                        <input className='formAccess__input' id="mail" type="email" name="mail" placeholder='bikergirlspain@gmail.com' />
                    </div>
                    <div className='formAccess'>
                        <label className='formAccess__logo' for="password">
                            <img className='formLogo' src={password} alt='logo password' />
                        </label>
                        <input className='formAccess__input'  id="password" type="password" name="password" />
                    </div>
                    <span className='formAccess__forgetPassword'>¿Has olvidado tu contraseña?</span>
                </div>
                <div className='formLogin__contentAccess'>
                    <button className='formLoginButtonAccess'>Entrar</button>
                    <p className='formTextRegister'>¿Todavía no estás registrada?</p>
                    <button className='formLoginButtonRegister'>REGISTRO</button>
                </div>
            </form>
        </section>
    );
};

export default Login;