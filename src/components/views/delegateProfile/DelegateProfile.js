import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { goDelegateProfile } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { bindActionCreators } from 'redux';

import './css/profile.css';

import MediaQuery from 'react-responsive';
import MobileContent from './MobileContent';
import DesktopContent from './DesktopContent';
import AnimationsWrapper from "../../animations-wrapper/AnimationsWrapper";

class DelegatesProfile extends Component {
  constructor(props) {
    super(props);
    const { name } = this.props.match.params;
    this.props.fetchProfile(name);
  }

  componentWillMount() {
    this.props.setActivePage(goDelegateProfile);
  }

  renderProfile(delegate) {
    if (delegate) {
      return (
        <div>
          <MediaQuery maxDeviceWidth={1024}>
            <MobileContent />
          </MediaQuery>
          <MediaQuery minDeviceWidth={1025}>
            <DesktopContent />
          </MediaQuery>
        </div>
      );
    }
  }

  render() {
    const { delegate } = this.props;
      return (<AnimationsWrapper>
          <div>{this.renderProfile(delegate)}</div>
      </AnimationsWrapper>) ;
  }
}

const mapStateToProps = state => ({
  delegate: state.delegates.delegate,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProfile,
      setActivePage: page => setActivePage(page),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DelegatesProfile);
