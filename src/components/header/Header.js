import React, { Component } from 'react';
import logo from './img/logo/Orizontal_logo.png';
import {
  goHome,
  goCheers,
  goResourcesList,
  goBuildSomething,
  goSubmitHunt,
  isActive,
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
              className={'navbar-item ' + isActive.call(this, '/')}
              onClick={goHome.bind(this)}
            >
              Home
            </a>
            <div
              className={
                isActive.call(this, '/recommended') +
                ' navbar-item is-hidden-desktop'
              }
              onClick={goResourcesList.bind(this)}
            >
              Apps & Resources
            </div>
            <div
              className={
                isActive.call(this, '/lets-build-something') +
                ' navbar-item is-hidden-desktop'
              }
              onClick={goBuildSomething.bind(this)}
            >
              Build something
            </div>
            <a
              className={'navbar-item is-white ' + isActive.call(this, '/cheers')}
              onClick={goCheers.bind(this)}
            >
              <span role="img" aria-label="cheers">
                🍻
              </span> Cheers
            </a>
            <span
              className={'navbar-item ' + isActive.call(this, '/submit-hunt')}
              onClick={goSubmitHunt.bind(this)}
            >
              <a className="navbar-item button is-info is-inverted">
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
                <span>Submit app</span>
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
