import React, { Component } from 'react';
import logo from './img/logo/Orizontal_logo.png';
import {
  goHome,
  goCheers,
  goResourcesList,
  goBuildSomething,
  goSubmitHunt,
  goNewToLisk,
  goDelegatesList,
  isActive
} from '../router/router_helpers';
import PropTypes from 'prop-types';

class Header extends Component {
  componentDidMount() {
    let $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0,
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener('click', function() {
          let target = $el.dataset.target;
          let $target = document.getElementById(target);
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav className="navbar background-transparent">
        <div className="navbar-brand">
          <a className="nav-item " onClick={goHome.bind(this)}>
            <img src={logo} alt="LiskHunt" />
          </a>

          <div className="navbar-burger burger" data-target="navMenubd-example">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenubd-example" className="navbar-menu">
          <div className="navbar-end has-text-grey-dark">
            <a
              className={'navbar-item has-text-grey-lighter ' + isActive.call(this, '/')}
              onClick={goHome.bind(this)}
            >
              Home
            </a>
            <a
              className={
                'navbar-item has-text-grey-lighter is-white ' + isActive.call(this, '/recommended')
              }
              onClick={goResourcesList.bind(this)}
            >
              Apps & resources
            </a>
            <a
              className={
                'navbar-item has-text-grey-lighter is-white ' + isActive.call(this, '/cool-delegates')
              }
              onClick={goDelegatesList.bind(this)}
            >
              DelegatesHunt
            </a>
            <a
              className={
                'navbar-item has-text-grey-lighter is-white ' + isActive.call(this, '/new-to-lisk')
              }
              onClick={goNewToLisk.bind(this)}
            >
              New to Lisk?
            </a>

            <div
              className={
                isActive.call(this, '/lets-build-something') +
                ' navbar-item has-text-grey-lighter is-hidden-desktop'
              }
              onClick={goBuildSomething.bind(this)}
            >
              Build something
            </div>

            <a
              className={
                'navbar-item has-text-grey-lighter is-white ' + isActive.call(this, '/cheers')
              }
              onClick={goCheers.bind(this)}
            >
              <span role="img" aria-label="cheers">
                🍻
              </span>{' '}
              Cheers
            </a>
            <span
              className={'navbar-item has-text-grey-lighter ' + isActive.call(this, '/submit-hunt')}
              onClick={goSubmitHunt.bind(this)}
            >
              <a className="navbar-item button is-info is-inverted">
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
                <span>Submit hunt</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
