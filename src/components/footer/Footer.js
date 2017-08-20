import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {
  goHome,
  goResourcesList,
  goBuildSomething,
  isActive,
} from '../router/router_helpers';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li
                className={isActive.call(this, '/')}
                onClick={goHome.bind(this)}
              >
                <a>Overview</a>
              </li>
              <li
                className={isActive.call(this, '/recommended')}
                onClick={goResourcesList.bind(this)}
              >
                <a>Apps & Resources</a>
              </li>
              <li
                className={isActive.call(this, '/lets-build-something')}
                onClick={goBuildSomething.bind(this)}
              >
                <a>Build something</a>
              </li>
              <li className={isActive.call(this)} onClick={isActive.bind(this)}>
                <a>Submit new hunt</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Footer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Footer;
