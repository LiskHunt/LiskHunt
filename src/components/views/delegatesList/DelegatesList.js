import AnimationsWrapper from "../../animations-wrapper/AnimationsWrapper";

import React, { Component } from "react";
import PropTypes from "prop-types";

import "./delegatesList.css";

import { connect } from "react-redux";
import { fetchDelegates } from "../../../actions";

import { goSubmitHunt } from "../../router/router_helpers";
import DelegateCard from "./components/DelegateCard";

class DelegatesList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchDelegates();
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
              <a onClick={goSubmitHunt.bind(this)} className="underlined">
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

export default connect(mapStateToProps, { fetchDelegates })(DelegatesList);

DelegatesList.contextTypes = {
  router: PropTypes.object.isRequired
};
