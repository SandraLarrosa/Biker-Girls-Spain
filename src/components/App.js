import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Nav from './menu/Nav.js';
import Landing from './Landing/landingHome/Landing';
import Footer from './footer/Footer';




function App() {
  return (
    <div className='App'>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
      <Footer /> 
    </div>
  );
}

export default App;
