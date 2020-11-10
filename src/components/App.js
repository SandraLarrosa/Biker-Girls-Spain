import React from 'react';
import {Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Nav from './menu/Nav.js';
import Landing from './Landing/landingHome/Landing';
import Rutas from './rutas&eventos/Rutas';
import Footer from './footer/Footer';
import Colaboradores from './colaboradores/Colaboradores';




function App() {
  return (
    <div className='App'>
      <Nav />
        <Switch>
          <Route exact path='/' component={Landing} /> 
          <Route exact path='/rutasyeventos' component={Rutas} /> 
          <Route exact path='/colaboradores' component={Colaboradores} /> 
        </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
