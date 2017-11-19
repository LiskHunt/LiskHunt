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
import MenuItem from './components/MenuItem';

import './css/header-styles.css';
import HamburgerIcon from './components/HamburgerIcon';

class Header extends Component {
  isActivePage(page) {
    return this.props.active_page === page ? 'is-active' : '';
  }

  insertClassOnActiveMenu() {
    return this.props.active_responsive_menu ? ' is-active' : '';
  }

  render() {
    return (
      <div className="hero-head">
        <nav className="navbar background-transparent">
          <div className="navbar-brand">
            <a
              className="nav-item liskhunt-logo"
              onClick={() => this.props.goHome()}
            >
              <img src={logo} alt="LiskHunt" />
            </a>
            <HamburgerIcon />
          </div>

          <div
            id="navMenubd-example"
            className={'navbar-menu ' + this.insertClassOnActiveMenu()}
          >
            <div className="navbar-end has-text-grey-dark">
              <MenuItem
                active_page={this.props.active_page}
                goToPage={this.props.goResourcesList}
                label="Apps & resources"
                route={goResourcesList}
              />

              <MenuItem
                active_page={this.props.active_page}
                goToPage={this.props.goDelegatesList}
                label="DelegatesHunt"
                route={goDelegatesList}
              />

              <MenuItem
                active_page={this.props.active_page}
                goToPage={this.props.goNewToLisk}
                label="New to Lisk?"
                route={goNewToLisk}
              />

              <MenuItem
                active_page={this.props.active_page}
                goToPage={this.props.goBuildSomething}
                label="Build something"
                route={goBuildSomething}
              />

              <MenuItem
                active_page={this.props.active_page}
                goToPage={this.props.goCheers}
                label="Cheers"
                route={goCheers}
                emoticon="🍻"
              />

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
  active_responsive_menu: state.navigation.active_responsive_menu,
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
