import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { goDelegateProfile } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { bindActionCreators } from 'redux';

class DelegatesProfile extends Component {
  componentWillMount() {
    this.props.fetchProfile(1);
    this.props.setActivePage(goDelegateProfile);
  }

  renderProfile(delegate) {
    return (
      <div>
        <div>Name: {delegate.name}</div>
        <div>Contact: {delegate.contact}</div>
        <div>Github url: {delegate.github}</div>
        <div>IMG url: {delegate.img_url}</div>

        <div>Likes: {delegate.likes}</div>
        <div>Application count: {delegate.app_count}</div>
        <div>Donation 1: {delegate.donations_1}</div>
        <div>Donation 2: {delegate.donations_2}</div>
        <div>Donation 3: {delegate.donations_3}</div>
        <div>Total donations: {delegate.total_donations}</div>
        <div>Rank: {delegate.ranking}</div>
      </div>
    );
  }

  render() {
    const { delegate } = this.props;
    return <div>{this.renderProfile(delegate)}</div>;
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
