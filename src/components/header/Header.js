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
} from '../router/routes';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

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

  isActivePage(page) {
    return this.props.active_page === page ? 'is-active' : '';
  }

  render() {
    return (
      <div className="hero-head">
        <nav className="navbar  background-transparent">
          <div className="navbar-brand">
            <a className="nav-item " onClick={() => this.props.goHome()}>
              <img src={logo} alt="LiskHunt" />
            </a>

            <div
              className="navbar-burger burger"
              data-target="navMenubd-example"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navMenubd-example" className="navbar-menu">
            <div className="navbar-end has-text-grey-dark">
              <a
                className={
                  'navbar-item has-text-grey-lighter ' +
                  this.isActivePage(goHome)
                }
                onClick={() => this.props.goHome()}
              >
                Home
              </a>
              <a
                className={
                  'navbar-item has-text-grey-lighter is-white ' +
                  this.isActivePage(goResourcesList)
                }
                onClick={() => this.props.goResourcesList()}
              >
                Apps & resources
              </a>
              <a
                className={
                  'navbar-item has-text-grey-lighter is-white ' +
                  this.isActivePage(goDelegatesList)
                }
                onClick={() => this.props.goDelegatesList()}
              >
                DelegatesHunt
              </a>
              <a
                className={
                  'navbar-item has-text-grey-lighter is-white ' +
                  this.isActivePage(goNewToLisk)
                }
                onClick={() => this.props.goNewToLisk()}
              >
                New to Lisk?
              </a>

              <div
                className={
                  this.isActivePage(goBuildSomething) +
                  ' navbar-item has-text-grey-lighter is-hidden-desktop'
                }
                onClick={() => this.props.goBuildSomething()}
              >
                Build something
              </div>

              <a
                className={
                  'navbar-item has-text-grey-lighter is-white ' +
                  this.isActivePage(goCheers)
                }
                onClick={() => this.props.goCheers()}
              >
                <span role="img" aria-label="cheers">
                  🍻
                </span>{' '}
                Cheers
              </a>
              <span
                className={
                  'navbar-item has-text-grey-lighter ' +
                  this.isActivePage(goSubmitHunt)
                }
                onClick={() => this.props.goSubmitHunt()}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  active_page: state.navigation.active_page,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goSubmitHunt: () => push(goSubmitHunt),
      goHome: () => push(goHome),
      goResourcesList: () => push(goResourcesList),
      goBuildSomething: () => push(goBuildSomething),
      goCheers: () => push(goCheers),
      goNewToLisk: () => push(goNewToLisk),
      goDelegatesList: () => push(goDelegatesList),
    },
    dispatch,
  );

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
