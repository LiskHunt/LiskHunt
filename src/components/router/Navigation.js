import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import Landing from '../views/landing/Landing';
import Recommended from '../views/recommended/Recommended';
import BuildSomething from '../views/buildSomething/BuildSomething';
import Cheers from '../views/cheers/Cheers';


const Navigation = ()=>{
  return(
    <div className="hero is-info is-large is-fullheight bg-gradient">
      <Header/>
      <Switch>
        <Route exact path="/" name="app" component={Landing} />
        <Route path="/recommended" name="recommended" component={Recommended}/>
        <Route path="/lets-build-something" name="about" component={BuildSomething}/>
        <Route path="/Cheers" name="about" component={Cheers}/>
      </Switch>
      <Footer/>
    </div>
  )
};

export default Navigation;
