import React from 'react';
import '../stylesheets/App.scss';
import Landing from './Landing/landingHome/Landing';
import QuienesSomos from './Landing/quienesSomos/QuienesSomos';
import Nav from './menu/Nav.js';

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <QuienesSomos />
    </>
  );
}

export default App;
