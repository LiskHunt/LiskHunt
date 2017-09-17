import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import Landing from '../views/landing/Landing';
import Recommended from '../views/recommended/Recommended';
import BuildSomething from '../views/buildSomething/BuildSomething';
import Cheers from '../views/cheers/Cheers';
import NewHunt from '../views/newHunt/NewHunt';
import ResourceDetails from '../views/resourceDetails/ResourceDetails';
import NewToLisk from '../views/newToLisk/NewToLisk';
import DelegatesList from '../views/delegatesList/DelegatesList';
import DelegateProfile from '../views/delegateProfile/DelegateProfile';


const Navigation = ()=>{
  return(
    <div className="hero is-info is-large is-fullheight bg-gradient">
      <Header/>
      <Switch>
        <Route exact path="/" name="app" component={Landing} />
        <Route path="/recommended" name="recommended" component={Recommended}/>
        <Route path="/lets-build-something" name="about" component={BuildSomething}/>
        <Route path="/Cheers" name="about" component={Cheers}/>
        <Route path="/submit-hunt" name="about" component={NewHunt}/>
        <Route path="/resource/:app_id" name="about" component={ResourceDetails}/>
        <Route path="/new-to-lisk" name="about" component={NewToLisk}/>
        <Route path="/cool-delegates" name="about" component={DelegatesList}/>
          <Route path="/delegate-profile" name="about" component={DelegateProfile}/>
      </Switch>
      <Footer/>
    </div>
  )
};

export default Navigation;
