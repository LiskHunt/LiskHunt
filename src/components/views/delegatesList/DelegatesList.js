import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import React, { Component } from 'react';

import './css/delegatesList.css';

import { connect } from 'react-redux';
import { fetchDelegates, setActivePage } from '../../../actions';

import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import Banner from './components/introduction/Introduction';
import List from './components/delegate-list/List';

import { goDelegatesList } from '../../router/routes';

class DelegatesList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchDelegates();
  }

  componentWillMount() {
    this.props.setActivePage(goDelegatesList);
  }

  render() {
    return (
      <AnimationsWrapper>
        <div className="hero-body delegates-list">
          <Banner />
          <List />
        </div>
      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchDelegates,
      goSubmitHunt: () => push('/submit-hunt'),
      setActivePage: page => setActivePage(page),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DelegatesList);
