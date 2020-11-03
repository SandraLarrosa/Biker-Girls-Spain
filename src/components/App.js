import React from 'react';
import '../stylesheets/App.scss';
import Footer from './footer/Footer';
import Instagram from './Landing/widgetInstagram/Instagram';
import Landing from './Landing/landingHome/Landing';
import QuienesSomos from './Landing/quienesSomos/QuienesSomos';
import Nav from './menu/Nav.js';

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <QuienesSomos />
      <Instagram account='bikergirls_spain' numberOfMediaElements={8}/>
      <Footer /> 
    </>
  );
}

export default App;
