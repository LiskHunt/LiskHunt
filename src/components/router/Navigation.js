import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../header/Header';
import Landing from '../landing/Landing';
import Footer from '../footer/Footer';
import Recommended from '../recommended/Recommended';
import BuildSomething from '../buildSomething/BuildSomething';


const Navigation = ()=>{
  return(
    <div className="hero is-info is-large is-fullheight bg-gradient">
      <Header/>
      <Switch>
        <Route exact path="/" name="app" component={Landing} />
        <Route path="/recommended" name="recommended" component={Recommended}/>
        <Route path="/lets-build-something" name="about" component={BuildSomething}/>
      </Switch>
      <Footer/>
    </div>
  )
};

export default Navigation;
