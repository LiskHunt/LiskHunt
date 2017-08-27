import React, { Component } from 'react';
import logo from './img/logo/liskHunt_logo_white_lg.png';
import { goHome, goCheers, goSubmitHunt, isActive } from '../router/router_helpers';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div className="hero-head">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item " onClick={goHome.bind(this)}>
                <img src={logo} alt="LiskHunt" />
              </a>
            </div>
            <span className="nav-toggle" />
            <div className="nav-right nav-menu">
              <a
                className={'nav-item ' + isActive.call(this, '/')}
                onClick={goHome.bind(this)}
              >
                Home
              </a>
              <a className={'nav-item ' + isActive.call(this, '/cheers')} onClick={goCheers.bind(this, '/cheers')}>
                <span role="img" aria-label="cheers">
                  🍻
                </span>Cheers
              </a>
              <span
                className={'nav-item ' + isActive.call(this, '/submit-hunt')}
                onClick={goSubmitHunt.bind(this)}
              >
                <a className="button is-info is-inverted">
                  <span className="icon">
                    <i className="fa fa-github" />
                  </span>
                  <span>Submit app</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
