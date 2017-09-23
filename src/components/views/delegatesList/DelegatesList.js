import AnimationsWrapper from "../../animations-wrapper/AnimationsWrapper";

import React, { Component } from "react";

import "./delegatesList.css";

import { connect } from "react-redux";
import { fetchDelegates, setActivePage } from "../../../actions";

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import DelegateCard from "./components/DelegateCard";

import {goDelegatesList} from '../../router/routes';


class DelegatesList extends Component {

  componentWillMount() {
    this.props.fetchDelegates();
    this.props.setActivePage(goDelegatesList)
  }

  renderDelegateList() {
    const { delegates } = this.props;

    if (delegates) {
      return this.props.delegates.map((delegate, index) => {
        return (
          <DelegateCard
            key={delegate.delegate_name}
            delegate={delegate}
            index={index + 1}
          />
        );
      });
    }
  }

  render() {
    return (
      <AnimationsWrapper>
        <div className="container hero-body padded-content bottom20">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">DelegatesHunt</h1>
            <h2 className="subtitle top10">
              The delegates bringing Lisk to the next level, sorted by coolness
              score. <br />
              A super-duper index to show how the delegate is contributing to
              the Lisk ecosystem. <br />
              The coolness score is given by the following formula: <br />
            </h2>
            <p>
              <small>
                coolness_score = ( appsLikes ) + ( apps.length * 10) +
                (delegate.donations_1) + (delegate.donations_2 * 5) +
                (delegate.donations_3 * 7)
              </small>
            </p>

            <h2 className="top15">
              If you want to join the list{" "}
              <a onClick={() => this.props.goSubmitHunt()} className="underlined">
                click here
              </a>
            </h2>

            <div className="columns top50 is-multiline">
              {this.renderDelegateList()}
            </div>
          </div>
        </div>
      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  delegates: state.delegates.delegates
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchDelegates,
    goSubmitHunt: () => push('/submit-hunt'),
    setActivePage: (page) => setActivePage(page)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DelegatesList);

