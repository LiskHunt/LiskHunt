import React, { Component } from 'react';

import {
  goHome,
  goResourcesList,
  goBuildSomething,
  goSubmitHunt,
  isActive,
} from '../router/routes';

import { connect } from "react-redux";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
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
                onClick={() => this.props.goHome()}
              >
                <a>Overview</a>
              </li>
              <li
                className={isActive.call(this, '/recommended')}
                onClick={() => this.props.goResourcesList()}
              >
                <a>Apps & Resources</a>
              </li>
              <li
                className={isActive.call(this, '/lets-build-something')}
                onClick={() => this.props.goBuildSomething()}
              >
                <a>Build something</a>
              </li>
              <li
                className={isActive.call(this, '/submit-hunt')}
                onClick={() => this.props.goSubmitHunt()}
              >
                <a>Submit new hunt</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    goSubmitHunt: () => push(goSubmitHunt),
    goHome: () => push(goHome),
    goResourcesList: () => push(goResourcesList),
    goBuildSomething: () => push(goBuildSomething)
}, dispatch)

Footer.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

